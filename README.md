# @rimiti/operator-expression

[![Build][build-badge]][build]
[![License][license-badge]][license]
[![PRs Welcome][prs-badge]][prs]

## Description

This package convert mathematical expressions.

## Install

```
yarn add @rimiti/operator-expression
```

## Examples

```ts
import { ExpressionAbbreviation, mappings, strToOperator, operatorToStr } from '@rimiti/operator-expression';

operatorToStr('eq'); // '=='
strToOperator('=='); // 'eq'

operatorToStr('ne'); // '!='
strToOperator('!='); // 'ne'

operatorToStr('gt'); // '>'
strToOperator('>'); // 'gt'

operatorToStr('ge'); // '>='
strToOperator('>='); // 'ge'

operatorToStr('lt'); // '<'
strToOperator('<'); // 'lt'

operatorToStr('le'); // '<='
strToOperator('<='); // 'le'

operatorToStr('and'); // '&&'
strToOperator('&&'); // 'and'

operatorToStr('or'); // '||'
strToOperator('||'); // 'or'

operatorToStr('not'); // '!'
strToOperator('!'); // 'not'

operatorToStr('plus'); // '+'
strToOperator('+'); // 'plus'

operatorToStr('minus'); // '-'
strToOperator('-'); // 'minus'

operatorToStr('mul'); // '*'
strToOperator('*'); // 'mul'

operatorToStr('div'); // '/'
strToOperator('/'); // 'div'

operatorToStr('mod'); // '%'
strToOperator('%'); // 'mod'

operatorToStr('assign'); // '='
strToOperator('='); // 'assign'

operatorToStr('plus_assign'); // '+='
strToOperator('+='); // 'plus_assign'

operatorToStr('minus_assign'); // '-='
strToOperator('-='); // 'minus_assign'

operatorToStr('mul_assign'); // '*='
strToOperator('*='); // 'mul_assign'

operatorToStr('div_assign'); // '/='
strToOperator('/='); // 'div_assign'

operatorToStr('mod_assign'); // '%='
strToOperator('%='); // 'mod_assign'
```

## Scripts

Run using yarn run `<script>` command.

    clean       - Remove temporarily folders.
    build       - Compile source files.
    build:watch - Interactive watch mode, compile sources on change.
    lint        - Lint source files.
    lint:fix    - Fix lint source files.
    test        - Runs all tests with coverage.
    test:watch  - Interactive watch mode, runs tests on change.

## License

MIT © [Dimitri DO BAIRRO](https://www.dimsolution.com)

[dependencies-badge]: https://img.shields.io/david/tictactrip/api-cache
[dependencies]: https://img.shields.io/david/tictactrip/api-cache
[build-badge]: https://github.com/tictactrip/api-cache/workflows/Test/badge.svg
[build]: https://github.com/tictactrip/api-cache/actions?query=workflow%3ATest+branch%3Amaster
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license]: https://github.com/tictactrip/api-cache/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
