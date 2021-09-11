import { gql } from "@apollo/client";



export const GET_AUTHORIZED_USER = gql`
  query AuthorizedUser {
    authorizedUser {
      id
      username
    }
  }
`;

export const GET_REPOSITORIES = gql`
  query GetRepositories(
      $after: String,
      $first: Int,
      $searchKeyword: String,
      $sortOrder: AllRepositoriesOrderBy,
      $sortDirection: OrderDirection,
    ) {
    repositories(
      after: $after,
      first: $first,
      searchKeyword: $searchKeyword,
      orderBy: $sortOrder,
      orderDirection: $sortDirection,
      ) {
      totalCount,
      edges {
        node {
          id,
          fullName,
          description,
          language,
          ownerAvatarUrl,
          stargazersCount,
          forksCount,
          reviewCount,
          ratingAverage,
        },
        cursor,
      },
      pageInfo {
        endCursor,
        startCursor,
        hasNextPage,
      },
    }
  }
`;

export const GET_REPOSITORY = gql`
  query GetRepository(
    $repoId: ID!,
    $afterReview: String,
    $firstNReviews: Int,
    ) {
    repository(id: $repoId) {
      id,
      fullName,
      ownerAvatarUrl,
      description,
      language,
      stargazersCount,
      forksCount,
      reviewCount,
      ratingAverage,

      url,
      reviews(
        first: $firstNReviews,
        after: $afterReview
        ) {
        totalCount,
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          },
          cursor,
        },
        pageInfo {
          endCursor,
          startCursor,
          hasNextPage,
        },
      }
    }
  }
`;
