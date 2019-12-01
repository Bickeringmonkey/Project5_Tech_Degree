$(document).ready(function(){
    let images = document.getElementsByTagName('a');
        $("#search").on('keyup', function() {
            let search = $('#search').val().toLowerCase();
            for (var i = 0; 1 < images.length; i++) {
                let searchVal = images[i].getAttribute('data-title');
            }
        });
});