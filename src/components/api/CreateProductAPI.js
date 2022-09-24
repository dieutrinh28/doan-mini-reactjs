import React, { useState } from "react";
import axios from 'axios';
import '../style/ProductList.css';
import { useNavigate } from "react-router-dom";

const CreateProductAPI = (props) => {
    const[products, setProducts] = useState([]);
    const[name, setName] = useState('');
    const[price, setPrice] = useState('');

    const history = useNavigate();

    

    const createProduct = async (name, price) => {
        try {
            const res = await axios.post(
                'http://127.0.0.1:8000/api/products',
                {
                    name,
                    price
                }
            )
                console.log(res.data)
                const newProducts = [...products, res.data] 
                setProducts(newProducts)
        }
        catch (error)
        {
            console.log(error.message)
        }
    }

    const addProduct = event => {
        event.preventDefault()
        if (name !== '' && price !== '') {
            createProduct(name, price)
            setName('')
            setPrice('')
        }
        history("/list")
    }

    

    return(
        <div class="content">
            <h3>TẠO SẢN PHẨM</h3>
            <form>
                <input 
                    type="text" 
                    placeholder="Nhập tên sản phẩm" 
                    required 
                    onChange={(e) => setName(e.target.value)}
                />
                <br></br>
                <input
                    type="text" 
                    placeholder="Nhập giá sản phẩm" 
                    required 
                    onChange={(e) => setPrice(e.target.value)} 
                />
                <br></br>
                <button class="btn btn__save" type="submit" onClick={(e) => addProduct(e)}>Lưu</button>
            </form>
        </div>
    ) 
}
export default CreateProductAPI;