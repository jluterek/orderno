# orderno

[NPM](https://www.npmjs.com/package/@luterek/orderno) package for creating distinct order numbers in a high volume distributed system.

![TESTS](https://github.com/jluterek/orderno/workflows/test/badge.svg)

### Installing

```bash
npm i -S orderno
```

## Running the tests

```bash
npm run test
```

### Coding Style

```bash
npm run lint
npm run format
```

## Usage

```

import orderno from './orderno';

orderno('2346789abcdefghjkmnpqrtuvwxyz', TimeInterval.Second, 2);

```

## Authors

- [James Luterek](https://github.com/jluterek)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
