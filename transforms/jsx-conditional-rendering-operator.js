function isEmptyRender(node) {
  return node.type === 'Literal' && (node.value == null || node.value === false);
}

function hasAncestorOfType(node, type) {
  let parent = node.parent;
  while (parent != null) {
    if (parent.node.type === type) {
      return true;
    }
    parent = parent.parent;
  }
  return false;
}

function transformer(fileInfo, api) {
  const j = api.jscodeshift;

  const collection = j(fileInfo.source)
    .find(j.ConditionalExpression)
    .filter(path => hasAncestorOfType(path, 'JSXExpressionContainer'));
  // It is important that nested nodes get processed first, or else when outer nodes
  // get transformed, the paths to the inner nodes get changed and they do not get transformed.
  // Hence we sort by reversed order of appearance in the code.
  const sortedCollection = j(collection.paths()
    .sort((a, b) => b.node.start - a.node.start)
  );
  // Hack: `collection` loses the `_parent` reference after sorting. Attach it back.
  sortedCollection._parent = collection._parent;
  return sortedCollection.forEach(path => {
    if (isEmptyRender(path.node.alternate)) {
      // <condition> ? <consequent> : null
      const node = {
        type: 'LogicalExpression',
        operator: '&&',
        left: path.node.test,
        right: path.node.consequent,
      };

      j(path).replaceWith(node);
    } else if (isEmptyRender(path.node.consequent)) {
      // <condition> ? null : <alternate>
      const node = {
        type: 'LogicalExpression',
        operator: '&&',
        left: {
          type: 'UnaryExpression',
          operator: '!',
          argument: path.node.test,
          prefix: true
        },
        right: path.node.alternate,
      };

      j(path).replaceWith(node);
    }
  }).toSource();
}

module.exports = transformer;
