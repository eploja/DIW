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
        posicionInicial();
        myInterval = setInterval(function() {
            mover();

        }, 1000)
        myInterval = setInterval(function() {
            posicionInicial();

        }, 2000)
    } 
    function posicionInicial(){

        let img = new Image();
        let img1 = new Image();
        img.src = "campo.jpg";
        img1.src = "rfaf.jpg";
        img.onload = function () {
            contexto.clearRect(0,0,1000,1000)

            // Imagen original
            contexto.drawImage(img, 0, 0,800,500);

            // Cabeza
            contexto.fillStyle = '#fdbcb4';
            contexto.fillRect(375, 135, 50, 50);
            contexto.fillStyle = '#FFFFFF';
            contexto.fillRect(382.5, 146.5, 11, 11);
            contexto.fillStyle = '#FFFFFF';
            contexto.fillRect(404.5, 146.5, 11, 11);
            contexto.fillStyle = '#000000';
            contexto.fillRect(385, 149, 6, 6);
            contexto.fillStyle = '#000000';
            contexto.fillRect(407, 149, 6, 6);
            
            // Cuerpo
            contexto.fillStyle = '#000000';
            contexto.fillRect(350, 185, 100, 140);
            contexto.fillStyle = '#FFFFFF';
            contexto.fillRect(360, 205, 25, 2);
            contexto.fillStyle = '#FFFFFF';
            contexto.fillRect(415, 205, 25, 2);
            
            // Imagen RFAF
            contexto.drawImage(img1, 415, 207.5, 25, 25);
            
            // Brazos
            contexto.fillStyle = '#fdbcb4';
            contexto.fillRect(320, 185, 30, 85);
            contexto.fillStyle = '#000000';
            contexto.fillRect(320, 185, 30, 20);
            contexto.fillStyle = '#fdbcb4';
            contexto.fillRect(450, 185, 30, 85);
            contexto.fillStyle = '#000000';
            contexto.fillRect(450, 185, 30, 20);

            // Piernas
            contexto.fillStyle = '#fdbcb4';
            contexto.fillRect(352.5, 355, 40, 60);
            contexto.fillStyle = '#fdbcb4';
            contexto.fillRect(407.5, 355, 40, 60);
            contexto.fillStyle = '#000000';
            contexto.fillRect(350, 325, 45, 35);
            contexto.fillStyle = '#000000';
            contexto.fillRect(405, 325, 45, 35);

            // Zapatos
            contexto.fillStyle = '#000000';
            contexto.fillRect(350, 415, 45, 30);
            contexto.fillStyle = '#000000';
            contexto.fillRect(405, 415, 45, 30);
            contexto.fillStyle = '#FFFFFF';
            contexto.fillRect(405, 440, 45, 5);
            contexto.fillStyle = '#FFFFFF';
            contexto.fillRect(350, 440, 45, 5);

            // Banderin
            contexto.fillStyle = '#000000';
            contexto.fillRect(332.5, 270, 5, 90);
            contexto.fillStyle = '#FFFB00';
            contexto.fillRect(302.5, 330, 30, 30);
            contexto.fillStyle = '#FF0000';
            contexto.fillRect(302.5, 300, 30, 30);
            contexto.fillStyle = '#FF0000';
            contexto.fillRect(272.5, 330, 30, 30);
            contexto.fillStyle = '#FFFB00';
            contexto.fillRect(272.5, 300, 30, 30);

        }
    }
        function mover() {
            let img = new Image();
            let img1 = new Image();
            img.src = "campo.jpg";
            img1.src = "rfaf.jpg";
            img.onload = function () {
                contexto.clearRect(0,0,1000,1000)
                // Imagen original
                contexto.drawImage(img, 0, 0,800,500);

                // Cabeza
                contexto.fillStyle = '#fdbcb4';
                contexto.fillRect(375, 135, 50, 50);
                contexto.fillStyle = '#FFFFFF';
                contexto.fillRect(382.5, 146.5, 11, 11);
                contexto.fillStyle = '#FFFFFF';
                contexto.fillRect(404.5, 146.5, 11, 11);
                contexto.fillStyle = '#000000';
                contexto.fillRect(385, 149, 6, 6);
                contexto.fillStyle = '#000000';
                contexto.fillRect(407, 149, 6, 6);
                
                // Cuerpo
                contexto.fillStyle = '#000000';
                contexto.fillRect(350, 185, 100, 140);
                contexto.fillStyle = '#FFFFFF';
                contexto.fillRect(360, 205, 25, 2);
                contexto.fillStyle = '#FFFFFF';
                contexto.fillRect(415, 205, 25, 2);
                
                // Imagen RFAF
                contexto.drawImage(img1, 415, 207.5, 25, 25);
                
                // Brazos
                contexto.fillStyle = '#fdbcb4';
                contexto.fillRect(320, 185, 30, -85);
                contexto.fillStyle = '#000000';
                contexto.fillRect(320, 185, 30, 20);
                contexto.fillStyle = '#fdbcb4';
                contexto.fillRect(450, 185, 30, 85);
                contexto.fillStyle = '#000000';
                contexto.fillRect(450, 185, 30, 20);

                // Piernas
                contexto.fillStyle = '#fdbcb4';
                contexto.fillRect(352.5, 355, 40, 60);
                contexto.fillStyle = '#fdbcb4';
                contexto.fillRect(407.5, 355, 40, 60);
                contexto.fillStyle = '#000000';
                contexto.fillRect(350, 325, 45, 35);
                contexto.fillStyle = '#000000';
                contexto.fillRect(405, 325, 45, 35);

                // Zapatos
                contexto.fillStyle = '#000000';
                contexto.fillRect(350, 415, 45, 30);
                contexto.fillStyle = '#000000';
                contexto.fillRect(405, 415, 45, 30);
                contexto.fillStyle = '#FFFFFF';
                contexto.fillRect(405, 440, 45, 5);
                contexto.fillStyle = '#FFFFFF';
                contexto.fillRect(350, 440, 45, 5);

                // Banderin
                contexto.fillStyle = '#000000';
                contexto.fillRect(332.5, 10, 5, 90);
                contexto.fillStyle = '#FFFB00';
                contexto.fillRect(302.5, 10, 30, 30);
                contexto.fillStyle = '#FF0000';
                contexto.fillRect(302.5, 40, 30, 30);
                contexto.fillStyle = '#FF0000';
                contexto.fillRect(272.5, 10, 30, 30);
                contexto.fillStyle = '#FFFB00';
                contexto.fillRect(272.5, 40, 30, 30);
            }
        }
}
