let startGame = document.querySelector('.start-game');
startGame.onclick = function() {
    let config = {
        DURATION: 30,
        TIMER: 5,
        ALPHABET: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        LEVELS: [
            { id: 1, label: 'Lvl 1', range: [1, 3] },
            { id: 2, label: 'Lvl 2', range: [1, 3] },
            { id: 3, label: 'Lvl 3', range: [1, 3] },
            { id: 4, label: 'Lvl 4', range: [2, 4] },
            { id: 5, label: 'Lvl 5', range: [2, 4] },
            { id: 6, label: 'Lvl 6', range: [2, 4] },
            { id: 7, label: 'Lvl 7', range: [3, 5] },
            { id: 8, label: 'Lvl 8', range: [3, 5] },
            { id: 9, label: 'Lvl 9', range: [3, 5] },
            { id: 10, label: 'Lvl 10', range: [3, 5] },
            { id: 11, label: 'Lvl 11', range: [3, 5] },
            { id: 12, label: 'Lvl 12', range: [4, 6] },
            { id: 13, label: 'Lvl 13', range: [4, 6] },
            { id: 14, label: 'Lvl 14', range: [4, 6] },
            { id: 15, label: 'Lvl 15', range: [4, 6] },
            { id: 16, label: 'Lvl 16', range: [4, 6] },
            { id: 17, label: 'Lvl 17', range: [5, 7] },
            { id: 18, label: 'Lvl 18', range: [5, 7] },
            { id: 19, label: 'Lvl 19', range: [5, 7] },
            { id: 20, label: 'Lvl 20', range: [5, 7] },
        ]
    }
    let i = 0;
    let range = config.LEVELS[i].range;
    let levels = config.LEVELS[i];
        
        
    section = document.querySelector(`section`);
    section.innerHTML = `
            <h1 class="timer"></h1>
            <p class="lvl">${levels.label} </p>
            <div>
                <span class="generate-letter"></span>
                <span class="generate-number"></span>
            </div>
            <div class="box top-left"></div>
            <div class="box top-right"></div>
            <div class="box bottom-left"></div>
            <div class="box bottom-right"></div>
            `;

         // timer
        const time = document.querySelector(`.timer`);
        let duration = +JSON.stringify(config.DURATION);
    
        displayTime(duration);
        
        const countDown = setInterval (() => {
            duration--;
            displayTime(duration);
            if(duration <= 0) {
                endTime();
                clearInterval(countDown);
            }
        }, 1000);
    
        function displayTime(second) {
            const min = Math.floor(second / 60);
            const sec = Math.floor(second % 60);
            time.innerHTML = `${min < 10 ? `0` : ``}${min}:${sec < 10 ? `0` : ``}${sec}`;
        }
        function endTime() {
            time.innerHTML = `TIME OUT`;
        }

    let boxes = document.querySelectorAll(`.box`);
    boxes.forEach((e) => {
        (e.addEventListener)('click', () => {

        // const eventListener = (e.addEventListener || startGame)(`click`, () => {
        
            let alphabet = config.ALPHABET;
            let generatedNumber = document.querySelector(`.generate-number`);
            let generateLetter = document.querySelector(`.generate-letter`);

            // Random Integer
            function randomInteger(min, max) {
                let rand = min + Math.random() * (max + 1 - min);
                return Math.floor(rand);
            }

            for (i = 0; i < boxes.length; i++) {
                boxes[i].innerHTML = alphabet[randomInteger(0, alphabet.length-1)];
            }
            generateLetter.innerHTML = alphabet[randomInteger(0, alphabet.length-1)];
            generatedNumber.innerHTML = randomInteger(range[0], range[1]);

            // e.removeEventListener(`click`, eventListener);
        
            trueAnswer = randomInteger(0, boxes.length -1);
            boxes[trueAnswer].classList.add(`trueAnswer`);
            console.log(trueAnswer);

            if(answer === trueAnswer) {
                duration = duration + timer;
                id++;
            } else {
                duration = duration - timer;
            }
        });
    });
} 


