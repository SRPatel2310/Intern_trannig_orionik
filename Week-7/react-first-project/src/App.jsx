import { useState } from "react";

import "./App.css";
import Navbar from "./componet/Navbar";
import Hello from "./componet/Hello";
import Footer from "./componet/Footer";
import Card from "./componet/Card";
import Hookpr from "./componet/Hookpr";
import Event from "./componet/Event";
import List from "./componet/List";
import LiftingStateUp from "./componet/LiftingStateUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hello />
      <div className="container">
        <div className="count">the count is {count}</div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase
        </button>

        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrease
        </button>
      </div>
      <Hookpr />
      <Card
        title="This is Room"
        src="https://cdn.midjourney.com/ac061fad-bdbc-4cea-9028-6600e1257804/0_2.png"
      />
      <Card
        title="kitchen"
        src="https://cdn.midjourney.com/f1d998a7-f5fd-4efa-bc51-3aa839030b21/0_1.png"
      />
      <Card
        title="christmas celebration"
        src="https://cdn.midjourney.com/69e77718-5bf6-4085-a1b6-9aadf136d854/0_2.png"
      />
      <Card
        title="sofa set "
        src="https://cdn.midjourney.com/6e5d51bc-d8b7-4f84-b5a7-5931e575eb3d/0_1.png"
      />
      {/* condition & evnet hadling */}
      <Event />
      <List />
      <LiftingStateUp />
      <Footer />
    </>
  );
}

export default App;
