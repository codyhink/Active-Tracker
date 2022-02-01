const addWorkoutButton = document.querySelector("#submit");
const workoutCard = document.querySelectorAll(".card");
const formWrap = document.querySelector(".form-wrap");
const createWorkout = document.querySelector("#create");
const closeCreate = document.querySelector("#close");

workoutCard.forEach((card) => {
  card.addEventListener("click", (e) => {
    event.preventDefault();
    e.target.remove();
  });
});

addWorkoutButton.addEventListener("click", () => {
  event.preventDefault();
  let workoutName = document.querySelector("#workout-name").value;
  let workoutCategory = document.querySelector("#workoutCategory").value;

  console.log(workoutName, workoutCategory);
});

createWorkout.addEventListener("click", () => {
  formWrap.style.display = "block";
});

closeCreate.addEventListener("click", () => {
  formWrap.style.display = "none";
});
