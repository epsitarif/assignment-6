const showBtn = document.getElementById('btn-show-all')
 



const loadFeatures = async(ShowCard) =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    if (ShowCard) {
      displayFeatures(data.data.tools.slice(0,data.length));
    } else {
      displayFeatures(data.data.tools.slice(0,6));
    }
    
}
const displayFeatures = features =>{
  const featureContainer = document.getElementById('Features-container');
  // featureContainer.innerHTML = '';
  // display 6 card 
  const showAll = document.getElementById('show-all');
  
//  if(features.length > 6){
//   features = features.slice(0 , 6);
//   showAll.classList.remove('d-none');
// }
// else{
//   showAll.classList.add('d-none');
// }
// show all card

featureContainer.innerHTML='';
features.forEach(feature =>{
  console.log(feature.id);
    const featureDiv = document.createElement('div');
    featureDiv.classList.add('col');
    featureDiv.innerHTML = `
    <div class="card h-100">
    <img src="${feature.image}" class="card-img-top img-fluid" alt="..." />
    <div class="card-body">
      <h5 id="card-title" class="card-title">Features</h5>
      <ol>
        <li class="${feature.features[0]=== undefined ? 'd-none': ''}"> ${feature.features[0]}</li>
        <li class="${feature.features[1]=== undefined ? 'd-none': ''}"> ${feature.features[1]}</li>
        <li class="${feature.features[2]=== undefined ? 'd-none': ''}"> ${feature.features[2]}</li>
        <li class="${feature.features[3]=== undefined ? 'd-none': ''}"> ${feature.features[3]}</li>
      </ol>
      <hr>
    <h5 id="card-name" class="card-title">${feature.name}</h5>
    <div class="d-flex justify-content-between">
      <div class="d-flex ">
        <p><i class="fa-solid fa-calendar-days"></i></p>
        <p id="time-container" class=" ms-2">${feature.published_in}</p>
        </div>
         <div style="height: 50px; widght: 75px;">
         <button onclick="featureModal('${feature.id}')"  type="button" class="btn btn-outline-danger"><i class="p-2 fa-solid fa-arrow-right text-warning " data-bs-toggle="modal" data-bs-target="#features-modal"></i></button> 
        </div>
    </div>
    </div>

    `;
    featureContainer.appendChild(featureDiv);
})
}
showBtn.addEventListener('click', ()=>{
  showBtn.classList.add('d-none')
  loadFeatures(true)
})
  // spinner loaded here 
const spinnerWrapperEl = document.querySelector('.spinner-wraper')
window.addEventListener('load', ()=>{
  spinnerWrapperEl.style.opacity = '0';
  setTimeout(() => {
    spinnerWrapperEl.style.display = 'none';
  }, 200);
});
// allcard are show here 
const allFeatures = async() =>{
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  const res = await fetch(url);
  const data = await res.json();
  displayFeaturese(data.data.tools);
}
const displayFeaturese = features =>{
  const featureContainer = document.getElementById('Features-container');
  document.getElementById('btn-show-all').addEventListener('click', function(){
    // loadFeatures();
  })
  features.forEach(feature =>{
    const featureDiv = document.createElement('div');
    featureDiv.classList.add('col');
    featureDiv.innerHTML = `
    <div class="card h-100">
    <img src="${feature.image}" class="card-img-top img-fluid" alt="..." />
    <div class="card-body">
      <h5 id="card-title" class="card-title">Features</h5>
      <ol>
        <li class="${feature.features[0]=== undefined ? 'd-none': ''}"> ${feature.features[0]}</li>
        <li class="${feature.features[1]=== undefined ? 'd-none': ''}"> ${feature.features[1]}</li>
        <li class="${feature.features[2]=== undefined ? 'd-none': ''}"> ${feature.features[2]}</li>
        <li class="${feature.features[3]=== undefined ? 'd-none': ''}"> ${feature.features[3]}</li>
      </ol>
      <hr>
    <h5 id="card-name" class="card-title">${feature.name}</h5>
    <div class="d-flex justify-content-between">
      <div class="d-flex ">
        <p><i class="fa-solid fa-calendar-days"></i></p>
        <p id="time-container" class=" ms-2">${feature.published_in}</p>
        </div>
         <div style="height: 50px; widght: 75px;">
         <button  type="button" class="btn btn-outline-danger"><i class="fa-solid fa-arrow-right text-warning " data-bs-toggle="modal" data-bs-target="#features-modal"></i></button> 
        </div>
    </div>
    `;
    featureContainer.appendChild(featureDiv);
})
}
// show all card


// modal details 
const featureModal = async(id) =>{
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
  const res = await fetch(url);
  const data = await res.json();
  displayModal(data.data);
}

const displayModal = (item) => {
  console.log(item);
  const modalContainer = document.getElementById("modal-container");
  console.log(item.image_link[0]);
   modalContainer.innerHTML=`
   <div class="row-cols-2 row justify-content-center gap-4">
          <div class="card" style="width: 20rem;">
            
            <div class="card-body">
              <p class="card-text fw-bold">${item.description}</p>
              <div class=" w-100 h-50 d-flex justify-content-center align-items-center">
              <div class=" w-25 h-25"><h3 class="fs-semibold">${
                item.pricing ? item.pricing[0].price : "Free of Cost/"
              } ${item.pricing ? item.pricing[0].plan : "Basic"}</h3></div>
              <div class=" w-25 h-25 "><h3 class="fs-semibold">${
                item.pricing ? item.pricing[1].price : "Free of Cost/"} ${item.pricing ? item.pricing[1].plan : "Pro"}</h3></div>
              <div class=" w-25 h-25 "><h5 class="fs-semibold">${
                item.pricing ? item.pricing[2].price : "Free of Cost/"
              } ${item.pricing ? item.pricing[2].plan : "Enterprise"}</h5></div>
              </div>
            </div>
          </div>
          <div class="card" style="width: 20rem;">
      <img src="${item.image_link[0]}" class="card-img-top" alt="...">
     <div class="card-body">
     <h2 class="text-center fs-2">${
      item.input_output_examples
        ? item.input_output_examples[0].input
        : '<h2 class="text-center fw-semibold text-25">Not Yet! Take a break!!!<h2>'
    }</h2>
    <p class='fs-5'>${
      item.input_output_examples
        ? item.input_output_examples[0].output
        : "<p class='fs-2 text-center'>No! Not Yet! Take a break!!!</p>"
    }</p>
     </div>
    </div>

   `;
}

// modal end 


loadFeatures();