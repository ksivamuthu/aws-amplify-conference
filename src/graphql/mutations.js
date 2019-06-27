// eslint-disable
// this is an auto generated file. This will be overwritten

export const createConference = `mutation CreateConference($input: CreateConferenceInput!) {
  createConference(input: $input) {
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
export const updateConference = `mutation UpdateConference($input: UpdateConferenceInput!) {
  updateConference(input: $input) {
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
export const deleteConference = `mutation DeleteConference($input: DeleteConferenceInput!) {
  deleteConference(input: $input) {
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
export const createSession = `mutation CreateSession($input: CreateSessionInput!) {
  createSession(input: $input) {
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
      facts
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
export const updateSession = `mutation UpdateSession($input: UpdateSessionInput!) {
  updateSession(input: $input) {
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
      facts
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
export const deleteSession = `mutation DeleteSession($input: DeleteSessionInput!) {
  deleteSession(input: $input) {
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
      facts
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
export const createSpeaker = `mutation CreateSpeaker($input: CreateSpeakerInput!) {
  createSpeaker(input: $input) {
    id
    name
    bio
    facts
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
export const updateSpeaker = `mutation UpdateSpeaker($input: UpdateSpeakerInput!) {
  updateSpeaker(input: $input) {
    id
    name
    bio
    facts
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
export const deleteSpeaker = `mutation DeleteSpeaker($input: DeleteSpeakerInput!) {
  deleteSpeaker(input: $input) {
    id
    name
    bio
    facts
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
export const createUserSessionVote = `mutation CreateUserSessionVote($input: CreateUserSessionVoteInput!) {
  createUserSessionVote(input: $input) {
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
        facts
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
export const updateUserSessionVote = `mutation UpdateUserSessionVote($input: UpdateUserSessionVoteInput!) {
  updateUserSessionVote(input: $input) {
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
        facts
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
export const deleteUserSessionVote = `mutation DeleteUserSessionVote($input: DeleteUserSessionVoteInput!) {
  deleteUserSessionVote(input: $input) {
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
        facts
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
