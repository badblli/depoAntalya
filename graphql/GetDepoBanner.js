import gql from "graphql-tag";

export const GetDepoBanner = gql`
  query GetDepoBanner($locale: I18NLocaleCode) {
    depoBannerConfigs(locale: $locale) {
      data {
        id
      }
      data {
        attributes {
          title
          slug1
          slug2
          banner {
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
