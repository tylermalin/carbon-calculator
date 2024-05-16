document.getElementById('carbonForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const formData = {
        flightDistance: document.getElementById('flightDistance').value,
        carType: document.getElementById('carType').value,
        carDistance: document.getElementById('carDistance').value,
        accommodationType: document.getElementById('accommodationType').value,
        nightsStayed: document.getElementById('nightsStayed').value,
        activityType: document.getElementById('activityType').value,
        activityHours: document.getElementById('activityHours').value,
        dietType: document.getElementById('dietType').value,
        meals: document.getElementById('meals').value
    };

    const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    const result = await response.json();
    document.getElementById('result').innerHTML = `
        <h2>Personalized Impact Report</h2>
        <p>Total Carbon Footprint: ${result.totalEmissions} kg CO2</p>
    `;
});
