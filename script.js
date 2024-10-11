// Mảng bài tập giả lập
const exercises = [
  {
    title: "Exercise Title 1",
    description:
      "Short description of Exercise 1. You need to implement a solution for this exercise.",
  },
  {
    title: "Exercise Title 2",
    description:
      "Short description of Exercise 2. This exercise requires a more complex solution.",
  },
  {
    title: "Exercise Title 3",
    description:
      "Short description of Exercise 3. This exercise is considered difficult.",
  },
];

// Hàm để cập nhật chi tiết bài tập
function updateExerciseDetails(index) {
  const exercise = exercises[index];
  const titleElement = document.getElementById("exercise-title");
  const descriptionElement = document.getElementById("exercise-description");
  const exerciseDetails = document.querySelector(".exercise-details");

  titleElement.textContent = exercise.title;
  descriptionElement.textContent = exercise.description;

  // Hiện phần chi tiết bài tập và khung viết code
  exerciseDetails.style.display = "block";
}

// Xử lý khi chọn bài tập
document.querySelectorAll(".choose-exercise").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
    const index = button.getAttribute("data-index");
    updateExerciseDetails(index); // Cập nhật thông tin bài tập được chọn
  });
});

// Xử lý sự kiện cho nút "Run"
document.getElementById("run-btn").addEventListener("click", () => {
  const code = document.getElementById("code").value;
  console.log("Running code:", code);
  // Thêm mã xử lý cho việc chạy code tại đây
});

// Xử lý sự kiện cho nút "Submit"
document.getElementById("submit-btn").addEventListener("click", () => {
  const code = document.getElementById("code").value;
  console.log("Submitting code:", code);
  // Thêm mã xử lý cho việc gửi code tại đây
});
