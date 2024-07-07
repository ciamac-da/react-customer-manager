export const setShowPersons = () =>{
    return async dispatch => {
        await dispatch({type: "SHOW_PERSONS"})
    }
} 