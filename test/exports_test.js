import { App, Api, Http, Auth, Events, Model, Router, Search, Store, View } from '../'
import chai from 'chai'

describe('LanternCore', () => {
  it('exports all the service classes', () => {
    chai.expect(App.name).to.equal('App')
    chai.expect(Api.name).to.equal('Api')
    chai.expect(Http.name).to.equal('Http')
    chai.expect(Auth.name).to.equal('Auth')
    chai.expect(Events.name).to.equal('Events')
    chai.expect(Model.name).to.equal('Model')
    chai.expect(Router.name).to.equal('Router')
    chai.expect(Search.name).to.equal('Search')
    chai.expect(Store.name).to.equal('Store')
    chai.expect(View.name).to.equal('View')
  })
})
