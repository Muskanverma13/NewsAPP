import React, { useEffect,useState } from 'react';
import Spinner from '../Spinner';
import Index from './Index';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = ( props ) => {
 const [articles, setArticles] = useState([])
 const [loading, setLoading] = useState(true)
 const [page, setPage] = useState(1)
 const [totalResults, setTotalResults] = useState(0)
     // document.title = `${this.capitalizeFirstLetter(this.props.category)}-BuzzBlitz`;

  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  
const updatedNews =  async  () =>{
  props.setProgress(10);
  setLoading(true)
  const url = `https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=830e48af626b4ae7971f8e372c3baefc`;
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  setArticles(parsedData.articles)
  setLoading(false)
  setTotalResults(parsedData.totalResults)
  props.setProgress(100);
}
  useEffect(() => {
    updatedNews();
  },[])

  //  const handlePrevclick = async () => { 
  //   setPage(page-1)
  //   updatedNews();

  // };

  // const  handleNextclick = async () => {
  // setPage(page+1)
  // this.updatedNews();
  // };
   const fetchMoreData =  async () => {
    setPage(page+1)
    setLoading(true)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=830e48af626b4ae7971f8e372c3baefc&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setLoading(false)
    setTotalResults(parsedData.totalResults)
   

  };
  
    return (
  
      <div className='container my-3'>
        <h2 style= {{marginTop:'90px'}}>BuzzBlitz - Top Headlines from {capitalizeFirstLetter(props.category)} category</h2>

        {/* {this.state.loading &&<Spinner/>}
        {this.state.loading && <h4>Loading...</h4>} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Index title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author}  date={element.publishedAt}/>
              </div>
             
            );
          })}
         
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-light" onClick={this.handlePrevclick}>Previous</button>
          <button  disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-light" onClick={this.handleNextclick}>Next</button>
        </div> */}
      </div>
    );
  
}
News.defaultProps ={
  country: 'in',
  pageSize:8,
  category : 'general'

}
News.propTypes={
  country: PropTypes.string,
  pageSize:PropTypes.number,
  category : PropTypes.string
  
}
export default News;
