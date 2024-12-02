import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";

const SingleNews = ({ singleNews }) => {
  const { name, published_date, img } = singleNews.author;
  const { thumbnail_url, title, details, rating, total_view,_id } = singleNews;

  return (
    <div>
      <div className="bg-[#F3F3F3] p-2 flex flex-col justify-between rounded-md">
        <div className="flex gap-2 border-b-4">
          <figure className="w-12 h-14">
            <img className="rounded-full" src={img} />
          </figure>
          <div>
            <p className="font-bold">{name}</p>
            <p>{published_date}</p>
          </div>
          <div className="flex gap-2">
            <button>
              <CiBookmark></CiBookmark>
            </button>
            <button>
              <CiShare2></CiShare2>
            </button>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-4 mb-4">
           
         
            <img src={thumbnail_url} className="w-full h-[300px] mr-4" />{" "}
          
            <div className="flex-1">
          
           
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p>{details}</p>
              <div className="flex items-center mb-2">
              
                <span className="text-yellow-500 mr-2">{rating.number}</span>
                <span className="px-2 py-1 rounded-md bg-gray-200">
                  {rating.badge}
                </span>
              </div>
              <p className="text-gray-500 text-sm">Views: {total_view}</p>
            <Link to={`/news-details/${_id}`} >See More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
