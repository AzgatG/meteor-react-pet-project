import React from 'react'
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
// components
import OperationsTable from './OperationsTable'
// col
import {Operations} from '../../../api/operations'


const OperationsContaioner = ({ operations, loading }) => {
  if (loading) return <h2>Loading...</h2>  
  if (operations && operations.length) {
    return <OperationsTable operations = {operations} />
  }
  return <h4>Пока нету операций</h4> 
}


export default withTracker(() => {
  const sub = Meteor.subscribe('operations');
  const loading = !sub.ready();

  return {
    loading,
    operations: Operations.find({}).fetch(),
  };
})(OperationsContaioner);