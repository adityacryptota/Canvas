let canvas = document.querySelector('canvas');

canvas.width = (window.innerWidth) * 2;
canvas.height = (window.innerHeight) * 2;

canvas.style.width = "100vw";
canvas.style.height = "99vh";

let c = canvas.getContext('2d'); // c short for context.

c.scale(2, 2);

/* Drawing elements - 

// Drawing rectangle -  c.fillRect(x, y, width, height);

// Rectangle
c.fillStyle = 'blue'; // Filling the color inside the rectangle.
c.fillRect(10,10,10,10); // This fillrect will look at the previous color style and fill the rectangle with that color.

// line

c.beginPath();
c.moveTo(10, 30);
c.lineTo(40, 110);
c.strokeStyle = 'red'; // For coloring the line. Any CSS value
c.stroke();

// Arc / Circle
c.beginPath();
c.arc(300,10,5,0,Math.PI * 2, false);
c.stroke();

*/


// for(let i = 0; i < 100; i++){

//     let x = Math.floor(Math.random() * window.innerWidth);
//     let y = Math.floor(Math.random() * window.innerHeight);
//     let r = Math.floor(Math.random() * 50);
//     let red, blue, green;
//     red = Math.floor(Math.random()*256);
//     blue = Math.floor(Math.random()*256);
//     green = Math.floor(Math.random()*256);
//     c.beginPath();
//     c.arc(x,y,r,0,Math.PI * 2, false);
//     c.strokeStyle = `rgb(${red},${blue},${green})`;
//     c.stroke();
// }



function Circle(x, y, r, dx, dy, red, blue, green) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = r;
    this.red = red;
    this.blue = blue;
    this.green = green;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = `rgb(${this.red},${this.blue},${this.green})`;
        c.fill();
        this.update();
    }
    this.update = function () {
        if ((this.x + this.radius) > innerWidth || (this.x - this.radius) < 0) {
            this.dx = -this.dx;
        }

        if ((this.y + this.radius) > innerHeight || (this.y - this.radius) < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
    }
}



let circleArray = [];

for (let i = 0; i < 100; i++) {
    let red, blue, green;

    red = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    let radius = Math.floor(Math.random() * 50);
    let x = Math.floor(Math.random() * (window.innerWidth - radius * 2)) + radius;
    let dx = (Math.random() - 0.5) * 8;
    let y = Math.floor(Math.random() * (window.innerHeight - radius * 2)) + radius;
    let dy = (Math.random() * 0.5) * 8;
    circleArray.push(new Circle(x, y, radius, dx, dy, red, blue, green));
}




function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    circleArray.forEach(function (circle) {
        circle.draw();
    });

}

animate();