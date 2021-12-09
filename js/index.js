document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#burger').addEventListener('click', function () {
        document.querySelector('#menu').classList.toggle('is-active')
    })

    const swiper = new Swiper('.swiper', {
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,

        },
    });

    document.querySelectorAll('.work_button-a').forEach(function(workBtn) {
        workBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.work_button-a').forEach(function(workBtnA) {
                workBtnA.classList.remove('work_button-a-active')
            });

            this.classList.toggle('work_button-a-active')

            document.querySelectorAll('.work_consultation').forEach(function(tabsBtn){
                tabsBtn.classList.remove('work-consultatiton-active')
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('work-consultatiton-active')
        })
    });

    
        

    $( function() {
        $( "#accordion" ).accordion();
    });

    $('.accordion-list').accordion({
        active: false,
        collapsible: true,
        header: ".accordion-item__button",
        heightStyle: "content",
        icons: {
            header: "accordion-item__accord", 
            activeHeader: "accordion-item__accord accordion-item__accord-active"
        }
    });
});