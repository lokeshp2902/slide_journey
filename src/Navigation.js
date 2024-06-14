import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import { useState } from 'react';
import {useSlideContext} from './hooks'

function Navigation()
{
  const [searchBarValue, setSearchBarValue] = useState("");
  const {getSlideData} = useSlideContext();

	const handleSearchBarChange = (e) => {
		setSearchBarValue(e.target.value);
	};

	const handleSearchBarKeyDown = (e) => {
    getSlideData(e.target.value);
  };

  return(
    <>
      <SerachColumn>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <InputTag value={searchBarValue} onChange={handleSearchBarChange} onKeyDown={handleSearchBarKeyDown}/>
      </SerachColumn>
    </>
  );
}

export default Navigation;

const SerachColumn = styled(Col)`
  height: 100%;
	padding: 5px 10px;
	flex: 0 0 auto;
	border-radius: 50px;
	background-color: #78839b33;

	display: flex;
	align-items: center;
	gap: 10px;

	font-size: 2rem;
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
	font-size: 1rem;
`