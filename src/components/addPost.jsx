import React, { useState } from "react";
import { useHistory } from "react-router";

export const useFormField = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const onChange = React.useCallback((e) => setValue(e.target.value), []);
  return { value, onChange };
};

export const AddPost = ({ addPostHandler }) => {
  const history = useHistory();
  const titleInput = useFormField();
  const bodyInput = useFormField();

  const addProduct = async (e) => {
    e.preventDefault();
    if (titleInput.value === "" || bodyInput.value === "") {
      alert("ALl the fields are required!");
      return;
    }
    await addPostHandler(titleInput.value, bodyInput.value);
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={addProduct} className="editForm">
        <h2>Add post</h2>
        <ul>
          <li>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" {...titleInput} />
          </li>
          <li>
            <label htmlFor="body">Body:</label>
            <input type="text" name="body" {...bodyInput} />
          </li>

          <li>
            <button className="editButton">Save</button>
          </li>
        </ul>
      </form>
    </div>
  );
};
