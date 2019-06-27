## Demo notes

### AWS AppSync

1. What is GraphQL?
2. GraphQL Demo
3. AWS AppSync Multiple Datasources.
4. AWS Amplify
5. CLI Tool demo
   1. amplify status
   2. amplify categories
   3. amplify hosting
   4. amplify auth
   5. amplify analytics
   6. amplify storage
   7. amplify api

6. GraphQL Scema by Amplify
7. @model
8. Query, Mutation, Subscription
9. @auth
10. @searchable - Elastic search
11. @functions

Amazon Cognito Client Id: 77th5h9g34tc2ojolf8t848vri

/// Get speakers and facts
{
  listSpeakers {
    items {
      name
      facts
    }
  }
}


///
{
  searchSessions(filter: {
    title: {
      wildcard: "*e*"
    }
  }) {
    items {
      title
      abstract
    }
  }
}