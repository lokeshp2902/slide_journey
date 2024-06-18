import PlaneScreen from './PlaneScreen';
import PointFlowScreen from './PointFlowScreen';
import SlideScreen from './SlideScreen'
import WhiteScreen from './WhiteScreen';
import Acquisition from './Acquisition';
import { useSlideContext } from './SlideProvider';

function CenterScreen(){
  const {currentState, pointMetadata} = useSlideContext();

  function currentScreen()
  {
    console.log('block currentState',currentState);
    if(currentState > 0)
    {
      if("module" in pointMetadata && (pointMetadata["module"] === "best_z_level_estimation" ||  pointMetadata["module"] === "focus_sampling"))
      {
        // console.log("11");
        console.log(pointMetadata["module"]);
        return <PointFlowScreen />;
      }
      else if("module" in pointMetadata && (pointMetadata["module"] === "white_creation"))
      {
        console.log("1222");
        return <WhiteScreen />;
      }
      else if("module" in pointMetadata && (pointMetadata["module"] === "plane_creation"))
      {
        return <PlaneScreen />
      }
      else if("module" in pointMetadata && (pointMetadata["module"] === "Acquisition"))
      {
        return <Acquisition />
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