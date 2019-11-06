function addLeadingZero(str) {
  if (parseInt(str) <= 9) {
    return '0' + str;
  }
  else {
    return str;
  }
}

// let startDate = new Date('1996-06-16');
// let startDate = new Date('2018-12-30');
// let endDate = new Date();

function getDateArray(start, end) {
  let arr = [];
  let date = new Date(start);
  end.setDate(end.getDate() + 1)

  while (date <= end) {
    let currDate = new Date(date);
    let year = currDate.getFullYear().toString();
    let month = addLeadingZero( (currDate.getMonth() + 1).toString() );
    let day = addLeadingZero( currDate.getDate().toString() );
    let fullStr = `${year}-${month}-${day}`;
    // arr.push( new Date(date) );
    // arr.push(year);
    arr.push(fullStr);
    date.setDate(date.getDate() + 1);
  }

  return arr;
}

export default getDateArray;

// const fullArray = getDateArray(startDate, endDate);
// console.log(fullArray);