const { buildSchema } = require("graphql");

const schema = buildSchema(`
type Query {
  ping: String!
  productos: [Productos!]
}

type Mutation {
  createProducto(
    nombre: String!,
    descripcion: String!,
    precio:Float!,
    stock:Int!,
    url:String!
  ): Productos
}

type Productos {
  _id: ID!,
  nombre: String!,
  descripcion: String!,
  precio:Float!,
  stock:Int!,
  url:String!
}
`)
module.exports = schema