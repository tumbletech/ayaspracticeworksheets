// Import necessary Firebase modules
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Initialize Firestore
const db = getFirestore();

// Get the reference to your collection
const worksheetRef = collection(db, "worksheets001");

// Function to load the worksheets and display them in the HTML
async function loadWorksheets() {
    // Get documents from Firestore
    const querySnapshot = await getDocs(worksheetRef);

    // Reference to the <tbody> element where worksheets will be listed
    const worksheetList = document.getElementById("worksheet-list");

    // Loop through all documents and append them as table rows
    querySnapshot.forEach((doc) => {
        // Extract the necessary fields from each document
        const data = doc.data();
        const activityNumber = data.activity_number;
        const title = data.title;
        const downloadUrl = data.download_url;
        const prerequisite = data.prerequisite || 'None'; // Set 'None' if no prerequisite is provided

        // Create a new table row (<tr>) for each worksheet
        const worksheetRow = document.createElement("tr");


        // Append the row to the worksheet list (the tbody of the table)
        worksheetList.appendChild(worksheetRow);
    });
}

// Call the function to load worksheets when the page is loaded
loadWorksheets();
