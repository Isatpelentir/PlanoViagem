import React, { useState } from 'react';

const Quiz = () => {
    const questions = [
        {
            question: "Qual a capital da França?",
            options: ["Paris", "Londres", "Berlim", "Madrid"],
            answer: "Paris"
        },
        {
            question: "Qual a fórmula da água?",
            options: ["H2O", "CO2", "O2", "NaCl"],
            answer: "H2O"
        },
        
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleAnswer = (option) => {
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setSubmitted(true);
        }
    };

    return (
        <div>
            {submitted ? (
                <h2>Você acertou {score} de {questions.length} perguntas.</h2>
            ) : (
                <div>
                    <h2>{questions[currentQuestion].question}</h2>
                    <div>
                        {questions[currentQuestion].options.map((option, index) => (
                            <button key={index} onClick={() => handleAnswer(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
