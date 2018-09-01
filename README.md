# Lb-JSX-If-statements
Write nice and clean if statements in your react templates

## Installation
```
$ npm i lb-jsx-if-statements --save
```
## Usage

### Example 1
A quick example to get started:

```
import { If } from 'lb-jsx-if-statements'

const Component = myVar => (
  <div>
    <If statement={myVar === true}>
        <div>
            Hello!
        </div>
    </If>
  </div>
)

export default Component
```

### Example 2
```
import { If } from 'lb-jsx-if-statements'

const Component = myVar => (
  <div>
    <If operator={myVar} isEqualTo={true}>
        <div>
            Hello!
        </div>
    </If>
  </div>
)

export default Component
```

### Example 2
```
import { If } from 'lb-jsx-if-statements'

const Component = myNumber => (
  <div>
    <If operator={myNumber} isGreaterThan={0}>
        <div>
            Hello!
        </div>
    </If>
  </div>
)

export default Component
```

### Example 3
```
import { If } from 'lb-jsx-if-statements'

const Component = myNumber => (
  <div>
    <If operator={myNumber} isLessThan={1}>
        <div>
            Hello!
        </div>
    </If>
  </div>
)

export default Component
```