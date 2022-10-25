import { Serie } from "./Serie";
import { series } from "./data";

const SerieTbody: HTMLElement = document.getElementById('series')!;
renderSeriesInTable(series);

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(x => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${x.id}</td>
    <td>${x.name}</td>
    <td>${x.channel}</td>
    <td>${x.seasons}</td>`
    SerieTbody.appendChild(trElement);
  });
  let i = average(series);
  let trElement = document.createElement("tr");
  trElement.innerHTML= `<td colspan="6">Seasons average: 
  ${i}</td>`;
  SerieTbody.appendChild(trElement);
}

function average(series: Serie[]): number {
  let sum = 0;
  series.forEach(c => {
    sum += c.seasons;
  });
  return Math.round((sum/series.length) * 100) / 100;
}