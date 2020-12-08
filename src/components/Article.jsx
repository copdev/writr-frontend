import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import spinner from '../../src/spinner.gif';
import { Link } from 'react-router-dom';
import {device} from '../device'

const Article = (props) => {

    const [title, setTitle] = useState('');
    const [article, setArticle] = useState('');
  const [author, setAuthor] = useState('');
  const [fileName, setFileName] = useState("");

    useEffect(() => {
        axios
          .get(
            `https://writr-backend.herokuapp.com/articles/${props.match.params.id}`
          )
          .then((res) => [
            setTitle(res.data.title),
            setArticle(res.data.article),
            setAuthor(res.data.author),
            setFileName(res.data.articleImage),
          ])
          .catch((err) => console.log(err));
        console.log(title, author)
    }, [props.match.params.id]);

    return (
      <ArticleContainer>
        <Link to='/'>
          <i className='fas fa-chevron-left back'></i>
        </Link>
        {!title ? (
          <img src={spinner} alt='loading' className="spinner" />
        ) : (
          <>
            <img src={`/uploads/${fileName}`} alt='...' />
            <div className='content'>
              <h2>{title}</h2>
              <p>{article}</p>
              <span className='author'>-{author}</span>
            </div>
          </>
        )}
      </ArticleContainer>
    );
}

export default Article;

const ArticleContainer = styled.div`
  h2 {
    font-size: 2rem;
    color: #f5a8a8;
    margin-bottom: 2rem;
    text-align: center;
  }

  p {
    margin-bottom: 2rem;
  }

  .author {
    font-size: 1.3rem;
    color: #616060;
    text-align: right;
  }

  img {
    width: 100%;
    height: 24rem;
    display: block;
    margin: auto;
    object-fit: cover;
  }

  .spinner {
    width: 15rem;
    height: 15rem;
    display: block;
    margin: auto;
    object-fit: cover;
  }

  .back {
    color: #fff;
    font-size: 2rem;
    position: absolute;
    margin-left: 7rem;
    margin-top: 5rem;
  }

  .content {
    padding: 2rem 10rem;
  }

  p {
    color: #616060;
  }

  @media ${device.tablet} {
    h2 {
      font-size: 1rem;
      margin-bottom: 1rem;
      text-align: center;
    }

    p {
      margin-bottom: 1rem;
    }

    .author {
      font-size: 1rem;
    }

    img {
      width: 100%;
      height: 15rem;
    }

    .content {
      padding: 1rem 1rem;
    }

    .back {
      font-size: 1.5rem;
      position: absolute;
      margin-left: 1rem;
      margin-top: 5rem;
    }
  }
`;
