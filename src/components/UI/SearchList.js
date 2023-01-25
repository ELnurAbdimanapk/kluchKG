import React from "react";

import { Box } from "@mui/material";

import styled from "styled-components";

import RentReviewCard from "./Card";

const SearchList = ({ filteredHouse }) => {
    const filtered = filteredHouse.map((house) => {
        return <RentReviewCard district={house.district} price={house.price} image={house.image} />;
    });
    return <StyledBox>{filtered}</StyledBox>;
};

export default SearchList;

const StyledBox = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
