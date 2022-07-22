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

export function convertUnixTimestapToDate(unixTimestamp = null) {
  if (unixTimestamp !== null) {
    const date = new Date(unixTimestamp * 1000);
    const dayname = DAYNAMES[date.getDay()];
    const daynumber = date.getDate();
    const month = MONTHS[date.getMonth()];
    return `${dayname} ${daynumber}, ${month.toLowerCase()}`;
  }
  return;
}

export function convertUnixTimestapToTime(unixTimestamp = null, country = "") {
  if (unixTimestamp !== null) {
    const date = new Date(unixTimestamp * 1000);
    const hours = country === "GB" ? date.getHours() - 1 : date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes} ${hours >= 12 ? "p.m." : "a.m."}`;
  }
  return;
}

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
    return arrayData.find((item) => item.name === cityName);
  }
}

export function filterCities(arrayData = [], cityName = "") {
  if (!!arrayData.length && !!cityName.length) {
    return arrayData.filter((item) => item.name !== cityName);
  }
}

export function getNextDay(list = [], today = "") {
  let days = list.map((item) => {
    let splitDateTime = item.dt_txt.split(" ");
    let splitToday = today.split(" ");
    let currentItemDay = new Date(splitDateTime[0]);
    let currentToday = new Date(splitToday[0]);
    if (
      currentItemDay > currentToday &&
      currentItemDay <=
        new Date(currentItemDay.setDate(currentToday.getDate() + 1))
    ) {
      return item;
    }
  });

  let temperatures = days.map((el) => el.main.temp);
  let icon = days[4]?.weather[0]?.icon;

  let d = new Date(days[0].dt_txt.split(" ")[0]);

  const dayObj = {
    name: DAYNAMES[d.getDay()],
    averageTemp: temperatures.reduce((a, b) => a + b, 0) / temperatures.length,
    icon: icon,
    day: d,
  };

  return dayObj;
}
