import { GETJOBS } from "../actions";

const initialState = {
  searchResults: [],
};
const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETJOBS:
      return {
        ...state,
        searchResults: action.payload,
      };

    default:
      return state;
  }
};

export default resultsReducer;

// const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

//  ritorna funzione asincrona con i risultati della fetch, action.payload è la parola da cercare
//  return async (dispatch, getState) => {
//   try {
//     const response = await fetch(baseEndpoint + action.payload + "&limit=20");
//     if (response.ok) {
//       const { data } = await response.json();

//       dispatch({
//         type: GETJOBS,
//         payload: data,
//       });
//     } else {
//       alert("Error fetching results");
//     }
//   } catch (error) {
//     console.log(error);
//   }
