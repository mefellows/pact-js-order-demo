const Verifier = require('@pact-foundation/pact').Verifier
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

let { server } = require('../provider.js')

server.listen(8081, () => {
  console.log('Provider service listening on http://localhost:8081')
})

// Verify that the provider meets all consumer expectations
describe('Pact Verification', () => {
  it('should validate the expectations of Order Web', () => {
    let opts = {
      provider: 'Order API',
      providerBaseUrl: 'http://localhost:8081',
      // pactUrls: [
      //   path.resolve(process.cwd(), './pacts/order_web-order_api.json'),
      // ],
      pactBrokerUrl: 'https://test.pact.dius.com.au/',
      pactBrokerUsername: 'dXfltyFMgNOFZAxr8io9wJ37iUpY42M',
      pactBrokerPassword: 'O5AIZWxelWbLvqMd8PkAVycBJh2Psyg1',
      publishVerificationResult: true,
      tags: ['prod'],
      providerVersion:
        '1.0.0+' +
        (process.env.USER || process.env.username || process.env.UserName),
    }

    return new Verifier().verifyProvider(opts).then(output => {
      console.log('Pact Verification Complete!')
      console.log(output)
    })
  })
})
