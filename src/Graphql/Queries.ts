import {gql} from "@apollo/client"

export const GET_ALL_USERS = gql`
    query getAllUsers {
    getAllUsers {
    id
    name
    username
  }
}
`;


//**********EXAMPLE****************//
// export const TRACKS = gql`
//   query getTracks {
//     tracksForHome {
//       id
//       title
//       thumbnail
//       length
//       modulesCount
//       author {
//         name
//         photo
//       }
//     }
//   }
// `;