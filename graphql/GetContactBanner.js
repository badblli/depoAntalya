import gql from "graphql-tag";

export const GetContactBanner = gql`
  query GetContactBanner($locale: I18NLocaleCode) {
    contactBannerConfigs(locale: $locale) {
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
