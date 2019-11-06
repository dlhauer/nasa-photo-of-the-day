import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';
import Date from './Date';

function PhotoList() {

  const [photo, setPhoto] = useState('');
  const [date, setDate] = useState('2019-11-01');
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
       <h3>{photo.copyright}, {parseDate(date)}</h3>
       <div className='button-container'>
         <button className='previous change-img-button'>Previous day's photo</button>
         <button className='next change-img-button'>Next day's photo</button>
       </div>
       <img src={photo.hdurl}/>
       <p>{photo.explanation}</p>
    </div>
  );
};


function parseDate(dateStr) {
  const newStr = dateStr.split('-').join('');
  return newStr;

  //TO DO!

//   console.log(newStr);
}









export default PhotoList;