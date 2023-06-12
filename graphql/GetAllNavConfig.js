import gql from "graphql-tag";

export const GetAllNavConfig = gql`
  query GetAllNavConfig($locale: I18NLocaleCode) {
    navConfigs(locale: $locale) {
      data {
        id
      }
      data {
        attributes {
          navTitle
          slug
        }
      }
    }
  }
`;
