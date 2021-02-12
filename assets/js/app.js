init()

function init() {
  var url = "https://api.covid19api.com/summary"
  
  $.get(url, function(data) {
    console.log(data.Global)

    data = `
      <td>${data.Global.TotalConfirmed}</td>
      <td>${data.Global.TotalRecovered}</td>
      <td>${data.Global.TotalDeaths}</td>
    `

    $("#data").html(data)
  });
}

function refresh() {
  clear()
  init()
}

function clear() {
  $("#data").empty()
}
