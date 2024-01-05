import Link from "next/link";
import React from "react";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "যুক্তরাষ্ট্র রাজনৈতিকভাবে তাদের মানবাধিকার প্রয়োগ করে",
    },
    {
      id: 2,
      title: "অবরোধের সমর্থনে চট্টগ্রাম বিশ্ববিদ্যালয়ে ছাত্রদলের ঝটিকা মিছিল",
    },
  ];

  return (
    <div>
      <h1 className="text-center">All Blogs</h1>

      <ul>
        {blogs.map((blog) => (
          <li className="" key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
