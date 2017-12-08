import React from 'react';
import Ьуеущк from 'meteor/meteor';
import { Button, Header, Icon, Modal, Input, Form, Checkbox } from 'semantic-ui-react'


class NewOperationModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.getInitialState()
  }

  getInitialState() {
    return {
      operation:{
        name: '',
        type: '',
        amount: '',
        comment: '',
      }, 
      isOpen: false
    };
  }

  render() {
    const {operation: {name, type, amount, comment}} = this.state
    return (
      <Modal
        open = { this.state.isOpen }
        onClose = { this.clearForm }
        trigger = {
          <Button
            positive
            floated = 'right'
            onClick = { this.handleClick }
          >
            New operatrion
          </Button>
        }
      >
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Name</label>
              <Input
                type = 'text'
                placeholder='Name'
                value = {name}
                onChange = {this.handleChange('name')}
                error = {this.getFieldValidation('name')}
              />
            </Form.Field>
            <Form.Field>
              <label>Type</label>
              <Input
                type = 'text'
                value = {type}
                placeholder='Type'
                onChange = {this.handleChange('type')}
                error = {this.getFieldValidation('type')}
              />
            </Form.Field>
            <Form.Field>
              <label>Amount</label>
              <Input
                type = 'text'
                value = {amount}
                placeholder='Amount'
                onChange = {this.handleChange('amount')}
                error = {this.getFieldValidation('amount')}
              />
            </Form.Field>
            <Form.Field>
              <label>Comment</label>
              <Input
                type = 'text'
                value = {comment}
                placeholder='Comment'
                onChange = {this.handleChange('comment')}
                error = {this.getFieldValidation('comment')}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button
              positive
              type='button'
              onClick = { this.handleSubmit }
            >Save</Button>
            <Button
              type='button'
              onClick = { this.closeForm }
            >Close</Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }

  handleSubmit = ev => {
    ev.preventDefault()
    console.log(this.state.operation);
    Meteor.call('operation.insert', this.state.operation, (error, result) => {
      if (error) {
        console.log(error);
        return
      }

      this.closeForm()
    })
    // const {addComment, articleId} = this.props
    // addComment({...this.state}, articleId)
    // this.getInitialState()
  }

  handleChange = type => ev => {
    const value = ev.target.value;
    if (value.length > limit[type].max) return

    this.setState(prevState => ({
      operation: {
        ...prevState.operation,
        [type]: value
      } 
    }));
  }

  getFieldValidation = type => {
    return this.state.operation[type] && this.state.operation[type].length < limit[type].min ? true : false
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  closeForm = () => {
    this.setState({
      operation: {
        name: '',
        type: '',
        amount: '',
        comment: '',
      },
      isOpen: false
    });
  }
}

export default NewOperationModal

const limit = {
  name: {
    min: 5,
    max: 15
  },
  type: {
    min: 20,
    max: 50
  },
  amount: {
    min: 20,
    max: 50
  },
  comment: {
    min: 20,
    max: 50
  }
}