import gql from "graphql-tag";

export const GetAllSiteConfig = gql`
  query GetSiteConfig($locale: I18NLocaleCode) {
    siteConfigs(locale: $locale) {
      data {
        attributes {
          title
          phone
          instagram
          instagramlink
          contact
          description
          address
          googleMapUrl
          maintenance
          successMessage
          googleIframeUrl
          logo {
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
