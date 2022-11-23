import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "../../cards/blog.card";
import AOS from "aos";
import CustomSlider from "../../elements/CustomSlider";
import Title from "../../elements/Title";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const fetchData = () => {
    fetch("https://dev.to/api/articles?username=nour_abdou")
      .then((response) => response.json())
      .then((data) => {
        // alert(`data ${data?.length}`)
        // console.log(data)
        return data;
      })
      .then((data) => {
        setBlogs(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderTitle = () => (
    <div className="row">
      <div className="col-12" data-aos="fade-down">
        <Title title="Blogs" />

        <p className="text-center">
          Recent Blogs on{" "}
          <a href="https://dev.to/" target="_blank" className="font-bold">
            Dev Community 👩🏻‍💻👨🏻‍💻
          </a>{" "}
        </p>
      </div>
    </div>
  );
  return (
    <section className="blog px-6" id="blog">
      <div className="container  pt-12">
        {renderTitle()}

        <div className="row">
          <CustomSlider
            childern={blogs.map((blog) => (
              <BlogCard blog={blog} />
            ))}
          />
        </div>
      </div>
    </section>
  );
}

export default Blog;
