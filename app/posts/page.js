import React from "react";
import getAllPosts from "../lib/getAllPosts";
import Link from "next/link";

export default async function AllPosts() {
  const allPost = await getAllPosts();

  return (
    <div>
      {allPost.map((post) => (
        <div key={post?._id}>
          <h1>
            <Link href={`/posts/${post?._id}`}> {post?.title}</Link>
          </h1>
        </div>
      ))}
    </div>
  );
}
