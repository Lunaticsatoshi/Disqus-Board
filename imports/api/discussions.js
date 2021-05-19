import { Mongo } from 'meteor/mongo';

// Creates a new Mongo collections and exports it
export const Discussions = new Mongo.Collection('discussions');