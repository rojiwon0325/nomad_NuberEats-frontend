import { gql } from "@apollo/client";

export const FINDALLCATEGORY_QUERY = gql`
  query findAllCategory {
    findAllCategory {
      ok
      error
      result {
        id
        name
        coverImage
        restaurantCount
      }
    }
  }
`;
