/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const onCreateConnect5Game = /* GraphQL */ `
  subscription OnCreateConnect5Game(
    $filter: ModelSubscriptionConnect5GameFilterInput
  ) {
    onCreateConnect5Game(filter: $filter) {
      player1
      player2
      moves
      currentPlayer
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateConnect5Game = /* GraphQL */ `
  subscription OnUpdateConnect5Game(
    $filter: ModelSubscriptionConnect5GameFilterInput
  ) {
    onUpdateConnect5Game(filter: $filter) {
      player1
      player2
      moves
      currentPlayer
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteConnect5Game = /* GraphQL */ `
  subscription OnDeleteConnect5Game(
    $filter: ModelSubscriptionConnect5GameFilterInput
  ) {
    onDeleteConnect5Game(filter: $filter) {
      player1
      player2
      moves
      currentPlayer
      id
      createdAt
      updatedAt
    }
  }
`;
