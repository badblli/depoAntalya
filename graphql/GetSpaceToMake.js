import gql from "graphql-tag";

export const GetSpaceToMake = gql`
  query GetSpaceToMake($locale: I18NLocaleCode) {
    spaceToMakes(locale: $locale) {
      data {
        id
      }
      data {
        attributes {
          title
          desc
          description
          imgtxt
          item1
          item2
          image {
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
