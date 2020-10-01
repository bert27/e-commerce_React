import supertest from 'supertest'

const BASE_URL = ("http://localhost/",4000);

const ProductsTest = {
  products: [
    {
      ID: 1,
      Nombre: 'Producto Test 1',
      Image: 'Blob',
      Precio: 15,
      Cantidad: 3,
      Total: 45,
    },
    {
      ID: 2,
      Nombre: 'Producto Test 2',
      Image: 'Blob',
      Precio: 20,
      Cantidad: 4,
      Total: 80,
    }
  ]
};

test('Get all products in database', async (assert) => {
    const { body } = await supertest(BASE_URL).get('/Shop/ServerGetItems')

    assert.exists(body)
  })
