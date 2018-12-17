$("#aktip").hide(0);
$("#jajal").hide(0);
$("document").ready(function(){
        document.getElementById('title').innerHTML = window.location.hostname + " | Home";
        $("#pcbgratis").click(function(){
            $("#katakata").text("Dimulai dengan Ngincipi");
            $("#jajal").text("MULAI");
            $("#aktip").hide(0);
            $("#jajal").show(0)
        });
        $("#pharian").click(function(){
            $("#katakata").text("Anda dapat terhubung sesuai dengan kebutuhan");
            $("#aktip").text("AKTIFKAN");
            $("#aktip").show(0);
            $("#jajal").hide(0);
        });
        $("#pmingguan").click(function(){
            $("#katakata").text("Atur Penjadwalan lebih terperinci");
            $("#aktip").text("AKTIFKAN");
            $("#aktip").show(0);
            $("#jajal").hide(0);
        });
        $("#pbulanan").click(function(){
            $("#katakata").text("Jadikan kawasan sebagai zona potensial atas kenyamanan anda");
            $("#aktip").text("AKTIFKAN");
            $("#aktip").show(0);
            $("#jajal").hide(0);
        });
        $("#pgabung").click(function(){
            $("#katakata").text("Turut andil dalam pembangunan Internet Indonesia");
            $("#aktip").text("JOIN");
            $("#aktip").show(0);
            $("#jajal").hide(0);
        });
    });