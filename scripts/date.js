// Display the current year
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;

// Display the last modified date
document.querySelector("#lastModified").textContent =
    "Last Modified: " + document.lastModified;
    