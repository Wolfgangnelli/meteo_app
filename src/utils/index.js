const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAYNAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function formattingDate(dateTimeString = "") {
  let splitDateTime = dateTimeString.split(" ");
  let splitDate = splitDateTime[0].split("-");
  let myDate = new Date(splitDate[0], splitDate[1] - 1, splitDate[2]);
  return (
    DAYNAMES[myDate.getDay()] +
    " " +
    myDate.getDate() +
    ", " +
    MONTHS[myDate.getMonth()].toLowerCase()
  );
}

export function formattingTime(dateTimeString = "") {
  let splitDateTime = dateTimeString.split(" ");
  let time = splitDateTime[1].replace(":", "");
  return time.substring(0, 2);
}

export function kelvinToCelsius(temperature) {
  return Math.round(temperature - 273.15);
}

export function findCity(arrayData = [], cityName = "") {
  if (!!arrayData.length && !!cityName.length) {
    return arrayData.find((item) => item.city.name === cityName);
  }
}
