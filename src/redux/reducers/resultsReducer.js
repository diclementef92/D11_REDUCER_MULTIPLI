const initialState = {
  searchResults: [],
};
const resultsReducer = (state = initialState, action) => {
  return {};
};

export default resultsReducer;

// const baseEndpoint =
//     "https://strive-benchmark.herokuapp.com/api/jobs?search=";

//     try {
//       const response = await fetch(baseEndpoint + query + "&limit=20");
//       if (response.ok) {
//         const { data } = await response.json();
//         setJobs(data);
//       } else {
//         alert("Error fetching results");
//       }
//     } catch (error) {
//       console.log(error);
//     }
