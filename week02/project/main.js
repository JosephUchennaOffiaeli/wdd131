// 1. Data Object Arrays (Fulfills: Objects, Arrays & Array Methods requirement)
const trailData = [
    {
        name: "Rattlesnake Ledge",
        difficulty: "Moderate",
        distance: "4.0 miles",
        img: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Skyline Trail",
        difficulty: "Hard",
        distance: "5.5 miles",
        img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Colchuck Lake",
        difficulty: "Hard",
        distance: "8.0 miles",
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Twin Falls",
        difficulty: "Easy",
        distance: "2.6 miles",
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=500&q=80"
    }
];

// Execute functions safely depending on which page is currently loaded
document.addEventListener("DOMContentLoaded", () => {
    initGlobalAlert();
    
    if (document.getElementById("trail-container")) {
        initTrailFinder();
    }
    
    if (document.getElementById("hike-form")) {
        initHikerHub();
    }
});

// Function 1: Global Safety Banner (Conditional Branching & DOM modification)
function initGlobalAlert() {
    const alertBanner = document.getElementById("alert-banner");
    if (alertBanner) {
        const currentHour = new Date().getHours();
        // Conditional logic branch
        if (currentHour >= 17 || currentHour <= 6) {
            alertBanner.textContent = "⚠️ Night hiking conditions active. Pack headlamps and stay on main trails!";
            alertBanner.classList.remove("hidden");
        }
    }
}

// Function 2: Render Directory cards (Fulfills: Template Literals & DOM manipulation)
function renderTrails(trailsToRender) {
    const container = document.getElementById("trail-container");
    container.innerHTML = ""; // Clear existing output

    // Using array iterations with clean template string layouts
    trailsToRender.forEach(trail => {
        const trailCard = `
            <div class="card">
                <img src="${trail.img}" alt="${trail.name}" loading="lazy">
                <h3>${trail.name}</h3>
                <span class="tag">${trail.difficulty}</span>
                <p><strong>Distance:</strong> ${trail.distance}</p>
            </div>
        `;
        container.innerHTML += trailCard;
    });
}

// Function 3: Filter Trails logic (Fulfills: Array Methods like .filter)
function initTrailFinder() {
    // Initial load setup
    renderTrails(trailData);

    const filterSelect = document.getElementById("difficulty-filter");
    filterSelect.addEventListener("change", (e) => {
        const selectedDifficulty = e.target.value;
        
        if (selectedDifficulty === "all") {
            renderTrails(trailData);
        } else {
            // Using modern Array Filter method
            const filtered = trailData.filter(trail => trail.difficulty === selectedDifficulty);
            renderTrails(filtered);
        }
    });
}

// Function 4: User Submission Persistence Engine (Fulfills: HTML Form, localStorage usage)
function initHikerHub() {
    const hikeForm = document.getElementById("hike-form");
    const logList = document.getElementById("log-list");
    const clearBtn = document.getElementById("clear-logs");

    // Load initial logs from Local Storage
    displayLogs();

    hikeForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Stop page reload behavior
        
        const hiker = document.getElementById("hiker-name").value;
        const trail = document.getElementById("trail-select").value;
        const date = document.getElementById("hike-date").value;

        const newLog = { hiker, trail, date };

        // Pull existing list or establish empty structure array
        const activeLogs = JSON.parse(localStorage.getItem("hikerLogs")) || [];
        activeLogs.push(newLog);

        // Commit modifications out to localStorage
        localStorage.setItem("hikerLogs", JSON.stringify(activeLogs));

        // Refresh UI list element view and reset form element
        displayLogs();
        hikeForm.reset();
    });

    clearBtn.addEventListener("click", () => {
        localStorage.removeItem("hikerLogs");
        displayLogs();
    });

    function displayLogs() {
        logList.innerHTML = "";
        const savedLogs = JSON.parse(localStorage.getItem("hikerLogs")) || [];

        if (savedLogs.length === 0) {
            logList.innerHTML = "<li>No hikes logged yet! Get exploring.</li>";
            return;
        }

        savedLogs.forEach(item => {
            // Explicitly rendering using template literal structure strings
            logList.innerHTML += `<li><strong>${item.hiker}</strong> conquered <em>${item.trail}</em> on ${item.date}</li>`;
        });
    }
}