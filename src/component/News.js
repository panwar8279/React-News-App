import React, { useEffect,useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from "./Spinner-load"
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
const News =(props)=> {
const [articles,setArticles] = useState([])
const [loading,setLoading] = useState(true)
const [page,setPage] = useState(true)
const [totalResults,setTotalResults] = useState(0)
// document.title=`${capitalizeFirstLetter(props.category)} -NewsApp`;

  // ............ to capitalize first letter ...................

 const capitalizeFirstLetter=(string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);
 }

 //............ end here......................

//........................ Refactoring method 2 start here..................................

  const updateNews=async()=>{
    props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&from=2023-05-05&to=2023-05-05&sortBy=popularity&apiKey=${props.apikey}&pageSize=${props.pagesize}`;
    setLoading(true);
    let data= await fetch(url);
    props.setProgress(30);
    let parseData=await data.json();
    props.setProgress(70);
    console.log(parseData);
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }
  

  //...........................Method 1 start here...............................
  useEffect(()=>{
    updateNews();

  },[])
 const handleprevclick=async()=>{
  console.log("prev");
  setPage(page-1);
  updateNews();
 }
 const handlenextclick=async()=>{
  console.log("next");
  setPage(page+1);
  updateNews();
}
const fetchMoreData=async()=>{
  
  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page+1}&from=2023-05-05&to=2023-05-05&sortBy=popularity&apiKey=${props.apikey}&pageSize=${props.pagesize}`;
  setPage(page+1)
  let data= await fetch(url);
  let parseData=await data.json();
  console.log(parseData);
  setArticles(articles.concat(parseData.articles))
  setTotalResults(parseData.totalResults)
}
//....................Method 1 end here............................

//........................ Refactoring method 2 end here..................................
    return (
      <div>
        
        {/* <div className="container my-3"> */}
        <h1 className='text-center main-head'>News-Top  {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner/>}
        
        <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length!==totalResults}
        loader={<Spinner/>}
        >
        <div className="container">
        <div className="row my-3">
          {articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <Newsitem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80): " "} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            
            </div>
            
          })}
          
          </div>
        </div>
       </InfiniteScroll>
        </div>
      
      // </div>
    )
}
News.defaultProps={
  country:'in',
  pageSize:8,
  category:'general'
}
News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}
export default News
