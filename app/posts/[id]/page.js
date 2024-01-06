import PostComments from "@/app/components/Comments/PostComments";
import getCommentsById from "@/app/lib/getCommentsById";
import getPostById from "@/app/lib/getPostById";
import Image from "next/image";
import React, { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPostById(id);

  return {
    title: post?.title,
    description: post?.body,
  };
}

export default async function PostDetails({ params }) {
  const { id } = params;

  const post = await getPostById(id);
  const commentsPromise = getCommentsById(id);

  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold">{post?.title}</h1>
        <p>{post?.body}</p>
      </div>

      <Suspense>
        <PostComments promise={commentsPromise} />
      </Suspense>
    </>
  );
}
