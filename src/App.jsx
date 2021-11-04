import "./App.css";
import { CandidateTable } from "./components/CandidateTable";
import { Nav } from "./components/Nav";
import { SearchAndFilter } from "./components/SearchAndFilter";
import data from "./interviews.json";
import { useState } from "react";

function App() {
  const [candidateData, setCandidateData] = useState(data);
  const [showArchive, setShowArchive] = useState(true);

  return (
    <div className="App">
      <Nav />
      <SearchAndFilter
        candidateData={candidateData}
        setData={setCandidateData}
        showArchive={showArchive}
        setShowArchive={setShowArchive}
      />
      <div className="table-container">
        <CandidateTable
          data={candidateData}
          setData={setCandidateData}
          showArchive={showArchive}
        />
      </div>
    </div>
  );
}

export default App;
