import React, { useState, useCallback, useRef, useEffect } from 'react';
import {Container, Question, Options, Answer, Form} from './styles';
import questions from '../../config/questions';


const Survey = () => {
  

  const [answers, setAnswer] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [inputValue, setInput] = useState('');

  const inputSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(e.target.input.value);
    setAnswer([...answers, {id: currentQuestion, answer: e.target.input.value}]);
    // e.target.input.value = '';
    setCurrentQuestion(currentQuestion + 1);
  }, [answers, currentQuestion]);

  const handleOption = useCallback((e) => {
    console.log(e.target.value);
    setCurrentQuestion(currentQuestion + 1);
    setAnswer([...answers, {id: currentQuestion, answer: e.target.value}]);
    console.log(answers);
  }, [currentQuestion, answers]);

  const [ended, setEnded] = useState(false);

  const endQuiz = useCallback(() => {
    console.log('acabou');
    setEnded(true);
  }, [])

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({behavior: 'smooth'});
  }, [currentQuestion])

  return (
    <Container>
      {questions
        .filter(question => question.id <= currentQuestion)
        .map(question => (
          <>
            <Question key={question.id}>
              <span>{question.content}</span>
              
              {question.hasOptions ? 
                <Options>
                  {question.options.map(option => (
                    <button value={option} onClick={handleOption} key={option}>{option}</button>
                  ))}
                </Options> : 
                <Form onSubmit={inputSubmit} >
                  <input placeholder={question.placeholder} type="text" name="input" onChange={(e) => setInput(e.target.value)}></input>
                  <button type="submit">Enviar</button>
                </Form>
              }
            </Question>
            {answers[question.id - 1] ? 
            <Answer style={{marginTop: 20, marginBottom: 20}}>
              <span>{answers[question.id - 1].answer}</span>
            </Answer> : <div />}

            {question.quizEnd && <button onClick={endQuiz}>End Quiz</button>}
            
          </>
        ))}
      <div ref={endRef} />

      {ended && 
        <div>
          <h2>Suas respostas foram:</h2>
          {answers.map(answer => (
            <>
              <h3>{`Q.${answer.id}`}</h3>
              <p>{answer.answer}</p>
            </>
          ))}
        </div>
      }
      
    </Container>
  );
}

export default Survey;