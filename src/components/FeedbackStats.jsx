import React, {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext"
function FeedbackStats( ) {
const {feedback} = useContext(FeedbackContext)


let average = feedback.reduce((acc, num) => {
return acc + num.rating
},0) / feedback.length

// To fix decimal point and do regex to make it return one decimal point
average = average.toFixed(1).replace( /[.,]0$/, '')

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating:  {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats