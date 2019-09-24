import { Meteor } from 'meteor/meteor';
import Eventos from '../collections';

Meteor.startup(() => {
  if(Eventos.find().count() == 0)
  {
    console.log("There are no events");
  } 
  // code to run on server at startup
});
