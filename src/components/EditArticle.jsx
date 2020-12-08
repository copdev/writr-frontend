import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import {device} from '../device'

const EditArticle = (props) => {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
    const [author, setAuthor] = useState("");
  const [message, setMessage] = useState('');
  const [fileName, setFileName] = useState("");

  const uploadFile = (e) => {
    setFileName(e.target.files[0])
  };

  const submitArticle = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("article", article);
    formData.append("author", author);
    formData.append("articleImage", fileName);

    setTitle("");
    setArticle("");
    setAuthor("");

    axios
      .put(
        `https://writr-backend.herokuapp.com/articles/update/${props.match.params.id}`,
        formData
      )
      .then((res) => setMessage(res.data))
      .catch((err) => console.log(err)); 
    };
    
    useEffect(() => {
      axios
        .get(`/articles/${props.match.params.id}`)
        .then((res) => [
          setTitle(res.data.title),
          setArticle(res.data.article),
          setAuthor(res.data.author),
          setFileName(res.data.articleImage)
        ])
        .catch((err) => console.log(err));
    },);

  return (
    <FormContainer>
      <Link to='/'>
        <i className='fas fa-chevron-left back'></i>
      </Link>
      <h1>Edit Article</h1>
      <span className='message'>{message}</span>
      <form onSubmit={submitArticle} encType='multipart/form-data'>
        <div>
          <label htmlFor='author'>Author</label>
          <input
            value={author}
            type='text'
            placeholder='Author'
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='title'>Title</label>
          <input
            value={title}
            type='text'
            placeholder='Title'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='article'>Article</label>
          <textarea
            cols='30'
            rows='10'
            value={article}
            onChange={(e) => setArticle(e.target.value)}
          ></textarea>
        </div>
        <div className='image'>
          <label htmlFor='file'>Choose article image</label>
          <input
            type='file'
            filename='articleImage'
            name='articleImage'
            onChange={uploadFile}
          />
        </div>
        <button type='submit'>Publish</button>
      </form>
    </FormContainer>
  );
};

export default EditArticle;

const FormContainer = styled.header`
  height: 100%;
  padding: 5rem 7rem 0 7rem;
  transition: all 1s ease;

  form {
    width: 50%;
    height: 100%;
    background: #084ac2;
    margin: 0 auto 5rem auto;
    border-radius: 7px;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0.7rem 3rem;
  }

  input,
  textarea {
    padding: 0.5rem;
    outline: none;
    border: none;
  }

  button {
    padding: 0.4rem;
    background: #fff;
    color: #000;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    margin-left: 3rem;
    margin-bottom: 3rem;
  }

  button:hover {
    background: #152749;
    color: #fff;
  }

  h1 {
    text-align: center;
    color: #fff;
  }

  .back {
    color: #fff;
    font-size: 2rem;
    position: absolute;
    margin-left: 7rem;
    margin-top: 2rem;
  }

  span {
    color: #67e756;
    text-align: center;
  }

  @media ${device.tablet} {
    height: 100%;
    padding: 1rem 1rem 0 1rem;
    transition: all 1s ease;

    form {
      width: 95%;
      height: 100%;
      background: #084ac2;
      margin: 0 auto 1rem auto;
      border-radius: 7px;
    }

    div {
      width: 100%;
      padding: 0.5rem 1rem;
    }

    input,
    textarea {
      padding: 0.5rem;
      outline: none;
      border: none;
    }

    button {
      margin-left: 1rem;
      margin-bottom: 2rem;
      width: 90%;
    }

    button:hover {
      background: #152749;
      color: #fff;
    }

    .back {
      color: #fff;
      font-size: 1.5rem;
      margin-left: 0.5rem;
    }

    h1 {
      font-size: 1rem;
      margin-top: 3rem;
    }
  }
`;
