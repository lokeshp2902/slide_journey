import { useSlideContext } from './SlideProvider';
import PointFlowScreen from './PointFlowScreen';
import WhiteScreen from './WhiteScreen';

import SlideScreen from './SlideScreen'

function CenterScreen(){
  const {currentState, pointMetadata} = useSlideContext();

  function currentScreen()
  {
    if(currentState > 0)
    {
      if("module" in pointMetadata && (pointMetadata["module"] === "best_z_level_estimation" ||  pointMetadata["module"] === "focus_sampling"))
      {
        // console.log("11");
        console.log(pointMetadata["module"]);
        return <PointFlowScreen />;
      }
      else if("module" in pointMetadata && (pointMetadata["module"] === "white_capture"))
      {
        // console.log("1222");
        return <WhiteScreen />;
      }
      else
      {
        // console.log("123");
      }
    }
    else
    {
      console.log("12");
      return <SlideScreen />;
    }
  }

  return (
    <>
      {currentScreen()}
    </>
  );
}

export default CenterScreen;