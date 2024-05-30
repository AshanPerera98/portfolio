import { useEffect, useState } from "react";
import "./BlogCard.css";

function BlogCard(data) {
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    const urlRegex = /(https?:\/\/[^ ]+)(?=")/;
    const match = data.blog.content.match(urlRegex);
    setImgUrl(match[0]);
  }, []);

  return (
    <div className="column is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd">
      <div className="blog-card has-text-left">
        <img src={imgUrl} className="blog-image" />
        <div className="blog-content">
          <p className="blog-title">{data.blog.title}</p>
          <div className="tags blog-tag-group">
            {data.blog.categories.map((tag, index) => {
              return (
                <span className="tag blog-tag" key={index}>
                  {tag}
                </span>
              );
            })}
          </div>
          <a className="read-link" href={data.blog.link} target="_blank">
            Read article
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
