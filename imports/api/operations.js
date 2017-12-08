import { Mongo } from 'meteor/mongo';
 
export const Operations = new Mongo.Collection('operations');

Meteor.methods({
  'operation.insert'(operation) {
    // check(text, String);
 
    // Make sure the user is logged in before inserting a task
    // if (! this.userId) {
    //   throw new Meteor.Error('not-authorized');
    // }
 
    Operations.insert({
      ...operation,
      date: new Date(), //TODO: вынести в создание операций
      createdAt: new Date(),
    });
  },
});


if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('operations', function() {
    return Operations.find();
  });
}