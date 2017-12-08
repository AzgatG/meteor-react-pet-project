import React from 'react'
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
// col
import {Operations} from '../../../api/operations'


const OperationsTable = () => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell>Comment</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>First</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='4'>
          <Menu floated='right' pagination>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)


export default withTracker(() => {
  const sub = Meteor.subscribe('operations');
  const loading = !sub.ready();

  return {
    loading,
    operations: Operations.find({}).fetch(),
  };
})(OperationsTable);