import React from 'react';

const Question = ({q, i, onChange}) => (
  <div>
    <div className="f3">On a scale of 1 to 5 how do you feel about {q}</div>
    <div className="flex justify-between mt3">
      <div>
        <input type="radio" name={`q${i}`} value="1" onChange={onChange} defaultChecked />1
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

export default Question;