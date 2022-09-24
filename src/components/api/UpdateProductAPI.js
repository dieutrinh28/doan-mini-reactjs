import React, { useState, useEffect } from "react";
import axios from 'axios';

function UpdateProductAPI() {
    const [products, setProducts] = useState([]);
    const [item, setItem] = useState(null);
    const[name, setName] = useState('');
    const[price, setPrice] = useState('');
    
    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        try {
            const res = await axios.get(
                //'https://jsonplaceholder.typicode.com/todos'
                'http://127.0.0.1:8000/api/products'
            )
            console.log(res.data)
            setProducts(res.data)
        }
        catch (error) {
            console.log(error.message)
        }
    }

    const updateProduct = async (id) => {
        try {
            await axios.put(
                //`https://jsonplaceholder.typicode.com/todos/${id}`
                `http://127.0.0.1:8000/api/products/${id}`
            )
            const item = products.find(product => product._id === id)
            // setProducts(item)
            setName(item.name)
            setPrice(item.price)
            setItem(item)
        }
        catch (error)
        {
            console.log(error.message)
        }
       
    }
    
    const clearPutOutput = () => {
        setName('');
        setPrice('')
    }
  
    return(
        <div>
            <h3>CHỈNH SỬA SẢN PHẨM</h3>
        {products.map((item) => {
            return(
                <form className="d-grid gap-2" style={{margin: "15rem"}}>
                    <input 
                        type="text" 
                        placeholder="Tên sản phẩm" 
                        required 
                        value = {item.name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text" 
                        placeholder="Giá sản phẩm" 
                        required 
                        value = {item.price}
                        onChange={(e) => setPrice(e.target.value)} 
                    />
                    <button type="submit" onClick={updateProduct(item._id)}>Lưu</button>
                    <button type="submit" onClick={clearPutOutput}>Clear</button>
                </form>
            )})}   
        </div>
    )
}

export default UpdateProductAPI;