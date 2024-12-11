$(document).ready(function () {
    // Smooth scrolling for navigation links
    $('.nav-menu a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            800
        );
    });

    // Form validation
    $('#contact-form').on('submit', function (e) {
        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();

        if (!name || !email || !message) {
            alert('Please fill in all fields');
            e.preventDefault();
        }
    });
});
