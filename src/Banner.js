import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef} from 'react';

import {useSlideContext} from './hooks'
import { Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

function Banner(){
  const {slideInput, currentGrid, currentModule, getSlideData} = useSlideContext();

  const [searchBarValue, setSearchBarValue] = useState("");

	const handleSearchBarChange = (e) => {
		setSearchBarValue(e.target.value);
	};

	const handleSearchBarKeyDown = (e) => {
    getSlideData(e.target.value);
  };

  return(
    <>
      <Col><strong>Slide Name : </strong>{slideInput["slide_name"]}</Col>
      <Col><strong>Slide Thickness : </strong>{slideInput["slide_thickness"]}</Col>
      <Col><strong>Current Grid : </strong>{currentGrid}</Col>
      <Col><strong>Current Module : </strong>{currentModule}</Col>
      <SerachColumn><FontAwesomeIcon icon={faMagnifyingGlass} /><InputTag value={searchBarValue} onChange={handleSearchBarChange} onKeyDown={handleSearchBarKeyDown}/></SerachColumn>
    </>
  );
}

export default Banner;


const SerachColumn = styled(Col)`
  height: 60%;
	padding: 0px 10px;
	flex: 0 0 auto;
	border-radius: 50px;
	background-color: #78839b33;
	
	display: flex;
	align-items: center;
	gap: 10px;

	font-size: 1.3rem;
	color: #c1c5d0;
`

const InputTag = styled.input`
  height: 50%;
	width: 15rem;
	outline: 0;
	border-width: 0 0;
	background: transparent;
	color: #c1c5d0;
	font-weight: bolder;
	font-size: 1.2rem;
`