import React from "react";
import PropTypes from "prop-types";

const ComponentWithProps = (props) => {
  return (
    <>
      <h1>{props.header}</h1>
      <p>{props.content}</p>
      <p data-testid="numberPara">This number is: {props.number}</p>
      <p>nonexistent is equal to: {props.nonexistent}</p>
    </>
  );
};
const propRequired = (ComponentWithProps.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
});

const defaultProps = (ComponentWithProps.defaultProps = {
  header: "Default Header",
  content: "Default Content",
  number: 0,
});
export default ComponentWithProps;
