"use strict";

window.addEventListener("load", initGenerator);

let string;
let operator;
let firstname1;
let firstname2;
let firstName;
let middleName;
let lastName;
let capitalized;

function initGenerator() {
  console.log("initGenerator");
  document.querySelector("#generate").addEventListener("click", readFirst);
}

function readFirst() {
  string = document.querySelector("#ourstring").value;

  readAction();
}

function readAction() {
  console.log("Read Action");
  var e = document.querySelector("#dropdown");
  operator = e.options[e.selectedIndex].value;

  changeText();
}

function changeText() {
  switch (operator) {
    case "0":
      console.log("zero");
      string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
      document.querySelector("#ourresult").value = string;
      break;
    case "1":
      console.log("1");
      document.querySelector("#ourresult").value = string.split(" ", 1);
      break;
    case "2":
      console.log("2");
      document.querySelector("#ourresult").value = string.indexOf(" ");
      break;
    case "3":
      console.log("3");
      const firstSpace = string.indexOf(" ") + 1;
      const lastSpace = string.lastIndexOf(" ") + 1;

      firstName = string.substring(0, firstSpace);
      middleName = string.substring(firstSpace, lastSpace);
      lastName = string.substring(lastSpace);
      document.querySelector("#ourresult").value = `The middle name is ${middleName}, it starts at ${firstSpace} and ends at ${lastSpace}.`;
      break;
    case "4":
      console.log("4");

      if (string.endsWith(".jpg")) {
        document.querySelector("#ourresult").value = "This string ends with .jpg";
      } else if (string.endsWith(".png")) {
        document.querySelector("#ourresult").value = "This string ends with .png";
      } else {
        document.querySelector("#ourresult").value = "This string does not end with .jpg or .png";
      }

      break;
    case "5":
      console.log("5");

      const stringLength = string.length;

      document.querySelector("#ourresult").value = "*".repeat(stringLength);

      break;
    case "6":
      console.log("6");

      string = string.slice(0, 2) + string.charAt(2).toUpperCase() + string.slice(3);
      document.querySelector("#ourresult").value = string;

      break;
    case "7":
      console.log("7");

      capitalized = string.replace(/(^|[\s-])\S/g, function (match) {
        return match.toUpperCase();
      });

      document.querySelector("#ourresult").value = capitalized;

      break;
    case "8":
      console.log("surprise");
      document.querySelector("#ourresult").classList.add("surprise");
      document.querySelector("#ourresult").value = "You made it until the end! Congratz :3";
      break;
  }
}
