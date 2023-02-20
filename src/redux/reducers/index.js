// import { ADD_PREFERRED_COMPANY, REMOVE_PREFERRED_COMPANY } from "../actions";

// const initialState = {
//   preferiti: [],
// };
// const mainReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_PREFERRED_COMPANY:
//       return {
//         ...state,
//         preferiti: [...state.preferiti, action.payload],
//       };
//     case REMOVE_PREFERRED_COMPANY:
//       return {
//         ...state,
//         preferiti: state.preferiti.filter(
//           (_, i) => i !== state.preferiti.indexOf(action.payload)
//         ),
//       };

//     default:
//       return state;
//   }
// };

// export default mainReducer;
