import React from 'react'
import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import Rating from '../components/Rating';
import products from '../products';
import { Row, Col, Image, ListGroup, Card} from 'react-bootstrap';

const ProductScreen = () => {
    const { id : productId } = useParams();
    const product = products.find((p)=>p._id===productId);

  return (
    <div className="min-h-screen justify-center p-4">
      <Link className="btn btn-outline mb-4 btn-primary">Go Back</Link>
     <Row >
        <Col md={5}>
        <Image className="center-block p-12 rounded mx-auto d-block;" style={{ width: '500px', height: '500px' } }src={product.image} alt={product.name} fluid/>
        </Col>
        <Col lassName="mx-auto d-block" md={4}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3 className='text-center'>{product.name}</h3>
                </ListGroup.Item>
            </ListGroup>

        </Col>
        <Col md={3}>
        </Col>
     </Row>
      
    </div>
  )
}

export default ProductScreen
