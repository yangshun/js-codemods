function transformer(fileInfo, api) {
  const j = api.jscodeshift;

  return j(fileInfo.source)
    .find(j.JSXExpressionContainer)
    .filter(path => path.parent.node.type === 'JSXAttribute')
    .forEach(path => {
      if (path.node.expression.type === 'Literal' &&
        typeof path.node.expression.value === 'string') {
        // Skip if string contains double quotes within.
        if (/^["'].*".*["']$/.test(path.node.expression.raw)) {
          return;
        }
        path.node.expression.raw = path.node.expression.raw.replace(/'/g, '\"');
        j(path).replaceWith(path.node.expression);
      }
    })
    .toSource();
}

module.exports = transformer;
