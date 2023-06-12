import gql from "graphql-tag";

export const GetDepoConfig = gql`
  query GetDepoConfig($locale: I18NLocaleCode) {
    depoConfigs(locale: $locale) {
      data {
        id
      }
      data {
        attributes {
          title
          size
          metrekare
          adet
          description
          size
          item
          image {
            data {
              id
            }
            data {
              attributes {
                url
                name
              }
            }
          }
        }
      }
    }
  }
`;
