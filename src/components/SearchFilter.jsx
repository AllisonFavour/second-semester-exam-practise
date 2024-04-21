import React, {useState, useEffect} from "react";

export default function SearchFilterRepos({repos, setFilteredRepos }) {

  const [inputSearch, setInputSearch] = useState('');

  const handleSearchAndFilter = (e) => {
    const inputSearch = e.target.value;
    setInputSearch(inputSearch);

    const filtered = repos.filter((repo) => {
      return repo.html_url.toLowerCase().includes(inputSearch.toLowerCase());
    });
    setFilteredRepos(filtered);
    
  };

  return (
    <div>
      <input 
      className="input"
      type="text"
      placeholder="Search Repositories"
      value={inputSearch}
      onChange={handleSearchAndFilter}
       />
    </div>
  )

}