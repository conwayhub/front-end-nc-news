import React from "react";

const Error = props => {
  return props.error === undefined ? (
    <>
      <h3> ERROR 404!</h3>
      <p>
        Alas! It looks like we have a Page does not exist error on our hands!
      </p>
    </>
  ) : (
    <>
      <h3>ERROR {props.error.status} !</h3>

      <p>
        Alas, it looks like we have a {props.error.data.msg} situation on our
        hands!
      </p>
    </>
  );
};

export default Error;
