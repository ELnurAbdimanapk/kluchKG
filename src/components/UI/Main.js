import React from "react";

import { Box } from "@mui/system";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import MainCard from "./Card";

import { Data } from "./data";

const Main = () => {
    const navigate = useNavigate();

    return (
        <StyledBox>
            {Data.map((house) => (
                <MainCard
                    key={house.id}
                    id={house.id}
                    district={house.district}
                    price={house.price}
                    image={house.image}
                    title={house.district}
                    onClick={() => navigate(`/card/${house.id}`)}
                />
            ))}
        </StyledBox>
    );
};

export default Main;

const StyledBox = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
