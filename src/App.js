import React from "react";
import Parent from "./components/learn/Parent";
import C1 from "./components/C1";
import C2 from "./components/C2";
import C3 from "./components/C3";
import UseState from "./components/learn2/UseState";
import NewConditionalRendering from "./July 17/NewConditionalRendering";
import Useeffects from "./components/learn2/Useeffects";

const App = () => {
  return (
    <>
       {/* <section style={{ display: "flex" }}>
        <div style={{ flexDirection: "column" }}>
          <C1></C1>
          <C2></C2>
        </div>
        <div>
          <C3></C3>
        </div>
      </section>  */}
      {/* <Parent /> */}
      {/* <UseState /> */}

      <br />
      <br />
      {/* <ConditionalRendering /> */}
      {/* <NewConditionalRendering/> */}
      <Useeffects/>
    </>
  );
};

export default App;
