$(document).ready(function () {
    // const openRegisterModal =  setTimeout(function () {
    //     $('#dangkydungthuModal').modal('show');
    // }, 20000);

    $(".rotate1").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('lnk-color');
        $(this).closest('.section7-toggle').find('.collapse').slideToggle();
        $(this).toggleClass("down");
    });

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    $(".tooltip-hover").hover(function () {
        $(".tooltip").attr('data-color', $(this).data("color"));
    });

    // $(".btn-table-price").click(function(){
    //     $(".collapse-table-price").toggleClass("show");
    // }); 

    $(".pricing-table .carousel").slick({
        arrows: false,
        centerMode: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    customPaging: function(slick,index) {
                        var carouselTitle = [
                            "Dưới 20 nhân sự",
                            "Từ 21-100 nhân sự",
                            "Từ 101 -300 nhân sự",
                            "Từ 300 nhân sự trở lên"
                        ];
                        return `<button type="button" class="slick-btn">${carouselTitle[index]}</button>`; 
                    },
                    autoplay: false,
                    centerMode: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    customPaging: function(slick,index) {
                        var carouselTitle = [
                            "Dưới 20 nhân sự",
                            "Từ 21-100 nhân sự",
                            "Từ 101 -300 nhân sự",
                            "Từ 300 nhân sự trở lên"
                        ];
                        return `<button type="button" class="slick-btn">${carouselTitle[index]}</button>`; 
                    },
                    autoplay: false,
                    centerMode: false,
                    slidesToShow: 1.5,
                }
            },
        ]
    });

    $('#registrationForm').submit((e) => {
        e.preventDefault();

        const spreadsheets_api = 'https://sheetdb.io/api/v1/xb1uos951uws6';
        const data = new FormData($('#registrationForm')[0]);
        
        fetch(spreadsheets_api, {
            method: "POST",
            body: data
        })
        .then((response) => {
            console.log(response);

            $('#registrationForm')[0].reset();

            data.forEach(function(val, key, fD){
                data.delete(key)
            });

            $('#dangkydungthuModal').modal('hide');
            
            setTimeout(function () {
                $('.modal-backdrop').remove();
                $('#dangkythanhcong').modal('toggle');
            }, 300);

            clearTimeout(openRegisterModal);
        })
    })
});