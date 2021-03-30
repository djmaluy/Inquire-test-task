import React from "react";
import { Comments } from "./Comments";

export const SpecificPost = ({ comments, isFetching, ...props }) => {
  return (
    <div>
      <h2>Specific Posts</h2>
      <div>
        {isFetching ? (
          <div> Loading ... </div>
        ) : (
          <>
            {comments.map((comment) => {
              return <Comments comment={comment} key={comment.id} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};
