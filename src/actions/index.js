export const DATA_AVAILABLE = 'DATA_AVAILABLE';

import Data from '../instructions.json';

export function getData(){
    return dispatch => {

        //Make API Call
        //For this example, I will be retrieving data from a json file
        //Get the sample data in the json file
        //delay the retrieval [Sample reasons only]
        setTimeout(() => {
            var data  = Data.instructions;
            dispatch({type: DATA_AVAILABLE, data:data});
        }, 2000);

    };
}