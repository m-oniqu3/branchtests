import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  //testing state
  const [name, setName] = useState("");

  //another state
  const [first, setfirst] = useState("");

  useEffect(() => {
    fetch(" http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
      });
  }, []);

  return (
    <div className="home">
      {isPending && <div> Loading... </div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
