import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import "../style/allcss.css";
import axios from 'axios';
import Loader from './loader';
const Moviedetail =()=> {
 const {movie_name} = useParams();
  const[moviedetail ,setdetail]=useState([]);
  const[loading,setloading]=useState(false);
 
  
  const getdetail=async()=>{
  
     try {
        setloading(true)
        const response =  await axios(`/api/movie/a`);
        const name = movie_name.toLowerCase();
        const data = await response.data;
        const detail = data.filter((e)=>e.movie_name.toLowerCase()===name)
       setdetail(detail);
       setloading(false);
     } catch (error) {
        console.log("error!!")
     }
}

   

  useEffect(() => {
    getdetail()
  }, [])
  
      
  

  return (

    <div style={{padding:'40px'}}>
      {loading&&<Loader/>}
  
      {moviedetail.map((e,id)=>{
       
           return(
            <div key={id} className='moviecard'>
                <img src={`${e.movie_thumbnail}`}></img>

                <div className='rightdetail'>
                <h1>{e.movie_name}</h1>

                <h3>Rating: {e.rating}</h3>
                <p>Duration: {e.duration}</p>
                <p>Language: {e.language}</p>
                <h3>Cast</h3>
                <p style={{display:"flex",gap:"10px"}}>
                    {e.cast.map((i,id)=>{
                       return(
                        <p key={id}>{i} </p>
                       )
                    })}
                </p>

                </div>

                
                
            </div>
           )
      })}
      
    </div>
  )
}

export default  Moviedetail
