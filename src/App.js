import React, { useState, useEffect } from "react";
import "./App.css";
import { PostsList } from "./components/PostsList";
import api from "./api/api";
import { Redirect, Route, Switch } from "react-router";
import { PageNotFound } from "./components/PageNotFound";
import { AddPost } from "./components/addPost";
import { EditPost } from "./components/EditPost";
import { SpecificPost } from "./components/SpecificPost";

function App() {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [comments, setComments] = useState([]);

  //  === fetching posts from api
  const getPosts = async () => {
    try {
      setIsFetching(true);
      const response = await fetch("https://bloggy-api.herokuapp.com/posts");
      const result = await response.json();
      setIsFetching(false);
      setPosts(result);
    } catch (e) {
      alert(e);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  //  == adding post
  const addPostHandler = async (title, body) => {
    const request = {
      title,
      body,
    };
    const response = await api.post("/posts", request);
    setPosts([...posts, response.data]);
  };

  //  updating post
  const updatePostHandler = async (post) => {
    const response = await api.put(`/posts/${post.id}`, post);
    setPosts(
      posts.map((post) => {
        return post.id === response.data.id ? { ...response.data } : post;
      })
    );
  };

  // === deleting post
  const onDeletePost = async (id) => {
    await api.delete(`/posts/${id}`).then((res) => {
      const del = posts.filter((post) => id !== post.id);
      setPosts(del);
    });
    getPosts();
  };
  //==== getting comments
  const getSpecificPosts = async () => {
    try {
      setIsFetching(true);
      const response = await fetch(`https://bloggy-api.herokuapp.com/comments`);
      const result = await response.json();
      setIsFetching(false);
      setComments(result);
    } catch (e) {
      alert(e);
    }
  };
  useEffect(() => {
    getSpecificPosts();
  }, []);
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Redirect to="/postList" />
        </Route>
        <Route
          path="/postList/:id?"
          render={(props) => (
            <PostsList
              {...props}
              posts={posts}
              isFetching={isFetching}
              onDeletePost={onDeletePost}
            />
          )}
        />
        <Route
          path="/addPost"
          render={(props) => (
            <AddPost {...props} addPostHandler={addPostHandler} />
          )}
        />
        <Route
          path="/editPost"
          render={(props) => (
            <EditPost {...props} updatePostHandler={updatePostHandler} />
          )}
        />
        <Route
          path="/specificPosts"
          render={(props) => (
            <SpecificPost
              {...props}
              comments={comments}
              isFetching={isFetching}
            />
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
