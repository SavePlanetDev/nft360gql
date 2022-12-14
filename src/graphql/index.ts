import { merge } from "lodash";
import { makeExecutableSchema } from "@graphql-tools/schema";

import { tdRegister } from "./register/register.typedefs";
import { tdProfile } from "./profile/profile.typedefs";
import { qRegister, resRegister } from "./register/register.query";
import { qProfile, resProfile } from "./profile/profile.query";
import { mRegister, mutRegister } from "./register/register.mutation";
import { mProfile, mutProfile } from "./profile/profile.mutation";

//@non: aggregate zone
import {
  mUserRegistration,
  mutUserRegistration,
} from "./aggregates/registration/registration.mutation";
import { tdUserRegistration } from "./aggregates/registration/registration.typedefs";

const Query = `
    type Query {
        _empty: String
    } 
`;

const Mutation = `    
    type Mutation {
        _empty: String
    }
`;

const resolvers = {};

export default makeExecutableSchema({
  typeDefs: [
    Query,
    Mutation,
    tdRegister,
    tdProfile,
    qRegister,
    qProfile,
    mRegister,
    mProfile,
    tdUserRegistration,
    mUserRegistration,
  ],
  resolvers: merge(
    resolvers,
    resRegister,
    resProfile,
    mutRegister,
    mutProfile,
    mutUserRegistration
  ),
});
