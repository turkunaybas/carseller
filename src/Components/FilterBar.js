import React, { useState, useContext } from 'react';
import { Button, Divider } from 'semantic-ui-react';
import { Checkbox } from "semantic-ui-react";

function FilterBar() {
    const [colors, setColors] = useState([
        {name:"mavi"}, {name:"mor"},{name:"yeşil"}
    ]);
    const [checked, setChecked] = useState(false);
  return (
    <div
      style={{
        padding: 20,
        background: " #950740",
        marginRight: "80%",
        borderRadius: 8,
        height: 400,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3 style={{ color: "white", marginBottom: 0 }}>Filters</h3>{" "}
        <button
        
          className="categoryButton"
          style={{
            background: "#C3073F",
            border: "0px ",
            borderRadius: 8,
            marginRight: 9,
          }}
        >
          <img style={{padding:5, marginTop:2}} alt="filter-icon" width="30" src="https://img.icons8.com/external-prettycons-solid-prettycons/60/ffffff/external-left-arrow-orientation-prettycons-solid-prettycons.png"/>
        </button>
      </div>
      <Divider />
       <div>
      <h3 style={{ color: "white" }}>Colors</h3>
      <div
        style={{
          background: "#F7F7F7",
          height: 110,
          borderRadius: 9,
          width: 150,
          overflow: "auto",
        }}
      >
        {colors.map((color) => (
          <li key={color.name}>
            <div>
      <div
        style={{
          background: "#E8E8E8",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 10,
          padding: 3,
          width: 120,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 4,
        }}
      >
        <Checkbox checked={checked} ></Checkbox>
        <h4 style={{ marginTop: 0 }}>{color.name}</h4>
      </div>
    </div>
          </li>
        ))}
      </div>
    </div>
      <Divider />
      {/* <DailyPriceArea></DailyPriceArea> */}
      <Button></Button>
    </div>
  )
}

export default FilterBar