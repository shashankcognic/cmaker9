import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pdf from "react-to-pdf";

import React from 'react';

const ref = React.createRef();

function App() {
  return (
    <>
    <Table striped bordered hover variant="danger" ref={ref}>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

<Pdf targetRef={ref} filename="code-example.pdf">
{({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
</Pdf>
</>
  );
}

export default App;