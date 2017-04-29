import { Auth } from '../'
import chai from 'chai'

describe('AuthService', () => {
  it('has static access to the firebase driver', () => {
    chai.expect(Auth.FirebaseDriver).to.exist
    chai.expect(typeof Auth.FirebaseDriver).to.equal('function')
    chai.expect(Auth.FirebaseDriver.name).to.equal('FirebaseAuthDriver')
  })

  it('has static access to the laravel driver', () => {
    chai.expect(Auth.ApiDriver).to.exist
    chai.expect(typeof Auth.ApiDriver).to.equal('function')
    chai.expect(Auth.ApiDriver.name).to.equal('ApiAuthDriver')
  })
})
