import React, {useState, useEffect} from 'react';
import axios from 'axios';
import getDateArray from '../DateArray';
import Button from './Button';
import Header from './Header';
import Description from './Description';
import Photo from './Photo';

function PhotoList() {

  const dateArray = getDateArray('1995-06-17', new Date() );
  const today = dateArray[dateArray.length - 1];
  const [photo, setPhoto] = useState('');
  const [date, setDate] = useState(today);
  const [dateIndex, setDateIndex] = useState(dateArray.length - 1)

  useEffect( () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=XscPqNahxbapakq5OHKTCSm3Hdyt7IBVf7ZUljNO&date=${date}`)
      .then( response => {
        setPhoto(response.data);
        return () => console.log('Helloooo!');
      })
      .catch( error => console.log('Oops!', error));
  }, [date])

  function changePic(amount) {
    setDateIndex(dateIndex + amount);
    setDate(dateArray[dateIndex]);
  }

  function randomPic() {
    const rand = Math.floor( Math.random() * dateArray.length );
    setDateIndex(rand);
    setDate(dateArray[dateIndex]);
  }

  return (
     <div className='photos-container'>
      <Header title={photo.title} 
              owner={photo.copyright}
              date={parseDate(date)}/>
       <div className='button-container'>
         <div className='prev-next-pair'>
          <Button function={changePic} amount='-1' text="Previous day's photo"/>
          { dateIndex !== dateArray.length - 1 && 
          <Button function={changePic} amount='1' text="Next day's photo"/>}
         </div>
         <Button type='crazy' function={randomPic} text='Random photo'/>
       </div>

       <Photo src={photo.url} alt={photo.title}/>
       <Description content={photo.explanation}/>
    </div>
  );
};


function parseDate(dateStr) {
  let [year, month, day] = dateStr.split('-');
  switch(month) {
    case '01':
      month = 'January';
      break;
    
    case '02':
      month = 'February';
      break;

    case '03':
      month = 'March';
      break;

    case '04':
      month = 'April';
      break;

    case '05':
      month = 'May';
      break;

    case '06':
      month = 'June';
      break;

    case '07':
      month = 'July';
      break;

    case '08':
      month = 'August';
      break;

    case '09':
      month = 'September';
      break;

    case '10':
      month = 'October';
      break;

    case '11':
      month = 'November';
      break;

    case '12':
      month = 'December';
  }
  
  day = removeLeadingZero(day);
  return `${day} ${month} ${year}`
}

function removeLeadingZero(str){
  if ( str[0] === '0' ) {
    return str.slice(1);
  }
  else {
    return str;
  }
}

export default PhotoList;