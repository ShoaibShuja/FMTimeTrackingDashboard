let dataFromJson;

fetch("./data.json")
.then(res => res.json())
.then(data => dataFromJson = data);

const allPeriods = document.querySelectorAll(".period");
const profileTypes = document.querySelectorAll(".profile__type");

/* Profile TimeFrames */
let workTime = document.getElementById("time__work");
let playTime = document.getElementById("time__play");
let socialTime = document.getElementById("time__social");
let exerciseTime = document.getElementById("time__exercise");
let studyTime = document.getElementById("time__study");
let selfCareTime = document.getElementById("time__self-care");

/* Profile PerviousTime */
let workPrev = document.getElementById("prev__work");
let playPrev = document.getElementById("prev__play");
let socialPrev = document.getElementById("prev__social");
let exercisePrev = document.getElementById("prev__exercise");
let studyPrev = document.getElementById("prev__study");
let selfCarePrev = document.getElementById("prev__self-care");


allPeriods.forEach((period) => {
  period.addEventListener("click", () => {
    allPeriods.forEach(period => period.classList.remove("active"));

    period.classList.add("active");

    if (period.classList.contains("active") && period.innerHTML == "Daily"){
      return fetchTimeDaily(dataFromJson);
    } else if (period.classList.contains("active") && period.innerHTML == "Weekly"){
      return fetchTimeWeekly(dataFromJson);
    } else if (period.classList.contains("active") && period.innerHTML == "Monthly"){
      return fetchTimeMonthly(dataFromJson);
    }
  })
});

const fetchTimeDaily = (dataCollection) => {
  dataCollection.forEach(data => {
    if (data.title == "Work"){
      workTime.innerHTML = data.timeframes.daily.current + "hrs";
      workPrev.innerHTML = 'Last Day - ' + data.timeframes.daily.previous + "hrs";
    } else if (data.title == "Play"){
      playTime.innerHTML = data.timeframes.daily.current + "hrs";
      playPrev.innerHTML = 'Last Day - ' + data.timeframes.daily.previous + "hrs";
    } else if (data.title == "Social"){
      socialTime.innerHTML = data.timeframes.daily.current + "hrs";
      socialPrev.innerHTML = 'Last Day - ' + data.timeframes.daily.previous + "hrs";
    } else if (data.title == "Exercise"){
      exerciseTime.innerHTML = data.timeframes.daily.current + "hrs";
      exercisePrev.innerHTML = 'Last Day - ' + data.timeframes.daily.previous + "hrs";
    } else if (data.title == "Study"){
      studyTime.innerHTML = data.timeframes.daily.current + "hrs";
      studyPrev.innerHTML = 'Last Day - ' + data.timeframes.daily.previous + "hrs";
    } else if (data.title == "Self Care"){
      selfCareTime.innerHTML = data.timeframes.daily.current + "hrs";
      selfCarePrev.innerHTML = 'Last Day - ' + data.timeframes.daily.previous + "hrs";
    };
  })
};

const fetchTimeWeekly = (dataCollection) => {
  dataCollection.forEach(data => {
    if (data.title == "Work"){
      workTime.innerHTML = data.timeframes.weekly.current + "hrs";
      workPrev.innerHTML = 'Last Week - ' + data.timeframes.weekly.previous + "hrs";
    } else if (data.title == "Play"){
      playTime.innerHTML = data.timeframes.weekly.current + "hrs";
      playPrev.innerHTML = 'Last Week - ' + data.timeframes.weekly.previous + "hrs";
    } else if (data.title == "Social"){
      socialTime.innerHTML = data.timeframes.weekly.current + "hrs";
      socialPrev.innerHTML = 'Last Week - ' + data.timeframes.weekly.previous + "hrs";
    } else if (data.title == "Exercise"){
      exerciseTime.innerHTML = data.timeframes.weekly.current + "hrs";
      exercisePrev.innerHTML = 'Last Week - ' + data.timeframes.weekly.previous + "hrs";
    } else if (data.title == "Study"){
      studyTime.innerHTML = data.timeframes.weekly.current + "hrs";
      studyPrev.innerHTML = 'Last Week - ' + data.timeframes.weekly.previous + "hrs";
    } else if (data.title == "Self Care"){
      selfCareTime.innerHTML = data.timeframes.weekly.current + "hrs";
      selfCarePrev.innerHTML = 'Last Week - ' + data.timeframes.weekly.previous + "hrs";
    };
  })
};

const fetchTimeMonthly = (dataCollection) => {
  dataCollection.forEach(data => {
    if (data.title == "Work"){
      workTime.innerHTML = data.timeframes.monthly.current + "hrs";
      workPrev.innerHTML = 'Last Month - ' + data.timeframes.monthly.previous + "hrs";
    } else if (data.title == "Play"){
      playTime.innerHTML = data.timeframes.monthly.current + "hrs";
      playPrev.innerHTML = 'Last Month - ' + data.timeframes.monthly.previous + "hrs";
    } else if (data.title == "Social"){
      socialTime.innerHTML = data.timeframes.monthly.current + "hrs";
      socialPrev.innerHTML = 'Last Month - ' + data.timeframes.monthly.previous + "hrs";
    } else if (data.title == "Exercise"){
      exerciseTime.innerHTML = data.timeframes.monthly.current + "hrs";
      exercisePrev.innerHTML = 'Last Month - ' + data.timeframes.monthly.previous + "hrs";
    } else if (data.title == "Study"){
      studyTime.innerHTML = data.timeframes.monthly.current + "hrs";
      studyPrev.innerHTML = 'Last Month - ' + data.timeframes.monthly.previous + "hrs";
    } else if (data.title == "Self Care"){
      selfCareTime.innerHTML = data.timeframes.monthly.current + "hrs";
      selfCarePrev.innerHTML = 'Last Month - ' + data.timeframes.monthly.previous + "hrs";
    };
  })
};

