import React, { useState } from "react";
import "./SearchBlock.css";

const SearchBlock = (props) => {
  return (
    <div className="searchBlock">
      <label className="newsOnTopicSection">
        <p>NEWS ON PARTICULAR TOPIC</p>
        <div>
        <select className="input" onChange={(e) => props.handleTopicChoise(e)}>
          {props.topics}
        </select>
        </div>
      </label>

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
