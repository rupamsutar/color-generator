import React, { useState } from "react";
import Values from "values.js";

const Form = () => {
  const [color, setColor] = useState('#f15025');
  const handleSubmit = (e) => { 
    e.preventDefault();
  };
  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form onSubmit={handleSubmit} className="color-form">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          placeholder="#f15025"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button
          className="btn"
          type="submit"
          style={{ backgroundColor: color }}
        ></button>
      </form>
    </section>
  );
};

export default Form;
