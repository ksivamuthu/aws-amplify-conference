export const getConference = `query GetConference($id: ID!) {
  getConference(id: $id) {
    id
    title
    year   
    location
    sessions {
      items {
        id
        title
        abstract
        level
        category
        speaker {
            name
        }
        favorites {
          items {
            id
          }
        }
      }
      nextToken
    }
  }
}
`;

export const listSpeakers = `query ListSpeakers(
  $filter: ModelSpeakerFilterInput
  $limit: Int
  $nextToken: String
) {
  listSpeakers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      bio    
    }
    nextToken
  }
}
`;

export const createUserSessionVote = `mutation CreateUserSessionVote($input: CreateUserSessionVoteInput!) {
  createUserSessionVote(input: $input) {
    id
  }
}
`;