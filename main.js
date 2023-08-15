// Course data
const courses = [
    { id: 1, title: "Introduction to Quantum Physics", instructor: "Dr. Smith", price: 49.99 },
    { id: 2, title: "Deep Learning Fundamentals", instructor: "Prof. Johnson", price: 59.99 },
    // Add more courses
];

// Display courses
const courseCardContainer = document.querySelector(".course-card");

function displayCourses() {
    courseCardContainer.innerHTML = "";
    courses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");
        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <p>Instructor: ${course.instructor}</p>
            <p>Price: $${course.price}</p>
            <a href="#" class="btn enroll-btn" data-id="${course.id}">Enroll Now</a>
        `;
        courseCardContainer.appendChild(courseCard);
    });
}

// Enroll button click event
courseCardContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("enroll-btn")) {
        const courseId = parseInt(e.target.getAttribute("data-id"));
        enrollCourse(courseId);
    }
});

// Function to simulate course enrollment
function enrollCourse(courseId) {
    const selectedCourse = courses.find(course => course.id === courseId);
    if (selectedCourse) {
        alert(`Enrolled in course: ${selectedCourse.title}`);
    }
}

// Initialize
displayCourses();
