import React from "react";
import { connect } from "frontity";

import Nav from '../Nav/'
import MobileMenu from '../MobileMenu/'

import {Container, Title, Description, StyledLink} from './styles'

const Header = ({ state }) => {
  return (
    <>

    <div className="container-fluid">

      <div className="row align-items-center">

        <div className="col-6">

        <StyledLink link="/">

          <Title className="text-black">{state.frontity.title}</Title>

        </StyledLink>

        </div>

        <div className="col-6">

        <Nav/>

        </div>

        <MobileMenu />


      </div>
    </div>


    </>
  );
};

export default connect(Header);

