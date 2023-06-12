import gql from "graphql-tag";

export const GetSlider = gql`
  query GetSlider($locale: I18NLocaleCode) {
    sliderConfigs(locale: $locale) {
      data {
        id
      }
      data {
        attributes {
          title
          subTitle
          sliderImage {
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
