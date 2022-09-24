import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/ProductList.css';

function ProductListAPI() {

    const [products, setProducts] = useState([])

    useEffect(() => {
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
        getProducts()
    }, [])

    const deleteProduct = async (id) => {
        try {
            await axios.delete(
                //`https://jsonplaceholder.typicode.com/todos/${id}`
                `http://127.0.0.1:8000/api/products/${id}`
            )
            const newProducts = products.filter(product => product._id !== id)
            setProducts(newProducts)
        }
        catch (error)
        {
            console.log(error.message)
        
        }
    }

    return(
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
                            Giá
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
                                        <Link to={`/edit`}>
                                        <button class="btn btn__edit">Chỉnh sửa</button>
                                        </Link>
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
    )
}
export default ProductListAPI;