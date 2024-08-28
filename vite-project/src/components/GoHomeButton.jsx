// TODO: 
// - Make the button navigate the user back to the home page
/** FEEDBACK: The L on Link should be capital! This is why it is not working! */
import { link } from 'react-router-dom'
const GoHomeButton = () => {
  return (
    <link to={'/'}>
      <button className="ui button fluid">
        Go Home
      </button>
    </link>
  )
}

export default GoHomeButton;