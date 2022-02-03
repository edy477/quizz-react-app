import React, {MutableRefObject, useLayoutEffect} from 'react';
import {useState, useEffect} from "react";
import axios from 'axios';
import useAxios from "axios-hooks";
import Quizzlist from "./quizzlist";
import {useSelector} from 'react-redux';
import {userResponse} from "../../store/reducers";
import { useHistory } from "react-router-dom";



interface  IQuest {
    category: string;
    type: boolean;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string;
}

let arrayQuestions:IQuest[] = [];
const Quizz = () => {


    const quizzBox = React.useRef<HTMLDivElement>(null);
    const quizzButton = React.useRef<HTMLButtonElement>(null);
    let history = useHistory();
    let [counter,setCounter] = useState(0);
    let pathname = window.location.pathname;


    const notes = useSelector<userResponse>(
        (state) => state.response
    );



    const textInputRefs = React.useRef<(HTMLDivElement | null)[]>([])

    const userAnswers: any[]=[];



    const [{data, loading, error}, refetch] = useAxios(
        'https://opentdb.com/api.php?amount=5&difficulty=easy&type=boolean'
    )


    const {results} = data || " ";
    arrayQuestions = results || [];



    const setTrue = () => {
        //Still have to improve this code
        if (null !== textInputRefs.current[counter] && textInputRefs.current[counter + 1]) {
            // @ts-ignore

            // @ts-ignore
            textInputRefs.current[counter].style.transform = `translateY(${-(counter + 1) * 100}%)`;
            // @ts-ignore
            textInputRefs.current[counter + 1].style.transform = `translateY(${-(counter + 1) * 100}%)`;
        }

        setCounter(counter+1);

    }


    return(
        <div className="quizz" >
            <div className="quizz__container" ref={quizzBox}>
                {arrayQuestions.map((question, index) => (

                    <Quizzlist key={index} counterQuestion={counter} numberQuestion={counter} ref={(element) => textInputRefs.current.push(element)} category={question.category} question={question.question} onChildClick={setTrue}  />

                ))}
            </div>
        </div>

    )
}
export default Quizz;

