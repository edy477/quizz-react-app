//import React from 'react';
import { Link } from 'react-router-dom';
import useAxios from "axios-hooks";
import {useSelector,useDispatch}  from "react-redux";
import {arrrayResponse, userResponse} from "../../store/reducers";
import {addArrayResponse} from "../../store/actions";
import Quizzlist from "../quizz/quizzlist";
import React, {useLayoutEffect} from "react";
import {addRoute} from "../../store/actions";
import {type} from "os";


interface  IQuest {
    category: string;
    type: boolean;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string;
}

const QuizzResults = () => {

    const [{data, loading, error}, refetch] = useAxios(
        'https://opentdb.com/api.php?amount=5&difficulty=easy&type=boolean'
    )
    const dispatch = useDispatch();

    const {results} = data || " ";
    let arrayQuestions = results || [];
    let quizzVectors = [] as any;
    let quizzBoolean= [] as any ;

    let score = (arr: any[], val: any) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
    let scoreResult: number;
    let pathname = window.location.pathname;



    const notes = useSelector<arrrayResponse>(
        (state) => state
    );


    //Still have to improve this part

    // @ts-ignore
    let arrayRespone =  notes.arrayReducer.responseArray || [];

    arrayQuestions.filter((item:any) => ((quizzBoolean.push((item.correct_answer.toLowerCase() === 'true')))));


    quizzBoolean.forEach((item:any,index:number) =>{
             quizzVectors[index] = (Number(+Boolean(item)) === (arrayRespone[index]));
        });

    scoreResult = score(quizzVectors,true);




   // score  =  quizzVectors.filter((item: any, counter: number) => (counter = (item==true) ? counter++:counter));





    useLayoutEffect(() => {
        dispatch(addRoute(pathname));
        },[pathname])


    const routeHandler =(()  => {
        dispatch(addRoute("/"));
        })



    return(
        <div className="results">

            <span className="results__title"><embed src="/Vector.svg"/>FINAL STEP</span>
            <span className="resultts__description">Quiz Results!</span>


            <div className="block__c">
                <ul className="block_list">
                    {arrayQuestions.map((question: IQuest, index:number) => (
                        <li key={index}><embed src={` /${quizzVectors[index]}.png`}/><span>{question.question.toString().toString().replace(/&quot;/g,'"')}</span></li>
                    ))}
                </ul>
            </div>




            <div className="block__d">
           <div className="results__score">
               <span className="score-title">
                   SCORE
               </span>
               <span className="score__number">
                   {scoreResult}
               </span>
           </div>


            <Link to="/">
            <button onClick={routeHandler} className="results__play">
            Play Again
            </button>
            </Link>
            </div>

        </div>
    )
}
export default QuizzResults;
