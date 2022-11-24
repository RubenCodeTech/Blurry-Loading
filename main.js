let loadingCharge = document.querySelector('.loading-text');

// let timeOut = setTimeout(timeLoading, 1000);
// function timeLoading(){

// }
let num = 0
function delay(){
    setTimeout(()=>{
        if(num<100){
            num++ 
            loadingCharge.innerHTML = num + "%"
            delay() 
        } 
    }, 10);
}
delay()
// const countArray = Array(100).fill(1).map((n, i) => n + i);
// // loadingCharge.textContent =  countArray
// // console.log(countArray)
// for (let i = 0; i < countArray.length; i++) {
//     setInterval(function(){
//         loadingCharge.innerHTML = [i]
//     }, 1000);
// }
// function timer(){
//     let counter = 0;
//     let a = 0;
//     let i = setInterval(function(){
//                counter++;
//                a++;

//                if(counter == 101){
//                 clearInterval(i);
//                }
//             }, 50);
//     }

// const main = document.querySelector('.bg');
// const span = document.querySelector('.loading-text');

// // main.setAttribute("style", "filter: blur(10px)");

// let blurRatio = 100;

// const init = () => {
//     setInterval(() => {
//     if(blurRatio >= 0){
//         // const blurValue = blurRatio / 10;
//         // main.removeAttribute("style");
//         // main.setAttribute("style", `filter: blur(${blurValue}px);`);
//         blurRatio -= 1;
//         span.innerText = blurRatio >= 0 ? `${100 - blurRatio}%` : "100%";
//     }
//     // else {
//     //     span.setAttribute("style", "display: none");
//     //     return
//     // }
// }, 10);
// }

// init();