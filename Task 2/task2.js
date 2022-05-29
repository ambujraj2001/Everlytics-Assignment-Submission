let data = [
  [
    "machine_name",
    "machine_id",
    "current",
    "voltage",
    "power_factor",
    "active_power",
    "apparent_power",
    "reactive_power",
    "daily_energy",
    "monthly_energy",
    "yearly_energy",
    "idle_daily",
    "idle_monthly",
    "idle_yearly",
  ],
  [
    "Auto Winding Machine",
    "machine001",
    0,
    0,
    0,
    0.0,
    0.0,
    0.0,
    0,
    0,
    0,
    0,
    0,
    0,
  ],
  ["Boiler Machine", "machine004", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0],
];

function create() {
  console.log("created table");
  // CREATE DYNAMIC TABLE.
  var table = document.createElement("table");
  var tr = table.insertRow();
  var tt =
    " <table>" +
    "<tr>" +
    "<th colspan='3'>ENERGY CONSUMED (kwh)</th>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    "daily_energy" +
    "</td>" +
    "<td>" +
    "monthly_energy" +
    "</td>" +
    "<td>" +
    "yearly_energy" +
    "</td>" +
    "</tr>" +
    "</table>";
    var tt1 =
      " <table>" +
      "<tr>" +
      "<th colspan='3'>IDLE TIME</th>" +
      "</tr>" +
      "<tr>" +
      "<td>" +
      "idle_daily" +
      "</td>" +
      "<td>" +
      "idle_monthly" +
      "</td>" +
      "<td>" +
      "idle_yearly" +
      "</td>" +
      "</tr>" +
      "</table>";
  for (var i = 0; i < data[0].length; i++) {
    var th = document.createElement("th"); // TABLE HEADER.
    if (data[0][i] === "idle_daily") {
      th.setAttribute("colspan", "3");
      th.innerHTML =tt1;
      tr.appendChild(th);
    } else if (data[0][i] === "daily_energy") {
      th.setAttribute("colspan", "3");
      th.innerHTML = tt;
      tr.appendChild(th);
    } else if (
      data[0][i] === "idle_monthly" ||
      data[0][i] === "idle_yearly" ||
      data[0][i] === "monthly_energy" ||
      data[0][i] === "yearly_energy"
    ) {
      continue;
    } else {
      th.innerHTML = data[0][i];
      tr.appendChild(th);
    }
  }

  for (var i = 0; i < data.length - 1; i++) {
    tr = table.insertRow();

    for (var j = 0; j < data[i + 1].length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = data[i + 1][j];
    }
  }
  let elem = document.getElementById("heading");
  elem.setAttribute("style", "");
  let divContainer = document.getElementById("showtable");
  divContainer.innerHTML = "";
  divContainer.appendChild(table);
}
