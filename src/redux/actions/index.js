export const ADD_PREFERRED_COMPANY = "ADD_PREFERRED_COMPANY";
export const REMOVE_PREFERRED_COMPANY = "REMOVE_PREFERRED_COMPANY";
export const GETJOBS = "GETJOBS";

export const addJobToFavourites = (job) => {
  return {
    type: ADD_PREFERRED_COMPANY,
    payload: job,
  };
};
export const removeJobToFavourites = (job) => {
  return {
    type: REMOVE_PREFERRED_COMPANY,
    payload: job,
  };
};

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?limit=20";
//  ritorna funzione asincrona con i risultati della fetch, value è la parola da cercare
export const getJobsResults = (value) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + "&search=" + value);
      if (response.ok) {
        const { data } = await response.json();

        dispatch({
          type: GETJOBS,
          payload: data,
        });
      } else {
        console.log("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
