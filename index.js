const keys = document.querySelectorAll(".numbcalc")
const displayOutput = document.querySelector("#numberInput")

let input = ""
for (let key of keys) {
  const value = key.value

  key.addEventListener("click", function () {
    displayOutput.value += value

    if (value == "clear") {
      input = ""
      displayOutput.value = ""
    } else if (value == "del") {
      input = input.slice(0, -1)
      displayOutput.value = input
    } else if (value == "equals") {
      let result = eval(input)
      result = parseFloat(result)
      displayOutput.value = CleanOutput(result)
    } else {
      if (validateInput(value)) {
        input += value
        displayOutput.value = input
      } else {

        return false
      }
    }
  })
}

function CleanOutput(output) {
  let outputString = output.toString()
  let decimal = outputString.split(".")[1]
  outputString = outputString.split(".")[0]

  let outputArray = outputString.split("")

  if (outputArray.length > 3) {
    for (let i = outputArray.length - 3; i > 0; i -= 3) {
      outputArray.splice(i, 0, ",")
    }

  }

  if (decimal) {
    outputArray.push(".")
    outputArray.push(decimal)
  }

  return outputArray.join("")

}


function validateInput(value) {
  let lastInput = input.slice(-1)
  let operators = ["+", "-", "*", "/"]

  if (value == "." && lastInput == ".") {
    return false

  }


  if (operators.includes(value)) {
    if (operators.includes(lastInput)) {
      return false;
    } else {
      return true
    }
  }
  return true
}

window.addEventListener("DOMContentLoaded", function(){
        input = ""
      displayOutput.value = ""
})




let hi = document.querySelector("h1")
let hb = document.querySelectorAll("h2")
let toggBackground = document.querySelector(".tri-state-toggle ")
let toggbutton = document.querySelectorAll(".button")
let buttonBackground = document.querySelector(".buttons-box")
let calcbuttons = document.querySelectorAll(".buttonNumb")
let buttonfunc = document.querySelectorAll(".buttonalpha")
let equals = document.querySelector(".equal")


