import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/layouts/Header.jsx'
import Footer from './components/layouts/Footer.jsx';
import Articles from './components/Articles.jsx';
import { Route } from "react-router-dom";
import axios from 'axios';
import AddArticle from './components/AddArticle.jsx';
import Navbar from './components/layouts/Navbar.jsx';
import Article from './components/Article.jsx';
import EditArticle from "./components/EditArticle.jsx";

const App = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://writr-backend.herokuapp.com/articles")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <Route exact path='/' render={() => <Articles posts={posts} />} />
      <Route path='/add-article' render={() => <AddArticle />} />
      <Route
        path='/article/:id'
        render={(props) => <Article {...props} posts={posts} />}
      />
      <Route
        path='/update/:id'
        render={(props) => <EditArticle {...props} posts={posts} />}
      />
      <Footer />
    </>
  );
}

export default App;
