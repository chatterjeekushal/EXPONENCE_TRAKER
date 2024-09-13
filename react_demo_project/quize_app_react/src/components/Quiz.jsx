import React, { useState } from 'react'
import { questions_data } from '../quiz_data'
import Quiz_result from './Quiz_result';

function Quiz() {

    const [current_quation, setcurrent_quation] = useState(0);

    const [score, setscore] = useState(0);

    const [clicket_ans, setclicket_ans] = useState(0);

    const [showresult, setshowresult] = useState(false)

    const handel_quation_change = () => {

        update_score()

        if (current_quation === questions_data.length - 1) {
            // If we're at the last question, reset to the first question (index 0)
            setcurrent_quation(0);
            setshowresult(true)

        } else {
            // Otherwise, go to the next question
            setcurrent_quation((quation) => quation + 1);

        }

    }


    const update_score = () => {

        if (clicket_ans === questions_data[current_quation].answer) {

            setscore((score) => score + 1)

            console.log(score);

        }
    }


    return (
        <div>

<div>
    <h1>Quiz App</h1>

    <div className='container'>
        {showresult ? (
            <Quiz_result score={score} totalscore={questions_data.length} />
        ) : (
            <div>
                <div className='question'>
                    <span>{questions_data[current_quation].question}</span>
                </div>

                <div className='option'>
                    {questions_data[current_quation].options.map((option, i) => (
                        <button key={i}  onClick={() => setclicket_ans(i + 1)}>
                            {option}
                        </button>
                    ))}
                </div>

                <input type="button" value="Next" id="next" onClick={handel_quation_change} />
            </div>
        )}
    </div>
</div>


        </div>
    )
}

export default Quiz
