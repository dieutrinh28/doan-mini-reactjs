import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Products from "./Products";
import { v4 as uuid } from "uuid";

function AddProduct() {

    const[name, setName] = useState('');
    const[price, setPrice] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);

        let a = name, b = price;

        Products.push({id: uniqueId, Name: a, Price: b});

        history("/");

    }

    return <div>
        <Form>
            <Form.Group controlId="formName">
                <Form.Control type="text" placeholder="Nhập tên sản phẩm" required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formPrice">
                <Form.Control type="text" placeholder="Nhập giá sản phẩm" required onChange={(e) => setPrice(e.target.value)}>                    
                </Form.Control>
            </Form.Group>
            <Button type="submit" onClick={(e) => handleSubmit(e)}>Submit</Button>
        </Form>
    </div>
}
export default AddProduct;