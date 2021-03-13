import React from "react";
import { Container, Row, Col, Image, Nav, Form, Button } from "react-bootstrap";
import LogoLg from '../Header/img/logolg.png'
import {FaTwitterSquare, FaFacebookSquare,FaInstagramSquare, FaWhatsappSquare} from 'react-icons/fa'
import FooterInfo from './FooterInfo';
import FooterClosure from './FooterClosure'
import FooterIntro from "./FooterIntro"
import "./styles.css";

function Footer() {
  return (
    <div className="footer_wrapper">
     <div className="footer_back">
       <FooterIntro />
     <FooterInfo />
     <FooterClosure />
     </div>
    </div>
  );
}

export default Footer;
