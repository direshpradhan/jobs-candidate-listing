import "./App.css";
import { CandidateTable } from "./components/CandidateTable";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="table-container">
        <CandidateTable />
      </div>
    </div>
  );
}

export default App;
