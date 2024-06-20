import {createContext, useEffect, useState, useContext} from "react";

const SlideContext = createContext({ defaultValue: {} });

export const useSlideContext = () => {
  return useContext(SlideContext);
};

const initialSlideInput = 
{
  "slide_name" : "H02LBB222P-359",
  "slide_thickness" : "Single",
  "slide_image_path" : "http://localhost/hdd/H02LBB222P-359/slide_image.png",
  "imaging_areas_coords" : {
    "start_x" : 127,
    "end_x" : 747,
    "start_y" : 73,
    "end_y" : 1315
  },
  "pipeline": [
    {
        "module": "grid_coordinates",
        "start_x": 533.7211538461538,
        "start_y": 947.247794117647,
        "end_x": 610.6987179487179,
        "end_y": 1013.499428104575,
        "color": "#006400",
        "grid_id": 1
    },
    // {
    //     "module": "plane_creation",
    //     "debug_image": "http://localhost/hdd/H02LBB222P-359/grid_1/points_selected_no_tma.jpeg",
    //     "plane_x_coff": null,
    //     "plane_y_coeff": null,
    //     "plane_const": null,
    //     "row_diff": null,
    //     "col_diff": null,
    //     "confidence_score_threshold": 0,
    //     "plane_status": "PlaneStatus.NOT_CONFIDENT",
    //     "material_type": 0,
    //     "delta_z_flag": "",
    //     "collinearity_flag": "",
    //     "spatial_flag": "",
    //     "confidence_score": "",
    //     "delta_z_value": ""
    // },
    {
        "is_tissue_plane_available": "False",
        "material_status": 1,
        "material_type": 1,
        "bestZ_classification": 1,
        "module": "reference_estimation"
    },
    {
        "directional_probing": false,
        "name": "aoi7826",
        "start_x": 566.7115384615385,
        "start_y": 980.373611111111,
        "end_x": 577.7083333333334,
        "end_y": 986.9987745098039,
        "color": "#006400",
        "direction": "",
        "grid_name": "grid_1",
        "sequence": [
            {
                "input": {
                    "magnifcation": "4x",
                    "start_z": 8625,
                    "step_size": 55,
                    "stop_z": 9395
                },
                "module": "coarse",
                "output": {
                    "best_z": 9010,
                    "colored_blobs": false,
                    "focus_metric": 24.830399625882347,
                    "focus_metric_distribution": {
                        "8625.000000": 3.7444700077159596,
                        "8680.000000": 4.222108532509127,
                        "8735.000000": 5.1346837281334246,
                        "8790.000000": 6.825672027267292,
                        "8845.000000": 8.878385503768753,
                        "8900.000000": 12.06470412238719,
                        "8955.000000": 14.562562223648447,
                        "9010.000000": 24.830399625882347,
                        "9065.000000": 20.00618490857665,
                        "9120.000000": 9.593615695296661,
                        "9175.000000": 6.526369346759705,
                        "9230.000000": 5.144446472777923,
                        "9285.000000": 4.414145736104154,
                        "9340.000000": 3.934019807591,
                        "9395.000000": 3.653374946816165
                    },
                    "image_path": "http://localhost/hdd/H02LBB222P-359/grid_1/coarse/X23309.375000_Y40446.875000_Z9010.000000.bmp"
                },
                "timings": {
                    "basket_time_contributors": {
                        "capture_thread_sleep_time": "90",
                        "clear_camera_buffer_timer": "0",
                        "coarse_time": "682",
                        "disk_writing_best_image": "3",
                        "enable_z_trigger": "22",
                        "set_xy_position": "672",
                        "set_z_position": "46",
                        "turn_on_camera_trigger": "9"
                    }
                },
                "total_time": 1.5
            },
            {
                "input": {
                    "magnifcation": "40x",
                    "start_z": 8930,
                    "step_size": 10,
                    "stop_z": 9150
                },
                "module": "coarse",
                "output": {
                    "best_z": 9060,
                    "colored_blobs": false,
                    "focus_metric": 20.083896754388977,
                    "focus_metric_distribution": {
                        "8930.000000": 1.3038306719371182,
                        "8940.000000": 1.32365246991924,
                        "8950.000000": 1.607527534550262,
                        "8960.000000": 3.0810277375095887,
                        "8970.000000": 1.8261940618878387,
                        "8980.000000": 1.4570141436976134,
                        "8990.000000": 1.3588405255866054,
                        "9000.000000": 1.3196447806315406,
                        "9010.000000": 1.3141953167638099,
                        "9020.000000": 1.3323194431388279,
                        "9030.000000": 1.3778809387336097,
                        "9040.000000": 1.5946958404907017,
                        "9050.000000": 3.0666414970047295,
                        "9060.000000": 20.083896754388977,
                        "9070.000000": 2.7440673654069165,
                        "9080.000000": 1.5323716849551268,
                        "9090.000000": 1.3694349865225182,
                        "9100.000000": 1.3212742078307569,
                        "9110.000000": 1.305031350527681,
                        "9120.000000": 1.297465103054055,
                        "9130.000000": 1.2920845533790706,
                        "9140.000000": 1.2892693027801172,
                        "9150.000000": 1.2875528722798515
                    },
                    "image_path": "http://localhost/hdd/H02LBB222P-359/grid_1/coarse/X23512.500000_Y40693.750000_Z9060.000000.bmp"
                },
                "timings": {
                    "basket_time_contributors": {
                        "capture_thread_sleep_time": "90",
                        "clear_camera_buffer_timer": "0",
                        "coarse_time": "421",
                        "disk_writing_best_image": "4",
                        "enable_z_trigger": "22",
                        "set_xy_position": "79",
                        "set_z_position": "79",
                        "turn_on_camera_trigger": "10"
                    }
                },
                "total_time": 1.2
            },
            {
                "input": {
                    "magnifcation": "40x",
                    "start_z": 9038.125,
                    "step_size": 1.5625,
                    "stop_z": 9080.3125
                },
                "module": "fine",
                "output": {
                    "best_z": 9060,
                    "blobs_with_color": 35,
                    "color_metric": 277.0521410014397,
                    "confidence_score": 0.8631244607133388,
                    "debris_status": 0,
                    "focus_metric": 60.57495842242813,
                    "focussed_stack_index": 14,
                    "foreground_rank": 1,
                    "hue_metric": 0,
                    "image_path": "http://localhost/hdd/H02LBB222P-359/grid_1/acquisition_debug_data/sampled_images/aoi7826__Z9061.562500_idx14.jpg",
                    "valid_blobs_count": 35,
                    "valid_focus_metric_blocks_count": 35,
                    "pen_mark_status": false,
                    "material_status": "Tissue",
                },
                "total_time": 1,
                "trigger_miss": null
            }
        ],
        "capture_status": true,
        "probing_time": 8.119771718978882,
        "module": "best_z_level_estimation"
    },
    {
        "timings": {
            "db_read": 0.010490894317626953,
            "image_processing_time": 6.132874965667725
        },
        "white_aois": [
            {
                "start_x": 291.7916666666667,
                "start_y": 655.7406045751634,
                "end_x": 302.78846153846155,
                "end_y": 662.3657679738562,
                "aoi_name": "aoi5032",
                "color": "blue",
                "capture_status": true,
                "image_path": "http://localhost/hdd/H02LBB222P-359/white_aois_from_1x/aoi5032.bmp",
                "smoothening_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/",
                "profile_check_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/aoi5032_wc_image.jpeg",
                "final_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/",
                "capture_time": 0.750220775604248
            },
            {
                "start_x": 302.78846153846155,
                "start_y": 655.7406045751634,
                "end_x": 313.7852564102564,
                "end_y": 662.3657679738562,
                "aoi_name": "aoi5033",
                "color": "blue",
                "capture_status": true,
                "image_path": "http://localhost/hdd/H02LBB222P-359/white_aois_from_1x/aoi5033.bmp",
                "smoothening_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/",
                "profile_check_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/",
                "final_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/",
                "capture_time": 0.17982959747314453
            },
            {
                "start_x": 313.7852564102564,
                "start_y": 655.7406045751634,
                "end_x": 324.78205128205127,
                "end_y": 662.3657679738562,
                "aoi_name": "aoi5034",
                "color": "blue",
                "capture_status": true,
                "image_path": "http://localhost/hdd/H02LBB222P-359/white_aois_from_1x/aoi5034.bmp",
                "smoothening_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/",
                "profile_check_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/",
                "final_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/",
                "capture_time": 0.19338202476501465
            },
            {
                "start_x": 291.7916666666667,
                "start_y": 662.3657679738561,
                "end_x": 302.78846153846155,
                "end_y": 668.990931372549,
                "aoi_name": "aoi5115",
                "color": "blue",
                "capture_status": true,
                "image_path": "http://localhost/hdd/H02LBB222P-359/white_aois_from_1x/aoi5115.bmp",
                "smoothening_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/",
                "profile_check_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/aoi5115_wc_image.jpeg",
                "final_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/",
                "capture_time": 0.19524383544921875
            },
            {
                "start_x": 302.78846153846155,
                "start_y": 662.3657679738561,
                "end_x": 313.7852564102564,
                "end_y": 668.990931372549,
                "aoi_name": "aoi5114",
                "color": "blue",
                "capture_status": true,
                "image_path": "http://localhost/hdd/H02LBB222P-359/white_aois_from_1x/aoi5114.bmp",
                "smoothening_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/aoi5114_threshold_mask.jpeg",
                "profile_check_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/",
                "final_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/aoi5114_mean_replaced.jpeg",
                "capture_time": 0.20549249649047852
            },
            {
                "start_x": 313.7852564102564,
                "start_y": 662.3657679738561,
                "end_x": 324.78205128205127,
                "end_y": 668.990931372549,
                "aoi_name": "aoi5113",
                "color": "blue",
                "capture_status": true,
                "image_path": "http://localhost/hdd/H02LBB222P-359/white_aois_from_1x/aoi5113.bmp",
                "smoothening_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/",
                "profile_check_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/aoi5113_wc_image.jpeg",
                "final_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/",
                "capture_time": 0.1937105655670166
            },
            {
                "start_x": 291.7916666666667,
                "start_y": 668.990931372549,
                "end_x": 302.78846153846155,
                "end_y": 675.6160947712418,
                "aoi_name": "aoi5146",
                "color": "blue",
                "capture_status": true,
                "image_path": "http://localhost/hdd/H02LBB222P-359/white_aois_from_1x/aoi5146.bmp",
                "smoothening_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/",
                "profile_check_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/aoi5146_wc_image.jpeg",
                "final_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/",
                "capture_time": 0.18944406509399414
            },
            {
                "start_x": 302.78846153846155,
                "start_y": 668.990931372549,
                "end_x": 313.7852564102564,
                "end_y": 675.6160947712418,
                "aoi_name": "aoi5147",
                "color": "blue",
                "capture_status": true,
                "image_path": "http://localhost/hdd/H02LBB222P-359/white_aois_from_1x/aoi5147.bmp",
                "smoothening_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/aoi5147_threshold_mask.jpeg",
                "profile_check_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/aoi5147_wc_image.jpeg",
                "final_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/aoi5147_mean_replaced.jpeg",
                "capture_time": 0.19226980209350586
            },
            {
                "start_x": 313.7852564102564,
                "start_y": 668.990931372549,
                "end_x": 324.78205128205127,
                "end_y": 675.6160947712418,
                "aoi_name": "aoi5148",
                "color": "blue",
                "capture_status": true,
                "image_path": "http://localhost/hdd/H02LBB222P-359/white_aois_from_1x/aoi5148.bmp",
                "smoothening_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/",
                "profile_check_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/aoi5148_wc_image.jpeg",
                "final_img_path": "http://localhost/hdd/H02LBB222P-359/white_aois/",
                "capture_time": 0.193342924118042
            }
        ],
        "white_found_status": false,
        "module": "white_creation",
        "white_path": "http://localhost/hdd/H02LBB222P-359/white.bmp",
        "total_time": 8.497064352035522
    },
    {
        "module": "focus_sampling",
        "name": "aoi7823",
        "start_x": 599.7019230769231,
        "start_y": 980.373611111111,
        "end_x": 610.698717948718,
        "end_y": 986.9987745098039,
        "color": "#006400",
        "sequence": [
            {
                "input": {
                    "magnifcation": "40x",
                    "start_z": 9031.875,
                    "step_size": 1.5625,
                    "stop_z": 9089.6875
                },
                "module": "fine",
                "output": {
                    "best_z": 9060,
                    "blobs_with_color": 35,
                    "color_metric": 248.62503923005306,
                    "confidence_score": 0.878098367848807,
                    "debris_status": 0,
                    "focus_metric": 53.95509622238061,
                    "focussed_stack_index": 17,
                    "foreground_rank": 1,
                    "hue_metric": 16796,
                    "image_path": "http://localhost/hdd/H02LBB222P-359/grid_1/acquisition_debug_data/sampled_images/aoi7823_Z9060.000000_idx17.jpg",
                    "valid_blobs_count": 35,
                    "valid_focus_metric_blocks_count": 35
                },
                "total_time": 1,
                "trigger_miss": null
            }
        ]
    },
    {
        "module": "planarity_rejection",
        "line_slope": 6.5,
        "plane_slope": 4.0,
        "rejection_status": false
    },
    {
        "module": "Acquisition",
        "z_trans" : "http://localhost/hdd/H02LBB222P-359/grid_1/z_trans.jpeg",
        "stack_size_estimation" : "http://localhost/hdd/H02LBB222P-359/grid_1/stack_size_map.jpeg",
        "focus_error_map" : "http://localhost/hdd/H02LBB222P-359/grid_1/fs_error_map.jpeg"
    },
    {
        "module": "grid_coordinates",
        "start_x": 533.7211538461538,
        "start_y": 350.9830882352941,
        "end_x": 599.7019230769231,
        "end_y": 423.859885620915,
        "color": "#006400",
        "grid_id": 2
    },
    {
        "module": "plane_creation",
        "debug_image": "http://localhost/hdd/H02LBB222P-359/grid_2/points_selected_no_tma.jpeg",
        "plane_x_coff": 0.036744303116010846,
        "plane_y_coeff": -0.32444622263547984,
        "plane_const": 9069.235493655277,
        "row_diff": 9,
        "col_diff": 7,
        "confidence_score_threshold": 0.4,
        "plane_status": "PlaneStatus.LOW_CONFIDENT",
        "material_type": 1,
        "delta_z_flag": "",
        "collinearity_flag": "",
        "spatial_distribution_flag": "",
        "confidence_score": "",
        "delta_z_value": ""
    },
    {
        "is_tissue_plane_available": "True",
        "Plane_available": "True",
        "Plane_confidence": "Low",
        "used_neared_valid_aoi": "True",
        "ref_z": 9062.34375,
        "stack_range_top": 35.78125,
        "stack_range_bottom": 35.78125,
        "material_status": 1,
        "material_type": 1,
        "bestZ_classification": 1,
        "module": "reference_estimation"
    },
    {
        "directional_probing": false,
        "name": "aoi2777",
        "start_x": 566.7115384615385,
        "start_y": 390.73406862745094,
        "end_x": 577.7083333333334,
        "end_y": 397.35923202614373,
        "color": "#006400",
        "direction": "",
        "grid_name": "grid_2",
        "sequence": [
            {
                "input": {
                    "magnifcation": "40x",
                    "start_z": 9025,
                    "step_size": 1.5625,
                    "stop_z": 9098.4375
                },
                "module": "fine",
                "output": {
                    "best_z": 9060,
                    "blobs_with_color": 35,
                    "color_metric": 325.4498679294663,
                    "confidence_score": 0.8881924142235754,
                    "debris_status": 0,
                    "focus_metric": 60.305654549774296,
                    "focussed_stack_index": 33,
                    "foreground_rank": 1,
                    "hue_metric": 16836,
                    "image_path": "http://localhost/hdd/H02LBB222P-359/grid_2/acquisition_debug_data/sampled_images/aoi2777__Z9078.125000_idx33.jpg",
                    "valid_blobs_count": 35,
                    "valid_focus_metric_blocks_count": 35,
                    "pen_mark_status": false,
                    "material_status": "Tissue"
                },
                "total_time": 2,
                "trigger_miss": null
            }
        ],
        "capture_status": true,
        "probing_time": 2.628795862197876,
        "module": "best_z_level_estimation"
    },
    {
        "module": "focus_sampling",
        "name": "aoi2775",
        "start_x": 544.7179487179487,
        "start_y": 390.73406862745094,
        "end_x": 555.7147435897436,
        "end_y": 397.35923202614373,
        "color": "#006400",
        "sequence": [
            {
                "input": {
                    "magnifcation": "40x",
                    "start_z": 9048.4375,
                    "step_size": 1.5625,
                    "stop_z": 9106.25
                },
                "module": "fine",
                "output": {
                    "best_z": 9060,
                    "blobs_with_color": 35,
                    "color_metric": 227.4986690056407,
                    "confidence_score": 0.8211751904038338,
                    "debris_status": 0,
                    "focus_metric": 57.642432881919696,
                    "focussed_stack_index": 18,
                    "foreground_rank": 1,
                    "hue_metric": 16835,
                    "image_path": "http://localhost/hdd/H02LBB222P-359/grid_2/acquisition_debug_data/sampled_images/aoi2775_Z9078.125000_idx18.jpg",
                    "valid_blobs_count": 35,
                    "valid_focus_metric_blocks_count": 35
                },
                "total_time": 1,
                "trigger_miss": null
            }
        ]
    },
    {
        "module": "Acquisition",
        "z_trans" : "http://localhost/hdd/H02LBB222P-359/grid_2/z_trans.jpeg",
        "stack_size_estimation" : "http://localhost/hdd/H02LBB222P-359/grid_2/stack_size_map.jpeg",
        "focus_error_map" : "http://localhost/hdd/H02LBB222P-359/grid_2/fs_error_map.jpeg"
    },
    {
        "module": "rescan_acq",
        "rescan_image": "http://localhost/hdd/H02LBB222P-359/acq_intermediate_images/re_scanned_areas.jpeg"
    }
  ]
};

