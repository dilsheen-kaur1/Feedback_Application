import Card from "./shared/Card"
import PropTypes from 'prop-types'
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({item}) {
    // const [rating, setRating] = useState(7);
    // const [text, setText] = useState('This is an exaple');
    // const handleClick = ()=>{
    //     // setRating(10);
    //     setRating((prev)=>{
    //         console.log(prev)
    //         return prev + 1;
    //     })
    // }

    // const handleClick = (id)=>{
    //     console.log(id);
    // }

    const { deleteFeedback, editFeedback} = useContext(FeedbackContext)
  return (
    // <div className='card'>
    <Card reverse={true}>
        <div className='num-display'>{item.rating}</div>
        <button className="close" onClick={()=>deleteFeedback(item.id)} >
          <FaTimes color="purple" />
        </button>
        <button className="edit" onClick={()=> editFeedback(item)}>
          <FaEdit color="purple" />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
    // </div>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}
export default FeedbackItem