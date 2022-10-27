import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from './../QuizQuestions/QuizQuestions';


const Quiz = () => {
    const {data} = useLoaderData();
    const {questions} = data;
    // console.log(questions);
    let qnNo = 1;
    return (
        <div className='topic-details'>
            <h4 className='text-center mt-4 mb-4 fw-bolder'>Quiz of {data.name}</h4>

            {
                questions.map(question => <QuizQuestions key={question.id} questionData={question} qnNo={qnNo++}></QuizQuestions>)
            }
        </div>
    );
};

export default Quiz;