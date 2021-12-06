$("#drag").on("dblclick", move);

$("#zoom-in").on("click", function(e) {
    $("#drag img").width($("#drag img").width()+50);
    $("#drag img").height($("#drag img").height()+50);

    // $("#drag img").css({
    //     "-webkit-transform": "translate(50px, 100px)"
    // });
    // $("#drag").offset({
    //     top: $("#drag img").offset().left+50,
    //     left: $("#drag img").offset().top+50
    // })

});

$("#zoom-out").on("click", function(e) {
    $("#drag img").width($("#drag img").width()-50);
    $("#drag img").height($("#drag img").height()-50);
});


let x = y = 0;
let offset;

let maxX = $("#drag").width();
let maxY = $("#drag").height();

let offset2 = $("#container").offset();

function move(e) {
    offset = [
        $("#drag").offset().left - e.clientX - offset2.left,
        $("#drag").offset().top - e.clientY - offset2.top
        ];

    $("#drag").mousemove(function(e) {
        x = e.clientX+offset[0];
        y = e.clientY+offset[1];
        
        if ($("#drag img").offset().left/2 < $("#container").offset().left) {
            $("#drag").css({
                left: x
            });  
        
        }
        $("#drag").css({
            top: y
        })  
    });
    
}

$("#drag").on("click", function() {
    $("#drag").unbind("mousemove");
});

