import { Lantern } from '../'
import chai from 'chai'
import sinon from 'sinon'

describe('Lantern', () => {
  it('can be instantiated', () => {
    let app = new Lantern()
    chai.expect(app).to.be.instanceof(Lantern)
  })
  it('can bind services to the dependency container', () => {
    let app = new Lantern()
    let spy = sinon.spy()
    app.bind('test', function (container) {
      return spy
    })
    let test = app.make('test')
    chai.expect(test).to.equal(spy)
  })
})
