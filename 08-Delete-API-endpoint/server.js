const express = require('express');
const app = express();

// add jsob body parser middleware
app.use(express.json())

const products = [
    {id : 1, name: "Iphonex"}, 
    {id: 2, name: "Macbook"}
]

// GET 
app.get('/', (req, res) => {
    res.send('Hello Webserver')
})

// GET api/products
app.get('/api/products',(req,res) => {
    res.json(products )
})

// GET api/products/1
app.get('/api/products/:id', (req,res) => {
   // find the product on the based on id
    const product = products.find(p => p.id === parseInt(req.params.id));
   // if there is no product you can send error back with 404
   if(!product) return res.status(404).send('No product found')

   // send the product back in the response
   return res.json(product)
});

// POST /api/products
app.post('/api/products', (req,res) => {
   // validate the name property
   if(!req.body.name) return res.status(400).send('name is required field')
    // create a new product
    const product = {
        id: products.length + 1,
        name: req.body.name
    }
    // add new product to our list
     products.push(product)
    // send the newly created product in response
    return res.status(200).send(product)
})

// DELETE
app.delete('/api/products/:id', (req,res) => {
 
     // find the product on the based on id
     const product = products.find(p => p.id === parseInt(req.params.id));
     // if there is no product you can send error back with 404
     if(!product) return res.status(404).send('No product found')

     //find the index of the product
     const index = products.indexOf(product);
    // delete the product from array
    products.splice(index, 1);
    // send a simple message record deleted
    return res.json({msg: `product is deleted with id ${req.params.id}`})

})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`App is running at ${PORT}`))