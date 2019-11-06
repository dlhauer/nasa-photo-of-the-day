import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';

function PhotoList() {

  const [photo, setPhoto] = useState('');
  const [date, setDate] = useState('2019-11-02');
  // setDate('2012-03-14');
  // console.log(date);

  useEffect( () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=XscPqNahxbapakq5OHKTCSm3Hdyt7IBVf7ZUljNO&date=${date}`)
      .then( response => {
        console.log(response.data);
        setPhoto(response.data);
        // const parsedDate = parseDate(photo.date);
      })
      .catch( error => console.log('Oops!', error));
  }, [])

  return (
     <div className='photos-container'>
       <h2>{photo.title}</h2>
       <h3>{photo.copyright}, {photo.date}</h3>
       <img src={photo.hdurl}/>
       <p>{photo.explanation}</p>
    </div>
  );
};


function parseDate(dateStr) {
  const newStr = dateStr.split('-').join('');

  console.log(newStr);
}









export default PhotoList;