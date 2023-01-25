import React, { useState } from "react";

import ButtonStyled from "components/UI/ButtonUi";
import Cookies from "js-cookie";
import { NavLink, useNavigate } from "react-router-dom";

import styled, { keyframes } from "styled-components";

import { scrollHeader } from "utils/helpers";

import kluch from "../../assets/images/kluch.png";

function Header({ Choice, HeaderBg }) {
    const [bgColor, setBgColor] = useState();
    const navigate = useNavigate();

    window.addEventListener("scroll", () => {
        if (scrollHeader()) {
            setBgColor(true);
        } else {
            setBgColor(false);
        }
    });
    const isAuth = Cookies.get("user");

    const logout = () => {
        Cookies.remove("user");
        window.location.pathname = "/";
    };

    return (
        <HeaderGlav bgColor={bgColor} HeaderBg={HeaderBg}>
            <StyledHeader>
                <StyledImg src={kluch} alt="kluch" />
                <h3>Аренда Квартир</h3>

                <StyledHeaderLandingPage>
                    <ButtonStyled
                        text="TO COME IN"
                        variant="contained"
                        maxwidth="152px"
                        maxheight="42px"
                        fontSize="14px"
                        onClick={() => navigate(`/sign-in`)}
                    />
                    <ButtonStyled
                        text="REGISTER"
                        variant="outlined"
                        maxwidth="122px"
                        maxheight="42px"
                        fontSize="14px"
                        onClick={() => navigate(`/sign-in`)}
                    />
                </StyledHeaderLandingPage>
            </StyledHeader>
        </HeaderGlav>
    );
}

const HeaderAnimation = keyframes`
to{
    box-shadow: 3px 0 7px #999;
    background-color: white;
}
`;

const StyledImg = styled.img`
    width: 100px;
    height: 90px;
    margin-right: 1000px;
    border-radius: 16px;
`;

const HeaderGlav = styled.div`
    width: 100%;
    display: flex;
    position: fixed;
    animation: ${(props) => (props.bgColor ? HeaderAnimation : "")} 0.5s forwards;
    background: ${(props) => props.HeaderBg};
    z-index: 10;
    transition: 0.2s ease;
    background: linear-gradient(90.76deg, #3eb650 0.74%, #ffffff 88.41%);
    &.active {
        background: white;
    }
`;
const StyledHeader = styled.div`
    width: 1550px;
    height: 96px;
    display: flex;
`;

const StyledHeaderLandingPage = styled.div`
    height: 42px;
    display: flex;
    gap: 10px;

    button {
        width: 120px !important;
    }
`;

export default Header;