function SlideProvider(props){
  const [slideInput, setSlideInput] = useState(initialSlideInput);
  const [currentGrid, setCurrentGrid] = useState("");
  const [currentModule, setCurrentModule] = useState("");
  const [currentState, setCurrentState] = useState(0);
  const [boxesList, setBoxesList] = useState([]);
  const [pointMetadata, setPointMetadata] = useState({});

  function nextButtonClick()
  {
    setCurrentState(prevState => prevState + 1);
    console.log("module : ", slideInput["pipeline"][currentState]["module"]);
    if (slideInput["pipeline"][currentState]["module"] === "grid_coordinates"){
        setCurrentGrid(slideInput["pipeline"][currentState]["grid_id"]);
    }

    console.log("Next Button Clicked ", currentState);
    if(currentState >= 0 && currentState < slideInput["pipeline"].length)
    {
      console.log("inside next click ", slideInput["pipeline"][currentState]["module"]);

      if(slideInput["pipeline"][currentState]["module"] === "best_z_level_estimation" ||
        slideInput["pipeline"][currentState]["module"] === "focus_sampling")
      {
        setPointMetadata(slideInput["pipeline"][currentState]);
        setBoxesList(prevItems => [...prevItems, ...[slideInput["pipeline"][currentState]]]);
      }
      else if(slideInput["pipeline"][currentState]["module"] === "plane_creation" ||
        slideInput["pipeline"][currentState]["module"] === "Acquisition")
      {
        setPointMetadata(slideInput["pipeline"][currentState]);
      }
      else if(slideInput["pipeline"][currentState]["module"] === "white_creation")
      {
        setBoxesList(prevItems => [...prevItems, ...slideInput["pipeline"][currentState]["white_aois"]]);
        setPointMetadata(slideInput["pipeline"][currentState]);
      }
      else if(slideInput["pipeline"][currentState]["module"] === "planarity_rejection")
      {
        setPointMetadata(slideInput["pipeline"][currentState]);
      }
      else if(slideInput["pipeline"][currentState]["module"] === "rescan_acq")
      {
        setPointMetadata(slideInput["pipeline"][currentState]);
      }
      else
      {
        setBoxesList(prevItems => [...prevItems, ...[slideInput["pipeline"][currentState]]]);
        setPointMetadata({});
      }
      setCurrentModule(slideInput["pipeline"][currentState]["module"]);
    }
    else
    {
      setBoxesList(prevItems => [...prevItems, ...[slideInput["pipeline"][currentState]]]);
      setPointMetadata({"module" : "end"});
      setCurrentModule("Completed");
    }
  }

  function previousButtonClick()
  {
    setCurrentState(prevState => prevState - 1);
    console.log(currentState);

    if(currentState >= 0 && currentState < slideInput["pipeline"].length)
    {
      console.log("inside Previous click ", slideInput["pipeline"][currentState]["module"]);

      if(slideInput["pipeline"][currentState]["module"] === "best_z_level_estimation" ||
       slideInput["pipeline"][currentState]["module"] === "focus_sampling")
      {
        setPointMetadata(slideInput["pipeline"][currentState]);

        const boxList = [];
        boxList.push(slideInput["pipeline"][currentState]);
        setBoxesList(boxList);
      }
      else if(slideInput["pipeline"][currentState]["module"] === "plane_creation")
      {
        setPointMetadata(slideInput["pipeline"][currentState]);
        setBoxesList([]);
      }
      else if(slideInput["pipeline"][currentState]["module"] === "white_creation")
      {
        setBoxesList(slideInput["pipeline"][currentState]["white_aois"]);
        setPointMetadata(slideInput["pipeline"][currentState]);
      }
      else
      {
        const boxList = [];
        boxList.push(slideInput["pipeline"][currentState]);
        console.log(boxList);
        setBoxesList(boxList);

        setPointMetadata({});
      }
      setCurrentModule(slideInput["pipeline"][currentState]["module"]);
    }
    else
    {
        console.log("4");
        const boxList = [];
        boxList.push(slideInput["pipeline"][currentState]);
        setBoxesList(boxList);
        setPointMetadata({});
        setCurrentModule("");
    }
  }

  function getSlideData(query)
  {
    console.log("Query ", query);

    // const apiUrl = "";
    // fetch(apiUrl).then((response) => {
    //     if(!response.ok)
    //     {
    //         throw new Error("Network response was not ok");
    //     }
    //     return response.json();
    // }).then((data)=>{
    //     setSlideInput(data);
    // })
  }

  return (
    <SlideContext.Provider value={{slideInput, currentGrid, currentModule, currentState, boxesList, pointMetadata, nextButtonClick, previousButtonClick, setPointMetadata, getSlideData}}>
      {props?.children}
    </SlideContext.Provider>
  );
}

export default SlideProvider;