import React from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";

function CandidatesDetail(props) {
  let data = props.data[0];
  const params = useParams();
  console.log(data);
  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      <div
        style={{
          width: "500px",
          height: "300px",
          border: "2px solid black",
          borderRadius: "10%",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          margin: "20px 0px",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <h1>{data[params.id - 1].name}</h1>
        </span>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <span>Phone:</span>
          <span>{data[params.id - 1].phone}</span>
          <span>Email:</span>
          <span>{data[params.id - 1].email}</span>
          <span>WebSite:</span>
          <span>{data[params.id - 1].website}</span>
        </div>
        <hr></hr>
        <span style={{ textAlign: "center" }}>
          <Link to={"/Candidate"} className="button-8">
            Back To Candidate
          </Link>
        </span>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CandidatesDetail);
