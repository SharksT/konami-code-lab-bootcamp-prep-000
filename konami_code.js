const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;

  document.addEventListener("keydown",function onKeyDownHandler(e) {


      const key = parseInt(e.which);
      console.log(key)
      if (key === code[index]) {
        index++;
        alert(index);
        if (index === code.length) {
          console.log("Hurray!");
          alert("Hurray!");
          index = 0;
        }
      }
      else {
        index = 0;
      }
    })
  }
