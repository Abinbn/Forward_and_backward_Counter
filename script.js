// Forward counter start
function updateTimeCounter() {
  const currentTime = new Date();
  const eventDate = new Date('2023-11-08T14:00:00'); // Replace this with your event date and time

  const timeLeft = eventDate - currentTime;
  if (timeLeft <= 0) {
    document.getElementById('time-counter').innerHTML = "Event has already taken place!";
  } else {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const formattedTime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    document.getElementById('time-counter').innerHTML = "Time left for my 22nd birthday:<br>" + formattedTime;
  }
}

// Call the updateTimeCounter function every second to update the counter
setInterval(updateTimeCounter, 1000);
//Forward timer END

// Backward counter start
function getTimeCounterText(startDate) {
  var currentDate = new Date();
  var timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
  var yearDiff = Math.floor(timeDiff / (1000 * 3600 * 24 * 365));
  var monthDiff = Math.floor((timeDiff % (1000 * 3600 * 24 * 365)) / (1000 * 3600 * 24 * 30));
  var dayDiff = Math.floor((timeDiff % (1000 * 3600 * 24 * 30)) / (1000 * 3600 * 24));

  var yearText = yearDiff > 1 ? "years" : "year";
  var monthText = monthDiff > 1 ? "months" : "month";
  var dayText = dayDiff > 1 ? "days" : "day";

  return "It's been<br>" + dayDiff + " " + dayText + "<br>" + monthDiff + " " + monthText  + "<br>" /* "<br>and<br>" */ + yearDiff + " " + yearText + "<br>since my 21st birthday celebration ended.";
}

var startDate = new Date("2022-11-08"); // Replace with the actual start date of the program
var timeCounterElement = document.getElementById("timeCounter");
timeCounterElement.innerHTML = getTimeCounterText(startDate);

// Backward counter END
