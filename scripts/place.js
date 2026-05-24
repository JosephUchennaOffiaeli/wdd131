// Dynamic Footer Dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Rubric 7: Wind Chill Calculation Function
function calculateWindChill(tempC, speedKmH) {
    return (35.74 + (0.6215 * (tempC * 9/5 + 32)) - (35.75 * Math.pow(speedKmH * 0.621371, 0.16)) + (0.4275 * (tempC * 9/5 + 32) * Math.pow(speedKmH * 0.621371, 0.16)) - 32) * 5/9;
}

const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
const windchillElement = document.getElementById("windchill");

if (temp <= 10 && wind > 4.8) {
    const chillResult = calculateWindChill(temp, wind);
    windchillElement.textContent = `${chillResult.toFixed(1)} °C`;
} else {
    windchillElement.textContent = "N/A";
}