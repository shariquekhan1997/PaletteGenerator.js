"use strict";

$(function () {
  //By default both options are hidden
  $(".isolation").hide();
  $(".no-isolation").hide();

  $(".theme-toggle").on("click", () => {
    if ($("body").attr("data-theme") === "light") {
      //dark mode
      $("body").attr("data-theme", "dark");
      $(".theme-toggle").attr("title", "Set Light Mode");
      $(".icon-toggle").removeClass("fa-sun");
      $(".icon-toggle").addClass("fa-moon");
    } else {
      //light mode
      $("body").attr("data-theme", "light");
      $(".theme-toggle").attr("title", "Set Dark Mode");
      $(".icon-toggle").addClass("fa-sun");
      $(".icon-toggle").removeClass("fa-moon");
    }
  });

  $(".setting").on('click', () => {
    $(".isolation, .no-isolation").toggle(); //Shows/hides when clicked on settings
  });

  //it created gap between the panels
  $(".isolation").on('click', () => {
    if (window.innerWidth > 425) {
      $(".togglewidth").css('width', '16vw'); //giving css width to class
      $(".layer").toggleClass('.togglewidth'); //Applying that class
      $(".isolation").hide();
      $(".no-isolation").hide();
    } else {
      $(".togglewidth").css({ 'height': '180px', 'margin-bottom': '50px' });
      $(".layer").toggleClass('.togglewidth'); //Applying that class
      $(".isolation").hide();
      $(".no-isolation").hide();
    }
  });
  //it hides the gap between the panels
  $(".no-isolation").on('click', () => {
    if (window.innerWidth > 425) {
      $(".togglewidth").css('width', '20vw'); //giving css width to class
      $(".layer").toggleClass('.togglewidth'); //Applying that class
      $(".isolation").hide();
      $(".no-isolation").hide();
    } else {
      $(".togglewidth").css({ 'height': '200px', 'margin-bottom': '0' });
      $(".layer").toggleClass('.togglewidth'); //Applying that class
      $(".isolation").hide();
      $(".no-isolation").hide();
    }
  });
});


//when spacebar is clicked these 5 buttons are clicked
document.onkeyup = function (e) {
  if (e.code == "Space") { // spacebar keycode = 32
    document.getElementById("change").click();
    document.getElementById("change2").click();
    document.getElementById("change3").click();
    document.getElementById("change4").click();
    document.getElementById("change5").click();
  }
}

//JS function for all panels to generate random colors
function generator() {
  let functionName = "generator";
  try {
    // .tostring because characters and numbers can come and Math.random() creates random numbers
    let newColour = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    if (newColour.length < 7)
      generator(); //calling function
    else
      return newColour;
  } catch (error) {
    console.error(functionName + ": " + error.message);
  }
}

function changeColor(buttonId, headingId, divId) {
  let newColour = generator(); //Calling generator function when clicking on button
  $(divId).css("background", newColour); //Changing the panel color
  $(buttonId).css('color', newColour); //Changing the button-text color "change"
  $(headingId).text(newColour); //Name of color generated to copy
}

//for mobile
function changeAllColorsForMobile() {
  let functionName = "changeAllColorsForMobile";
  try {
    document.getElementById("change").click();
    document.getElementById("change2").click();
    document.getElementById("change3").click();
    document.getElementById("change4").click();
    document.getElementById("change5").click();
  } catch (error) {
    console.error(functionName + ": " + error.message);
  }
}

document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
}