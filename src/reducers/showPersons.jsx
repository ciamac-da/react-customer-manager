export const showPersonsReducer = (state=true,action ) =>{

switch(action.type){
    case "SHOW_PERSONS":
        return action.payload
            default:
                return state
}
}