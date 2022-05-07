import React from "react";

function BlogList({ blogs, handleDelete }) {
  return (
    <div className="blog-list">
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.auto}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BlogList;
