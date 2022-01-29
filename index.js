let discount = 1;
let price = 16;

document.querySelector('.slider').addEventListener("input", (e)=>{
    if(e.target.value < 9){
        views = "10K";
        price = 8;
    }else if(e.target.value < 13){
        views = "50K";
        price = 12;
    }else if(e.target.value < 17){
        views = "100K";
        price = 16;
    }else if(e.target.value < 21){
        views = "500K";
        e.target.value = 20;
        price = 24;
    }else if(e.target.value < 25){
        views = "1M";
        e.target.value = 24;
        price = 36;
    }
    document.querySelector('.view-count').innerHTML = `${views}`;
    document.querySelector('.price').innerHTML = `$${price*discount}.00`;
})
document.querySelector(".toggle-button").addEventListener('click', ()=>{
    if(document.querySelector('.toggle-container').classList.contains("on")){
        document.querySelector('.toggle-container').classList.remove("on");
        discount = 1;
        document.querySelector('.price').innerHTML = `$${price*discount}.00`;
    }else{
        discount = 0.75;
        document.querySelector('.toggle-container').classList.add("on");
        document.querySelector('.price').innerHTML = `$${price*discount}.00`;
    }
})