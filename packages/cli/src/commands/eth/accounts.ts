/**
* Accounts
* @extends Config
*/
import {Command, flags} from '@oclif/command';
import {YCabal} from '@ycabal/core';
import {Config} from '../../utils/config';

export default class Accounts extends Command {
  static description = `Returns a list of addresses owned by client.

Parameters: none

Returns
Array of DATA, 20 Bytes - addresses owned by the client.
`;

  static examples = [`$ ycabal eth_accounts
{
  "id":1,
  "jsonrpc": "2.0",
  "result": ["0xc94770007dda54cF92009BFF0dE90c06F603a09f"]
}`];

  static flags = {
    help: flags.help({char: 'h'}),
  };

  static aliases = ['eth_accounts', 'ethAccounts'];

  async run() {
    // const {args, flags} = this.parse(EthAccounts);
    const {host, port} = Config.current();
    const rpc = new YCabal(host, port);
    // eslint-disable-next-line no-console
    console.log(await rpc.eth.accounts());
  }
}
