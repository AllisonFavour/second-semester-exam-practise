import React from "react";

export default function Repos({ repos, loading }) {
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="repos">
      {repos.map((repo) => (
        <div className="repo" key={repo.id}>
          <h3>{repo.full_name}</h3>
          <p><a href="">{repo.url}</a></p>
        </div>
      ))}
    </div>
  );
}