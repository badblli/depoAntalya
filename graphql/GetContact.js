import gql from "graphql-tag";

export const GetContact = gql`
  query GetContact($locale: I18NLocaleCode) {
    contacts(locale: $locale) {
      data {
        id
      }
      data {
        attributes {
          title
          name
          email
          phoneTitle
          subject
          message
          sendButton
          unit
          title2
          description
          phone {
            data {
              attributes {
                phone
              }
            }
          }
          depo_configs {
            data {
              id
            }
            data {
              attributes {
                title
                size
                metrekare
              }
            }
          }
        }
      }
    }
  }
`;
