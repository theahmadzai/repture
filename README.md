# Repture
JavaScript utility library using latest es6 features

# Install

```
npm install repture --save-dev
```
or
```
yarn add repture --dev
```

importing
```
import repture from 'repture';
```
spcific module
```
import { compact, find, fill } from 'repture';
```

## Compact

### compact(array)
```
_.compact([0, 3, false, [], 'a', `a` '', 3, {}]);
// => [3, [], 'a', `a`, 3, {}]
```
