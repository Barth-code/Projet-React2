import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import axios from "axios";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  const getData = () => {
    axios
      .get("http://localhost:3004/articles")
      .then((res) => setBlogData(res.data));
  };
  useEffect(() => getData(), []);

  const haandleSubmit = (e) => {
    e.preventDefault();
    if (content.length < 140) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="blog-container">
      <Logo />;
      <Navigation />
      <h1>Blog</h1>
      <form onSubmit={(e) => haandleSubmit(e)}>
        <input type="text" placeholder="Nom" />
        <textarea
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          placeholder="Message"
          id=""
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        {error && <p>Veillez écrire un minimum de 140 caractère</p>}
        <input type="submit" value="Envoyer" />
      </form>
      <ul></ul>
    </div>
  );
};

export default Blog;
