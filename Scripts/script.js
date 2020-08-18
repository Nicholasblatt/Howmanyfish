const myClassNames = {
  select: "select-pure__select",
  dropdownShown: "select-pure__select--opened",
  multiselect: "select-pure__select--multiple",
  label: "select-pure__label",
  placeholder: "select-pure__placeholder",
  dropdown: "select-pure__options",
  option: "select-pure__option",
  autocompleteInput: "select-pure__autocomplete",
  selectedLabel: "select-pure__selected-label",
  selectedOption: "select-pure__option--selected",
  placeholderHidden: "select-pure__placeholder--hidden",
  optionHidden: "select-pure__option--hidden",
};

var genderval = "no_pref";
var religvals = [];
var agevals = [];
var weightvals = [];
var heightvals = [];
var marriedvals = [];
var childval = "no_pref";

var customIcon = document.createElement("img");
customIcon.src = "./icon.svg";

var pureSelectGender = new SelectPure(".gender", {
  options: [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
  ],
  placeholder: "-Choose one-",
  onChange: (value) => {
    genderval = value;
    answerSubmitted();
  },
  classNames: myClassNames,
});

var pureSelectReligion = new SelectPure(".religion", {
  options: [
    {
      label: "Christian",
      value: "christian",
    },
    {
      label: "Catholic",
      value: "catholic",
    },
    {
      label: "Muslim",
      value: "muslim",
    },
    {
      label: "Agnostic",
      value: "agnostic",
    },
    {
      label: "Athiest",
      value: "athiest",
    },
    {
      label: "Judaism",
      value: "judaism",
    },
    {
      label: "Buddhist",
      value: "buddhist",
    },
    {
      label: "Hindu",
      value: "hindu",
    },
    {
      label: "Other/Spiritualist",
      value: "other",
    },
  ],
  value: [],
  placeholder: "-Select one or more religions-",
  multiple: true,
  inlineIcon: customIcon,
  onChange: (value) => {
    religvals = value;
    answerSubmitted();
  },
  classNames: myClassNames,
});

var pureSelectAge = new SelectPure(".age", {
  options: [
    {
      label: "< 18 Years",
      value: "under18",
    },
    {
      label: "18-19 Years",
      value: "1820",
    },
    {
      label: "20-24 Years",
      value: "2024",
    },
    {
      label: "25-29 Years",
      value: "2529",
    },
    {
      label: "30-34 Years",
      value: "3034",
    },
    {
      label: "35-39 Years",
      value: "3539",
    },
    {
      label: "40-44 Years",
      value: "4044",
    },
    {
      label: "45-49 Years",
      value: "4549",
    },
    {
      label: "50-54 Years",
      value: "5054",
    },
    {
      label: "55-59 Years",
      value: "5559",
    },
    {
      label: "60-64 Years",
      value: "6064",
    },
    {
      label: "65-69 Years",
      value: "6569",
    },
    {
      label: "70-74 Years",
      value: "7074",
    },
    {
      label: "75-79 Years",
      value: "7579",
    },
    {
      label: "80-84 Years",
      value: "8084",
    },
    {
      label: "> 84 Years",
      value: "over84",
    },
  ],
  value: [],
  placeholder: "-Select one or more ages-",
  multiple: true,
  inlineIcon: customIcon,
  onChange: (value) => {
    agevals = value;
    answerSubmitted();
  },
  classNames: myClassNames,
});

var pureSelectHeight = new SelectPure(".height", {
  options: [
    {
      label: "< 5'",
      value: "<60",
    },
    {
      label: "5' 0\"",
      value: "60",
    },
    {
      label: "5' 1\"",
      value: "61",
    },
    {
      label: "5' 2\"",
      value: "62",
    },
    {
      label: "5' 3\"",
      value: "63",
    },
    {
      label: "5' 4\"",
      value: "64",
    },
    {
      label: "5' 5\"",
      value: "65",
    },
    {
      label: "5' 6\"",
      value: "66",
    },
    {
      label: "5' 7\"",
      value: "67",
    },
    {
      label: "5' 8\"",
      value: "68",
    },
    {
      label: "5' 9\"",
      value: "69",
    },
    {
      label: "5' 10\"",
      value: "70",
    },
    {
      label: "5' 11\"",
      value: "71",
    },
    {
      label: "6' 0\"",
      value: "72",
    },
    {
      label: "> 6'",
      value: ">72",
    },
  ],
  value: [],
  placeholder: "-Select one or more heights-",
  multiple: true,
  inlineIcon: customIcon,
  onChange: (value) => {
    heightvals = value;
    answerSubmitted();
  },
  classNames: myClassNames,
});

