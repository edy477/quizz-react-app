import React, { Component, MouseEvent } from 'react';
import {useState, useEffect,useRef, useLayoutEffect, forwardRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import {userResponse, arrrayResponse} from "../../store/reducers";
import {stringify} from "querystring";
import { addResponse,addArrayResponse } from "../../store/actions";
import {useHistory} from "react-router-dom";

type CalculatorProps = {
    numberQuestion: number;
    category: string;
    question: string;
    counterQuestion:number;
    onChildClick: any;
}

const Quizzlist = React.forwardRef<HTMLDivElement,CalculatorProps>(({category, question, onChildClick, numberQuestion,counterQuestion}: CalculatorProps,ref) =>{



    let [solutions,setSolutions] = useState<string[]>([]);
    let [counter,setCounter] = useState(1);

    const [response, setResponse] = useState(false);

    const dispatch = useDispatch();
    let history = useHistory();

    let attr: any;







    const inputHandler = (event: MouseEvent<HTMLButtonElement>) => {

        attr = event.currentTarget.getAttribute("data-response");

        if(counterQuestion == 4)
        {
            history.push("/quizzresults");
        }

        dispatch(addResponse(Boolean(attr)));
        dispatch(addArrayResponse(Number(attr)));

    };



    const setFalse =() =>{
        setResponse(false);

    }


    return(

        <div className="quizzlist" ref={ref}>


             <span className="quizz__number">
                 {(counterQuestion+1).toString()} of 5
            </span>

            <div className="quizz__text">
                <h2>{category}</h2>
                <p>{question.toString().replace(/&quot;/g,'"')
                }</p>

            </div>

            <div className="quizz__buttons">
                <button className="button-true" onClick={(event) =>{inputHandler(event);onChildClick();}}  data-response="1">True</button>
                <button className="button-false" onClick={(event) =>{inputHandler(event);onChildClick();}} data-response="0">False</button>

            </div>

            </div>

    )

});


export default Quizzlist;