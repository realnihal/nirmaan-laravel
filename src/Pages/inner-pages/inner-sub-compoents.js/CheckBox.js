import React from "react";

import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function CheckBox(props) {
  return (
    <div>
      <Form>
        <Form.Group controlId="formCheckbox">
          <Form.Check type="checkbox" label="Option 1" id="checkbox1" />
          <Form.Check type="checkbox" label="Option 2" id="checkbox2" />
          <Form.Check type="checkbox" label="Option 3" id="checkbox3" />
        </Form.Group>
      </Form>
    </div>
  );
}

export default CheckBox;
