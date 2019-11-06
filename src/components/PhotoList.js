import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import PhotoCard from './PhotoCard';
// import Date from './Date';
import getDateArray from '../DateArray';

function PhotoList() {

  const dateArray = getDateArray('1995-06-17', new Date() );
  const today = dateArray[dateArray.length - 1];
  // console.log(dateArray);
  const [photo, setPhoto] = useState('');
  const [date, setDate] = useState(today);
  const [dateIndex, setDateIndex] = useState(dateArray.length - 1)

  useEffect( () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=XscPqNahxbapakq5OHKTCSm3Hdyt7IBVf7ZUljNO&date=${date}`)
      .then( response => {
        console.log(response);
        setPhoto(response.data);
        // const parsedDate = parseDate(photo.date);
      })
      .catch( error => console.log('Oops!', error));
  }, [date])

  return (
     <div className='photos-container'>
       <h2>{photo.title}</h2>
       <h3>{photo.copyright} {parseDate(date)}</h3>
       <div className='button-container'>
         <button className='previous change-img-button' 
                onClick={ () => {
                  setDateIndex(dateIndex - 1);
                  setDate(dateArray[dateIndex])
                }}>Previous day's photo</button>
         <button className='next change-img-button'>Next day's photo</button>
       </div>
       <img src={photo.url}/>
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