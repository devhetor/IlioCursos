const express = require('express');
const app = express();

// GET 
app.get('/', (req, res) => {
    res.send('Hello Webserver')
})

// GET api/products
app.get('/api/products',(req,res) => {
    res.json({
        products: [
            {id : 1, name: "Iphonex"}, 
            {id: 2, name: "Macbook"}
        ]
    })
})

// GET api/products/1
app.get('/api/products/:id/customer/:customerId?sortBy=name', (req,res) => {
 return res.json({
     params: req.params,
     query: req.query
 })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`App is running at ${PORT}`))