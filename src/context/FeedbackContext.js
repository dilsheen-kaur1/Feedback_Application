import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from "react";
const FeedbackContext = createContext();


//a provider
export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is Feedback item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This is Feedback item 2',
            rating: 9
        },
        {
            id: 3,
            text: 'This is Feedback item 3',
            rating: 8
        }
    ])

    //to know which item is being cureently editted
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false//if true means in edit mode
    })

    //delete feedback
    const deleteFeedback = (id) => {
        //to delete feedback
        if (window.confirm('Are you sure you want to delete')) {
          setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    //addFeedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        //to add new feedback with old feedback
        setFeedback([newFeedback, ...feedback])
    }

    //edit feedback
    const editFeedback = (item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    //update item feedback
    const updateFeedback = (id, updItem)=>{
        setFeedback(
            feedback.map((item)=> item.id === id ? 
                {...item, ...updItem } : item))
    }


    //values are any states or functions we want to pass
    return (
        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,//function
            feedbackEdit,//object
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;