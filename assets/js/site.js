$(document).ready(function () {
    setTimeout(function () {
        $('#dangkydungthuModal').modal('show');
    }, 20000);

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

    $('#registrationForm').submit((e) => {
        e.preventDefault();

        const spreadsheets_api = 'https://sheetdb.io/api/v1/hyeb9o1o6347r';
        const data = new FormData($('#registrationForm')[0]);
        
        fetch(spreadsheets_api, {
            method: "POST",
            body: data
        })
        .then((response) => {
            console.log(response);

            $('#registrationForm')[0].reset();

            data.forEach(function(val, key, fD){
                // here you can add filtering conditions
                data.delete(key)
            });

            $('#dangkydungthuModal').modal('hide');
            setTimeout(function () {
                $('.modal-backdrop').remove();
                $('#dangkythanhcong').modal('toggle');
            }, 300);
        })
    })
});