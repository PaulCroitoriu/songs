import { combineReducers } from 'redux';


const songsReducer = () => {
    return [
        {title: 'St Tropez', id:1, duration: '4:23'},
        {title: 'Godzilla', id:2, duration: '4:05'},
        {title: 'WAP', id:3, duration: '5:02'},
        {title: 'Selfish', id:4, duration: '4:15'}
    ]
}

const usersReducer = () => {
    return [
        {username: "Paul"},
        {username: "John"},
        {username: "Edi"},
    ]
}

const selectedUserReducer = (selectedUser=null, action) => {
    if (action.type === 'USER_SELECTED') {
        return action.payload
    }
    return selectedUser
}


const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong;
};


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
    user: usersReducer,
    selectedUser: selectedUserReducer
});