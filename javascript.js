let when = Array.from(document.querySelectorAll(".when p")),
daily=document.querySelectorAll(".daily"),
weekly=document.querySelectorAll(".weekly"),
monthly=document.querySelectorAll(".monthly"),
cntr=document.querySelectorAll(".cntr"),
hrsDaily=document.querySelectorAll(".daily .hr"),
hrsWeekly=document.querySelectorAll(".weekly .hr"),
hrsMOonthly=document.querySelectorAll(".monthly .hr"),
LastHrsDaily=document.querySelectorAll(".daily .hrs"),
LastHrsWeekly=document.querySelectorAll(".weekly .hrs"),
LastHrsMOonthly=document.querySelectorAll(".monthly .hrs");
const container={
    0:daily,
    1:weekly,
    2:monthly,
}
fetch("data.json")

.then(response => response.json())
.then(data => {
    for(let i=0; i<6;i++)
    {
        hrsDaily[i].innerHTML=data[i].timeframes.daily.current+"hrs";
        LastHrsDaily[i].innerHTML=data[0].timeframes.daily.previous+"hrs";
        hrsWeekly[i].innerHTML=data[i].timeframes.weekly.current+"hrs";
        LastHrsWeekly[i].innerHTML=data[0].timeframes.weekly.previous+"hrs";
        hrsMOonthly[i].innerHTML=data[i].timeframes.monthly.current+"hrs";
        LastHrsMOonthly[i].innerHTML=data[0].timeframes.monthly.previous+"hrs";
    }


   })
.catch(error => console.error('Error loading the JSON file:', error));
when.forEach((element, index) => {
    let indexx;
    element.addEventListener('click', () => {
        indexx = when.indexOf(element);
        when.forEach((otherElement, otherIndex) => {
            if (otherIndex !== indexx) {
                otherElement.classList.remove('add');
                container[otherIndex].forEach((days)=>{
                    days.style.animationName="";
                    days.style.zIndex="1"
                });
            } else {
                otherElement.classList.add('add');
                container[index].forEach((days)=>{
                    days.style.animationName="roller";
                    days.style.zIndex="999999999"
                });
            }
        });
    });
});
