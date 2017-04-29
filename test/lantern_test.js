import { App } from '../'
import chai from 'chai'
import sinon from 'sinon'

describe('App', () => {
  it('can be instantiated', () => {
    let app = new App()
    chai.expect(app).to.be.instanceof(App)
  })
  it('can bind services to the dependency container', () => {
    let app = new App()
    let spy = sinon.spy()
    app.bind('test', function (container) {
      return spy
    })
    let test = app.make('test')
    chai.expect(test).to.equal(spy)
  })
})
