import React, {lazy, Suspense, useLayoutEffect, useEffect} from "react";
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import {useState} from "react";
import {actualRoute, userResponse} from "../store/reducers";
import { useHistory, useLocation } from "react-router-dom";
import {useSelector} from 'react-redux';


//Lazy loading  here
const QuizzIntro = React.lazy(() => import('./quizzintro/quizzintro'));
const QuizzPart = React.lazy(() => import('./quizz/quizzpart'));
const QuizzResults = React.lazy(() => import('./quizzresults/quizzresults'));




const Card = () => {
    let history = useHistory();
    let [location,setLocation] = useState("");
    let [flag,setFlag] = useState(0);

    const notes = useSelector<actualRoute>(
        (state) => state

    );





    let pathname = window.location.pathname;
    useLayoutEffect(() => {
        setLocation(window.location.pathname);
         pathname = window.location.pathname;

    }, [pathname]);

    useEffect(()=>{



        // @ts-ignore
        if(notes.routeReducer.route == "/quizzresults"){
            console.log("they're equal");
           setFlag(1);
        }
        else {
            setFlag(0);
        }


    },[notes])

    useEffect(()=>{

            console.log(flag);
    },[flag]);



    console.log(flag);
    return(
        <div className={`card-${flag}`}>
             <div className={`card__image-${flag}`}>
                 <img src="/Image.png" className={`image-${flag}`} alt="card image"/>

             </div>
             <div className={`card__body-${flag}`}>
<Router>


<Suspense fallback={null}>
    <Switch>
        <Route exact component={QuizzIntro} path="/" />
        <Route component={QuizzPart} path="/quizzpart" />
        <Route component={QuizzPart} path="/quizzpart" />
        <Route component={QuizzResults} path="/quizzresults" />
    </Switch>

</Suspense>
</Router>


             </div>

        </div>
    )
}
export default  Card;

//<button>Start the game</button>