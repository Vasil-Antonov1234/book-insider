export function calcRatingHandler(totalRatingPoints, totalRates) {
    return (totalRatingPoints / totalRates).toFixed(2);
};