import React, { useState, useEffect } from 'react';
import './App.css';
import Repos from './components/Repos';
import Pagination from './components/Pagination';
import SearchFilterRepos from './components/SearchFilter';

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);


  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(3);

  
  const [filteredRepos, setFilteredRepos] = useState([]);

  useEffect(() => {
   
    const fetchRepos = async () => {
      setLoading(true);
      const result = await fetch('https://api.github.com/users/AllisonFavour/repos');
      const data = await result.json();
      setRepos(data);
      setFilteredRepos(data);
      setLoading(false);
    };

    fetchRepos();

  }, []);

  // get current posts
  const indexOfLastPost = currentPage * reposPerPage;
  const indexOfFirstPost = indexOfLastPost - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  return (
    <>
    <div className='container'>
      <h1 className='main-heading'>
        Allison Favour's Repositories
      </h1>
      <SearchFilterRepos repos={repos} setFilteredRepos={setFilteredRepos} />
      <Repos repos={currentRepos} loading={loading} />
      <Pagination 
      reposPerPage={reposPerPage} 
      totalRepos={filteredRepos.length} 
      paginate={paginate}/>
    </div>
    </>
  )
}

export default App
