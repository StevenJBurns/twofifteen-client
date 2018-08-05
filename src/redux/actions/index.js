export const searchVenues = venueID => ({
    type: "SEARCH_VENUES",
    payload: venueID
});

export const changeAudioSource = audioSource => ({
    type: "CHANGE_AUDIO_SOURCE",
    payload: audioSource
});