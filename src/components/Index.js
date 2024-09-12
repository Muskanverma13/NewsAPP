import React from 'react'

const Index =  (props) => {
 
     let {title , description,imageUrl, newsUrl,author,date} =props;
    return (
      <div className='my-3'>
        <div className="card" >

  <img src={!imageUrl?"https://media.istockphoto.com/id/1356470839/vector/vector-speech-bubble-latest-news-megaphone-label.jpg?s=612x612&w=0&k=20&c=xKcTU6EraPpR17NhLrz49p49scd3eWY9ZYUqAU3a_MU":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>

    <a href={newsUrl}className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default Index