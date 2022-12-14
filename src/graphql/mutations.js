/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = /* GraphQL */ `
  mutation CreateGame($playerID: String) {
    createGame(playerID: $playerID)
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const createConnect5Game = /* GraphQL */ `
  mutation CreateConnect5Game(
    $input: CreateConnect5GameInput!
    $condition: ModelConnect5GameConditionInput
  ) {
    createConnect5Game(input: $input, condition: $condition) {
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
export const updateConnect5Game = /* GraphQL */ `
  mutation UpdateConnect5Game(
    $input: UpdateConnect5GameInput!
    $condition: ModelConnect5GameConditionInput
  ) {
    updateConnect5Game(input: $input, condition: $condition) {
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
export const deleteConnect5Game = /* GraphQL */ `
  mutation DeleteConnect5Game(
    $input: DeleteConnect5GameInput!
    $condition: ModelConnect5GameConditionInput
  ) {
    deleteConnect5Game(input: $input, condition: $condition) {
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
