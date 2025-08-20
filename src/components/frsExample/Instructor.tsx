
import type {instructorProps} from './PropsTypes';

function Instructor(props:instructorProps) {
  return (
    <div>
      {props.instructorNameLastName.firstName} {' '}
       {props.instructorNameLastName.lastName}
    </div>
  )
}

export default Instructor