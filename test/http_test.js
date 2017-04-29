import { Http } from '../'
import chai from 'chai'
import sinon from 'sinon'
import axios from 'axios'

describe('HttpService', () => {
  it('can be instantiated', () => {
    let http = new Http(axios)
    chai.expect(http).to.be.instanceof(Http)
  })
  it('has methods for making http requests', () => {
    let http = new Http(axios)
    chai.expect(http.get).to.exist
    chai.expect(http.request).to.exist
    chai.expect(http.create).to.exist
    chai.expect(http.configure).to.exist
    chai.expect(http.get).to.exist
    chai.expect(http.delete).to.exist
    chai.expect(http.head).to.exist
    chai.expect(http.post).to.exist
    chai.expect(http.put).to.exist
    chai.expect(http.patch).to.exist
    chai.expect(http.all).to.exist
    chai.expect(http.setDefaults).to.exist
    chai.expect(http.requestMiddleware).to.exist
    chai.expect(http.responseMiddleware).to.exist
  })
  it('aliases the appropriate calls to axios', () => {
    sinon.stub(axios, 'request')
    sinon.stub(axios, 'create')
    sinon.stub(axios, 'get')
    sinon.stub(axios, 'delete')
    sinon.stub(axios, 'head')
    sinon.stub(axios, 'post')
    sinon.stub(axios, 'put')
    sinon.stub(axios, 'patch')
    sinon.stub(axios, 'all')

    let http = new Http(axios)

    http.request('config')
    chai.expect(http.axios.request.called).to.be.true
    chai.expect(http.axios.request.args[0][0]).to.equal('config')

    http.create('config')
    chai.expect(http.axios.create.called).to.be.true
    chai.expect(http.axios.create.args[0][0]).to.equal('config')

    http.get('url', 'config')
    chai.expect(http.axios.get.called).to.be.true
    chai.expect(http.axios.get.args[0][0]).to.equal('url')
    chai.expect(http.axios.get.args[0][1]).to.equal('config')

    http.delete('url', 'config')
    chai.expect(http.axios.delete.called).to.be.true
    chai.expect(http.axios.delete.args[0][0]).to.equal('url')
    chai.expect(http.axios.delete.args[0][1]).to.equal('config')

    http.head('url', 'config')
    chai.expect(http.axios.head.called).to.be.true
    chai.expect(http.axios.head.args[0][0]).to.equal('url')
    chai.expect(http.axios.head.args[0][1]).to.equal('config')

    http.post('url', 'data', 'config')
    chai.expect(http.axios.post.called).to.be.true
    chai.expect(http.axios.post.args[0][0]).to.equal('url')
    chai.expect(http.axios.post.args[0][1]).to.equal('data')
    chai.expect(http.axios.post.args[0][2]).to.equal('config')

    http.put('url', 'data', 'config')
    chai.expect(http.axios.put.called).to.be.true
    chai.expect(http.axios.put.args[0][0]).to.equal('url')
    chai.expect(http.axios.put.args[0][1]).to.equal('data')
    chai.expect(http.axios.put.args[0][2]).to.equal('config')

    http.patch('url', 'data', 'config')
    chai.expect(http.axios.patch.called).to.be.true
    chai.expect(http.axios.patch.args[0][0]).to.equal('url')
    chai.expect(http.axios.patch.args[0][1]).to.equal('data')
    chai.expect(http.axios.patch.args[0][2]).to.equal('config')

    http.all('config')
    chai.expect(http.axios.all.called).to.be.true
    chai.expect(http.axios.all.args[0][0]).to.equal('config')
  })
})
