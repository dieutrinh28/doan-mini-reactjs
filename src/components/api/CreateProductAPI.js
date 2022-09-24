import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from 'axios';

const CreateProductAPI = (props) => {
    const[products, setProducts] = useState([]);
    const[name, setName] = useState('');
    const[price, setPrice] = useState('');

    

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
    }

    

    return <div>
        <form className="d-grid gap-2" style={{margin: "15rem"}}>
            <input 
                type="text" 
                placeholder="Nhập tên sản phẩm" 
                required 
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text" 
                placeholder="Nhập giá sản phẩm" 
                required 
                onChange={(e) => setPrice(e.target.value)} 
            />
            <Button type="submit" onClick={(e) => addProduct(e)}>Lưu</Button>
        </form>
    </div>
}
export default CreateProductAPI;