import axios from "axios";
import "./Blog.css";
import { useEffect, useState } from "react";
import SectionContainer from "../../components/section_container/SectionContainer";
import BlogCard from "../../components/blog_card/BlogCard";

function Blog() {
  const [blogObj, setBlogObj] = useState([]);

  // ------------ nocode API intergration removed becuase of reques limit ---------------
  // useEffect(() => {
  //   var mediumHeaders = new Headers();
  //   mediumHeaders.append("Content-Type", "application/json");
  //   var requestOptions = {
  //     method: "get",
  //     headers: mediumHeaders,
  //     redirect: "follow",
  //   };

  //   axios(
  //     {
  //       method: "get",
  //       url: "https://v1.nocodeapi.com/ashanperera/medium/emTrsJayPOQoDmCP",
  //     },
  //     requestOptions
  //   )
  //     .then(({ data }) => {
  //       setBlogObj(data);
  //     })
  //     .catch((error) =>
  //       console.error("Error while fetching medium :", { error })
  //     );
  // }, []);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      url: "https://api.rss2json.com/v1/api.json",
      dataType: "json",
      params: {
        rss_url: "https://medium.com/feed/@ashantiwankaperera",
        api_key: "rmztk8vhcbkfn1xu9wwk8ia5ywskx0acxkb6puve",
      },
    };

    axios
      .request(requestOptions)
      .then(({ data }) => {
        setBlogObj(data.items);
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
