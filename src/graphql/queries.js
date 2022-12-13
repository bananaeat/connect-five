/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getConnect5Game = /* GraphQL */ `
  query GetConnect5Game($id: ID!) {
    getConnect5Game(id: $id) {
      player1
      player2
      moves
      currentPlayer
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listConnect5Games = /* GraphQL */ `
  query ListConnect5Games(
    $filter: ModelConnect5GameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConnect5Games(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        player1
        player2
        moves
        currentPlayer
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
