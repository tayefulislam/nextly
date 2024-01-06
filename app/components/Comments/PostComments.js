import React from "react";

export default async function PostComments({ promise }) {
  const comments = await promise;
  return (
    <div>
      <h1 className="text-xl font-semibold py-3">Comments</h1>
      <div className="mx-3">
        <ul>
          {comments?.map((comment) => (
            <li key={comment.id}>
              {comment.id}. {comment.body} .
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
