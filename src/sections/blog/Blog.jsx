import axios from "axios";
import "./Blog.css";
import { useEffect, useState } from "react";
import SectionContainer from "../../components/section_container/SectionContainer";
import BlogCard from "../../components/blog_card/BlogCard";

function Blog() {
  const [blogObj, setBlogObj] = useState([]);
  useEffect(() => {
    var mediumHeaders = new Headers();
    mediumHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "get",
      headers: mediumHeaders,
      redirect: "follow",
    };

    axios(
      {
        method: "get",
        url: "https://v1.nocodeapi.com/ashanperera/medium/emTrsJayPOQoDmCP",
      },
      requestOptions
    )
      .then(({ data }) => {
        setBlogObj(data);
      })
      .catch((error) =>
        console.error("Error while fetching medium :", { error })
      );
  }, []);

  return (
    <>
      <SectionContainer title="Blog" id="blog">
        <div className="container blog-block">
          <div className="columns is-variable is-6 is-multiline">
            {blogObj.map((blog, index) => {
              return <BlogCard key={index} blog={blog} />;
            })}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

export default Blog;
