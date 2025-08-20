document.addEventListener('DOMContentLoaded', () => {
    const terminalScreen = document.getElementById('terminalScreen');
    const codeArea = document.getElementById('codeArea');
    const revealedContent = document.getElementById('revealedContent');
    const initialText = document.querySelector('.initial-text');
    const photoCarousel = document.querySelector('.photo-carousel');
    let decoding = false;
    let currentPhotoIndex = 0;

    // Coloque os nomes das suas fotos aqui. A ordem será a da animação.
    const photoFiles = ['foto_1.jpeg', 'foto_2.jpeg', 'foto_3.jpeg', 'foto_4.jpeg', 'foto_5.jpeg', 'foto_6.jpeg', 'foto_7.jpeg', 'foto_8.jpeg', 'foto_9.jpeg', 'foto_10.jpeg', 'foto_11.jpeg', 'foto_12.jpeg', 'foto_13.jpeg'];

    // Gera as tags de imagem dinamicamente
    photoFiles.forEach((file, index) => {
        const img = document.createElement('img');
        img.src = file;
        img.alt = `Foto ${index + 1}`;
        img.className = 'photo';
        if (index === 0) {
            img.classList.add('active');
        }
        photoCarousel.appendChild(img);
    });

    const photos = document.querySelectorAll('.photo');

    // Mensagem real que será decodificada
    const realMessage = "Conexão estabelecida...\n\nCódigo binário decodificado:\n01000101 01101110 01100011 01101111 01101110 01110100 01110010 01100001 01100100 01101111 00100000 01100001 00100000 01101101 01100101 01101110 01110011 01100001 01100111 01100101 01101101...\n\n" +
                        "Feliz Aniversario Marisa Di Bonito, Meu Amor!\n\n" +
                        "Sistema operacional... pronto!! ( Com muito carinho e muitoooooooo amor )";

    const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?`~";

    function getRandomChar() {
        return randomChars[Math.floor(Math.random() * randomChars.length)];
    }

    function decodeText(targetText, speed) {
        let decodedText = '';
        let i = 0;
        const interval = setInterval(() => {
            if (i < targetText.length) {
                decodedText = targetText.substring(0, i + 1) + Array(targetText.length - i - 1).fill().map(() => getRandomChar()).join('');
                codeArea.textContent = decodedText;
                i++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    revealedContent.style.opacity = 1;
                    codeArea.style.display = 'none';
                    initialText.style.display = 'none';
                    startPhotoCarousel();
                }, 1000);
            }
        }, speed);
    }

    function startPhotoCarousel() {
        setInterval(() => {
            photos[currentPhotoIndex].classList.remove('active');
            currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
            photos[currentPhotoIndex].classList.add('active');
        }, 3000); // 3 segundos para trocar de foto
    }

    terminalScreen.addEventListener('click', () => {
        if (!decoding) {
            decoding = true;
            initialText.style.opacity = 0;
            codeArea.style.opacity = 1;
            decodeText(realMessage, 30);
        }
    });

});


