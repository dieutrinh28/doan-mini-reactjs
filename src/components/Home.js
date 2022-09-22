import React, { Fragment } from 'react';
import Products from './Products';
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    let history = useNavigate();

    const handleEdit = (id, name, price) => {
        localStorage.setItem('Name', name)
        localStorage.setItem('Price', price)
        localStorage.setItem('Id', id)

    }
    
    const handleDelete = (id) => {
        var index = Products.map(function(e){
            return e.id
        }).indexOf(id);

        Products.splice(index, 1);

       history('/');
    }

    
    return(
       <Fragment>
        <div style={{margin:"10rem"}}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
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
                        Products && Products.length > 0
                        ? 
                        Products.map((item) => {
                            return(
                                <tr>
                                    <td>
                                        {item.Name}
                                    </td>
                                    <td>
                                        {item.Price}
                                    </td>
                                    <td>
                                        <Link to={`/edit`}>
                                        <Button onClick={() => handleEdit(item.id, item.Name, item.Price)}>EDIT</Button>
                                        </Link>
                                        &nbsp;
                                        <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
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
                <Button size="lg">Create</Button>
            </Link>
        </div>

       </Fragment>
    )
}

export default Home;