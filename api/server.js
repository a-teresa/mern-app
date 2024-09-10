import express from 'express';
import dotenv from 'dotenv';

import products from './data/products.js';

const port = process.env.PORT || 8000;

const app= express();



app.get('/', (req, res,next)=>{
    res.send('API running');
});

app.get('/api/products', (req, res,next)=>{
    res.json(products);
});

app.get('/api/products/:id', (req, res,next)=>{
    const product = products.find(p=>p._id ===req.params.id);
    res.json(product);
});




app.listen(port, ()=> console.log(`Server running on port ${port}`)); 