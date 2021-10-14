const dataText = ["Web Designer", "Web Integrator", "Front Developer", "Designer", "Content Creator"];
document.addEventListener("DOMContentLoaded", typingEffect);

function typingEffect() {

    function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
        document.querySelector(".effect").innerHTML = text.substring(0, i+1) + "<span class='effect'></span>";
  
        setTimeout(function() {
          typeWriter(text, i+1, fnCallback)
        }, 100)
      } else if (typeof fnCallback == "function") {
        setTimeout(fnCallback, 700);
      } 
    }
  
    function startTextAnimation(i) {
      if (typeof dataText[i] == "undefined") {
        setTimeout(function() {
          startTextAnimation(0);
        }, 2000)
      }
      if (i < dataText[i].length) {
        typeWriter(dataText[i], 0, function() {
          startTextAnimation(i + 1);
        });
      }
      
    }
    startTextAnimation(0);
  }