import React, { useState } from "react";
import "./SearchBlock.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const d = new Date();
// const curr_date = d.getDate();
// const curr_month = d.getMonth() + 1;
// const previous_month = d.getMonth();
// const curr_year = d.getFullYear();
// const todayIs = curr_year + "-" + curr_month + "-" + curr_date;

// const todayIsMinusOneMonth = curr_year + "-" + previous_month + "-" + curr_date;
// const aMonthAgo = new Date(todayIsMinusOneMonth);

const aMonthAgo = new Date(d.setMonth(d.getMonth() - 1));

const SearchBlock = (props) => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="searchBlock">
      <form className="form">
        <p className="calendarSection">
          {/* PICK A DAY TO SEARCH NEWS FOR A PARTICULAR DATE (BY KEYWORD OR TOPIC) */}
          NEWS SEARCH BY DATE
        </p>
        <Calendar
          onChange={onChange}
          value={value}
          locale={"en"}
          maxDate={new Date()}
          minDate={aMonthAgo}
        />
      </form>
      <div className="searchOnTopicAndKeyWordSection">
        <form
        // onSubmit={(e) => props.handleTopicChoise(e, value)}
        // className="newsOnTopicSection"
        >
          <p className='titleNames'>NEWS BY CATEGORIES</p>
          <div>
            <select
              onChange={(e) => props.handleTopicChoise(e, value)}
              // props.handleTopicSelector(e)}
              // className="input"
            >
              {props.topics}
            </select>
          </div>
          {/* <button
          className="searchButton"
          // onClick={(e) => props.handleTopicChoise(e)}
        >
          SEARCH
        </button> */}
        </form>

        <form
          className="searchByKeyWordForm"
          onSubmit={(e) => props.handleKeyWordSubmit(e, value)}
        >
          <label
          // className="newsOnKeyWordSection"
          >
            <p className='titleNames'>NEWS BY KEYWORD</p>
            <div>
              <input
                className="input"
                type="text"
                value={props.value}
                onChange={(e) => props.handleKeyWordChange(e)}
              />
            </div>
          </label>
          <button className="searchButton">SEARCH</button>
        </form>
      </div>
    </div>
  );
};

export default SearchBlock;
