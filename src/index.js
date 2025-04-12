import cytoscape from 'cytoscape';

let nodeId = 0;

const cy = cytoscape({
  container: document.getElementById('cy'),

  elements: [
    { data: { id: 'a' } },
    { data: { id: 'b' } },
    { data: { id: 'ab', source: 'a', target: 'b' } }
  ],

  style: [
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        'label': 'data(id)',
        'color': '#fff',
        'text-valign': 'center',
        'text-halign': 'center',
      }
    },
    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle'
      }
    }
  ],

  layout: {
    name: 'grid',
    rows: 1
  }
});

// 💡 Add Node
window.addNode = function () {
  const newId = `n${nodeId++}`;
  cy.add({ data: { id: newId } });
  cy.layout({ name: 'grid' }).run();
};

// ❌ Remove last Node
window.removeNode = function () {
  const lastId = `n${nodeId - 1}`;
  const node = cy.getElementById(lastId);
  if (node) {
    cy.remove(node);
    nodeId--;
    cy.layout({ name: 'grid' }).run();
  }
};

// 🎨 Highlight a node
window.highlightNode = function () {
  const node = cy.getElementById('a');
  if (node) {
    node.style('background-color', 'red');
  }
};