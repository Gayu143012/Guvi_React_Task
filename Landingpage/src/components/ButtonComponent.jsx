import React from 'react';
import { Button } from 'reactstrap';

export default function ButtonComponent({ value }) {
  return (
    <Button color="primary"  id="submitButton" className=" btn-lg" >
      {value}
    </Button>
  );
}
