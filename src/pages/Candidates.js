import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Item } from "semantic-ui-react";

export const Candidates = (props) => {
  const [filterText, setFilterText] = useState("");
  let data = props.data[0];
  const searchData = (e) => {
    setFilterText(e.target.value);
  };

  const filteredData = data
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((item) => {
      return (
        item.name.toLowerCase().indexOf(filterText) !== -1 ||
        item.phone.toLowerCase().indexOf(filterText) !== -1
      );
    });
  return (
    <div>
      <h1 className="candidates">
        <div className="candidates-table">
          <div className="gridTable">
            <span className="inputText">
              {" "}
              <label>
                Search Tab{" "}
                <input onChange={searchData} placeholder="..."></input>
              </label>
            </span>
            <span>
              <strong>Name and Surname</strong>
            </span>
            <span>
              <strong>Phone</strong>
            </span>
            <span>
              <strong>Detail</strong>
            </span>
          </div>

          {filteredData.map((item, index) => {
            return (
              <div className="gridTable" key={index}>
                <span>{item.name}</span>
                <span>{item.phone}</span>
                <span>
                  <Link
                    to={"CandidateDetail/" + item.id}
                    className="button-8"
                  >
                    Detail
                  </Link>
                </span>
              </div>
            );
          })}
        </div>
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Candidates);
