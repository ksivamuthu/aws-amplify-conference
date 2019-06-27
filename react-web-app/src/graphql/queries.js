// eslint-disable
// this is an auto generated file. This will be overwritten

export const getConference = `query GetConference($id: ID!) {
  getConference(id: $id) {
    id
    title
    year
    websiteUrl
    location
    contact
    sessions {
      items {
        id
        title
        abstract
        level
        category
        keywords
      }
      nextToken
    }
  }
}
`;
export const listConferences = `query ListConferences(
  $filter: ModelConferenceFilterInput
  $limit: Int
  $nextToken: String
) {
  listConferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      year
      websiteUrl
      location
      contact
      sessions {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getSession = `query GetSession($id: ID!) {
  getSession(id: $id) {
    id
    title
    abstract
    level
    category
    keywords
    favorites {
      items {
        id
        userId
      }
      nextToken
    }
    conference {
      id
      title
      year
      websiteUrl
      location
      contact
      sessions {
        nextToken
      }
    }
    speaker {
      id
      name
      bio
      jobtitle
      phonenumber
      companyname
      companywebsite
      blog
      website
      twitter
      facebook
      linkedin
      sessions {
        nextToken
      }
    }
  }
}
`;
export const listSessions = `query ListSessions(
  $filter: ModelSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      abstract
      level
      category
      keywords
      favorites {
        nextToken
      }
      conference {
        id
        title
        year
        websiteUrl
        location
        contact
      }
      speaker {
        id
        name
        bio
        jobtitle
        phonenumber
        companyname
        companywebsite
        blog
        website
        twitter
        facebook
        linkedin
      }
    }
    nextToken
  }
}
`;
export const getSpeaker = `query GetSpeaker($id: ID!) {
  getSpeaker(id: $id) {
    id
    name
    bio
    jobtitle
    phonenumber
    companyname
    companywebsite
    blog
    website
    twitter
    facebook
    linkedin
    sessions {
      items {
        id
        title
        abstract
        level
        category
        keywords
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
      jobtitle
      phonenumber
      companyname
      companywebsite
      blog
      website
      twitter
      facebook
      linkedin
      sessions {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getUserSessionVote = `query GetUserSessionVote($id: ID!) {
  getUserSessionVote(id: $id) {
    id
    userId
    session {
      id
      title
      abstract
      level
      category
      keywords
      favorites {
        nextToken
      }
      conference {
        id
        title
        year
        websiteUrl
        location
        contact
      }
      speaker {
        id
        name
        bio
        jobtitle
        phonenumber
        companyname
        companywebsite
        blog
        website
        twitter
        facebook
        linkedin
      }
    }
  }
}
`;
export const listUserSessionVotes = `query ListUserSessionVotes(
  $filter: ModelUserSessionVoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserSessionVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      session {
        id
        title
        abstract
        level
        category
        keywords
      }
    }
    nextToken
  }
}
`;
