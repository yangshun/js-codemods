## js-codemods

This repository contains a collection of codemod scripts for use with
[JSCodeshift](https://github.com/facebook/jscodeshift).

### Setup & Run

```sh
npm install -g jscodeshift
git clone https://github.com/yangshun/js-codemods.git
jscodeshift -t path/to/codemod-script.js <file>
```

Use the `-d` option for a dry-run and use `-p` to print the output for
comparison.

### Included Scripts

#### `jsx-conditional-rendering-operator`

Transforms JSX inline If-Else with conditional operator rendering into inline if with logical `&&` operator rendering.

```sh
jscodeshift -t js-codemods/transforms/jsx-conditional-rendering-operator.js <file>
```

**Before**:

```jsx
<div>
  {this.state.showAlert ? <Alert /> : null}
  {this.state.hideAlert ? null : <Alert />}
</div>
```

**After**:

```jsx
<div>
  {this.state.showAlert && <Alert />}
  {!this.state.hideAlert && <Alert />}
</div>
```

#### `jsxattribute-expression-to-literal`

Transforms JSX attribute values which are string literals wrapped within `JSXExpressionContainers` to just the string literal itself.

```sh
jscodeshift -t js-codemods/transforms/jsxattribute-expression-to-literal.js <file>
```

**Before**:

```jsx
<Foo header={"Lorem Ipsum"} message={'dolor sit amet'} />
```

**After**:

```jsx
<Foo header="Lorem Ipsum" message='dolor sit amet' />
```
