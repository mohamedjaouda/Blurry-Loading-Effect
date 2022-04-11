const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const Reload_Again = document.querySelector(".text-after");


let load = 0

let int = setInterval(blurring, 70)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
    setTimeout(() => {
       Reload_Again.innerText = "Reload Again";
    }, 1500);
  }
  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0,100,3,0)
  bg.style.filter = `blur(${scale(load, 0,100, 30,0)}px)` 
  // bg.style.filter = `brightness(${scale(load,0,100,0,1.2)})`
}
  
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }