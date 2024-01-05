import getPostById from "@/app/lib/getPostById";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPostById(id);

  return {
    title: post?.title,
    description: post?.description,
  };
}

export default async function PostDetails({ params }) {
  const { id } = params;

  const post = await getPostById(id);

  return (
    <div>
      <h1 className="text-2xl font-semibold">{post?.title}</h1>
      <p>{post?.description}</p>
    </div>
  );
}
