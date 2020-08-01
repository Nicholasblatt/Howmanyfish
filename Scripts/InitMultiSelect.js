var select = new MSFmultiSelect(document.querySelector("#religion"), {
  onChange: function (checked, value, instance) {
    console.log(checked, value, instance);
  },
  selectAll: true,
  appendTo: "#test",
  //readOnly:true
});
