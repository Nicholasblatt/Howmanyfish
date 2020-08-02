currentWebsite = window.location.host;
var simplemaps_usmap_mapdata = {
  main_settings: {
    //General settings
    width: "700", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    popups: "detect",

    //State defaults
    state_description: "Click to get data for this state",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "http://" + currentWebsite,
    border_size: 1.5,
    border_color: "#ffffff",
    all_states_inactive: "no",
    all_states_zoomable: "no",

    //Location defaults
    location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",

    //Zoom settings
    manual_zoom: "no",
    back_image: "no",
    arrow_box: "no",
    navigation_size: "40",
    navigation_color: "#f7f7f7",
    navigation_border_color: "#636363",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,

    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",

    //Advanced settings
    div: "map",
    auto_load: "yes",
    rotate: "0",
    url_new_tab: "no",
    images_directory: "default",
    import_labels: "no",
    fade_time: 0.1,
    link_text: "View Website",
  },
  state_specific: {
    HI: {
      name: "Hawaii",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=1416000&state=Hawaii",
    },
    AK: {
      name: "Alaska",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=730000&state=Alaska",
    },
    FL: {
      name: "Florida",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=21480000&state=Florida",
      inactive: "no",
    },
    NH: {
      name: "New Hampshire",
      description: "default",
      color: "default",
      hover_color: "default",
      url:
        "http://" +
        currentWebsite +
        "/?population=1300000&state=New%20Hampshire",
    },
    VT: {
      name: "Vermont",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=623989&state=Vermont",
    },
    ME: {
      name: "Maine",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=1344212&state=Maine",
    },
    RI: {
      name: "Rhode Island",
      description: "default",
      color: "default",
      hover_color: "default",
      url:
        "http://" +
        currentWebsite +
        "/?population=1059361&state=Rhode%20Island",
    },
    NY: {
      name: "New York",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=1416000&state=New%20York",
    },
    PA: {
      name: "Pennsylvania",
      description: "default",
      color: "default",
      hover_color: "default",
      url:
        "http://" + currentWebsite + "/?population=12801989&state=Pennsylvania",
    },
    NJ: {
      name: "New Jersey",
      description: "default",
      color: "default",
      hover_color: "default",
      url:
        "http://" + currentWebsite + "/?population=8882190&state=New%20Jersey",
    },
    DE: {
      name: "Delaware",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=973764&state=Delaware",
    },
    MD: {
      name: "Maryland",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=6045680&state=Maryland",
    },
    VA: {
      name: "Virginia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=8535519&state=Virginia",
    },
    WV: {
      name: "West Virginia",
      description: "default",
      color: "default",
      hover_color: "default",
      url:
        "http://" +
        currentWebsite +
        "/?population=1792147&state=West%20Virginia",
    },
    OH: {
      name: "Ohio",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=11689100&state=Ohio",
    },
    IN: {
      name: "Indiana",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=6732219&state=Indiana",
    },
    IL: {
      name: "Illinois",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=12671821&state=Illinois",
    },
    CT: {
      name: "Connecticut",
      description: "default",
      color: "default",
      hover_color: "default",
      url:
        "http://" + currentWebsite + "/?population=3565287&state=Connecticut",
    },
    WI: {
      name: "Wisconsin",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=5822434&state=Wisconsin",
    },
    NC: {
      name: "North Carolina",
      description: "default",
      color: "default",
      hover_color: "default",
      url:
        "http://" +
        currentWebsite +
        "/?population=10488084&state=North%20Carolina",
    },
    DC: {
      name: "District of Columbia",
      description: "default",
      color: "default",
      hover_color: "default",
      url:
        "http://" +
        currentWebsite +
        "/?population=705,749&state=District%20of%20Columbia",
    },
    MA: {
      name: "Massachusetts",
      description: "default",
      color: "default",
      hover_color: "default",
      url:
        "http://" + currentWebsite + "/?population=6949503&state=Massachusetts",
    },
    TN: {
      name: "Tennessee",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=6833174&state=Tennessee",
    },
    AR: {
      name: "Arkansas",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=3017825&state=Arkansas",
    },
    MO: {
      name: "Missouri",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=6137428&state=Missouri",
    },
    GA: {
      name: "Georgia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=10617423&state=Georgia",
    },
    SC: {
      name: "South Carolina",
      description: "default",
      color: "default",
      hover_color: "default",
      url:
        "http://" +
        currentWebsite +
        "/?population=5148714&state=South%20Carolina",
    },
    KY: {
      name: "Kentucky",
      description: "default",
      color: "default",
      zoomable: "no",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=4467673&state=Kentucky",
    },
    AL: {
      name: "Alabama",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=4903185&state=Alabama",
    },
    LA: {
      name: "Louisiana",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=4648794&state=Louisiana",
    },
    MS: {
      name: "Mississippi",
      description: "default",
      color: "default",
      hover_color: "default",
      url:
        "http://" + currentWebsite + "/?population=2976149&state=Mississippi",
    },
    IA: {
      name: "Iowa",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=3155070&state=Iowa",
    },
    MN: {
      name: "Minnesota",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=5639632&state=Minnesota",
    },
    OK: {
      name: "Oklahoma",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=3956971&state=Oklahoma",
    },
    TX: {
      name: "Texas",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=28995881&state=Texas",
    },
    NM: {
      name: "New Mexico",
      description: "default",
      color: "default",
      hover_color: "default",
      url:
        "http://" + currentWebsite + "/?population=2096829&state=New%20Mexico",
    },
    KS: {
      name: "Kansas",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=1416000&state=Kansas",
    },
    NE: {
      name: "Nebraska",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=1416000&state=Nebraska",
    },
    SD: {
      name: "South Dakota",
      description: "default",
      color: "default",
      hover_color: "default",
      url:
        "http://" +
        currentWebsite +
        "/?population=1416000&state=South%20Dekota",
    },
    ND: {
      name: "North Dakota",
      description: "default",
      color: "default",
      hover_color: "default",
      url:
        "http://" +
        currentWebsite +
        "/?population=1416000&state=North%20Dekota",
    },
    WY: {
      name: "Wyoming",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=578759&state=Wyoming",
    },
    MT: {
      name: "Montana",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=1068778&state=Montana",
    },
    CO: {
      name: "Colorado",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=5758736&state=Colorado",
    },
    UT: {
      name: "Utah",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=3205958&state=Utah",
    },
    AZ: {
      name: "Arizona",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=7278717&state=Arizona",
    },
    NV: {
      name: "Nevada",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=3080156&state=Nevada",
    },
    OR: {
      name: "Oregon",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=4217737&state=Oregon",
    },
    WA: {
      name: "Washington",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=7614893&state=Washington",
    },
    CA: {
      name: "California",
      description: "default",
      color: "default",
      hover_color: "default",
      url:
        "http://" + currentWebsite + "/?population=39512223&state=California",
    },
    MI: {
      name: "Michigan",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=9986857&state=Michigan",
    },
    ID: {
      name: "Idaho",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=1787065&state=Idaho",
    },
    GU: {
      name: "Guam",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "http://" + currentWebsite + "/?population=165768&state=Guam",
      hide: "yes",
    },
    VI: {
      name: "Virgin Islands",
      description: "default",
      color: "default",
      hover_color: "default",
      url:
        "http://" +
        currentWebsite +
        "/?population=106977&state=Virgin%20Islands",
      hide: "yes",
    },
    PR: {
      name: "Puerto Rico",
      description: "default",
      color: "default",
      hover_color: "default",
      url:
        "http://" + currentWebsite + "/?population=3194000&state=Puerto%20Rico",
      hide: "yes",
    },
    AS: {
      name: "American Samoa",
      description: "default",
      color: "default",
      hover_color: "default",
      url:
        "http://" +
        currentWebsite +
        "/?population=55465&state=American%20Samoa",
      hide: "yes",
    },
    MP: {
      name: "Northern Mariana Islands",
      description: "default",
      color: "default",
      hover_color: "default",
      url:
        "http://" +
        currentWebsite +
        "/?population=56882&state=Northern%20Mariana%20Islands",
      hide: "yes",
    },
  },
  locations: {
    // "0": {
    //   name: "New York",
    //   lat: 40.71,
    //   lng: -74,
    //   description: "default",
    //   color: "blue",
    //   url: "http://" + currentWebsite + "/?population=1416000&state=Hawaii",
    //   type: "default",
    //   size: "default",
    // },
  },
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "all",
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all",
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all",
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all",
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all",
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all",
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all",
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all",
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all",
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes",
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495",
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510",
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85",
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158",
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210",
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282",
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270",
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240",
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250",
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250",
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155",
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326",
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340",
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368",
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293",
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405",
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371",
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300",
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405",
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435",
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405",
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210",
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124",
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360",
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435",
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365",
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290",
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225",
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160",
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96",
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180",
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95",
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275",
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260",
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360",
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235",
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120",
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55",
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150",
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285",
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185",
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545",
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540",
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519",
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575",
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580",
    },
  },
};
