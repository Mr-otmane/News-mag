import { useEffect } from "react";


export const NewsBoard = () => {
    const [articles,setArticles] = useState([]);

    useEffect(()=>{
        let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=24bf473e4e654f85a4df74c7499235a4`;
    })

  return (
    <div>
        <h2 className="text-center">Latest <span className="badge bg-danger"> News</span></h2>
    </div>
  )
}
