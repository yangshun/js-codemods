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

#### `jsxattribute-expression-to-literal`

Transforms JSX attribute values which are string literals wrapped within `JSXExpressionContainers` to just the string literal itself.

```sh
jscodeshift -t js-codemods/transforms/jsxattribute-expression-to-literal.js <file>
```

**Before**:

```html
<Foo header={"Lorem Ipsum"} message={'dolor sit amet'} />
```

**After**:

```html
<Foo header="Lorem Ipsum" message='dolor sit amet' />
```
