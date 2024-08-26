import Productitem from "./components/productitem";

function ProductList({ prodarray }) {
  // const { name, age } = props;
  return (
    <div>
      <h3>Ecommerce project</h3>
      <p></p>
      <ul>
        {prodarray.map((item, index) => (
          <Productitem products={item} />
        ))}
      </ul>
    </div>
  );
}
export default ProductList;
