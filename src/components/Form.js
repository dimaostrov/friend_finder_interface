import React, { Component } from "react";
import axios from 'axios';

import Modal from './Modal';

const INITIAL_STATE = {
  name: '',
  photo: '',
  q1: '',
  q2: '',
  q3: '',
  q4: '',
  q5: '',
  q6: '',
  q7: '',
  q8: '',
  q9: '',
  q10: ''
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class Form extends Component {
  constructor(){
    super()
    this.state = { completed: false, modal: false, friend: '', input: [...INITIAL_STATE] };

    this.handleClick = this.handleClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount(){
    this.setState({ input: [...INITIAL_STATE]});
  }

  handleClick (event) {
    event.preventDefault()
    this.state.input.filter(x => x === '').length ? this.setState({modal: true}) : this.setState({ completed: true, modal: true});
    this.setState({modal: true});
    this.state.completed && this.getFriend();  
  }

  toggleModal () {
    this.setState({
      modal: !this.state.modal
    });
  }

  getFriend(){
    axios.post('/user', {
      ...this.state.input
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render () {
    const {name, photo, ...qs} = this.state.input;
    const { completed, modal } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="mw9 pa3 bg-washed-green">
        <div className="flex justify-between">
          <div className="fl w-50 mr2">
              <label for="name" className="f6 b db mb2">Name</label>
              <input id="name" name="name" value={name} onChange={event => this.setState(byPropKey(name, event.target.value))} className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
          </div>
          <div className="fl w-50">
              <label for="photo" className="f6 b db mb2">Photo</label>
              <input id="photo" name="photo" value={photo} onChange={event => this.setState(byPropKey(photo, event.target.value))} className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
          </div>
        </div>
        <div>{questions.map((q, i) => <Question q={q} i={i} onChange={event => this.setState(byPropKey(`q${i}`, event.target.value))} />)}</div>
        <button
         onClick={this.handleClick}
         id="submit" 
         class="ba b--black bg-white black grow ma2 pa2" 
         type="submit"
         >
           Submit Your Results!
         </button>
         <Modal
          onClose={this.toggleModal}
          show={this.state.modal}
         />
      </form>
    )
  }
}

const questions = [
  "tobacco",
  "alcohol",
  "marijuana",
  "crystal meth",
  "Stalin",
  "Vegemite",
  "Footbal, not egg ball",
  "Pabst",
  "IPA",
  "jenkem"
];

const Question = ({q, i, onChange}) => (
  <div>
    <div className="f3">On a scale of 1 to 5 how do you feel about {q}</div>
    <div className="flex justify-between mt3">
      <div>
        <input type="radio" name={`q${i}`} value="1" onChange={onChange} />1
      </div>
      <div>
        <input type="radio" name={`q${i}`} value="2" onChange={onChange} />2
      </div>
      <div>
        <input type="radio" name={`q${i}`} value="3" onChange={onChange} />3
      </div>
      <div>
        <input type="radio" name={`q${i}`} value="4" onChange={onChange} />4
      </div>
      <div>
        <input type="radio" name={`q${i}`} value="5" onChange={onChange} />5
      </div>
    </div>
    <hr />
  </div>
);

export default Form;

//user clicks on button
//button validates that the form is complete
//a modal pops up
//if form is complete it posts user data to server and renders response
//else it notifies user to complete filling out the data