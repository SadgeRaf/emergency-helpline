const callHistory = [];

//call coins

const elements = document.getElementsByClassName("call");
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(){
        const coins = parseInt(document.getElementById("coins").innerText);

        let new_coins = coins-20;
        if (new_coins>=20){
         document.getElementById("coins").innerHTML=new_coins + `<img class="max-w-5" src="/assets/coin.png">`;
         

         const parentCard = this.closest(".p-6");
         const serviceName = parentCard.querySelector("h3").innerText;
         const serviceNumber = parentCard.querySelector("h1").innerText;

         const historyData = {
            name: serviceName,
            number: serviceNumber,
            date: new Date().toLocaleTimeString(),
         };   

         callHistory.push(historyData);
         const historyContainer = document.getElementById("history-container")
         for (data of callHistory){
            const div = document.createElement("div");
            div.innerHTML=`<div class="w-[352px] h-20 bg-gray-100 flex items-center justify-between mx-6 mt-2 rounded-xl">
                <div class="m-4">
                  <h1 class="text-xl font-bold">${historyData.name}</h1>
                  <p>${historyData.number}</p>
                </div>
                  <p id="" class="mx-4">${historyData.date}</p>`


            historyContainer.appendChild(div);  
            
          alert(`Calling ${serviceName} at ${serviceNumber}`);  
         }

         

        } else 
            alert ("Not sufficient coins!");
            return;

            
    }); 
}


//heart
const hearts = document.getElementsByClassName("fa-heart");
for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function(){
        const heart =  parseInt(document.getElementById("heart").innerText);
        let new_heart = heart+1;
        document.getElementById("heart").innerHTML=new_heart + `<img class="max-w-5" src="/assets/heart.png">`;
    });
}
    
// copy

const copyButtons = document.getElementsByClassName("copy");
for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", function () {
        // 1) Find the number inside the same card
        const parentCard = this.closest(".p-6"); 
        const number = parentCard.querySelector("h1").innerText; 

        // 2) Copy number to clipboard
        navigator.clipboard.writeText(number).then(() => {
        alert("Number copied");

        const copy = parseInt(document.getElementById("copies").innerText);

        let new_copy = copy+1;

        document.getElementById("copies").innerHTML=new_copy + ` <span>Copy</span></p>`;

        });
    });
}

const clearBtn = document.getElementById("clear-history");
clearBtn.addEventListener("click", function () {

  callHistory.length = 0;


  const historyContainer = document.getElementById("history-container");
  historyContainer.innerHTML = "";
});