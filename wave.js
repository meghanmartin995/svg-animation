const headerTag = document.querySelector("header")
const arrowTag = document.querySelector("img.arrow")


const sections = document.querySelectorAll("section")
const wavesBoxes = document.querySelectorAll("g.wave")

const easing = function (x) {
  return x * x * x;
}

const fadeHeader = function () {
  const pixels = window.pageYOffset
  
 	headerTag.style.opacity = 1 - easing((pixels / 300))
 	arrowTag.style.opacity = 1 - easing((pixels / 200))
  console.log(arrowTag.style.opacity)
}

const checkCircles = function () {  
  sections.forEach((section, index) => {
   	const waves = wavesBoxes[index].querySelectorAll("circle, path")
    
    if (section.getBoundingClientRect().top <= window.innerHeight / 2) {
      waves.forEach(wave => {
        wave.classList.add("in-view")
      })
    } else {
      waves.forEach(wave => {
        wave.classList.remove("in-view")
      })	  	
    }
  })
}

sections.forEach(section => {
  section.style.backgroundColor = "transparent"
  section.style.color = "#000000"
})

checkCircles()
fadeHeader()

window.addEventListener("scroll", function () {
  checkCircles()
  fadeHeader()
})