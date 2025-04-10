const randomColor= function () {

    const hex= "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++)
    {
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
    
}

let intr;

const startChangingColor = function() {

    intr = setInterval(() => {
        document.body.style.backgroundColor = randomColor();
    },1000);
    
};
const stopChangingColor = function(){
    clearInterval(intr);
};

const start = document.querySelector("#start").addEventListener("click", startChangingColor);
const stop = document.querySelector("#stop").addEventListener('click',stopChangingColor);
