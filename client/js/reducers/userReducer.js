// import UserInitialState from "./User.json";

// export default function reducer(state = {
//         user: UserInitialState,
//         fetching: false,
//         fetched: false,
//         error: null,
//     },
//     action) {
//     switch (action.type) {
//         case "FETCH_USER":
//             {
//                 return {...state, fetching: true };
//             }
//         case "FETCH_USER_SUCCEEDED":
//             {
//                 return {...state,
//                     fetching: false,
//                     fetched: true,
//                     user: action.dataLoad
//                 };
//             }
//         case "FETCH_USER_FAILED":
//             {
//                 return {...state,
//                     fetching: false,
//                     error: action.dataLoad
//                 };
//             }
//         case "FETCH_ALL_USER":
//             {
//                 return {...state, fetching: true };
//             }
//         case "FETCH_ALL_USER_SUCCEEDED":
//             {
//                 return {...state,
//                     fetching: false,
//                     fetched: true,
//                     user: action.dataLoad
//                 };
//             }
//         case "FETCH_ALL_USER_FAILED":
//             {

//             }
//         case "CREATE_USER":
//             {

//             }
//         case "CREATE_USER_SUCCEEDED":
//             {

//             }
//         case "CREATE_USER_FAILED":
//             {

//             }
//         case "UPDATE_USER":
//             {

//             }
//         case "UPDATE_USER_SUCCEEDED":
//             {

//             }
//         case "UPDATE_USER_FAILED":
//             {

//             }
//         case "DELETE_USER":
//             {

//             }
//         case "DELETE_USER_SUCCEEDED":
//             {

//             }
//         case "DELETE_USER_FAILED":
//             {

//             }
//     }
// }
