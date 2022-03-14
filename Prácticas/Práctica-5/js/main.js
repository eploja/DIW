function cargaContextoCanvas(idCanvas) {
    let elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        let contexto = elemento.getContext('2d');
        if (contexto) {
            return contexto;
        }
    }
}

window.onload = function () {
    let contexto = cargaContextoCanvas('micanvas');
    if (contexto) {
        todosCirculos = [];
        dibujar100Circulos();
        myInterval = setInterval(function () {
            dibujarCirculo();
        }, 100)
    }

    function dibujar100Circulos() {
        for (let i = 0; i < 100; i++) {
            let oPosicion = getRandomPosicion(),
                sColor = getRandomColor(),
                nRandomRadio = getRandom(500 / 2);

            todosCirculos.push({
                position: oPosicion,
                color: sColor,
                radius: nRandomRadio,
            })
        }
    }

    function dibujarCirculo() {
        contexto.clearRect(0, 0, 500, 500);
        for (let i in todosCirculos) {
            let tempData = todosCirculos[i],
                numRadio = getRandom(10);
            contexto.beginPath();
            contexto.fillStyle = tempData.color;
            contexto.arc(tempData.position.x, tempData.position.y, tempData.radius, 0, 2 * Math.PI, false);
            contexto.fill();
            contexto.stroke();
            contexto.closePath();

            tempData.radius = (tempData.radius - 1);

            if (tempData.radius < 0) {
                todosCirculos.splice(i, 1);
            }
            if (todosCirculos.splice === 0) {
                dibujar100Circulos();
            }


        }
    }

    function getRandom(p_max) {
        return Math.floor(Math.random() * p_max);
    }

    function getRandomPosicion() {
        let posX = getRandom(500),
            posY = getRandom(500);
        return {
            x: posX,
            y: posY
        };
    }

    function getRandomColor() {
        let colorHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', , 'E', 'F'],
            nLongitud = colorHex.length,
            sColor = '#';

        for (let i = 0; i < 6; i++) {
            let randonIndex = getRandom(nLongitud),
                myColor = colorHex[randonIndex];

            sColor += myColor;
        }

        return sColor;
    }
}