import { Serie } from "./Serie";
import { series } from "./data";

const SerieTbody: HTMLElement = document.getElementById('series')!;
const card: HTMLElement = document.getElementById('card')!;
renderSeriesInTable(series);

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(x => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${x.id}</td>
    <td><button class="link" id = ${x.id} onClick = "changeCard(event)">${x.name}</button></td>
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

series.forEach(serie => {
  let elem = document.getElementById(serie.id.toString());
  if (elem != null){
      elem.onclick = (event) => {
          changeCard(event);
      }
  }
})

function average(series: Serie[]): number {
  let sum = 0;
  series.forEach(c => {
    sum += c.seasons;
  });
  return Math.round((sum/series.length) * 100) / 100;
}

function changeCard(e: any): void {
  let id = e.target.id;
  let c = getSerie(id);
  let divElement = document.createElement("div");
  divElement.innerHTML = `<img class="card-img-top" src= ${c.imagen} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title"> ${c.name} </h5>
    <p class="card-text">${c.description}.</p>
    <a href="#" class="card-link">${c.link}</a>
  </div>`;
  card.appendChild(divElement);
  card.replaceChild(divElement, card.childNodes[0]);
}

function getSerie(id:string):Serie{
  let serie1!: Serie;
  series.forEach(c => {
    if(c.id.toString() == id){
      serie1 = c;
    }
  });
  return serie1;
}