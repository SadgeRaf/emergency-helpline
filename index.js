const elements = document.getElementsByClassName("call");
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(){
        const coins = parseInt(document.getElementById("coins").innerText);

        let new_coins = coins-20;
        if (new_coins>=20){
         document.getElementById("coins").innerHTML=new_coins + `<img class="max-w-5" src="/assets/coin.png">`;
         alert("Hello");
        } else 
            alert ("Cant");
            return;
    }); 
}


