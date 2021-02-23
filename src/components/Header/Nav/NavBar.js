import React from 'react'
import SideBar from './SideBar'
import Main from './Main';
import {Row} from 'reactstrap'
function NavBar() {
    return (
        <Row className="nav">
            <SideBar />
            <Main />
        </Row>
    )
}

export default NavBar
