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

export const DISH_FRAGMENT = gql`
  fragment Dish on Dish {
    id
    name
    price
    coverImage
    description
    option {
      name
      choice {
        name
        extraPrice
      }
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

export const FINDALLRESTAURANT_QUERY = gql`
  query findAllRestaurant($page: Int) {
    findAllRestaurant(page: $page) {
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

export const FINDRESTAURANTBYID_QUERY = gql`
  query findRestaurantById($id: Int!) {
    findRestaurantById(id: $id) {
      ok
      error
      result {
        ...Restaurant
        ownerId
        menu {
          ...Dish
        }
      }
    }
  }
  ${RESTAURANT_FRAGMENT}
  ${DISH_FRAGMENT}
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

export const CREATEDISH_MUTATION = gql`
  mutation createDish($restaurantId: Int!, $data: CreateDishInputType!) {
    createDish(restaurantId: $restaurantId, data: $data) {
      ok
      error
      result {
        id
        name
        price
        coverImage
        description
        option {
          name
          choice {
            name
            extraPrice
          }
        }
      }
    }
  }
`;
