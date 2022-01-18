import { useContext, useEffect, useState } from "react/cjs/react.development";
import { context } from "../../App";
import User from "../User";

const catergory = [
  { name: "dell", catergory: "laptop" },
  { name: "hp", catergory: "laptop" },
  { name: "nokia", catergory: "mobile" },
  { name: "redmi", catergory: "mobile" },
  { name: "cannon", catergory: "camera" },
  { name: "sony", catergory: "camera" },
];
const Home = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useContext(context);

  useEffect(() => {
    const newProduct = catergory.filter((pd) => pd.catergory === count);
    setProducts(newProduct);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount("mobile")}>mobile</button>
      <button onClick={() => setCount("camera")}>camera</button>
      <button onClick={() => setCount("laptop")}>laptop</button>

      {products.map((item) => (
        <User key={Math.random()} product={item} />
      ))}
    </div>
  );
};

export default Home;
