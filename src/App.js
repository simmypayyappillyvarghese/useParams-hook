import "./styles.css";
import * as React from "react";
import {} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

/* Instructions 
  Create two Routes so that the given navigation works.

  When the user navigates to /Ram, they should see "Student: Ram".
  When the user navigates to /ids/1, they should see "Ids : 1".
*/

const Employee = () => {
  const params = useParams();
  return (
    <div className="display">
      <h3>Employee: {params.name}</h3>
    </div>
  );
};

const Ids = () => {
  const params = useParams();
  return (
    <div className="display">
      <h3>Ids : {params.id}</h3>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <h2>Employee</h2>
      <ul>
        <li>
          <Link to="/ram">Ram</Link>
        </li>
        <li>
          <Link to="/rakshman">Lakshman</Link>
        </li>
        <li>
          <Link to="/bheem">Bheem</Link>
        </li>
      </ul>
      <h2>Id's</h2>
      <ul>
        <li>
          <Link to="/Ids/1">1</Link>
        </li>
        <li>
          <Link to="/Ids/2">2</Link>
        </li>
        <li>
          <Link to="/Ids/3">3</Link>
        </li>
        <li>
          <Link to="/Ids/4">4</Link>
        </li>
      </ul>

      <hr />

      {/* Create Routes here */}
      <Routes>
        <Route path="/Ids/:id" element={<Ids />} />
        <Route path="/:name" element={<Employee />} />
      </Routes>
    </Router>
  );
}
