let bg = document.querySelector(".bg")
let statusEl = document.querySelector(".status")
let loading = 0


let run = setInterval(process, 30)
function process(){
    loading++

    statusEl.textContent = `${loading}%`
    if(loading>=100){
        clearInterval(run)
    }

    bg.style.filter = `blur(${scale(loading, 0, 100, 20, 0)}px) 
                    saturate(${(scale(loading, 0,100,0,100))}%)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}