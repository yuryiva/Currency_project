import React, { useState } from "react";
import "./SearchBlock.css";
import Calendar from "react-calendar";

const SearchBlock = (props) => {
  const [value, onChange] = useState(new Date());

  // onChange = () => {
  //   alert('hello')
  // }

  return (
    <div className="searchBlock">
      <Calendar onChange={onChange} value={value} locale={"en"} />

      <form className="newsOnTopicSection">
        <p>NEWS ON PARTICULAR TOPIC</p>
        <div>
          <select className="input">{props.topics}</select>
        </div>
        <button
          className="searchButton"
          onClick={(e) => props.handleTopicChoise(e)}
        >
          SEARCH
        </button>
      </form>

      <form className="form" onSubmit={(e) => props.handleKeyWordSubmit(e)}>
        <label className="newsOnKeyWordSection">
          <p>NEWS BY KEYWORD</p>
          <div>
            <input
              className="input"
              type="text"
              value={props.value}
              onChange={(e) => props.handleKeyWordChange(e)}
            />
          </div>
        </label>
        <input className="searchButton" type="submit" value="SEARCH" />
      </form>
    </div>
  );
};

export default SearchBlock;
