import React from 'react'
import {Col, Row} from 'reactstrap'
import {Image,InputGroup,Text,FormControl} from 'react-bootstrap'
import profile from './img/profile.jpg'

function Main() {
    return (
        <Col>
           <Row>
           <div className="humberger"></div>
            <div className="searchbar">
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
                </InputGroup>
            </div>
            <div className="notification"></div>
            <div className="profilepic">
                <Image src={profile} roundedCircle className="profile_pic_main"/>
            </div>
            <div className="Username">Annabel Wairimu</div>
           </Row>
        </Col>
    )
}

export default Main
