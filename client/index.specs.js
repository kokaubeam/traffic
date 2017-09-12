const app = require('./index').app
const supertest = require("supertest")

var request = supertest.agent(app.listen())

describe('app', () => {
  context('when a page does NOT exist', () => {
    it('should return a 404', () => {
      return request.get('/missing/page')
        .expect(404)
    })
  })
})