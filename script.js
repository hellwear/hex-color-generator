const body = document.querySelector('.body');
const subText = document.querySelector('.sub-text');

function randGen(){
    const symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let color = '#';
    while (color.length < 7) {
        let rand = Math.floor(Math.random() * symbols.length);
        color = color + symbols[rand];
    }
    body.style.background = String(color);
    subText.innerHTML = String(color);

    return color;
}

function randGrad(){
    const symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    const vectors = ['right', 'top', 'left', 'bottom'];
    let color1 = '#';
    let color2 = '#';
    let vector = 'to ';

    let randVector = Math.floor(Math.random() * vectors.length);
    vector = vector + vectors[randVector];

    while (color1.length < 7) {
        let rand = Math.floor(Math.random() * symbols.length);
        color1 = color1 + symbols[rand];
    }

    while (color2.length < 7) {
        let rand = Math.floor(Math.random() * symbols.length);
        color2 = color2 + symbols[rand];
    }

    let colors = [color1, color2];

    let colorStr = `linear-gradient(${vector}, ${String(colors[0])}, ${String(colors[1])})`;

    body.style.background = colorStr;
    subText.innerHTML =  `background: ${colorStr}`;

    return colors;
}