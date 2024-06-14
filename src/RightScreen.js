import { useSlideContext } from './SlideProvider';

import SlideScreen from './SlideScreen'

function RightScreen()
{
  const {currentState, nextButtonClick, previousButtonClick} = useSlideContext();
  return (
    <>
    <button onClick={previousButtonClick}>Previous</button>
    <button onClick={nextButtonClick}>Next</button>
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