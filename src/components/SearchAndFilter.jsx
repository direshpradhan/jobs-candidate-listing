import React, { useState } from "react";

export const SearchAndFilter = () => {
  const [searchInput, setSearchInput] = useState("");
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
          <input type="checkbox" id="archive" name="archive" />
        </div>
      </div>
    </div>
  );
};
