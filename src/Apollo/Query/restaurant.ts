import { gql } from "@apollo/client";

export const RESTAURANT_FRAGMENT = gql`
  fragment Restaurant on Restaurant {
    id
    name
    coverImage
    address
    category {
      name
    }
  }
`;

export const FINDALLMYRESTAURANT_QUERY = gql`
  query findAllMyRestaurant($page: Int) {
    findAllMyRestaurant(page: $page) {
      ok
      error
      totalResults
      result {
        ...Restaurant
      }
    }
  }
  ${RESTAURANT_FRAGMENT}
`;

export const CREATERESTAURANT_MUTATION = gql`
  mutation createRestaurant($restaurant: CreateRestaurantInput!) {
    createRestaurant(restaurant: $restaurant) {
      ok
      error
      result {
        ...Restaurant
      }
    }
  }
  ${RESTAURANT_FRAGMENT}
`;
