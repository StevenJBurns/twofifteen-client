export const searchVenues = venueID => ({
    type: "SEARCH_VENUES",
    payload: venueID
});

export const searchFranchises = franchiseID => ({
    type: "SEARCH_FRANCHISES",
    payload: franchiseID
});

export const searchPlayers = playerID => ({
    type: "SEARCH_PLAYERS",
    payload: playerID
});