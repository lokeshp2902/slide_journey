import { useSlideContext } from './SlideProvider';

import SlideScreen from './SlideScreen'

function RightScreen()
{
  const {currentState, nextButtonClick, previousButtonClick} = useSlideContext();

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '15px',
    cursor: 'pointer',
    margin: '5px',
  };

  return (
    <>
      <button onClick={previousButtonClick} style={buttonStyle}>Previous</button>
      <button onClick={nextButtonClick} style={buttonStyle}>Next</button>
    {
      currentState > 0? <>
        <SlideScreen />
      </>:
      <>
      </>
    }
    </>
  );
}

export default RightScreen;