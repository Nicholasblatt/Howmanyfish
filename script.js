const population = 328200000;
var runningpop = population;

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
  const eyes = document.getElementById("eyes");
  const e = eyes.value;
  const hair = document.getElementById("hair");
  const hr = hair.value;

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
      runningpop =
        runningpop *
        result.gender[g] *
        result.religion[r] *
        result.age[a] *
        result.height[g][ht] *
        result.weight[g][wt] *
        result.eyes[e] *
        result.hair[hr];
      const finalResult = Math.round(runningpop);
      console.log(finalResult);
    });
}
