import React, { useState } from "react";

import { Box, TextField } from "@mui/material";

import { Data } from "./data";

import SearchList from "./SearchList";

const Search = () => {
    const [searchField, setSearchField] = useState("");
    const [searchShow, setSearchShow] = useState(false);
    const filteredHouse = Data.filter((house) =>
        house.district.toLowerCase().includes(searchField.toLowerCase())
    );

    const handleChange = (e) => {
        setSearchField(e.target.value);
        if (e.target.value === " ") {
            setSearchShow(false);
        } else {
            setSearchShow(true);
        }
    };

    const searchList = () => {
        if (searchShow) {
            return <SearchList filteredHouse={filteredHouse} />;
        }
    };
    return (
        <Box className="garamond" style={{ marginTop: 15, width: "500px" }}>
            <TextField
                id="standard-adornment-amoun"
                className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                type="search"
                placeholder="Район "
                onChange={handleChange}
            />
            {searchList()}
        </Box>
    );
};

export default Search;
