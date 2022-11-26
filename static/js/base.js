// Javascript to make navbar stickey on scroll at top
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 70) {
            document.getElementById('base_navbar').classList.add('fixed-top');
            document.getElementById('base_navbar').classList.add('bg-dark');
            document.getElementById('base_navbar').classList.remove('navbar_fix_top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';

        } else if (window.scrollY < 70) {
            document.getElementById('base_navbar').classList.remove('fixed-top');
            document.getElementById('base_navbar').classList.add('navbar_fix_top');
            if (screen.width > 993) {
                document.getElementById('base_navbar').classList.remove('bg-dark');
            }

            document.body.style.paddingTop = '0'
        } else {
            document.getElementById('base_navbar').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    if (screen.width < 993) {
        document.getElementById('base_navbar').classList.add('bg-dark')
        document.getElementById('nav_dropdown_div').classList.remove('mx-5')
    }
    window.addEventListener("resize", function () {
        if (this.screen.width < 992) {
            document.getElementById('base_navbar').classList.add('bg-dark')
            document.getElementById('nav_dropdown_div').classList.remove('mx-5')
        }
        else {
            document.getElementById('base_navbar').classList.remove('bg-dark')
            document.getElementById('nav_dropdown_div').classList.add('mx-5')
        }
    })
})

// $(function () {
//     $("li").click(function () {
//         // remove classes from all
//         $("li").removeClass("active");
//         // add class to the one we clicked
//         $(this).addClass("active");
//         // stop the page from jumping to the top
//         // return false 
//     });
// });

$(".nav .nav-link").on("click", function(){
    console.log('fired')
    $(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
 });