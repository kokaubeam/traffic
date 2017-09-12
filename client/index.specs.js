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

  context('GET /', () => {
    var response

    before(() => {
      return request.get('/')
        .then((res) => {
          response = res
        })
    })
    
    it('should return 200', () => {
      expect(response.status).to.equal(200)
    })

    it('should return the static index.html page', () => {
      expect(response.text).to.contain('<title>Traffic</title>')
    })
  })
})