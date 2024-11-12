 // http://api.weatherapi.com/v1/current.json?key=9bc874ee95794e5890573659241011&q=rohtak&aqi=no


const temperaturefield = document.querySelector(".temp");
const locationfield = document.querySelector(".time_location ");
const dateandTimefield = document.querySelector(".time_location ");
const conditionfield = document.querySelector(".condition ");
const searchfield = document.querySelector(".search_area");
const form = document.querySelector("form");

form.addEventListener("submit", searchforlocation);

let target = "rohtak";


const fetchResults = async (targetlocation) => {
  let url = `http://api.weatherapi.com/v1/current.json?key=9bc874ee95794e5890573659241011&q=${targetlocation}&aqi=no`;

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  let locationName = data.location.name;
  let time = data.location.localtime;
  let temp = data.current.temp_c;
  let condition = data.current.condition.text;

  updateDetails(temp, locationName, time, condition);
};


function updateDetails(temp, locationName, time, condition) {
  let splitDate = time.split(" ")[0]; 
  let splitTime = time.split(" ")[1]; 

  let currentDay = getDayName(new Date(splitDate).getDay()); 

 
  temperaturefield.innerText = `${temp}°C`;
  locationfield.innerText = locationName;
  dateandTimefield.innerText = `${splitDate} ${currentDay} ${splitTime}`;
  conditionfield.innerText = condition;
}


function searchforlocation(e) {
  e.preventDefault();

  target = searchfield.value;

  fetchResults(target);
}

fetchResults(target);


function getDayName(number) {
  switch (number) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "";
  }
}


