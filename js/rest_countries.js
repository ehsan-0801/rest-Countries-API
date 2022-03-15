const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displaycountries(data))
}
const displaycountries = countries =>{
    const countriesHTML = countries.map(country=>getCountriesHTML(country))
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
    console.log(countriesHTML[0]);
}
// const getCountriesHTML = country =>{
//     const {name, flags} = country;
//     return `
//     <div class="card-group col-md-4">
//   <div class="card m-md-3 border border-5 rounded">
//     <img style="width:200px; height:100px" src="${flags.png}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${name.common}</h5>
//       <p class="card-text"></p>
//       <p class="card-text"><small class="text-muted"></small></p>
//     </div>
//   </div>
//   </div>
//     `;
// }
const getCountriesHTML = ({name, flags,area,region}) =>{
    return `
    <div class="card-group col-md-4">
  <div class="card m-md-3 border border-5 rounded">
    <img style="width:200px; height:100px" src="${flags.png}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${name.common}</h5>
      <p class="card-text">${area} km</p>
      <p class="card-text"><small class="text-muted">${region}</small></p>
    </div>
  </div>
  </div>
    `;
}
// const getCountriesHTML = country =>{
//     return `
//     <div class="card-group col-md-4">
//   <div class="card m-md-3 border border-5 rounded">
//     <img style="width:200px; height:100px" src="${country.flags.png}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${country.name.common}</h5>
//       <p class="card-text"></p>
//       <p class="card-text"><small class="text-muted"></small></p>
//     </div>
//   </div>
//   </div>
//     `;
// }
loadCountries()