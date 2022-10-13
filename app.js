const express = require('express')
const mongoose = require('mongoose')
const Blog = require('./model/Blog');
const Product = require('./model/Product');
const app = express()
const port = 7176;

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})

app.listen(port, () => {
    console.log(`App started and listening to port ${port}`)
})

async function connectDB() {
    await mongoose.connect('mongodb://localhost:27017/ecomm')
}

connectDB().catch(err => console.log(err))
// Create a new blog post object
const article = new Blog({
    title: 'Awesome Post!',
    slug: 'awesome-post',
    published: true,
    content: 'This is the best post ever',
    tags: ['featured', 'announcement'],
  });

  const dummyProduct = new Product({
    Name:'Dummy',
    price: 1000,
    description: 'This is a test product',
    sales: 10000
  })
  
  // Insert the article in our MongoDB database
async function enterInfo(){
    await dummyProduct.save()
    await article.save()

    console.log('Document saved!')
}

const readInfo = async() =>{
   const article =  await Product.findOne({_id:'63482cc5b7c965b13aaa4b25'})
    console.log("here atricle", article)
}

enterInfo()
readInfo()
