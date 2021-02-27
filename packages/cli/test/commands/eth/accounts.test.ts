import {expect, test} from '@oclif/test'

describe('eth:accounts', () => {
  test
  .stdout()
  .command(['eth:accounts'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['eth:accounts', '--help', 'Ethereum JSONRPC Methods'])
  .it('runs eth --help', ctx => {
    expect(ctx.stdout).to.contain('Ethereum JSONRPC Methods')
  })
})
