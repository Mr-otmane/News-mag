import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

const App = () => {
  const[category,setCategory] = useState("general");
  return (
    <div>
      <Navbar />
      <NewsBoard />
    </div>
  );
};

export default App;
