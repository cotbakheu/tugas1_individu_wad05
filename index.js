let loadedStudents = [];

async function fetchAllStudents() {
  const response = await fetch("data.json");
  const students = await response.json();
  loadedStudents = students;
  appendStudents(loadedStudents);
}

function appendStudents(students) {
  const studentRow = document.getElementById("student-row");
  studentRow.textContent = "";

  students.forEach((student, index) => {
    const row = document.createElement("tr");
    const th = document.createElement("th");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    row.appendChild(th);
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.children[0].textContent = index + 1;
    row.children[1].textContent = student.name;
    row.children[2].textContent = student.id;
    row.children[3].textContent = student.major;
    studentRow.appendChild(row);
  });
}

document
  .getElementById("search-input")
  .addEventListener("input", (e) => searchStudents(e.target.value));

function searchStudents(searchInput) {
  const filteredStudents = loadedStudents.filter((student) =>
    student.name.toLowerCase().includes(searchInput.toLowerCase()),
  );
  appendStudents(filteredStudents);
}

fetchAllStudents();
