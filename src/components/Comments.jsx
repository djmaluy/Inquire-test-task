import React from "react";
import { Card } from "react-bootstrap";

export const Comments = ({ comment }) => {
  console.log("id", comment.id);
  return (
    <Card className="text-center mt-2">
      <Card.Body>
        <Card.Title>{comment.title}</Card.Title>
        <Card.Text>{comment.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};
