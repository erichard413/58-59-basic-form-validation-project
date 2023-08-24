import { useState } from "react";
import "./styles.css";
import Form from "./Form";
import FormRefs from "./FormRefs";

function App() {
  return (
    <div className="App">
      <h2>Using State to Control Form Inputs</h2>
      <Form />
      <h2>Using useRef hook instead of State to Access Form Inputs</h2>
      <FormRefs />
    </div>
  );
}

export default App;
