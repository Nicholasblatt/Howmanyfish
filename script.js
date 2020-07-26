const population = 328200000;
//const population = 40000000;
var runningpop = population;

var tochange = document.getElementById("to_replace");

tochange.innerHTML = numberWithCommas(population) + " or 100% of Americans.";

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
        "% of Americans.";
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
