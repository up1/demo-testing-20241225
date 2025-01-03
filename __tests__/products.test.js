const request = require('supertest')
const app = require('../app')
const validate = require('jsonschema').validate

describe('Products API', () => {
  it('should return product when id exists', async () => {
    const res = await request(app)
      .get('/products/1')
    
    expect(res.statusCode).toBe(200)
    
    const productSchema = {
      type: 'object',
      required: ['id', 'product_name', 'price'],
      properties: {
        id: { type: 'number' },
        product_name: { type: 'string' },
        price: { type: 'number' }
      }
    }
    const validationResult = validate(res.body, productSchema)
    expect(validationResult.valid).toBe(true)
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
