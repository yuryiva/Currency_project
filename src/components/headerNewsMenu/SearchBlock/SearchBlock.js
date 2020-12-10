import React from "react";
import "./SearchBlock.css";
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'

const SearchBlock = (props) => {
  // const [value, onChange] = useState(new Date());
  return (
    <div className="searchBlock">
      <form onSubmit={(e) => props.handleSubmit(e)}>
        <label className="label">
          NEWS BY KEYWORD
          <input
            className="input"
            type="text"
            value={props.value}
            onChange={(e) => props.handleChange(e)}
          />
        </label>
        <input className="searchButton" type="submit" value="SEARCH" />
      </form>
      {/* <input type="date" max="2020-12-10" min="2020-11-12" value="2020-12-10"/> */}
      {/* <Calendar
        onChange={onChange}
        value={value}
      /> */}
    </div>
  );
};

export default SearchBlock;
