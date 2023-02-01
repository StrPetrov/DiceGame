function submit() {
    let player1;
    let player2;
    let submit1 = document.querySelector('.form_player_1');
    let submit2 = document.querySelector('.form_player_2');
    let form1 = document.querySelector('.main_container_form_1');
    let form2 = document.querySelector('.main_container_form_2');
    let three = document.querySelector('.three');
    let two = document.querySelector('.two');
    let one = document.querySelector('.one');
    let zero = document.querySelector('.zero');
    let gameInterfaceMain = document.querySelector('.game_interface_main');
    let elementToRender1 = document.querySelector('.toRender1');
    let elementToRender2 = document.querySelector('.toRender2');
    let gameButtons = document.querySelector('.game_buttons');

    submit1.addEventListener('submit', function(event) {
        event.preventDefault();
        form1.style.display = 'none';
        form2.style.display = 'flex';

        player1 = document.getElementById('player1').value;
    })
    
    submit2.addEventListener('submit', function(event) {
        event.preventDefault();
        form2.style.display = 'none';

        player2 = document.getElementById('player2').value;

        three.style.animation = 'three 1s linear';
        two.style.animation = 'two 2s linear';
        one.style.animation = 'one 3s linear';
        zero.style.animation = 'zero 4s linear';

        zero.addEventListener('animationend', function() {
            gameInterfaceMain.style.display = 'flex';
            gameButtons.style.display = 'block';
        })
        
        elementToRender1.innerHTML = player1;
        elementToRender2.innerHTML = player2;
    })
}

submit();

