import gql from "graphql-tag";

export const GetAboutBanner = gql`
  query GetAboutBanner($locale: I18NLocaleCode) {
    aboutBannerConfigs(locale: $locale) {
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
