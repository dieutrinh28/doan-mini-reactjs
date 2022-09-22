import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Products from "./Products";

function EditProduct() {
    const[name, setName] = useState('');
    const[price, setPrice] = useState('');
    const[id, setId] = useState('');

    let history = useNavigate();

    var index = Products.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Products[index];
        a.Name = name;
        a.Price = price;

        history("/");
    }

    useEffect(() => {
        setName(localStorage.getItem('Name'))
        setPrice(localStorage.getItem('Price'))
        setId(localStorage.getItem('Id'))
    },[])

    return(
        <div>
        <Form className="d-grid gap-2" style={{margin: "15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Nhập tên sản phẩm" value={name} required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrice">
                <Form.Control type="text" placeholder="Nhập giá sản phẩm" value={price} required onChange={(e) => setPrice(e.target.value)}>                    
                </Form.Control>
            </Form.Group>
            <Button type="submit" onClick={(e) => handleSubmit(e)}>Update</Button>
        </Form>
        </div>
    )

  
}

export default EditProduct;