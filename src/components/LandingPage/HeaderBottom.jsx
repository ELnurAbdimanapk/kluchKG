import React from "react";

import styled from "styled-components";

import Header from "./Header";

function HeaderBottom() {
    return (
        <SHeaderBottom>
            <Header />
        </SHeaderBottom>
    );
}

const SHeaderBottom = styled.div`
    display: flex;
`;

export default HeaderBottom;
