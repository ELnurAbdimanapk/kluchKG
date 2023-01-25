import React, { useEffect, useState } from "react";

import { CardMedia, Grid } from "@mui/material";

import { makeStyles } from "@mui/styles";

import { Box } from "@mui/system";

import ControlledAccordions from "components/ControlledAccordions";

import HeaderBottom from "components/LandingPage/HeaderBottom";

import { useParams } from "react-router-dom";

import { Data } from "./data";

const useStyles = makeStyles({
    root: {
        marginTop: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 200,
    },

    media: {
        width: 580,
        height: 580,
        borderRadius: 16,
        objectFit: "cover",
        margin: "auto",
        textAlign: "center",
    },
    price: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        margin: "0.5rem 0",
    },
    district: {
        fontSize: "2rem",
        fontWeight: "bold",
        margin: "0.5rem 0",
    },
    description: {
        fontSize: "1.2rem",
        margin: "2rem 0 3rem 0",
        textAlign: "justify",
    },
});

const BigCard = () => {
    const classes = useStyles();
    const { id } = useParams();
    const [house, setHouse] = useState(null);
    useEffect(() => {
        setHouse(Data.find((h) => h.id === Number(id)));
    }, [id]);

    return (
        <div>
            <HeaderBottom />

            <Grid container>
                <Grid item xs={12} className={classes.root}>
                    {house && (
                        <CardMedia className={classes.media}>
                            <img src={house.image} alt="house" className={classes.media} />
                            <Box p={2}>
                                <h3 className={classes.price}>${house.price}</h3>
                                <h1 className={classes.district}>{house.district}</h1>
                                <p className={classes.description}>
                                    Opisaniye jfhgkdjfg dfghdjkgdk gdkfgkdjgkdfgjdkg
                                    dfgjdkkkkkkkkkkkkkkkkkkkkk djfgkdjfgkdfg dfgjkdfgjdk
                                </p>
                            </Box>
                        </CardMedia>
                    )}
                </Grid>
            </Grid>
            <ControlledAccordions />
        </div>
    );
};

export default BigCard;
