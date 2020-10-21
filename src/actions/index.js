// action creator
export const selectSong = (song) => {
    //return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}


export const selectUser = user => {
    return {
        type: 'USER_SELECTED',
        payload: user
    }
}
