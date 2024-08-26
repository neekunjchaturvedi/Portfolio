function Click() {
  return <button>click</button>;
}

function Productitem({ products }) {
  return (
    <div >
      <p>{products}</p>
      <Click />
      {/* <ul>
        {products.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default Productitem;
