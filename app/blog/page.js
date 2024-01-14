import Link from "next/link";
import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      Title: "Blog 1",
      Description: " Blog Description 1",
    },
    {
      id: 2,
      Title: "Blog 2",
      Description: " Blog Description 2",
    },
  ];
  return (
    <main className="mt-10">
      <ul>
        {blogs.map((blog) => (
          <li className="mb-5" key={blog.id}>
            <Link href={`/blog/${blog.id}`}> {blog.Title} </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Blog;

