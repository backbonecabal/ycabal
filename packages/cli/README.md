ycabal
=====

JSONRPC utility

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ycabal.svg)](https://npmjs.org/package/ycabal)
[![Downloads/week](https://img.shields.io/npm/dw/ycabal.svg)](https://npmjs.org/package/ycabal)
[![License](https://img.shields.io/npm/l/ycabal.svg)](https://github.com/backbonecabal/ycabal/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ycabal
$ ycabal COMMAND
running command...
$ ycabal (-v|--version|version)
ycabal/0.0.0 linux-x64 node-v12.16.1
$ ycabal --help [COMMAND]
USAGE
  $ ycabal COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ycabal autocomplete [SHELL]`](#ycabal-autocomplete-shell)
* [`ycabal eth:send-raw-transaction [FILE]`](#ycabal-ethsend-raw-transaction-file)
* [`ycabal eth:send-transaction [FILE]`](#ycabal-ethsend-transaction-file)
* [`ycabal help [COMMAND]`](#ycabal-help-command)
* [`ycabal plugins`](#ycabal-plugins)
* [`ycabal plugins:install PLUGIN...`](#ycabal-pluginsinstall-plugin)
* [`ycabal plugins:link PLUGIN`](#ycabal-pluginslink-plugin)
* [`ycabal plugins:uninstall PLUGIN...`](#ycabal-pluginsuninstall-plugin)
* [`ycabal plugins:update`](#ycabal-pluginsupdate)
* [`ycabal repl [PROVIDER]`](#ycabal-repl-provider)

## `ycabal autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ ycabal autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ ycabal autocomplete
  $ ycabal autocomplete bash
  $ ycabal autocomplete zsh
  $ ycabal autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.1.5/src/commands/autocomplete/index.ts)_

## `ycabal eth:send-raw-transaction [FILE]`

describe the command here

```
USAGE
  $ ycabal eth:send-raw-transaction [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/eth/send-raw-transaction.ts](https://github.com/backbonecabal/ycabal/blob/v0.0.0/src/commands/eth/send-raw-transaction.ts)_

## `ycabal eth:send-transaction [FILE]`

describe the command here

```
USAGE
  $ ycabal eth:send-transaction [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  (required) name to print
```

_See code: [src/commands/eth/send-transaction.ts](https://github.com/backbonecabal/ycabal/blob/v0.0.0/src/commands/eth/send-transaction.ts)_

## `ycabal help [COMMAND]`

display help for ycabal

```
USAGE
  $ ycabal help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `ycabal plugins`

list installed plugins

```
USAGE
  $ ycabal plugins

OPTIONS
  --core  show core plugins

EXAMPLE
  $ ycabal plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/index.ts)_

## `ycabal plugins:install PLUGIN...`

installs a plugin into the CLI

```
USAGE
  $ ycabal plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  plugin to install

OPTIONS
  -f, --force    yarn install with force flag
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command 
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in 
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ ycabal plugins:add

EXAMPLES
  $ ycabal plugins:install myplugin 
  $ ycabal plugins:install https://github.com/someuser/someplugin
  $ ycabal plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/install.ts)_

## `ycabal plugins:link PLUGIN`

links a plugin into the CLI for development

```
USAGE
  $ ycabal plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' 
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLE
  $ ycabal plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/link.ts)_

## `ycabal plugins:uninstall PLUGIN...`

removes a plugin from the CLI

```
USAGE
  $ ycabal plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

ALIASES
  $ ycabal plugins:unlink
  $ ycabal plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/uninstall.ts)_

## `ycabal plugins:update`

update installed plugins

```
USAGE
  $ ycabal plugins:update

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/update.ts)_

## `ycabal repl [PROVIDER]`

Interactive REPL

```
USAGE
  $ ycabal repl [PROVIDER]

ARGUMENTS
  PROVIDER  Provider address.  Ex: http://localhost:8545

OPTIONS
  -h, --help               show CLI help
  -p, --provider=provider  Provider address.  Ex: http://localhost:8545
```

_See code: [src/commands/repl.ts](https://github.com/backbonecabal/ycabal/blob/v0.0.0/src/commands/repl.ts)_
<!-- commandsstop -->