var pureSelectWeight = new SelectPure(".weight", {
  options: [
    {
      label: "< 100lbs",
      value: "under100",
    },
    {
      label: "100lbs - 109lbs",
      value: "100109",
    },
    {
      label: "110lbs - 119lbs",
      value: "110119",
    },
    {
      label: "120lbs - 129lbs",
      value: "120129",
    },
    {
      label: "130lbs - 139lbs",
      value: "130139",
    },
    {
      label: "140lbs - 149lbs",
      value: "140149",
    },
    {
      label: "150lbs - 159lbs",
      value: "150159",
    },
    {
      label: "160lbs - 169lbs",
      value: "160169",
    },
    {
      label: "170lbs - 179lbs",
      value: "170179",
    },
    {
      label: "180lbs - 189lbs",
      value: "180189",
    },
    {
      label: "190lbs - 199lbs",
      value: "190199",
    },
    {
      label: "200lbs - 209lbs",
      value: "200209",
    },
    {
      label: "210lbs - 219lbs",
      value: "210219",
    },
    {
      label: "220+lbs",
      value: "over220",
    },
  ],
  value: [],
  placeholder: "-Select one or more weights-",
  multiple: true,
  inlineIcon: customIcon,
  onChange: (value) => {
    weightvals = value;
    answerSubmitted();
  },
  classNames: myClassNames,
});

var pureSelectMarried = new SelectPure(".married", {
  options: [
    {
      label: "Never Married",
      value: "never",
    },
    {
      label: "Divorced",
      value: "divorced",
    },
    {
      label: "Married",
      value: "married",
    },
    {
      label: "Separated",
      value: "separated",
    },
    {
      label: "Widowed",
      value: "widowed",
    },
  ],
  value: [],
  placeholder: "-Select one or more marital status'-",
  multiple: true,
  inlineIcon: customIcon,
  onChange: (value) => {
    marriedvals = value;
    answerSubmitted();
  },
  classNames: myClassNames,
});

var pureSelectChild = new SelectPure(".child", {
  options: [
    {
      label: "No Preference",
      value: "no_pref",
    },
    {
      label: "Has one or more children",
      value: "child",
    },
    {
      label: "Is childless",
      value: "childless",
    },
  ],
  placeholder: "-Choose one-",
  onChange: (value) => {
    childval = value;
    answerSubmitted();
  },
  classNames: myClassNames,
});

var population = 328200000;
//const population = 40000000;
var currstate = "the United States";

const currentWebsite = window.location.host;

var tochange = document.getElementById("to_replace");
var stateChange = document.getElementById("state");
var popChange = document.getElementById("population");
var theMap = document.getElementById("map");
var Bbutton = document.getElementById("bbutton");
var numPpl = document.getElementById("number_people");

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
  var gender = genderval;
  var religion = religvals;
  var age = agevals;
  var height = heightvals;
  var weight = weightvals;
  var married = marriedvals;
  var child = childval;

  var myInit = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    cache: "default",
  };

  var myReq = new Request("http://" + currentWebsite + "/data.json", myInit);

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
        runningPercent = 0;
      }

      // var percentOfPpl =
      //   result.gender[g] *
      //   result.religion[r] *
      //   result.age[g][a] *
      //   result.height[g][ht][wt] *
      //   result.married[g][a][m] *
      //   result.child[g][c][a];

      const numOfPpl = percentToPeople(percentOfPpl);
      numPpl.innerHTML = "That's about 1 in every " + numOfPpl + " people.";
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

function percentToPeople(percent) {
  if (percent === 0) {
    return "non-existant";
  }
  var perBottom = Math.round(1 / percent);
  return numberWithCommas(perBottom);
}
