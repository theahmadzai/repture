# Repture
JavaScript utility library using latest es6 features

# Install

```ssh
npm install repture --save-dev
```
or
```ssh
yarn add repture --dev
```

importing
```javascript
import repture from 'repture';
```
spcific module
```javascript
import { compact, find, fill } from 'repture';
```

## Compact

### compact(array)
```javascript
import { compact } from 'repture';
compact([0, 3, false, [], 'a', `a` '', 3, {}]);
// => [3, [], 'a', `a`, 3, {}]
```
