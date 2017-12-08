import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
// col


const OperationsTable = ({ operations }) => (
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
      {
        getOperationsList(operations)
      }
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

function getOperationsList(operations) {
  return operations.map( operation => (
    <Table.Row key = { operation._id }>
      <Table.Cell>{ operation.name }</Table.Cell>
      <Table.Cell>{ operation.name }</Table.Cell>
      <Table.Cell>{ operation.name }</Table.Cell>
      <Table.Cell>{ operation.name }</Table.Cell>
    </Table.Row>
  ))
}

export default OperationsTable;