import gql from "graphql-tag";

export const PostSendEmail = gql`
  mutation sendEmail(
    $name: String!
    $email: String!
    $phone: String
    $subject: String
    $message: String
  ) {
    createSendEmail(
      name: $name
      email: $email
      phone: $phone
      subject: $subject
      message: $message
    ) {
      _id
      name
      email
      phone
      subject
      message
    }
  }
`;
