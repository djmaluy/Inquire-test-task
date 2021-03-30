import React from "react";
import { Link } from "react-router-dom";
import { Post } from "./Post";

export const PostsList = ({ posts, isFetching, onDeletePost }) => {
  return (
    <div>
      {isFetching ? (
        <div> Loading ... </div>
      ) : (
        <>
          <Link to={{ pathname: `/addPost` }}>
            <button className="editButton mt-4">Add post</button>
          </Link>

          {posts.map((post) => {
            return (
              <Post post={post} key={post.id} onDeletePost={onDeletePost} />
            );
          })}
        </>
      )}
    </div>
  );
};
