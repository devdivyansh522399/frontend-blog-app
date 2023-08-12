import { countActions } from "../reducer/countReducer";

export const changeCount = (type) => (dispatch, getState) => {
    const {count} =  getState();
    if(type === 'increase'){
        dispatch(countActions.countChange(count.number+1))
    }
    else{
        dispatch(countActions.countChange(count.number-1))
    }
}