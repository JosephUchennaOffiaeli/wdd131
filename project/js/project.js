/**
 * W06 Final Project Dynamic Logic Engine
 * Scope: Handles DOM construction, reactive state binding, and localStorage telemetry.
 */

// 1. Data Store: Structured Array of Objects
const systemModules = [
    {
        id: "sys-01",
        title: "Client UI Framework",
        type: "Development",
        complexity: "Advanced",
        runtimeMs: 45
    },
    {
        id: "sys-02",
        title: "Automated CSS Compiles",
        type: "Optimization",
        complexity: "Beginner",
        runtimeMs: 12
    },
    {
        id: "sys-03",
        title: "Logistics Asset Dispatch",
        type: "Operations",
        complexity: "Intermediate",
        runtimeMs: 120
    }
];

// Initialize application lifecycle cleanly once DOM completes parsing
document.addEventListener("DOMContentLoaded", () => {
    initializeDashboard();
});

/**
 * Orchestrator Execution Function
 */
function initializeDashboard() {
    // Execute global date tracking stamps safely across all views
    renderFooterMetatags();

    // Context-sensitive feature execution
    if (document.getElementById("features-container")) {
        renderFeatureModuleGrid(systemModules);
    }

    if (document.getElementById("project-form")) {
        bindFormSubmissionEngine();
    }

    if (document.getElementById("total-submissions")) {
        renderTelemetryDisplay();
    }
}

/**
 * Renders structured System Cards to the DOM using high-efficiency Array maps,
 * strict template literal injection, and selective element modification.
 */
function renderFeatureModuleGrid(modules) {
    const targetContainer = document.getElementById("features-container");
    if (!targetContainer) return;

    // Reset container view elements cleanly
    targetContainer.innerHTML = "";

    // Process collection data arrays through array logic methods
    modules.forEach(module => {
        const cardElement = document.createElement("article");
        cardElement.className = "card";

        // Exclusively use template literals to engineer string template layouts
        cardElement.innerHTML = `
            <span class="badge">${module.type}</span>
            <h3>${module.title}</h3>
            <p>Execution Complexity: <strong>${module.complexity}</strong></p>
            <p>Process Runtime Baseline: <code>${module.runtimeMs}ms</code></p>
            <button type="button" class="action-trigger" data-id="${module.id}">Run Diagnostic</button>
        `;

        targetContainer.appendChild(cardElement);
    });

    // Delegate interaction events securely at container level
    targetContainer.addEventListener("click", processDiagnosticEvent);
}

/**
 * Conditional Branching Engine handling individual runtime target interactions
 */
function processDiagnosticEvent(event) {
    const clickTarget = event.target;
    
    // Evaluate if targeted block contains target class signature
    if (clickTarget.classList.contains("action-trigger")) {
        const systemId = clickTarget.getAttribute("data-id");
        
        // Execute conditional branching validations
        if (systemId === "sys-01") {
            alert(`[DIAGNOSTIC EXECUTED] Core DOM tree elements verified. Framework initialized optimally.`);
        } else if (systemId === "sys-02") {
            alert(`[DIAGNOSTIC EXECUTED] CSS styles matched cleanly. No layout collisions found.`);
        } else {
            alert(`[DIAGNOSTIC EXECUTED] Core operations baseline set. Module Reference: ${systemId}`);
        }
    }
}

/**
 * Connects into the layout form submissions pipeline to store telemetry metadata to localStorage
 */
function bindFormSubmissionEngine() {
    const targetForm = document.getElementById("project-form");
    if (!targetForm) return;

    targetForm.addEventListener("submit", () => {
        // Retrieve existing session counters from global localStorage cache securely
        let totalCount = parseInt(localStorage.getItem("formSubmissionCounter")) || 0;
        
        // Increment execution counter integer
        totalCount++;
        
        // Return updated configuration strings back to localStorage state
        localStorage.setItem("formSubmissionCounter", totalCount.toString());
    });
}

/**
 * Pulls operational localStorage items to show metrics securely inside review dashboard panels
 */
function renderTelemetryDisplay() {
    const counterDisplayElement = document.getElementById("total-submissions");
    if (!counterDisplayElement) return;

    const countVal = localStorage.getItem("formSubmissionCounter") || "0";
    counterDisplayElement.textContent = countVal;
}

/**
 * Utility date injection handles global layout stamps precisely
 */
function renderFooterMetatags() {
    const elementYear = document.getElementById("currentyear");
    const elementModified = document.getElementById("lastModified");

    if (elementYear) {
        elementYear.textContent = new Date().getFullYear().toString();
    }
    if (elementModified) {
        elementModified.textContent = document.lastModified;
    }
}