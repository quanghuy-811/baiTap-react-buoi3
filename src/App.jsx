import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ShoeShop from "./Components/ShoeShop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ShoeShop />
    </>
  );
}

export default App;
