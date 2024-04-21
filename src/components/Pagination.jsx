import React, {useState, useEffect} from "react";
// import App from "../App";
// import { Repos } from "./components/Repos";

function Pagination({ reposPerPage, totalRepos, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (number) => {
    setActivePage(number);
    paginate(number);
  };

  return (
    <div>
      <nav>
        <ul className="pagination">
          {
            pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <a href="!#"
                  //  className="page-link"
                   className={`page-link ${activePage === number ? 'active' : ''}`}
                   onClick={() => {
                    handlePageClick(number);
                    paginate(number);
                   }}
                >
                  {number}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
