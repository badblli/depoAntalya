import gql from "graphql-tag";

export const GetAllServices = gql`
  query GetAllServices($locale: I18NLocaleCode) {
    services(locale: $locale) {
      data {
        id
      }
      data {
        attributes {
          title
          description
          title2
          title3
          icon {
            data {
              id
            }
            data {
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`;
