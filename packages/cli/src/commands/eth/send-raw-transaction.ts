/**
 * SendRawTransaction 
* @name sendRawTransaction
* @extends Command
*/
import {Command, flags} from '@oclif/command';
// import {YCabal} from '@ycabal/core';

export default class SendRawTransaction extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
  }
}
