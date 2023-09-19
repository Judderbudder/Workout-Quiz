import React, { useState } from 'react';
import Question from './question/question';
import CheckboxQuestion from './checkboxquestion/CheckboxQuestion';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import questionsData from './questionData';
import WeightQuestion from './weight/weight';
import HeightQuestion from './height/height';
import EmailQuestion from './email/email';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userResponses, setUserResponses] = useState([]);

  const onSelectOption = (response) => {
    setUserResponses([...userResponses, response]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleCheckboxContinue = (selectedOptions) => {
    setUserResponses([...userResponses, selectedOptions]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleInputContinue = (inputData) => {
    setUserResponses([...userResponses, inputData]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmit = () => {
    console.log('User Responses:', userResponses);

    // Make a POST request to SheetDB API
    fetch('https://sheetdb.io/api/v1/gb4d3yxjk0mf7', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userResponses)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Data stored in SheetDB:', data);
    })
    .catch(error => {
      console.error('Error storing data in SheetDB:', error);
    });
  };

  return (
    <div className="App">
      {currentQuestion === 2 ? (
        <CheckboxQuestion
          question={questionsData[2].question}
          options={questionsData[2].options}
          onNext={handleCheckboxContinue}
        />
      ) : currentQuestion === 7 ? (
        <WeightQuestion
          question={questionsData[7].question}
          onNext={handleInputContinue}
        />
      ) : currentQuestion === 8 ? (
        <HeightQuestion
          question={questionsData[8].question}
          onNext={handleInputContinue}
        />
      ) : currentQuestion === 9 ? (
        <EmailQuestion
          question={questionsData[9].question}
          onNext={handleInputContinue}
        />
      ) : currentQuestion < questionsData.length ? (
        <Question
          question={questionsData[currentQuestion].question}
          options={questionsData[currentQuestion].options}
          onSelectOption={onSelectOption}
          currentIndex={currentQuestion}
        />
      ) : (
        <div>
          <h2>Quiz Completed</h2>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default App;
