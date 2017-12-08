import React from 'react';
import { Button, Header, Icon, Modal, Input, Form, Checkbox } from 'semantic-ui-react'


class NewOperationModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.getInitialState()
  }

  getInitialState() {
    return {
      name: '',
      type: '',
      amount: '',
      comment: '',
    };
  }

  render() {
    const {name, type, amount, comment} = this.state
    return (
      <Modal trigger={<Button>New operatrion</Button>} closeIcon>
        <Header icon='archive' content='Archive Old Messages' />
        <Modal.Content>

          <Form>
            <Form.Field>
              <label>Name</label>
              <Input
                type = 'text'
                placeholder='Name'
                value = {name}
                onChange = {this.handleChange('name')}
                className = {this.getClassName('name')}
              />
            </Form.Field>
            <Form.Field>
              <label>Type</label>
              <Input
                type = 'text'
                value = {type}
                placeholder='Type'
                onChange = {this.handleChange('type')}
                className = {this.getClassName('type')}
              />
            </Form.Field>
            <Form.Field>
              <label>Amount</label>
              <Input
                type = 'text'
                value = {amount}
                placeholder='Amount'
                onChange = {this.handleChange('amount')}
                className = {this.getClassName('amount')}
              />
            </Form.Field>
            <Form.Field>
              <label>Comment</label>
              <Input
                type = 'text'
                value = {comment}
                placeholder='Comment'
                onChange = {this.handleChange('comment')}
                className = {this.getClassName('comment')}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const {addComment, articleId} = this.props
    addComment({...this.state}, articleId)
    this.getInitialState()
  }

  handleChange = type => ev => {
    if (ev.target.value.length > limit[type].max) return

    this.setState({
      [type]: ev.target.value 
    });
  }

  getClassName = type => {
    return this.state[type].length && this.state[type].length < limit[type].min ? 'form-input__error' : ''
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