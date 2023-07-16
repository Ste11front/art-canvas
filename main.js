const canvas = document.getElementById("canvas1");

const ctx = canvas.getContext("2d");

const rectArray = [];

for (let i = 0; i < 100; i++) {
    const rect = Rect.random(canvas.width, canvas.height);
    rectArray.push(rect);  
}

console.log(rectArray);

function moveAll(){
    for (const rect of rectArray) {
        rect.animate(canvas.width, canvas.height);
        rect.draw(ctx);
    }
    requestAnimationFrame(moveAll);
}

requestAnimationFrame(moveAll);