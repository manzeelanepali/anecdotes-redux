// import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { setFilter } from "../reducers/filterReducer";
import React from "react";

const Filter = (props) => {
  const handleChange = (event) => {
    props.setFilter(event.target.value);
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};
const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
