$(document).ready(function () {
    setTimeout(function () {
        $('#dangkydungthuModal').modal('toggle');
    }, 2000);

    $(".rotate1").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('lnk-color');
        $(this).closest('.section7-toggle').find('.collapse').slideToggle();
        $(this).toggleClass("down");
    });

    $("#btnDangky").click(function () {
        $('#dangkydungthuModal').modal('toggle');
        setTimeout(function () {
            $('.modal-backdrop').remove();
            $('#dangkythanhcong').modal('toggle');
        }, 300);
    });

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    $(".tooltip-hover").hover(function () {
        $(".tooltip").attr('data-color', $(this).data("color"));
    });

    $(".btn-table-price").click(function(){
        $(".collapse-table-price").toggleClass("show");
    }); 

    $("#section1_5 .tabs .tab-item").each(function (index) {
        const pane = $(`#section1_5 .tab-content .tab-pane.tab-${index + 1}`);
        $(this).click(function (e) {
            $("#section1_5 .tabs .tab-item.active").removeClass("active");
            $("#section1_5 .tab-content .tab-pane.active").removeClass("active");

            $(this).addClass("active");
            pane.addClass("active");
        })
    })
});