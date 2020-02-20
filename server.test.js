const supertest = require('supertest')
const express = require('express')
const hello = require('./hello')

const app = express()
const request = supertest(app)

app.use('/', hello)

describe('/ route', () => {
  it('should return hello!', done => {
    request
      .get('/')
      .expect(200)
      .expect('hello!')
      .end((err) => {
        if (err) throw err
        done()
      })
  })
})
