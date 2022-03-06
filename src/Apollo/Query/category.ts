import { gql } from "@apollo/client";

export const CATEGORY_FRAGMENT = gql`
  fragment Category on Category {
    id
    name
    coverImage
    restaurantCount
  }
`;

export const FINDALLCATEGORY_QUERY = gql`
  query findAllCategory {
    findAllCategory {
      ok
      error
      result {
        ...Category
      }
    }
  }
  ${CATEGORY_FRAGMENT}
`;
