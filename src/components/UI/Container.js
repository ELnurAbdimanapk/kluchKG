import React from "react";

import Container from "@mui/material/Container";

const CardsContainer = ({ children }) => {
    return (
        <Container maxWidth="lg" style={{ textAlign: "center" }}>
            {children}
        </Container>
    );
};

export default CardsContainer;
