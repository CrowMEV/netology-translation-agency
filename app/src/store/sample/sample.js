import {useDispatch, useSelector} from "react-redux";

// This component is defined to show, how work with store
function Sample() {
  const {successPopupVisible} = useSelector(state => state.application);
  const dispatch = useDispatch();

  const show = () => {
    dispatch({type: 'application/showSuccessPopup'});
  }
  const hide = () => {
    dispatch({type: 'application/hideSuccessPopup'});
  }

  const style = {
    width: '150px',
    fontSize: '25px',
    backgroundColor: 'grey',
    color: 'white',
  }

  return (
    <div>
      <button style={style} onClick={show}>ShowPopup</button>
      <button style={style} onClick={hide}>HidePopup</button>
      { successPopupVisible?
        <div style={{fontSize: '30px', color: 'red'}}> YOU SEE MEE NOW!!! </div> : null
      }
    </div>
  )
}

export default Sample;
