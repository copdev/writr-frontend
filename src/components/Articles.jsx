import React, { useState } from "react";
import styled from "styled-components";
import spinner from "../../src/spinner.gif";
import Header from "./layouts/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import {device} from '../device'

const Articles = ({ posts }) => {
  const [article, setArticle] = useState([]);

  // DELETE ARTICLE
  const deleteArticle = (id) => {
    axios
      .delete(`https://writr-backend.herokuapp.com/articles/${id}`)
      .then((res) => alert(res.data));
    setArticle(article.filter((elem) => elem._id !== id));
  };
  console.log(posts);
  return (
    <ArticleContainer>
      <Header />
      <div className='container'>
        {!posts.length ? (
          <img src={spinner} alt='loading' />
        ) : (
          posts.map((article) => {
            return (
              <article key={article._id}>
                <Link
                  to={{
                    pathname: `/article/${article._id}`,
                  }}
                >
                  <img src={`/uploads/${article.articleImage}`} alt='...' />
                </Link>
                <div className='content'>
                  <h2>{article.title}</h2>
                  <span className="author">{article.author}</span>
                  <div className='action'>
                    <Link to={`/update/${article._id}`}>
                      <i className='fas fa-edit edit'></i>
                    </Link>
                    <button
                      className='delete'
                      onClick={() => deleteArticle(article._id)}
                    >
                      <i className='fas fa-trash delete'></i>
                    </button>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>
    </ArticleContainer>
  );
};

export default Articles;

const ArticleContainer = styled.footer`
  width: 100%;
  display: block;
  align-items: center;

  .container {
    margin: 0 auto;
    padding: 2rem 10rem;
  }

  img {
    width: 400px;
    height: 100%;
    object-fit: cover;
  }

  article {
    display: flex;
    margin-bottom: 2rem;
    background: #272727;
    color: #000;
    height: 300px;
  }

  h2 {
    font-size: 2rem;
    padding: 1rem;
    color: #f0f0f0;
  }

  .author {
    color: #797878;
    padding: 0.3rem;
    background: #cecdcd;
    margin-left: 1rem;
    border-radius: 5px;
  }

  .action {
    display: flex;
    margin-top: 1rem;
    margin-left: 1rem;
    align-items: center;
  }

  .edit {
    color: #bebdbd;
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  .delete {
    background: transparent;
    border: none;
    font-size: 1.5rem;
    color: #bebdbd;
    cursor: pointer;
  }

  @media ${device.tablet} {
    .container {
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    img {
      width: 100%;
      height: 100px;
      object-fit: cover;
    }

    article {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
      height: 200px;
    }

    h2 {
      font-size: 1rem;
      padding: 0.3rem;
    }

    .author {
      padding: 0.1rem;
      margin-left: 0.5rem;
      border-radius: 2px;
      font-size: 0.6rem;
    }

    .action {
      display: flex;
      margin-top: .3rem;
      margin-left: .5rem;
      align-items: center;
    }

    .edit {
      font-size: .8rem;
      margin-right: .7rem;
    }

    .delete {
      border: none;
      font-size: .8rem;
    }
  }
`;
