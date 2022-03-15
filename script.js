let order = [];
let clickedOrder = [];
let score = 0;


//0 - Vercer
//1 - Vermelho
//2 - Amarelo
//3 - Azil

const blue = document.querySelector('.blue');
const red = document.querySelector('.red')
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow')

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.radom()* 4)
    order [order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor 
    }
}