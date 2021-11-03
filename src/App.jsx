import "./App.css";
import { CandidateTable } from "./components/CandidateTable";
import { Nav } from "./components/Nav";
import { SearchAndFilter } from "./components/SearchAndFilter";

function App() {
  return (
    <div className="App">
      <Nav />
      <SearchAndFilter />
      <div className="table-container">
        <CandidateTable />
      </div>
    </div>
  );
}

export default App;
