import { v4 as uuidv4 } from "uuid"
import React, { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext()

export function FeedbackProvider ({ children }) {

  const [feedback, setFeedback] = useState(FeedbackData)
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    isEdit: false
  })

  // Add feedback
  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  // Set item to be updated
  function editFeedback(item){
    setFeedbackEdit({
      item: item ,
      isEdit: true
    })
  }
  // Update function
  function updateFeedback(id, updatedItem){
    setFeedback(feedback.map(item =>{ 
      return item.id === id ? {...item, ...updatedItem }: item
    }))
    setFeedbackEdit({
      item: {},
      isEdit: false
    })
  }
  // Delete feedback 
  function deleteFeedback(id) {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback => feedback.filter((item) => item.id !== id))
    }
  }
  return (
    <FeedbackContext.Provider 
    value={{
    feedback,
    feedbackEdit,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
  }}>
    {children}
  </FeedbackContext.Provider>
  )
}
export default FeedbackContext
