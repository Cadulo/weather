import { weather_data } from './data.js';

const selectbutton=document.getElementById("dropdownMenuButton")

const loadDayForecastData = (e,city=0) => {
    let identificadores=["city","date","maxtemperature","mintemperature","cloudiness","wind","rainfall"]
   
    for (let e of identificadores){
        document.getElementById(`${e}`).innerHTML = weather_data[city][`${e}`]
    }
    let lateId=["late_temperature","late_forecast","late_text","late_icon"]
    let nightId=["night_temperature","night_forecast","night_text","night_icon"]
    let dayKey=["temperature","forecast","text","icon"]

    for(let i=0; i<dayKey.length;i++){
        document.getElementById(`${lateId[i]}`).innerHTML = weather_data[city]["forecast_today"][0][`${dayKey[i]}`]
        document.getElementById(`${nightId[i]}`).innerHTML=weather_data[city]["forecast_today"][1][`${dayKey[i]}`]
    }
    
}

const loadWeekForecastData = (e,city=0) => {
  
    const week = document.querySelector(".list-group")
    week.innerHTML=" "
    let len=weather_data[0]["forecast_week"].length
    for (let i = 0; i < len; i++) {
        let text= weather_data[0]["forecast_week"][i]["text"]
        let date= weather_data[0]["forecast_week"][i]["date"]
        let icon= weather_data[0]["forecast_week"][i]["icon"]
        let min= weather_data[0]["forecast_week"][i]["temperature"]["min"]
        let max= weather_data[0]["forecast_week"][i]["temperature"]["max"]
        let prediction=`  <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
        <div class="d-flex flex-column">
          <h6 class="mb-1 text-dark font-weight-bold text-sm" >${text}</h6>
          <span class="text-xs" >${date}</span>
        </div>
        <div class="d-flex align-items-center ">
          <span class="font-weight-bold text-dark mx-2" id="maxweek">${max}</span> | <span class="text-dark mx-2" >${min}</span>
          <div class="ms-4"><i class="material-icons fs-2 me-1 rainy" >${icon}</i></div>
        </div>
      </li>
      `
      week.innerHTML+=prediction
    }	
}

window.addEventListener("DOMContentLoaded",loadDayForecastData)
document.getElementById("loadinfo").addEventListener("click",loadWeekForecastData)

selectbutton.addEventListener("click",(e)=>{
    console.log(selectbutton)
    let city=0
    if (e.target.value=="Guayaquil"){
        city=0
    }else if (e.target.value=="Ambato"){
        city=1
    }else if (e.target.value=="Tena"){
        city=2
}
    loadDayForecastData(null,city)
})
