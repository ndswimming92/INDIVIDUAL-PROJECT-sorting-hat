// list of students
const students = [];

// list of expelled students
const expelledStudents = [];

const houseColors = {
  Gryffindor: "#D32F2F",
  Hufflepuff: "#FFC107",
  Ravenclaw: "#03A9F4",
  Slytherin: "#4CAF50",
};

// Sorting the student into a house
function sortStudent(studentName) {
  const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
  const house = houses[Math.floor(Math.random() * houses.length)];

  const student = {
    name: studentName,
    house: house,
  };

  students.push(student);

  // Updating student list in the UI
  updateStudentList();
}

// Function to update the student and expelled student lists in the UI
function updateStudentList() {
  const studentList = document.getElementById("student-list");
  const expelledStudentList = document.getElementById("expelled-students");

  // Lists being cleared
  studentList.innerHTML = "";
  expelledStudentList.innerHTML = "";

  // Iterate through the students and update the lists
  students.forEach((student) => {
    const li = document.createElement("li");
    li.textContent = student.name + " - " + student.house;

    const expelButton = document.createElement("button");
    expelButton.textContent = "Expel Student!";
    expelButton.classList.add("btn", "btn-danger", "mx-2");

    // Expelling the students
    expelButton.addEventListener("click", () => {
      expelStudent(student);
    });

    li.appendChild(expelButton);

    if (student.house.toLowerCase() === "he who must not be named") {
      expelledStudentList.appendChild(li);
    } else {
      studentList.appendChild(li);
    }
  });
}

// Function to expel a student
function expelStudent(student) {
  const index = students.indexOf(student);
  if (index !== -1) {
    student.house = "He Who Must Not Be Named";
    expelledStudents.push(student);
    students.splice(index, 1);
    updateStudentList();
  }
}

// Handling the form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const studentNameInput = document.getElementById("studentInput");
  const studentName = studentNameInput.value.trim();

  // creating the alert boax if students is empty
  if (studentName === "") {
    alert("Please enter a student's name for this first year.");
    return;
  }

  sortStudent(studentName);

  // Clear the input field after sorting
  studentNameInput.value = "";
}

// Function to filter students by house
function filterStudentsByHouse(house) {
  const filteredStudents = students.filter(
    (student) => student.house.toLowerCase() === house.toLowerCase()
  );

  // Include expelled students in the filtered list
  expelledStudents.forEach((student) => {
    if (student.house.toLowerCase() === house.toLowerCase()) {
      filteredStudents.push(student);
    }
  });

  updateFilteredStudentList(filteredStudents);
}

// Function to update the filtered student list in the UI
function updateFilteredStudentList(filteredStudents) {
  const studentList = document.getElementById("student-list");
  studentList.innerHTML = "";

  if (filteredStudents.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No students found for this house.";
    studentList.appendChild(li);
  } else {
    filteredStudents.forEach((student) => {
      const li = document.createElement("li");
      li.textContent = student.name + " - " + student.house;

      const expelButton = document.createElement("button");
      expelButton.textContent = "Expel";
      expelButton.classList.add("btn", "btn-danger", "mx-2");

      // Event listener to expel the student
      expelButton.addEventListener("click", () => {
        expelStudent(student);
      });

      li.appendChild(expelButton);
      studentList.appendChild(li);
    });
  }
}

// Event listener for form submission
const studentForm = document.getElementById("studentForm");
studentForm.addEventListener("submit", handleFormSubmit);

// Event listener for house filter buttons
const houseFilterButtons = document.querySelectorAll(".btn-group button");
houseFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const house = button.value.toLowerCase(); // Convert to lowercase
    if (house === "all") {
      updateStudentList();
    } else {
      filterStudentsByHouse(house);
    }
  });
});

// Show the UI when the page loads
updateStudentList();
