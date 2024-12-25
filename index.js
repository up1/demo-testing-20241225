const express = require('express')
const app = express()
const port = 3000

// Mock database
const products = [
  {
    id: 1,
    product_name: "Product name 1",
    price: 100
  }
]

app.get('/products/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id)
    
    // Simulate 500 error for id=3
    if (id === 3) {
      throw new Error('Internal server error')
    }

    const product = products.find(p => p.id === id)
    
    if (!product) {
      return res.status(404).json({
        message: `Product id=${id} not found in system`
      })
    }

    res.json(product)
  } catch (error) {
    res.status(500).json({
      message: "Internal server error"
    })
  }
})

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`)
})
