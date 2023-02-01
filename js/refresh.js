function refresh() {
    let refresh = document.querySelectorAll('.refresh');

    refresh[0].addEventListener('click', function() {
        location.reload();
    })

    refresh[1].addEventListener('click', function() {
        location.reload();
    })
}

refresh();