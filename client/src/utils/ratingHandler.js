// isAllowToRate
// GET /data/rates?distinct=_ownerId&count

// Get only unique rates
// rates
// GET /data/rates?where=bookId%3D%22${bookId}%22distinct=_ownerId or  GET /data/rates?where=bookId%3D%22${bookId}%22&distinct=_ownerId

export function calcRatingHandler(totalRatingPoints, totalRates) {
    return (totalRatingPoints / totalRates).toFixed(2);
};