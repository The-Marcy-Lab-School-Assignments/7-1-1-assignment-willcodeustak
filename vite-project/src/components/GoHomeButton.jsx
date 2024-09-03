// TODO: 
// - Make the button navigate the user back to the home page
/** FEEDBACK: The L on Link should be capital! This is why it is not working! */
import { Link } from 'react-router-dom'
const GoHomeButton = () => {
  return (
    <Link to={'/'}>
      <button className="ui button fluid">
       <p>Go Home</p> 
      </button>
    </Link>
  )
}

export default GoHomeButton;