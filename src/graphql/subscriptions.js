/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onCreateComment(filter: $filter, owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onUpdateComment(filter: $filter, owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onDeleteComment(filter: $filter, owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateConnect5Game = /* GraphQL */ `
  subscription OnCreateConnect5Game(
    $filter: ModelSubscriptionConnect5GameFilterInput
    $owner: String
  ) {
    onCreateConnect5Game(filter: $filter, owner: $owner) {
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
export const onUpdateConnect5Game = /* GraphQL */ `
  subscription OnUpdateConnect5Game(
    $filter: ModelSubscriptionConnect5GameFilterInput
    $owner: String
  ) {
    onUpdateConnect5Game(filter: $filter, owner: $owner) {
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
export const onDeleteConnect5Game = /* GraphQL */ `
  subscription OnDeleteConnect5Game(
    $filter: ModelSubscriptionConnect5GameFilterInput
    $owner: String
  ) {
    onDeleteConnect5Game(filter: $filter, owner: $owner) {
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
