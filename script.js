const chartDiv = document.getElementById("chart-div");
const barsDiv = document.getElementById("bars");
const amountDivs = document.getElementById("amounts");

fetch("data.json").then((response) => {
    response.json().then((data) =>{
        data.values.map(value => {
            positionValues = value.amount + 8
            amountDivs.innerHTML += `<div class="amount" style="position:relative; bottom:${positionValues}mm">$${value.amount}</div>`
            barsDiv.innerHTML += `
            <div class="bar" style="height: ${value.amount}mm"><div class="day">${value.day}</div></div>`;     
        });

        let bars = document.querySelectorAll(".bar");
        let amounts = document.querySelectorAll(".amount");
        let days = document.querySelectorAll(".day");
        let arrayWeekDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        let today = new Date().getDay();
        let currentDay = arrayWeekDays[today];

        days.forEach(day => {
            if(day.innerHTML == currentDay){
                day.parentElement.classList.add("cyan-div")
            };
        });
         
        bars.forEach(bar => {       
            bar.addEventListener("mouseover", event => {
                amounts.forEach(amountNumber => {
                    if(amountNumber.innerHTML.replace("$", "") == bar.style.height.replace("mm", "")){
                        amountNumber.style.visibility = "visible";
                    }
                    else{
                        amountNumber.style.visibility = "hidden";
                    };
                });
            });
        });
    });
});