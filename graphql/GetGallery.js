import gql from "graphql-tag";

export const GetGallery = gql`
  query GetGallery($locale: I18NLocaleCode) {
    fotoGalleries(locale: $locale) {
      data {
        id
      }
      data {
        attributes {
          title
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
