import React from 'react'
import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import Rating from '../components/Rating';
import products from '../products';
import { Row, Col, Image, ListGroup, Card, ListGroupItem, Button} from 'react-bootstrap';

const ProductScreen = () => {
    const { id : productId } = useParams();
    const product = products.find((p)=>p._id===productId);

  return (
    <div className="min-h-screen justify-center p-4">
      <Link className="btn btn-outline mb-4 btn-primary" to="/">Go Back</Link>
     <Row >
        <Col md={5}>
        <Image className="center-block p-12 rounded mx-auto d-block;" style={{ width: '500px', height: '500px' } }src={product.image} alt={product.name} fluid/>
        </Col>
        <Col lassName="mx-auto d-block" md={4}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3 className='text-center'>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item className='text-center'>
                    <Rating value={product.rating} text={`${product.numReviews}`}/>
                </ListGroup.Item>
                <ListGroup.Item className='text-center'>Price / kg: ${product.price}</ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3} className='mt-4'>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col className='text-center'>Stock:</Col>
                            <Col className='text-center'>
                                <strong>{product.countInStock >0 ? 'In Stock' : 'Out of Stock'} </strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item className='text-center'>
                        <Button className = "btn-block w-48 mt-2" 
                        type="button"
                        disabled={product.countInStock===0}>
                            Add to Cart
                        </Button>
                    </ListGroup.Item>

                </ListGroup>
            </Card>
        </Col>
     </Row>
      
    </div>
  )
}

export default ProductScreen
