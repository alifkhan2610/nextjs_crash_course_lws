import getAllPosts from "@/lib/getAllPost";
import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComment";
import React from "react";

// Dynamic MetaData Start
export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}
// Dynamic MetaData Finished

export default async function PostPage({ params }) {
  const { id } = params;
  const post = await getPost(id);
  const comments = await getPostComments(id);
  console.log(comments);
  //   console.log(post);

  return (
    <>
      <div className="mt-6">
        <h2 className="font-bold text-2xl">{post.title}</h2>
        <p className="pt-5">{post.body}</p>
      </div>
      <hr />
      <div className="mt-10">
        <h1>Comments</h1>
        <ul>
          {comments.map((comment) => (
            <li className="mb-2" key={comment.id}>
              {comment.body}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}


export async function generateStaticParams(){
  const post = await getAllPosts();

  return post.map((post)=>({
    id:post.id.toString(),
  }));
}
