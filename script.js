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
console.log(newPop);
const state = urlParams.get("state");
console.log(state);

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
  const gender = document.getElementById("gender");
  const g = gender.value;
  const religion = document.getElementById("religion");
  const r = religion.value;
  const age = document.getElementById("age");
  const a = age.value;
  const height = document.getElementById("height");
  const ht = height.value;
  const weight = document.getElementById("weight");
  const wt = weight.value;
  const married = document.getElementById("married");
  const m = married.value;
  const child = document.getElementById("child");
  const c = child.value;

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
      var myBMInum = result.height[g][ht] * result.weight[g][wt];
      if (wt != "no_pref" && ht != "no_pref") {
        var bmiStr = bmiCalc(
          result.weight.bmicalc[wt],
          result.height.bmicalc[ht]
        );
        myBMInum = result.bmi[bmiStr];
      }
      var percentOfPpl =
        result.gender[g] *
        result.religion[r] *
        result.age[g][a] *
        myBMInum *
        result.married[g][a][m] *
        result.child[g][c][a];
      runningpop = runningpop * percentOfPpl;
      percentOfPpl *= 100;
      const finalResult = Math.round(runningpop);
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
