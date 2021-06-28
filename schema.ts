'use strict';

import {addVehicles} from "./resolvers/create";
import {viewVehicle} from "./resolvers/view";
import {listVehicles} from "./resolvers/list";
import {removeVehicle} from "./resolvers/remove";

import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

const vehicleType = new GraphQLObjectType({
  name: 'Vehicles',
  fields: {
    id: {type: new GraphQLNonNull(GraphQLString)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    quantity: {type: new GraphQLNonNull(GraphQLInt)},
    addedAt: {type: new GraphQLNonNull(GraphQLString)},
  }
});


export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      listVehicles: {
        type: new GraphQLList(vehicleType),
        resolve: (parent, args) => listVehicles()
      },
      viewVehicle: {
        args: {
          id: {type: new GraphQLNonNull(GraphQLString)}
        },
        type: vehicleType,
        resolve: (parent, args) => viewVehicle(args.id)
      }
    }
  }),

  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createVehicle: {
        args: {
          name: {type: new GraphQLNonNull(GraphQLString)},
          quantity: {type: new GraphQLNonNull(GraphQLInt)}
        },
        type: vehicleType,
        resolve: (parent, args) => addVehicles(args)
      },
      removeVehicle: {
        args: {
          id: {type: new GraphQLNonNull(GraphQLString)}
        },
        type: GraphQLBoolean,
        resolve: (parent, args) => removeVehicle(args.id)
      },
    }
  })
});
