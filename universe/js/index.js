const aiHubCategories = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => displayAiHub(data.data))
};

const displayAiHub = data => {
    // console.log(data);
    // capture categories container to append all the category links 
    const aiHubContainer = document.getElementById('aiHub-container');

    // Display 6 AI hub only 
    // data.tools = data.tools.slice(0,6);
    data.tools.forEach(aiHubCategory => {
        // console.log(aiHubCategory);
        const aiHubDiv = document.createElement('div');
        aiHubDiv.classList.add('col');
        aiHubDiv.innerHTML = `
    <div style="height:100%" class="card my-8 bg-info-subtle p-4">
                      <img src="${aiHubCategory.image}" class="card-img-top " alt="...">
                      <div class="card-body">
                        <h5 class="card-title font-bold">Features:</h5>
                        <ul>
                            <li>1. ${aiHubCategory.features[0]}</li>
                            <li>2. ${aiHubCategory.features[1]}</li>
                            <li>3. ${aiHubCategory.features[2]}</li>
                        </ul>
                        <hr class="my-4">
                        <h5 class="card-title font-bold">${aiHubCategory.name}</h5>
                        <div class="d-flex justify-content-between">
                        <p><i class="fa-regular fa-calendar-days"></i>  ${aiHubCategory.published_in}</p>
                        <button onclick="loadAiHubDetails(${aiHubCategory.dataAiHub})" type="button" class="btn " data-bs-toggle="modal" data-bs-target="#aiHubDetails">
                        <i class="fa-solid fa-circle-right"></i>
                        </button> 
                        </div>
                      </div>
                    </div>
    
    `;
        aiHubContainer.appendChild(aiHubDiv);
    });

    // stop spinner or loader 
    toggleSpinner(false);
}

document.getElementById('btn-sort-date').addEventListener('click', function () {
    // start spinner or loader 
    toggleSpinner(true);
    const sortField = document.getElementsByClassName('btn');
    const sortSearch = sortField.value;
    aiHubCategories(sortSearch);

})

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none')
    }
    else {
        loaderSection.classList.add('d-none');
    }
}

const loadAiHubDetails = dataAiHub =>{
//     const url = `https://openapi.programming-hero.com/api/ai/tool/${dataAiHub}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayAiHubDetails(data.data));

// } 

// const displayAiHubDetails = data =>{
// document.getElementById('aiHubDetailsLabel').innerText = data.data.tools_name;
// const aiHubDetails = document.getElementById('aiHubDetailsBody');
// aiHubDetails.innerHTML = `
//                 <div>
                
//                 </div>


// `
}