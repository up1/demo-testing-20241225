const request = require('supertest')
const app = require('../app')

describe('Products API', () => {
  it('should return product when id exists', async () => {
    const res = await request(app)
      .get('/products/1')
    
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({
      id: 1,
      product_name: "Product name 1",
      price: 100
    })
  })

  it('should return 404 when product not found', async () => {
    const res = await request(app)
      .get('/products/2')
    
    expect(res.statusCode).toBe(404)
    expect(res.body).toEqual({
      message: "Product id=2 not found in system"
    })
  })

  it('should return 500 for internal server error', async () => {
    const res = await request(app)
      .get('/products/3')
    
    expect(res.statusCode).toBe(500)
    expect(res.body).toEqual({
      message: "Internal server error"
    })
  })
})
