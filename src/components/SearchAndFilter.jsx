import React, { useEffect, useState } from "react";
import originalData from "../interviews.json";

export const SearchAndFilter = ({ setData }) => {
  const [searchInput, setSearchInput] = useState("");
  const [showArchive, setShowArchive] = useState(true);

  useEffect(() => {
    setData(
      originalData.filter((item) =>
        item.candidate.toLowerCase().includes(searchInput.toLowerCase().trim())
      )
    );

    if (!showArchive) {
      setData(originalData.filter((item) => !item.archived));
    }
  }, [setData, searchInput, showArchive]);

  return (
    <div className="search-filter-container">
      <div className="element-container">
        <input
          type="search"
          placeholder="Search"
          className="search"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        {searchInput === "" && (
          <span className="material-icons-outlined search-icon">search</span>
        )}
        <div className="archive">
          <label htmlFor="archive">Show archived</label>
          <input
            type="checkbox"
            id="archive"
            name="archive"
            checked={showArchive}
            onChange={() => setShowArchive((val) => !val)}
          />
        </div>
      </div>
    </div>
  );
};
