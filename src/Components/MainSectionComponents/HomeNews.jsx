import { useLoaderData } from "react-router-dom";
import SingleNews from "./SingleNews";


const HomeNews = () => {
    const {data:news} = useLoaderData()
    console.log(news)
    return (
        <div>
           <div>
            <h1 className="text-black" >Dragon News Home</h1>
            <h4 className="text-gray-400" >{news.length} News Found</h4>
           </div>
           <div>
            {
                news.map(singleNews=><SingleNews key={singleNews.id} singleNews={singleNews}  ></SingleNews>)
            }
           </div>
        </div>
    );
};

export default HomeNews;