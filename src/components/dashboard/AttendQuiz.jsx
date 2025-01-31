'use client';
import { GreenCheck, SandClock } from '@/lib/svg_icons'
import React, { useState } from 'react'
import { Checkbox } from '../ui/checkbox'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '../ui/button';

const AttendQuiz = ({ setIsQuizOpen }) => {
    const [quizSubmit, setQuizSubmit] = useState(false);

    return (
        quizSubmit ?
            (
                <div className='flex items-center justify-center'>
                    <QuizSubmit setIsQuizOpen={setIsQuizOpen} />
                </div>
            )
            :
            (
                <div className='py-7 px-9 bg-[#181F2B] w-full rounded-2xl '>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h1 className='text-md font-semibold'>Quiz: Opening</h1>
                            <p className='text-[10px] text-gray-300'>Photoshop interface . 1 Basic interface</p>
                        </div>
                        <div className='flex items-center gap-x-1'>
                            <SandClock />
                            <p className='text-orange-300 text-xs font-semibold'>20:30 Left</p>
                        </div>
                    </div>

                    <div className='my-7'>
                        <QuizProgress setIsQuizOpen={setIsQuizOpen} setQuizSubmit={setQuizSubmit} />
                    </div>
                </div>
            )
    )
}



const QuizProgress = ({ setQuizSubmit }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});


    const questions = [
        {
            question: "What is the shortcut for creating a new layer in Photoshop?",
            options: ["Ctrl + C", "Ctrl + N", "Ctrl + Shift + N", "Ctrl + L"]
        },
        {
            question: "What is the tool to crop an image in Photoshop?",
            options: ["Crop Tool", "Lasso Tool", "Magic Wand Tool", "Pen Tool"]
        },
        {
            question: "How can you undo the last action in Photoshop?",
            options: ["Ctrl + Z", "Ctrl + Y", "Ctrl + U", "Ctrl + D"]
        },
        {
            question: "What is the shortcut for zooming in on the image?",
            options: ["Ctrl + +", "Ctrl + -", "Ctrl + Z", "Alt + Z"]
        },
        // Add more questions here
    ];

    const totalQuestions = questions.length;
    const currentQuestion = questions[currentQuestionIndex];

    const handleNextQuestion = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleCheckboxChange = (option) => {
        const currentSelectedOptions = { ...selectedOptions };
        const questionId = currentQuestionIndex;

        // Toggle the selection state of the checkbox
        if (currentSelectedOptions[questionId]) {
            if (currentSelectedOptions[questionId].includes(option)) {
                currentSelectedOptions[questionId] = currentSelectedOptions[questionId].filter(
                    (item) => item !== option
                );
            } else {
                currentSelectedOptions[questionId].push(option);
            }
        } else {
            currentSelectedOptions[questionId] = [option];
        }

        setSelectedOptions(currentSelectedOptions);
    };

    const isOptionSelected = (option) => {
        return selectedOptions[currentQuestionIndex] && selectedOptions[currentQuestionIndex].includes(option);
    };

    return (
        <>
            <div className='flex items-center justify-between mb-3'>
                <p className='text-sm'>{currentQuestionIndex + 1} of {totalQuestions} Questions</p>
                <p className='text-sm'>{Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}% Completed</p>
            </div>

            <ProgressBar currentQuestionIndex={currentQuestionIndex} totalQuestions={totalQuestions} />


            <div className='my-7'>
                <Questions question={currentQuestion} onCheckboxChange={handleCheckboxChange} isOptionSelected={isOptionSelected} />
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex gap-x-2'>
                    <button
                        className={`${currentQuestionIndex === 0 && 'opacity-40'} py-3 px-4 rounded-lg border border-[#ffffff80]`}
                        onClick={handlePrevQuestion}
                    >
                        <ArrowLeft />
                    </button>
                    <button
                        className={`${currentQuestionIndex === totalQuestions - 1 && 'opacity-40'} py-3 px-4 rounded-lg border border-[#ffffff80]`}
                        onClick={handleNextQuestion}
                    >
                        <ArrowRight />
                    </button>
                </div>

                <Button className="bg-[var(--neon-purple)] py-5 hover:bg-[var(--neon-purple)]" onClick={() => setQuizSubmit(true)} >Submit</Button>
            </div>
        </>
    )
}

const QuizSubmit = ({ setIsQuizOpen }) => {
    return (
        <div
            className="mx-4 p-10 rounded-[28px] flex items-center justify-center flex-col backdrop-blur-lg"
            style={{
                background:
                    "radial-gradient(circle at top, #1cc74d -120%, transparent 50%), #091926",
            }}
        >
            <GreenCheck />
            <div className='my-7'>
                <h2 className='text-center text-3xl font-bold mb-4'>Quiz Submitted Successfully</h2>
                <p className='text-sm text-center'>Quiz for photoshop interface
                    is submitted successfully</p>
            </div>

            <Button className="bg-[var(--neon-purple)] px-7 py-5 hover:bg-[var(--neon-purple)]" onClick={() => setIsQuizOpen(false)} >Continue</Button>


        </div>

    )
}

export const ProgressBar = ({ currentQuestionIndex, totalQuestions }) => {
    return (
        <div className="w-full bg-black h-2 rounded-xl overflow-hidden">
            <div
                className="h-full bg-[var(--yellow)] transition-all duration-300 ease-in-out"
                style={{ width: `${(currentQuestionIndex + 1) / totalQuestions * 100}%` }}
            />
        </div>
    )
}


const Questions = ({ question, onCheckboxChange, isOptionSelected }) => {
    return (
        <div>
            <h1 className='text-xl font-semibold mb-7'>{question.question}</h1>
            {question.options.map((option, index) => (
                <CheckBoxOption
                    key={index}
                    option={option}
                    onChange={() => onCheckboxChange(option)}
                    isSelected={isOptionSelected(option)}
                />
            ))}
        </div>
    )
}


const CheckBoxOption = ({ option, onChange, isSelected }) => {
    return (
        <div className='flex bg-black items-center gap-x-4 p-4 rounded-2xl mb-2'>
            <Checkbox
                className="w-6 h-6 border-2 rounded-lg border-[var(--neon-purple,#C99BFD)] data-[state=checked]:bg-[var(--neon-purple)]"
                checked={isSelected}
                onCheckedChange={onChange}
            />
            <p className='text-sm'>{option}</p>
        </div>
    )
}

export default AttendQuiz;
