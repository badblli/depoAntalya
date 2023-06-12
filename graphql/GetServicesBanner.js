import gql from "graphql-tag";

export const GetServicesBanner = gql`
  query GetServicesBanner($locale: I18NLocaleCode) {
    servicesBannerConfigs(locale: $locale) {
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
