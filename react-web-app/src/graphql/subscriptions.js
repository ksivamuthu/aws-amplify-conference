// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateConference = `subscription OnCreateConference {
  onCreateConference {
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
export const onUpdateConference = `subscription OnUpdateConference {
  onUpdateConference {
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
export const onDeleteConference = `subscription OnDeleteConference {
  onDeleteConference {
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
export const onCreateSession = `subscription OnCreateSession {
  onCreateSession {
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
export const onUpdateSession = `subscription OnUpdateSession {
  onUpdateSession {
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
export const onDeleteSession = `subscription OnDeleteSession {
  onDeleteSession {
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
export const onCreateSpeaker = `subscription OnCreateSpeaker {
  onCreateSpeaker {
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
export const onUpdateSpeaker = `subscription OnUpdateSpeaker {
  onUpdateSpeaker {
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
export const onDeleteSpeaker = `subscription OnDeleteSpeaker {
  onDeleteSpeaker {
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
export const onCreateUserSessionVote = `subscription OnCreateUserSessionVote {
  onCreateUserSessionVote {
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
export const onUpdateUserSessionVote = `subscription OnUpdateUserSessionVote {
  onUpdateUserSessionVote {
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
export const onDeleteUserSessionVote = `subscription OnDeleteUserSessionVote {
  onDeleteUserSessionVote {
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
