import "./App.css";
import { CandidateTable } from "./components/CandidateTable";
import { Nav } from "./components/Nav";
import { SearchAndFilter } from "./components/SearchAndFilter";
import data from "./interviews.json";
import { useState } from "react";

function App() {
  const [candidateData, setCandidateData] = useState(data);

  return (
    <div className="App">
      <Nav />
      <SearchAndFilter
        candidateData={candidateData}
        setData={setCandidateData}
      />
      <div className="table-container">
        <CandidateTable data={candidateData} setData={setCandidateData} />
      </div>
    </div>
  );
}

export default App;
