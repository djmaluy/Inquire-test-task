import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const EditPost = ({ updatePostHandler }) => {
  const history = useHistory();
  const { id, title, body } = useLocation().state.post;
  const [state, setState] = useState({ id, title, body });

  const editPost = async (e) => {
    e.preventDefault();
    await updatePostHandler(state);
    history.push("/");
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={(e) => editPost(e)} className="editForm">
        <h2>Update post</h2>
        <ul>
          <li>
            <label htmlFor="title">Title: </label>
            <input
              id="title"
              name="title"
              value={state.title}
              onChange={(e) => handleChange(e)}
            />
          </li>
          <li>
            <label htmlFor="body">Body: </label>
            <input
              id="body"
              type="text"
              name="body"
              value={state.body}
              onChange={(e) => handleChange(e)}
            />
          </li>
          <li>
            <button className="editButton">Update</button>
          </li>
        </ul>
      </form>
    </div>
  );
};
