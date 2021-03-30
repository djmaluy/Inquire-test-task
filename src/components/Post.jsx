import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Post = ({ post, onDeletePost }) => {
  return (
    <Card className="text-center mt-2">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
      </Card.Body>
      <div>
        <Link to={{ pathname: `/editPost`, state: { post } }}>
          <Button variant="success">Edit</Button>
        </Link>
        <Button variant="danger" onClick={() => onDeletePost(post.id)}>
          Remove
        </Button>
      </div>
    </Card>
  );
};
