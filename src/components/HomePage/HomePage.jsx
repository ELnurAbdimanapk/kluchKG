import React, { useState } from "react";

import ControlledAccordions from "components/ControlledAccordions";
import Section from "components/CustomUi/Section";

import HeaderBottom from "components/LandingPage/HeaderBottom";

import Main from "components/UI/Main";

import Search from "components/UI/Search";

import styled from "styled-components";

function HomePage() {
    return (
        <div>
            <StyledDivCont>
                <header>
                    <HeaderBottom />
                </header>
                <StyledDiv>
                    <Search />
                    <input type="range" min="0" max="10" />
                </StyledDiv>

                <section>
                    <StyledSliderDiv>
                        <Main />
                    </StyledSliderDiv>
                </section>
            </StyledDivCont>
            <StyledFooter>
                <ControlledAccordions />
            </StyledFooter>
        </div>
    );
}

export default HomePage;

const StyledDiv = styled.section`
    padding-top: 100px;
    margin: auto;
    text-align: center;
    font-size: x-large;
    margin-bottom: 40px;
    background-color: white;
`;

export const StyledDivCont = styled.div`
    width: 100%;
    background-color: white;
`;
const StyledSliderDiv = styled.div`
    width: 98%;
    background-color: white;
`;
export const StyledFooter = styled.footer`
    width: 100%;
    background: linear-gradient(90.76deg, #3eb650 0.74%, #ffffff 88.41%);
`;
