import gql from "graphql-tag";

export const GetAllLocales = gql`
  query GetAllLocales {
    i18NLocales {
      data {
        attributes {
          name
          code
        }
      }
    }
  }
`;