let buttons = document.getElementsByClassName("button");
let arr = [...buttons];
arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      document.getElementsByTagName("body")[0].style.
      backgroundColor = "hsl(222, 26%, 31%)";
      hi.style.color = "hsl(0, 0%, 100%)"
      displayOutput.style.color = "hsl(0, 0%, 100%)";
      displayOutput.style.backgroundColor = "hsl(224, 36%, 15%)";

      toggBackground.style.backgroundColor = "hsl(223, 31%, 20%)"
      buttonBackground.style.backgroundColor = "hsl(223, 31%, 20%)";

      equals.style.backgroundColor = "hsl(6, 63%, 50%)"
      equals.style.color = "hsl(0, 0%, 100%)"
      equals.classList.add("equalshadow1")
      equals.classList.remove("equalshadow2")
      equals.classList.remove("equalshadow3")
        equals.addEventListener("mouseover", () => {
          equals.style.backgroundColor="hsl(6, 86%, 67%)"
        })
        equals.addEventListener("mouseleave", () => {
          equals.style.backgroundColor="hsl(6, 63%, 50%)"
        })
      for (let i = 0; i < hb.length; i++) {
        hb[i].style.color = "hsl(0, 0%, 100%)"
      }
      for (let i = 0; i < toggbutton.length; i++) {
        toggbutton[i].style.backgroundColor = "hsl(6, 63%, 50%)"
      }
      for (let i = 0; i < buttonfunc.length; i++) {
        buttonfunc[i].style.backgroundColor = "hsl(225, 21%, 49%)"
        buttonfunc[i].style.color = "hsl(0, 0%, 100%)"
        buttonfunc[i].classList.add("buttonalphaShadow1")
        buttonfunc[i].classList.remove("buttonalphaShadow2")
        buttonfunc[i].classList.remove("buttonalphaShadow3")
      
      }
      for (let i = 0; i < calcbuttons.length; i++) {
        calcbuttons[i].style.backgroundColor = "hsl(30, 25%, 89%)"
        calcbuttons[i].style.color = "hsl(221, 14%, 31%)"
        calcbuttons[i].classList.add("buttonNumbShadow1")
        calcbuttons[i].classList.remove("buttonNumbShadow2")
        calcbuttons[i].classList.remove("buttonNumbShadow3")
      }
      toggbutton.forEach(element => {
        element.addEventListener("mouseover", () => {
          element.style.backgroundColor="hsl(6, 86%, 67%)"
        })
        element.addEventListener("mouseleave", () => {
          element.style.backgroundColor="hsl(6, 63%, 50%)"
        })
      })
      buttonfunc.forEach(element => {
        element.addEventListener("mouseover", () => {
          element.style.backgroundColor="hsl(225, 21%, 69%)"
        })
        element.addEventListener("mouseleave", () => {
          element.style.backgroundColor="hsl(225, 21%, 49%)"
        })
      })
      calcbuttons.forEach(element => {
        element.addEventListener("mouseover", () => {
          element.style.backgroundColor="hsl(30, 25%, 99%)"
        })
        element.addEventListener("mouseleave", () => {
          element.style.backgroundColor="hsl(30, 25%, 89%)"
        })
      })
      
    } else if (index == 1) {
      document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(0, 0%, 90%)";
      hi.style.color = "hsl(60, 10%, 19%)"
      displayOutput.style.color = "hsl(60, 10%, 19%)";
      displayOutput.style.backgroundColor = "hsl(0, 0%, 93%)";

      toggBackground.style.backgroundColor = "hsl(0, 5%, 81%)"
      buttonBackground.style.backgroundColor = "hsl(0, 5%, 81%)";

      equals.style.backgroundColor = "hsl(25, 98%, 40%)"
      equals.style.color = "hsl(0, 0%, 100%)"
      equals.classList.add("equalshadow2")
      equals.classList.remove("equalshadow1")
      equals.classList.remove("equalshadow3")
        equals.addEventListener("mouseover", () => {
          equals.style.backgroundColor="hsl(25, 98%, 60%)"
        })
        equals.addEventListener("mouseleave", () => {
          equals.style.backgroundColor="hsl(25, 98%, 40%)"
        })
      for (let i = 0; i < hb.length; i++) {
        hb[i].style.color = "hsl(60, 10%, 19%)"
      }
      for (let i = 0; i < toggbutton.length; i++) {
        toggbutton[i].style.backgroundColor = "hsl(25, 98%, 40%)"
      }
      for (let i = 0; i < buttonfunc.length; i++) {
        buttonfunc[i].style.backgroundColor = "hsl(185, 42%, 37%)"
        buttonfunc[i].style.color = "hsl(0, 0%, 100%)"
        buttonfunc[i].classList.add("buttonalphaShadow2")
        buttonfunc[i].classList.remove("buttonalphaShadow1")
        buttonfunc[i].classList.remove("buttonalphaShadow3")
      }
      for (let i = 0; i < calcbuttons.length; i++) {
        calcbuttons[i].style.backgroundColor = "hsl(45, 7%, 89%)"
        calcbuttons[i].style.color = "hsl(60, 10%, 19%)"
        calcbuttons[i].classList.add("buttonNumbShadow2")
        calcbuttons[i].classList.remove("buttonNumbShadow1")
        calcbuttons[i].classList.remove("buttonNumbShadow3")
      }
         toggbutton.forEach(element => {
        element.addEventListener("mouseover", () => {
          element.style.backgroundColor="hsl(25, 98%, 60%)"
        })
        element.addEventListener("mouseleave", () => {
          element.style.backgroundColor="hsl(25, 98%, 40%)"
        })
      })
      buttonfunc.forEach(element => {
        element.addEventListener("mouseover", () => {
          element.style.backgroundColor="hsl(185, 49%, 47%)"
        })
        element.addEventListener("mouseleave", () => {
          element.style.backgroundColor="hsl(185, 42%, 37%)"
        })
      })
      calcbuttons.forEach(element => {
        element.addEventListener("mouseover", () => {
          element.style.backgroundColor="hsl(45, 17%, 99%)"
        })
        element.addEventListener("mouseleave", () => {
          element.style.backgroundColor="hsl(45, 7%, 89%)"
        })
      })
    } else {
      document.getElementsByTagName("body")[0].style.backgroundColor =
        " hsl(268, 75%, 9%)";
      hi.style.color = "hsl(52, 100%, 62%)"
      displayOutput.style.color = "hsl(52, 100%, 62%)";
      displayOutput.style.backgroundColor = "hsl(268, 71%, 12%)";
      toggBackground.style.backgroundColor = "hsl(268, 71%, 12%)"
      buttonBackground.style.backgroundColor = "hsl(268, 71%, 12%)";

      equals.style.backgroundColor = "hsl(176, 100%, 44%)"
      equals.style.color = "hsl(198, 20%, 13%)"
      equals.classList.add("equalshadow3")
      equals.classList.remove("equalshadow1")
      equals.classList.remove("equalshadow2")
      equals.addEventListener("mouseover", () => {
          equals.style.backgroundColor="hsl(176, 100%, 64%)"
        })
        equals.addEventListener("mouseleave", () => {
          equals.style.backgroundColor="hsl(176, 100%, 44%)"
        })
      for (let i = 0; i < hb.length; i++) {
        hb[i].style.color = "hsl(52, 100%, 62%)"
      }
      for (let i = 0; i < toggbutton.length; i++) {
        toggbutton[i].style.backgroundColor = "hsl(176, 100%, 44%)"
      }
      for (let i = 0; i < buttonfunc.length; i++) {
        buttonfunc[i].style.backgroundColor = "hsl(281, 89%, 26%)"
        buttonfunc[i].style.color = "hsl(0, 0%, 100%)"
        buttonfunc[i].classList.add("buttonalphaShadow3")
        buttonfunc[i].classList.remove("buttonalphaShadow1")
        buttonfunc[i].classList.remove("buttonalphaShadow2")
      }
      for (let i = 0; i < calcbuttons.length; i++) {
        calcbuttons[i].style.backgroundColor = "hsl(268, 47%, 21%)"
        calcbuttons[i].style.color = "hsl(52, 100%, 62%)"
        calcbuttons[i].classList.add("buttonNumbShadow3")
        calcbuttons[i].classList.remove("buttonNumbShadow1")
        calcbuttons[i].classList.remove("buttonNumbShadow2")
      }
      buttonfunc.forEach(element => {
        element.addEventListener("mouseover", () => {
          element.style.backgroundColor="red"
        })
        element.addEventListener("mouseleave", () => {
          element.style.backgroundColor="blue"
        })
      })
      
         toggbutton.forEach(element => {
        element.addEventListener("mouseover", () => {
          element.style.backgroundColor="hsl(176, 100%, 64%)"
        })
        element.addEventListener("mouseleave", () => {
          element.style.backgroundColor="hsl(176, 100%, 44%)"
        })
      })
      buttonfunc.forEach(element => {
        element.addEventListener("mouseover", () => {
          element.style.backgroundColor="hsl(281, 89%, 46%)"
        })
        element.addEventListener("mouseleave", () => {
          element.style.backgroundColor="hsl(281, 89%, 26%)"
        })
      })
      calcbuttons.forEach(element => {
        element.addEventListener("mouseover", () => {
          element.style.backgroundColor="hsl(268, 47%, 41%)"
        })
        element.addEventListener("mouseleave", () => {
          element.style.backgroundColor="hsl(268, 47%, 21%)"
        })
      })
    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});