function rollTheDice() {
    let switchButton = document.querySelector('.button2');
    let roll = document.querySelector('.button1');
    let switcher = 0;
    let totalCountLeft = 0;
    let totalCountRight = 0;
    let scoreCountLeft = 0;
    let scoreCountRight = 0;
    let gameInterface = document.querySelector('.game_interface_main');
    let gameButtons = document.querySelector('.game_buttons');
    let congrats1 = document.querySelector('.congrats1');
    let congrats2 = document.querySelector('.congrats2');
    let currentPlayingLeft = document.querySelector('.game_interface_left_current_playing');
    let currentPlayingRight = document.querySelector('.game_interface_right_current_playing');

    switchButton.addEventListener('click', function() {
        if (switcher === 0) {
            switcher = 1;
        }
        else {
            switcher = 0;
        }
    })

    roll.addEventListener('click', function() {

       if (switcher === 0) { 
            let imgLeft = document.querySelector('.game_interface_image_left');
            let scoreLeft = document.querySelector('.toRenderScore1');
            let totalLeft = document.querySelector('.toRenderTotal1');
            let randomNumLeft;

            currentPlayingLeft.style.visibility = 'visible';
            currentPlayingRight.style.visibility = 'hidden';

            randomNumLeft = Math.floor(Math.random() * 6) + 1;

            switch(randomNumLeft) {
                case 1: {
                    imgLeft.setAttribute('src', 'images/1.png');
                    scoreCountLeft = 0;
                    scoreLeft.innerHTML = scoreCountLeft;
                    switcher = 1;
                    break;
                }
                case 2: {
                    imgLeft.setAttribute('src', 'images/2.png');
                    scoreLeft.innerHTML = randomNumLeft;
                    totalCountLeft += randomNumLeft;
                    totalLeft.innerHTML = totalCountLeft;
                    break;
                }
                case 3: {
                    imgLeft.setAttribute('src', 'images/3.png');
                    scoreLeft.innerHTML = randomNumLeft;
                    totalCountLeft += randomNumLeft;
                    totalLeft.innerHTML = totalCountLeft;
                    break;
                }
                case 4: {
                    imgLeft.setAttribute('src', 'images/4.png');
                    scoreLeft.innerHTML = randomNumLeft;
                    totalCountLeft += randomNumLeft;
                    totalLeft.innerHTML = totalCountLeft;
                    break;
                }
                case 5: {
                    imgLeft.setAttribute('src', 'images/5.png');
                    scoreLeft.innerHTML = randomNumLeft;
                    totalCountLeft += randomNumLeft;
                    totalLeft.innerHTML = totalCountLeft;
                    break;
                }
                case 6: {
                    imgLeft.setAttribute('src', 'images/6.png');
                    scoreLeft.innerHTML = randomNumLeft;
                    totalCountLeft += randomNumLeft;
                    totalLeft.innerHTML = totalCountLeft;
                    break;
                }
            }

            if (totalCountLeft >= 50) {
                gameInterface.style.display = 'none';
                gameButtons.style.display = 'none';
                congrats1.style.display = 'block';
            }
        }
        else {
            let imgRight = document.querySelector('.game_interface_image_right');
            let scoreRight = document.querySelector('.toRenderScore2');
            let totalRight = document.querySelector('.toRenderTotal2');
            let randomNumRight;

            currentPlayingLeft.style.visibility = 'hidden';
            currentPlayingRight.style.visibility = 'visible';

            randomNumRight = Math.floor(Math.random() * 6) + 1;

            switch(randomNumRight) {
                case 1: {
                    imgRight.setAttribute('src', 'images/1.png');
                    scoreCountRight = 0;
                    scoreRight.innerHTML = scoreCountRight;
                    switcher = 0;
                    break;
                }
                case 2: {
                    imgRight.setAttribute('src', 'images/2.png');
                    scoreRight.innerHTML = randomNumRight;
                    totalCountRight += randomNumRight;
                    totalRight.innerHTML = totalCountRight;
                    break;
                }
                case 3: {
                    imgRight.setAttribute('src', 'images/3.png');
                    scoreRight.innerHTML = randomNumRight;
                    totalCountRight += randomNumRight;
                    totalRight.innerHTML = totalCountRight;
                    break;
                }
                case 4: {
                    imgRight.setAttribute('src', 'images/4.png');
                    scoreRight.innerHTML = randomNumRight;
                    totalCountRight += randomNumRight;
                    totalRight.innerHTML = totalCountRight;
                    break;
                }
                case 5: {
                    imgRight.setAttribute('src', 'images/5.png');
                    scoreRight.innerHTML = randomNumRight;
                    totalCountRight += randomNumRight;
                    totalRight.innerHTML = totalCountRight;
                    break;
                }
                case 6: {
                    imgRight.setAttribute('src', 'images/6.png');
                    scoreRight.innerHTML = randomNumRight;
                    totalCountRight += randomNumRight;
                    totalRight.innerHTML = totalCountRight;
                    break;
                }
            }

            if (totalCountRight >= 50) {
                gameInterface.style.display = 'none';
                gameButtons.style.display = 'none';
                congrats2.style.display = 'block';
            }
        }  
    }) 
}

rollTheDice();