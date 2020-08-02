var population = 328200000;
//const population = 40000000;
var currstate = "the United States";

var tochange = document.getElementById("to_replace");
var stateChange = document.getElementById("state");
var popChange = document.getElementById("population");
var theMap = document.getElementById("map");
var Bbutton = document.getElementById("bbutton");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const newPop = urlParams.get("population");
const state = urlParams.get("state");

if (newPop != null) {
  population = newPop;
}

if (state != null) {
  currstate = state;
  theMap.className += "hidden";
  // TODO add back button to html
  var pEle = document.createElement("p");
  var button = document.createElement("BUTTON");
  var buttonText = document.createTextNode("Back To Map");
  button.appendChild(buttonText);
  button.className += "backbutton";
  button.addEventListener("click", function () {
    window.location = "http://" + window.location.host;
  });
  pEle.appendChild(button);
  Bbutton.appendChild(pEle);
}

var runningpop = population;

stateChange.innerHTML = currstate;
popChange.innerHTML = numberWithCommas(population);
tochange.innerHTML =
  numberWithCommas(population) + " or 100% of people in " + currstate + ".";

function answerSubmitted() {
  var runningpop = population;
  var gender = $("#gender").val();
  var religion = $("#religion").val();
  var age = $("#age").val();
  var height = $("#height").val();
  var weight = $("#weight").val();
  var married = $("#married").val();
  var child = $("#child").val();

  var myInit = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    cache: "default",
  };

  var myReq = new Request("http://localhost:5000/data.json", myInit);

  var result = fetch(myReq)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      var percentOfPpl = 1;
      var runningPercent = 0;
      const g = gender;

      if (gender === "no_select") {
        tochange.innerHTML = "Pick a Gender to continue.";
        tochange.className += "alertMessage";
      } else {
        tochange.classList.remove("alertMessage");
      }

      percentOfPpl *= result.gender[g];

      // religion calculation
      if (religion.includes("no_pref") || religion.length < 2) {
        if (religion.length === 0) {
          religion.push("no_pref");
        }
        percentOfPpl *= result.religion[religion[0]];
      } else {
        religion.forEach((item, i) => {
          runningPercent += result.religion[item];
        });
        percentOfPpl *= runningPercent;
        runningPercent = 0;
      }

      // age calculation
      if (age.includes("no_pref") || age.length < 2) {
        if (age.length === 0) {
          age.push("no_pref");
        }
        percentOfPpl *= result.age[g][age[0]];
      } else {
        age.forEach((item, i) => {
          runningPercent += result.age[g][item];
        });
        percentOfPpl *= runningPercent;
        runningPercent = 0;
      }

      // height and weight calculation
      if (height.includes("no_pref") || height.length === 0) {
        height = [];
        height.push("no_pref");
      }
      if (weight.includes("no_pref") || weight.length === 0) {
        weight = [];
        weight.push("no_pref");
      }
      height.forEach((h, i) => {
        weight.forEach((w, j) => {
          runningPercent += result.height[g][h][w];
        });
      });
      percentOfPpl *= runningPercent;
      runningPercent = 0;

      // marriage status calculation
      if (age.includes("no_pref") || age.length === 0) {
        age = [];
        age.push("no_pref");
      }
      if (married.includes("no_pref") || married.length === 0) {
        percentOfPpl *= 1;
      } else {
        const splitSize = 1 / age.length;
        age.forEach((a, i) => {
          married.forEach((m, j) => {
            runningPercent += result.married[g][a][m];
          });
        });
        runningPercent *= splitSize;
        percentOfPpl *= runningPercent;
        runningPercent = 0;
      }

      // childless or not calculation
      if (child.includes("no_pref") || child.length === 0) {
        percentOfPpl *= 1;
      } else {
        if (age.includes("no_pref") || age.length === 0) {
          age = [];
          age.push("no_pref");
        }
        const splitSize = 1 / age.length;
        age.forEach((age, j) => {
          runningPercent += result.child[g][child][age];
        });
        runningPercent *= splitSize;
        percentOfPpl *= runningPercent;
        console.log(runningPercent);
        runningPercent = 0;
      }

      // var percentOfPpl =
      //   result.gender[g] *
      //   result.religion[r] *
      //   result.age[g][a] *
      //   result.height[g][ht][wt] *
      //   result.married[g][a][m] *
      //   result.child[g][c][a];
      runningpop = runningpop * percentOfPpl;
      percentOfPpl *= 100;
      const finalResult = Math.round(runningpop);
      console.log(gender === "no_select");

      tochange.innerHTML =
        numberWithCommas(finalResult) +
        " or " +
        percentOfPpl.toFixed(5).toString() +
        "% of people in " +
        currstate +
        ".";
    });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function bmiCalc(lbs, inches) {
  var myBMI = (703 * lbs) / (inches * inches);
  if (myBMI < 17) {
    myBMI = 17;
  }
  if (myBMI > 44) {
    myBMI = 44;
  }
  return Math.round(myBMI).toString();
}
