import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n    <td>").concat(c.name, "</td>\n    <td>").concat(c.channel, "</td>\n    <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
    var i = average(series);
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td colspan=\"6\">Seasons average: \n  ".concat(i, "</td>");
    seriesTbody.appendChild(trElement);
}
function average(series) {
    var sum = 0;
    series.forEach(function (c) {
        sum += c.seasons;
    });
    return Math.round((sum / series.length) * 100) / 100;
}

