import React, { useState } from 'react';
import './searchResult.css';
import axios from 'axios'


function SearchResult({
    img,
    code,
 
    // description,
    // star,
    // price,
    // total,
}) {
    const [data, setData] = useState([])
    const clicked = ()=>{ 
        const options = {
            method: 'GET',
            url: 'https://tripadvisor1.p.rapidapi.com/airports/search',
            params: {query: 'New York', location: 'en_US'},
            headers: {
              'x-rapidapi-key': '9f05d26673mshb2c8499547bc2c5p1c9aafjsn197659763efe',
              'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com'
            }
          };
          axios.request(options).then(function (response) {
            console.log(response.data);
            setData(response.data)
            //redirect to searchresultpage
            //pass the data into context or Redirect and pass data
          }).catch(function (error) {
            console.error(error);
          });
    }

    return (
        <div className='searchResult'>
            <img src={img} alt="" />

           <button onClick = {clicked}> Click ME</button>

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                   {
                       data.map(airport=>{
                    return <h3>{airport.code}</h3>,
                        <h3>{airport.city_name}</h3>

                       })
                   }
                    
                   
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                     
                    </div>
                    <div className='searchResults__price'>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult