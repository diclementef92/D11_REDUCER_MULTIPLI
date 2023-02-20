export const ADD_PREFERRED_COMPANY = "ADD_PREFERRED_COMPANY";
export const REMOVE_PREFERRED_COMPANY = "REMOVE_PREFERRED_COMPANY";

export const addJobToPreferred = (job) => {
  return {
    type: ADD_PREFERRED_COMPANY,
    payload: job,
  };
};
export const removeJobToPreferred = (job) => {
  return {
    type: REMOVE_PREFERRED_COMPANY,
    payload: job,
  };
};
