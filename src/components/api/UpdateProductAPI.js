import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from 'axios';

function UpdateProductAPI() {
    const [products, setProducts] = useState([])
    const[name, setName] = useState('');
    const[price, setPrice] = useState('');
    

    const updateProduct = async (id) => {
        try {
            await axios.put(
                //`https://jsonplaceholder.typicode.com/todos/${id}`
                `http://127.0.0.1:8000/api/products/${id}`
            )
        }
        catch (error)
        {
            console.log(error.message)
        
        }
    }
    
    const clearPutOutput = () => {
        setProducts(null);
    }
  
    return(
        <div>
            <h3>CHỈNH SỬA SẢN PHẨM</h3>
        {products.map((item, i) => {
            return(
                <form className="d-grid gap-2" style={{margin: "15rem"}}>
                    <input 
                        type="text" 
                        placeholder="Tên sản phẩm" 
                        required 
                        value = {name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text" 
                        placeholder="Giá sản phẩm" 
                        required 
                        value = {price}
                        onChange={(e) => setPrice(e.target.value)} 
                    />
                    <button type="submit" onClick={updateProduct.bind(this, item._id)}>Lưu</button>
                    <button type="submit" onClick={clearPutOutput}>Clear</button>
                </form>
        )})}       
        </div>
    )
}

export default UpdateProductAPI;