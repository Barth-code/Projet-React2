import React from "react";

const Article = ({ article }) => {
  return (
    <div className="article">
      <div className="card-header">
        <h3>{article.author} </h3>
        <em>posté le {article.date} </em>
      </div>
      <p>{article.content}</p>
      <div className="btn-container">
        <button>Edit</button>
        <button>Supprimé</button>
      </div>
    </div>
  );
};

export default Article;
