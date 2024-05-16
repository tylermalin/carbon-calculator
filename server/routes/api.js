const express = require('express');
const router = express.Router();

router.post('/calculate', (req, res) => {
    const { flightDistance, carType, carDistance, accommodationType, nightsStayed, activityType, activityHours, dietType, meals } = req.body;

    // Example emission factors
    const emissionFactors = {
        flight: 0.115, // kg CO2 per km
        car: {
            compact: 0.12,
            sedan: 0.15,
            suv: 0.2
        },
        accommodation: {
            hotel: 10,
            airbnb: 8,
            hostel: 5
        },
        activities: {
            snorkeling: 2,
            hiking: 1,
            boating: 5
        },
        food: {
            vegetarian: 1.5,
            vegan: 1,
            mixed: 2.5
        }
    };

    // Calculate total emissions
    const flightEmissions = flightDistance * emissionFactors.flight;
    const carEmissions = carDistance * emissionFactors.car[carType];
    const accommodationEmissions = nightsStayed * emissionFactors.accommodation[accommodationType];
    const activityEmissions = activityHours * emissionFactors.activities[activityType];
    const foodEmissions = meals * emissionFactors.food[dietType];

    const totalEmissions = flightEmissions + carEmissions + accommodationEmissions + activityEmissions + foodEmissions;

    res.json({ totalEmissions });
});

module.exports = router;
