import { combineReducers } from 'redux';


const songsReducer = () => {
    return [
        {title: 'St Tropez', duration: '4:23'},
        {title: 'Godzilla', duration: '4:05'},
        {title: 'WAP', duration: '5:02'},
        {title: 'Selfish', duration: '4:15'}
    ]
}


const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong;
};


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});