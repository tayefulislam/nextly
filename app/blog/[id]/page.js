import React from "react";

export default function BlogPost({ params }) {
  const { id } = params;
  return <div>Blog {id}</div>;
}
