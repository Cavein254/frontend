import React from 'react'
import {Col} from 'reactstrap'
import {Image} from 'react-bootstrap'
import profile from './img/profile.jpg'

function Main() {
    return (
        <Col>
            <div className="logo"></div>
            <div className="searchbar"></div>
            <div className="notification"></div>
            <div className="profilepic">
                <Image src={profile} roundedCircle />
            </div>
            <div className="Username"></div>
        </Col>
    )
}

export default Main
