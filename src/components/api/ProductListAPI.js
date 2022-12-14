import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/ProductList.css';

function ProductListAPI() {

    const [products, setProducts] = useState([])
    const[name, setName] = useState('');
    const[price, setPrice] = useState('');
    const[id, setId] = useState(null);

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {      
        try {

        
        const res = await axios.get(
            //'https://jsonplaceholder.typicode.com/todos'
            'http://127.0.0.1:8000/api/products'
        )
        //console.log(res.data)
        setProducts(res.data)      
        }
        catch (error) 
        {
            console.log(error.message)
        }         
    }

    const deleteProduct = async (id) => {
        const item = products.find(product => product._id === id)
        // alert(item.name)
        const newProducts = products.filter(product => product._id !== id)
        var result = window.confirm(`Xóa sản phẩm ${item.name}?`);
        if(result === true)
        {
            setProducts(newProducts)
            await axios.delete(
                //`https://jsonplaceholder.typicode.com/todos/${id}`
                `http://127.0.0.1:8000/api/products/${id}`
            )
        }
        else
        {
            return false
        }
    }

    function selectProduct(id) {
        const item = products.find(product => product._id === id)  
        //alert(item._id)
        setId(item._id)
        setName(item.name)
        setPrice(item.price)
    }
    
    const updateProduct = async (id, name, price) => {            
        const res = await axios.put(
            `http://127.0.0.1:8000/api/products/${id}` , 
            {
                name, price
            }     
        )
        console.log(res.data)  
     
    }

    const clearPutOutput = () => {
        setName("");
        setPrice("");
    }
    var x = 1000;
    x = x.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    console.log(x);
    

    return(
        <>
        <div class="table">
            <h2>DANH SÁCH SẢN PHẨM</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>
                            STT
                        </th>
                        <th>
                            Tên sản phẩm
                        </th>
                        <th>
                            Giá tiền
                        </th>
                        <th>
                            Thao tác
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && products.length > 0
                        ?
                        products.map((item, index) => {
                            return(
                                <tr>
                                    <td class="number">
                                        {index +1}
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                                    </td>
                                    <td class="action">
                                        <button class="btn btn__edit" onClick={() => selectProduct(item._id)}>Chỉnh sửa</button>                                      
                                        &nbsp;
                                        <button class="btn btn__delete" onClick={deleteProduct.bind(this, item._id)}>Xóa</button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "Không tìm thấy sản phẩm"
                    }
                </tbody>
            </Table>
            <br></br>
            <div class="add">
                <Link to="/create">
                    <button class="btn btn__add" size="lg">Tạo sản phẩm</button>
                </Link>
            </div>
        </div>
        <div class="content__update">
            <h3 class="text">CHỈNH SỬA SẢN PHẨM</h3>
            <form>
            <input class="item"
                type="text" 
                placeholder="Tên sản phẩm" 
                required 
                value = {name}
                onChange={(e) => setName(e.target.value)}
            />
            <input class="item"
                type="text" 
                placeholder="Giá sản phẩm" 
                required 
                value = {price}
                onChange={(e) => setPrice(e.target.value)} 
            />
            <button class="btn btn__edit" type="submit" onClick={updateProduct(id, name, price)}>Lưu</button>
            <button class="btn btn__delete" type="submit" onClick={clearPutOutput}>Reset</button>
        </form>
        </div>
        </>
    )
}
export default ProductListAPI;