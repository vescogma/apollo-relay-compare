const typeDefs = `
type Chat {
  id: ID!
  from: String!
  message: String!
  timestamp: Float!
}

type Query {
  chats: [Chat]
}

type Mutation {
  sendMessage(from: String!, message: String!): Chat
}

type Subscription {
  messageSent: Chat
}
`
module.exports = typeDefs
