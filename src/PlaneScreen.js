import { useSlideContext } from './SlideProvider';

function PlaneScreen()
{
  const {currentState, pointMetadata} = useSlideContext();

  return(
    <>
      <h1>{pointMetadata["plane_status"]}</h1>
      <img src={pointMetadata["debug_image"]}/>
    </>
  );
}

export default PlaneScreen;