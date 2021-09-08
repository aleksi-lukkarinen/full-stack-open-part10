import { gql } from "@apollo/client";



export const SIGN_IN = gql`
  mutation SignIn($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;


export const CREATE_USER = gql`
  mutation CreateUser(
    $username: String!,
    $password: String!) {
    createUser(user: {
      username: $username,
      password: $password,
    }) {
      id,
      username,
    }
  }
`;



export const CREATE_REVIEW = gql`
  mutation CreateReview(
    $ownerName: String!,
    $repositoryName: String!,
    $rating: Int!,
    $text: String) {
    createReview(review: {
      repositoryName: $repositoryName,
      ownerName: $ownerName,
      rating: $rating,
      text: $text
    }) {
      id
      user {
        id,
        username,
      }
      repository {
        id,
      },
      rating,
      createdAt,
      text,
    }
  }
`;