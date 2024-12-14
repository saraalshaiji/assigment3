// Import fetch (requires node-fetch package: npm install node-fetch)
const fetch = require('node-fetch');

// Define the API URL with specific query parameters to fetch filtered data
const url = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";

// Fetch data from the API
fetch(url)
    .then(response => response.json())
    .then(data => {
        // Check if the data exists and contains results
        if (data && data.results) {
            console.log("Fetched Data:");
            console.table(data.results.map(student => ({
                Year: student.year ?? 'N/A',
                Semester: student.semester ?? 'N/A',
                Program: student.the_programs ?? 'N/A',
                Nationality: student.nationality ?? 'N/A',
                College: student.colleges ?? 'N/A',
                Students: student.number_of_students ?? 'N/A'
            })));
        } else {
            console.log("Something went wrong, Output (data) not found");
        }
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
