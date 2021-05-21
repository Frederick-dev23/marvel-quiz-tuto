import React, {Component} from 'react';
import Levels from '../Levels';
import ProgressBar from '../ProgressBar';

class Quiz extends Component {
    render(){
        console.log( this.props.userData)
        
        return (
            <div>
         
         <Levels/>
         <ProgressBar/>
         <h2>Notre Question Quizz</h2>
         <p className="answerOptions">Question 1</p>
         <p className="answerOptions">Question 2</p>
         <p className="answerOptions">Question 3</p>
         <p className="answerOptions">Question 4</p>
         <button className="btnSubmit">Suivant</button>
        </div>
         )
    }
}

export default Quiz