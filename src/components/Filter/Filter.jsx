import React, { useState } from "react";
import "./Filter.css";

const Filter = ({ options, setOption, activeOption }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="filters-wrapper">
      <div className="filters">
        <span className="icon icon-dialog"></span>
        <span>Filter by movie genre</span>
        <span
          className={`icon icon-arrow ${isCollapsed ? "" : "icon-arrow_expanded"}`}
          onClick={() => setIsCollapsed(!isCollapsed)}
        ></span>
      </div>
      <ul className={`filter-options ${isCollapsed ? "" : "expanded"}`}>
        {options &&
          options.map((option, index) => (
            <li
              key={index}
              className={`filter-option ${
                option === activeOption ? "active-option" : ""
              }`}
              onClick={() => setOption(option)}
            >
              <input type="radio" checked={option === activeOption} name={option} />
              <label className="option-label">{option}</label>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Filter;
