import { useState, useEffect } from "react";
import { ProgressBar } from "react-loader-spinner";
export const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);

  const query = `{
    user(username: "Kr794") {
          publication {
            posts(page:0){
              slug
              title
              brief
              coverImage
            }
          }
  }
  }`;

  const getBlogData = async () => {
    try {
      const response = await fetch("https://api.hashnode.com", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const apiResponse = await response.json();
      setBlogData(apiResponse.data.user.publication.posts);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBlogData();
  }, []);
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "10rem" }}>Blogs</h1>
      <ul className="blog-list">
        {isLoading ? (
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#000"
            barColor="#93e5ab"
          />
        ) : (
          blogData.map(({ brief, coverImage, slug, title }, index) => (
            <li key={index} className="blog-post">
              <h2>{title}</h2>
              <section className="blog-content">
                <img src={coverImage} alt={title}></img>
                <p>{brief}</p>
              </section>
              <a
                target="blank"
                className="blog-link"
                href={`https://amankumr.hashnode.dev/${slug}`}
              >
                Read more
              </a>
            </li>
          ))
        )}
      </ul>
    </>
  );
};
