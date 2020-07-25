// import React, { Component } from 'react';
import React, {useState} from "react";
// class QuizForm = ({question, options, selected}) => {

//     render(){
//         return <div>
//             <p>Hello World</p>
//         </div>
//     }

// }

// export default QuizForm;
const QuestionBox = ({question, options, selected}) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
