import React, { Component } from "react";

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
    this.state = { ...INITIAL_STATE };

  }

  render () {
    const { name, photo, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 } = this.state;

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
        <button id="submit" class="ba b--black bg-white black grow ma2 pa2" type="submit">Submit Your Results!</button>
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
