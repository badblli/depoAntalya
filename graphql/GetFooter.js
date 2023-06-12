import gql from "graphql-tag";

export const GetFooter = gql`
  query GetFooter($locale: I18NLocaleCode) {
    footerConfigs(locale: $locale) {
      data {
        attributes {
          companyTitle
          adressTitle
          adressDescription
          googleMapUrl
          copyRightText
          copyRightLink
          instagramlink {
            data {
              attributes {
                instagramlink
              }
            }
          }
          footerLogo {
            data {
              attributes {
                url
                name
              }
            }
          }
          adress {
            data {
              attributes {
                address
              }
            }
          }

          phone {
            data {
              attributes {
                phone
              }
            }
          }
          description {
            data {
              attributes {
                description
              }
            }
          }
          nav_configs {
            data {
              attributes {
                navTitle
                slug
              }
            }
          }
        }
      }
    }
  }
`;
