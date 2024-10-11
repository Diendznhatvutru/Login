// login.js
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form (nộp form)

    // Lấy giá trị từ các ô nhập
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // (Tùy chọn) Kiểm tra thông tin đăng nhập nếu cần. Hiện tại, chúng ta cho phép tất cả đăng nhập.
    if (email && password) {
      // Chuyển hướng tới trang dashboard
      window.location.href = "dashboard.html"; // Đường dẫn tới trang dashboard của bạn
    } else {
      // Hiển thị thông báo lỗi nếu không có thông tin
      document.getElementById("message").innerText =
        "Please enter valid credentials.";
    }
  });
