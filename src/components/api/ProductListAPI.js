import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
        <div style={{margin:"10rem"}}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>
                            Số thứ tự
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Action
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
                                    <td>
                                        {index +1}
                                        {/* {item._id} */}
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.price}
                                        {/* {item.title} */}
                                    </td>
                                    <td>
                                        <Link to={`/edit`}>
                                        <Button >Chỉnh sửa</Button>
                                        </Link>
                                        &nbsp;
                                        <Button onClick={deleteProduct.bind(this, item._id)}>Xóa</Button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "Không tìm thấy sản phẩm"
                    }
                </tbody>
            </Table>
            <br>
            </br>
            <Link className='d-grid gap-2' to="/create">
                <Button size="lg">Tạo sản phẩm</Button>
            </Link>
        </div>
    )
}
export default ProductListAPI;