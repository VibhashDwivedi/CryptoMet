import axios from 'axios';
import React, { useEffect, useState } from 'react'

const News = () => {

    const [news , setNews] = useState([])

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-KEY': '9mzZaQIhsngnEFfDT0h1rrCs3tjlU771vZJNiqIUApI='
        }
      };

      const url = `https://openapiv1.coinstats.app/news`

        const fetchData = async () => {
            const response = await axios.get(url, options)
            const data = response.data
            setNews(data.result)
            console.log(data.result)
        }

        useEffect(() => {
            fetchData()
        }
        , [])


      const displayNews = () => {
            return news.map((news) => {
                return (
                    <div className="col-lg-12 mt-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <div>
                            <h5 className="card-title">{news.title}</h5>
                            <a href={news.link} className="btn btn-primary mt-5">Read More</a>
                           <div> Source:  
                           <a href={news.sourceLink} className="btn btn-primary mt-1">{news.source}</a>
                            </div> 

                            </div>
                            {/* use image on left*/}
                            <img  src={news.imgUrl} alt="news-img" className="ms-auto"  width={270} height={160} />
                          
                            </div>
                        </div>
                    </div>
                </div>
                )
            })
        }








  return (

    <div className='container mt-4 '>

    <h1 className='text-center text-white'>CryptoNews</h1>
    <hr />

   <div className="row mt-3 ">
    {displayNews()}
   </div>
   
    </div>



  )
}

export default News