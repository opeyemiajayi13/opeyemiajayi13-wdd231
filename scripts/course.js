// Course information array

const courses = [
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        completed: false
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        completed: false
    },
    {
        subject: "WDD",
        number: 231,
        title: "Web Frontend Development I",
        credits: 2,
        completed: false
    },
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        completed: false
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        completed: false
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        completed: false
    }
];

// Select page elements
const courseContainer = document.querySelector("#course-container");
const creditTotal = document.querySelector("#credit-total");
const filterButtons = document.querySelectorAll(".filter-btn");

// Display courses
function displayCourses(courseList) {

    courseContainer.innerHTML = "";

    courseList.forEach(course => {

        const courseCard = document.createElement("div");

        courseCard.classList.add("course-card");

        if (course.completed) {
            courseCard.classList.add("completed");
        }

        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>Credits: ${course.credits}</p>
            <p>${course.completed ? "Completed ✓" : "Not Completed"}</p>
        `;

        courseContainer.appendChild(courseCard);

    });

    // Calculate total credits using reduce
    const totalCredits = courseList.reduce(
        (total, course) => total + course.credits,
        0
    );

    creditTotal.textContent = `Total Credits: ${totalCredits}`;
}

// Filter courses
function filterCourses(filter) {

    let filteredCourses;

    if (filter === "ALL") {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(
            course => course.subject === filter
        );
    }

    displayCourses(filteredCourses);

}

// Add click events to filter buttons
filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        const filter = button.dataset.filter;

        filterCourses(filter);

    });

});

// Display all courses when the page loads
displayCourses(courses);