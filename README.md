# module-downloads

[![Greenkeeper badge](https://badges.greenkeeper.io/amandeepmittal/module-downloads.svg)](https://greenkeeper.io/)

Check downloads for an npm module(last day | last week | last month).

[![npm](https://img.shields.io/npm/v/module-downloads.svg?style=flat-square)](https://www.npmjs.com/package/module-downloads)
[![npm](https://img.shields.io/npm/dm/module-downloads.svg?style=flat-square)](https://www.npmjs.com/package/module-downloads)
[![Travis Build](https://travis-ci.org/amandeepmittal/module-downloads.svg?style=flat-square)](https://travis-ci.org/amandeepmittal/module-downloads)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation
This command line utility can be installed via npm:

```shell
npm install module-downloads --global
```

## API

* **downloads.yesterday**
* **downloads.lastWeek**
* **downloads.lastMonth**

```javascript
const downloads =  require('../index')

downloads.yesterday('x-ray')
// Yesterday, x-ray got 176 downloads.

downloads.lastWeek('x-ray')
// Las week, x-ray got 858 downloads.

downloads.lastMonth('x-ray')
//Last month, x-ray got 4456 downloads.
```

### Contributing

You can help out by:

Solving existing issues
Enhancing more functionalities
Pointing out bugs/errors
Go ahead, and create a Pull Request! If you make a change, please follow the `standardjs` coding style and the current directory structure.

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

#### License

MIT | Copyright (c) Aman Mittal