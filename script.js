let doctors = document.querySelectorAll(".team");
let count = 0;

doctors.forEach(function(card,index){
    card.style.left=`${index*100}%`
})
function myFun(){
    doctors.forEach(function(curValue)
{
    curValue.style.transform=`translateX(-${count * 100}%)`
})
}
setInterval(function(){
    count++;
    if(count == doctors.length){
        count=0;
    }
    myFun()
}, 3000)
  
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}
