// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});

//Easier way 
/**const decrease=document.querySelector('.decrease')
const reset=document.querySelector('.reset')
const increase=document.querySelector('.increase')

increase.addEventListener('click',function() {
    let count=parseInt(span.textContent);
    count+=1;
    value.textContent=count;
})

decrease.addEventListener('click',function(){
    let count=parseInt(span.textContent);
    count-=1;
    value.textContent=count;
})

reset.addEventListener('click',function() {
    value.textContent=0;
})
*/

