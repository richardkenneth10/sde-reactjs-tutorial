const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function RenderingLists() {
  const listItems = products.map((p) => (
    <li key={p.id} style={{ color: p.isFruit ? 'magenta' : 'darkgreen' }}>
      {p.title}
    </li>
  ));
  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}

export default RenderingLists;
