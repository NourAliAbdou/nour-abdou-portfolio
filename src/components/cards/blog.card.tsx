import React from "react";
import { useMediaQuery } from "react-responsive";
//  import "aos/dist/aos.css";
import devlogo from "../../assets/images/dev-to.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IBlogData } from "src/types/app.type";

type Props = {
  blog: IBlogData;
};

function BlogCard(props: Props) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // alert(blog.title)
  const { blog } = props;
  console.log("blog.cover_image", blog.cover_image);
  return (
    <div className="hover:animate-wiggle" data-aos="fade-up" data-aos-duration="1000">
      <div className="bg-white max-w-sm rounded overflow-hidden drop-shadow-2xl mt-20 mx-3 min-h-max">
        {/* {blog.cover_image ? (
          <img
            src={blog.cover_image}
            className="card-img-top"
            alt={blog.title}
          />
        ) : (
          <div className="card-img">
            <p className="card-title">
            <a href={blog.url} target="_blank">
              {blog.title}
            </a>
          </p>
          </div>
        )} */}
        <div className="card-body">
          <ul className="blog-logo-date mb-0 pb-1">
            <li>
              <p>
                <i className="uil uil-calendar-alt"></i>{" "}
                {blog.readable_publish_date}
              </p>
            </li>
            <li>
              <img src={devlogo} className="blog-logo" />
            </li>
          </ul>
          <hr />
          <p className="card-title mx-1.5 whitespace-normal pt-3  ">
            <a
              href={blog.url}
              target="_blank"
              className="font-weightsemibold hover:text-main-col"
            >
              {blog.title}
            </a>
          </p>
          <p className="whitespace-normal mx-1.5 text-sm text-body-text">
            {blog.description}
          </p>
          <div className="ml-1.5 mt-3 pt-0.5 border-1 border-black w-fit py-1 px-3 rounded-md">
          <a
            href={blog.url}
            target="_blank"
            className="text-sm  "
          >
            <i className="uil uil-link "></i> Read More
          </a>
          </div>
          <div className="flex flex-row flex-wrap overflow-hidden pb-2 pt-4 ">
            {blog.tag_list?.map((tag) => (
              <span className="inline-block bg-gray-200 overflow-hidden rounded-full px-1.5 py-0.5 text-xs text-gray-600 mr-2 mb-2">
                {`#${tag}`}
              </span>
            ))}
          </div>
          <div className="blog-desc">
            <ul className="d-flex">
              <li className="pl-3">
                <i className="uil uil-heart-alt"></i>{" "}
                {blog.public_reactions_count}
              </li>
              <li>
                <i className="uil uil-comment-alt"></i> {blog.comments_count}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
