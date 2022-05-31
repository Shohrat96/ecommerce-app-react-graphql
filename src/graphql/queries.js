import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  {
    categories {
      name,
    }
  }
`

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query CatProducts($arg: String!) {
    category(input: { title: $arg }) {
      name
      products {
        id
        name
        brand
        inStock
        gallery
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
      }
    }
  }
`;

export const GET_CURRENCIES = gql`
  {
    currencies {
      label
      symbol
    }
  }
`;
export const GET_SINGLE_PRODUCT = gql`
  query CatSingleProduct($id: String!) {
    product(id: $id) {
      name,
      id,
      inStock,
      gallery,
      description,
      category,
      attributes {
        id,
        name,
        type,
        items {
          displayValue,
          value,
          id
        }
      },
      prices {
        currency {
          label,
          symbol
        },
        amount,
      },
      brand,
    }
  }
`;
