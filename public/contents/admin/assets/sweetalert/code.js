$(document).on("click", "#delete", function(e){
    e.preventDefault();
    var link = $(this).attr("href");

    swal({
        title: "Are you sure To Delete?",
        text: "Once deleted, you will not be able to recover this data!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        })
        .then((willDelete) => {
        if (willDelete) {
            window.location.href = link;

        } else {
            // swal("Your imaginary file is safe!");
        }

    });
});

$(document).on("click", "#confirm", function(e){
    e.preventDefault();
    var link = $(this).attr("href");

    swal({
        title: "Are you sure To Confirm?",
        text: "Once Confirm, you will not go Back Step Again!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        })
        .then((willDelete) => {
        if (willDelete) {
            window.location.href = link;

        } else {
            // swal("Not Confirm!");
        }

    });
});

$(document).on("click", "#approve", function(e){
    e.preventDefault();
    var link = $(this).attr("href");

    swal({
        title: "Are you sure To This Income Approve?",
        // text: "Once Confirm, you will not go Back Step Again!",
        icon: "info",
        buttons: true,
        dangerMode: true,
        })
        .then((willDelete) => {
        if (willDelete) {
            window.location.href = link;

        } else {
            // swal("Not Confirm!");
        }

    });
});

$(document).on("click", "#sale", function(e){
    e.preventDefault();
    var link = $(this).attr("href");

    swal({
        title: "Are you sure To Sale This Order?",
        text:  "Once Confirm, you will not go Back Step Again!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        })
        .then((willDelete) => {
        if (willDelete) {
            window.location.href = link;

        } else {
            // swal("Not Confirm!");
        }

    });
});

$(document).on("click", "#order", function(e){
    e.preventDefault();
    var link = $(this).attr("href");

    swal({
        title: "Are you sure To Confrm?",
        text:  "Once Confirm, you will not go Back Step Again!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        })
        .then((willDelete) => {
        if (willDelete) {
            window.location.href = link;

        } else {
            // swal("Not Confirm!");
        }

    });
});

$(document).on("click", "#cancel", function(e){
    e.preventDefault();
    var link = $(this).attr("href");

    swal({
        title: "Are you sure To Cancel?",
        text:  "Once Cancel, you will not go Back Step Again!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        })
        .then((willDelete) => {
        if (willDelete) {
            window.location.href = link;

        } else {
            // swal("Not Cancel!");
        }

    });
});
