function HienThiDongHo() {

    var now = new Date();

    var gio = now.getHours();
    var phut = now.getMinutes();
    var giay = now.getSeconds();


    if (gio < 10) {
        gio = "0" + gio;
    }

    if (phut < 10) {
        phut = "0" + phut;
    }

    if (giay < 10) {
        giay = "0" + giay;
    }
    document.getElementById("dongHo").innerHTML =
        gio + ":" + phut + ":" + giay;
}

HienThiDongHo();
setInterval(HienThiDongHo, 1000);