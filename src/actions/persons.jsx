export const addPerson= (fullname)=>{
    return async(dispatch, getState)=>{
        const persons = [...getState().persons]
        const person ={
            id : Math.floor(Math.random() * 1000),
            fullname 
        } 
        if(person.fullname !== "" && person.fullname !== " "){
            persons.push(person)
           await({type:"ADD_PERSON", payload:persons})
           //await dispatch(clearPerson())
        }
    }
}

export const deletePerson = (personId)=>{
      return async (dispatch, getState)=>{

          // to get a copy of customers list
          const persons = [...getState().persons]
          const filteredPersons = persons.filter(p => p.id !== personId)
          await dispatch({type:"DELETE_PERSON", payload: filteredPersons})
      }
}