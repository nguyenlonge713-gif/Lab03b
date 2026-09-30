function ThemCongViec() {

    var input = document.getElementById("txtCongViec");

    var congViec = input.value.trim();

    if (congViec == "") {
        alert("Vui lòng nhập công việc!");
        return;
    }

    // Tạo thẻ li
    var li = document.createElement("li");


    var span = document.createElement("span");

    span.className = "congviec";
    span.innerHTML = congViec;

    span.onclick = function () {

        span.classList.toggle("hoanThanh");

    };

    // Tạo nút Xóa
    var button = document.createElement("button");

    button.className = "nutXoa";
    button.innerHTML = "Xóa";

    button.onclick = function () {

        li.remove();

    };
    li.appendChild(span);
    li.appendChild(button);
    document.getElementById("danhSach").appendChild(li);

  
    input.value = "";

    input.focus();
}