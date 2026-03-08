const cardContainer = document.getElementById("card-container");
const loadingSpinner = document.getElementById("loading-spinner");
const allButton = document.getElementById("all-btn");
const openButton = document.getElementById("open-btn");
const closedButton = document.getElementById("closed-btn");

let allIssues = [];

function showLoading (){
    loadingSpinner.classList.remove("hidden");
    loadingSpinner.classList.add("flex");
    cardContainer.innerHTML = "";
}


function hideLoading(){
    loadingSpinner.classList.add("hidden");
    loadingSpinner.classList.remove("flex");
}


async function loadCard(){
    showLoading();
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    allIssues = data.data;
    hideLoading();
    displayCards(allIssues);
    setActiveButton(allButton);
}


function displayCards(cards){
    cardContainer.innerHTML = "";
   //console.log(cards);
   document.getElementById("total-issue").innerText = `${cards.length} Issues`;

   cards.forEach((cards) => {
    console.log(cards);

    const card = document.createElement("div");
    const isOpen = cards.status === "open";
    const borderClass = isOpen ? "border-t-green-500" : "border-t-purple-500";
    card.className = `card bg-white border border-base-200 rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md  w-[257px] border-t-4 ${borderClass}`;
    card.innerHTML = `
    <div onclick="loadIssueDetail(${cards.id})" class="p-5">
        <div class="flex justify-between items-center mb-4">
            <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <i class="fa-solid fa-circle-check text-green-500 text-[10px]"></i>
            </div>
            <span class="px-3 py-1 bg-red-50 text-red-500 text-[10px] font-bold rounded-full uppercase">${cards.priority}</span>
        </div>

        <h3 class="font-bold text-slate-800 leading-tight mb-2 h-[40px] line-clamp-2">
            ${cards.title}
        </h3>
        <p class="text-xs text-slate-500 line-clamp-2 mb-4">
            ${cards.description}
        </p>

        <div class="flex flex-wrap gap-2 mb-6">
    ${cards.labels.map(label => {
    
        let colorClass = "bg-slate-100 text-slate-600 border-slate-200";
        let iconClass = "fa-tag";

        if (label.toLowerCase() === 'bug') {
            colorClass = "bg-red-50 text-red-500 border-red-100";
            iconClass = "fa-bug";
        } else if (label.toLowerCase() === 'help wanted') {
            colorClass = "bg-amber-50 text-amber-600 border-amber-100";
            iconClass = "fa-life-ring";
        } else if (label.toLowerCase() === 'enhancement') {
            colorClass = "bg-emerald-50 text-emerald-600 border-emerald-100";
            iconClass = "fa-star";
        }

        return `
            <div class="flex items-center gap-1 px-2 py-1 ${colorClass} rounded-full text-[10px] font-medium border uppercase">
                <i class="fa-solid ${iconClass} text-[8px]"></i> ${label}
            </div>
        `;
    }).join("")}
</div>

        <div class="pt-4 border-t border-slate-100">
            <p class="text-[11px] text-slate-400">#${cards.id} by <span class="text-slate-600 font-medium">${cards.author}</span></p>
            <p class="text-[11px] text-slate-400">${cards.createdAt}</p>
        </div>
    </div>
    `;
    cardContainer.appendChild(card);
   });
}



function setActiveButton(activeBtn) {
    const buttons = [allButton, openButton, closedButton];
    
    buttons.forEach(btn => {
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-outline");
        btn.classList.add("focus:outline-none", "focus:ring-0", "active:outline-none");
    });

    activeBtn.classList.remove("btn-outline");
    activeBtn.classList.add("btn-primary");
}

allButton.addEventListener("click", () => {
    setActiveButton(allButton); 
    showLoading();
    displayCards(allIssues);
    hideLoading();
});

openButton.addEventListener("click", () => {
    setActiveButton(openButton); 
    showLoading();
    const openIssues = allIssues.filter(issue => issue.status === "open");
    displayCards(openIssues);
    hideLoading();
});

closedButton.addEventListener("click", () => {
    setActiveButton(closedButton); 
    showLoading();
    const closedIssues = allIssues.filter(issue => issue.status === "closed");
    displayCards(closedIssues);
    hideLoading();
});


const loadIssueDetail = async(id) =>{
   const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
   //console.log(url);
   const res = await fetch(url);
   const data = await res.json();
   displayIssueDetails(data.data);
};


const displayIssueDetails= (issue) =>{
 console.log(issue);
 const detailsBox = document.getElementById("details-container");
 const isOpen = issue.status === "open";
    const borderClass = isOpen ? "bg-emerald-500" : "bg-purple-500";
 detailsBox.innerHTML = `
 <h2 class="text-2xl font-bold text-slate-800 mb-3">${issue.title}</h2>
      
      <div class="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <span class="px-3 py-1 ${borderClass} text-white rounded-full text-xs font-semibold">${issue.status}</span>
        <span>• Opened by <span class="font-medium text-slate-700">${issue.author}</span></span>
        <span>•${issue.createdAt}</span>
      </div>
      
      <div class="flex flex-wrap gap-2 mb-8">
      ${issue.labels.map(label => {
    
        let colorClass = "bg-slate-100 text-slate-600 border-slate-200";
        let iconClass = "fa-tag";

        if (label.toLowerCase() === 'bug') {
            colorClass = "bg-red-50 text-red-500 border-red-100";
            iconClass = "fa-bug";
        } else if (label.toLowerCase() === 'help wanted') {
            colorClass = "bg-amber-50 text-amber-600 border-amber-100";
            iconClass = "fa-life-ring";
        } else if (label.toLowerCase() === 'enhancement') {
            colorClass = "bg-emerald-50 text-emerald-600 border-emerald-100";
            iconClass = "fa-star";
        }

        return `
            <div class="flex items-center gap-1 px-2 py-1 ${colorClass} rounded-full text-[10px] font-medium border uppercase">
                <i class="fa-solid ${iconClass} text-[8px]"></i> ${label}
            </div>
        `;
    }).join("")}
      </div>
      <p class="text-slate-500 text-sm leading-relaxed mb-10">
        ${issue.description}
      </p>

      <div class="bg-slate-50 rounded-2xl p-6 flex justify-between items-center mb-6 border border-slate-100">
        <div>
          <p class="text-slate-400 text-xs font-medium uppercase mb-2">Assignee:</p>
          <p class="font-bold text-slate-800">${issue.author}</p>
        </div>
        <div class="text-right">
          <p class="text-slate-400 text-xs font-medium uppercase mb-2">Priority:</p>
          <span class="px-4 py-1.5 bg-red-500 text-white text-[10px] font-black rounded-full uppercase italic">${issue.priority}</span>
        </div>
      </div>`;

document.getElementById("my_modal_5").showModal();

}

document.getElementById("search-btn").addEventListener("click", () => {
    const input = document.getElementById("search-box");
    const searchValue = input.value.trim().toLowerCase();
    
    if (searchValue === "") {
        displayCards(allIssues); 
        return;
    }

    showLoading(); 

    
    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`)
    .then((res) => res.json())
    .then((data) => {
        hideLoading();
        
        if (data.data && data.data.length > 0) {
            displayCards(data.data);
        } else {
            cardContainer.innerHTML = "<p class='text-center w-full mt-10'>No issues found!</p>";
            document.getElementById("total-issue").innerText = "0 Issues";
        }
    })

});
 
loadCard();
