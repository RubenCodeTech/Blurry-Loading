let loadingCharge = document.querySelector('.loading-text');
let backGround = document.querySelector('.bg');
let backGroundBlur = document.querySelector('.bgBlur');

let num = 0
function delay() {
    backGround.classList.add('bgBlur')
    setTimeout(() => {
        if (num < 100) {
            num++
            loadingCharge.innerHTML = num + "%"
        } else {
            loadingCharge.remove()
        }
        delay()
    }, 10);

}
delay()