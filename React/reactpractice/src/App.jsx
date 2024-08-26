import "./App.css";
import ProductList from "./products/index";
const dataproducts = ["Product1", "Product2", "product3"];

function App() {
  return (
    <>
      <div>
        <h1>Hello world</h1>

        <ProductList prodarray={dataproducts} />
      </div>
    </>
  );
}

export default App;
