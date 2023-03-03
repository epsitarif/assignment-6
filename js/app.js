const loadTools = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayTools(data.data.tools);
}

const displayTools = tools =>{
    const toolsContainer = document.getElementById('tools-container');
     tools = tools.slice(0,6);
    tools.forEach(tool =>{
        const toolDiv = document.createElement('div');
        toolDiv.classList.add('col');
        toolDiv.innerHTML = `
        <div class="card">
                            <img src="${tool.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Features</h5>
                              <p class="card-text">${tool.features}</p>
                            </div>
                            <div class="card-footer border-0 bg-body">
                            <div> <p class"m-0 p-0">${tool.name}</p></div>
                            <div> <p class"m-0 p-0">${tool.published_in}</p></div>
                            <div>
                            <i class="fa-regular fa-arrow-right"></i>
                            </div>
                            </div>
                          </div>
        `;
        toolsContainer.appendChild(toolDiv);
    })
}  


loadTools();