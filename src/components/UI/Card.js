import * as React from "react";

import { useState } from "react";

import { Favorite, FavoriteBorder, StarRounded } from "@mui/icons-material";

import { Box, Button, Grid, Stack } from "@mui/material";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function MainCard({ image, district, price, id, onClick }) {
    const [isFavorited, setIsFavorited] = useState(false);

    const [rating, setRating] = useState(0);

    const handleFavorite = () => {
        setIsFavorited(!isFavorited);
    };
    return (
        <Grid item xs={12} sm={6} lg={4} sx={{ maxWidth: "lg", marginTop: 10 }} id={id}>
            <Card sx={{ border: 0, boxShadow: 0, background: "unset", height: "100%" }}>
                <CardMedia onClick={onClick}>
                    <img
                        src={image}
                        alt={district}
                        width="280px"
                        height="280px"
                        style={{ borderRadius: "16px", aspectRatio: "394/267", objectFit: "cover" }}
                    />
                </CardMedia>
                <CardContent sx={{ padding: 0, paddingTop: "0.5em" }}>
                    <Box display="flex" justifyContent="space-between">
                        <Box>
                            <Typography gutterBottom variant="h6" component="p" onClick={onClick}>
                                {district}
                            </Typography>
                        </Box>
                        <Stack direction="row" alignItems="center" gap={0.5}>
                            {[...Array(5)].map((star, i) => {
                                const ratingValue = i + 1;
                                return (
                                    <StarRounded
                                        color={ratingValue <= rating ? "secondary" : "action"}
                                        onClick={() => setRating(ratingValue)}
                                        onMouseEnter={() => setRating(ratingValue)}
                                        onMouseLeave={() => setRating(rating)}
                                    />
                                );
                            })}

                            <Button onClick={handleFavorite}>
                                {isFavorited ? <Favorite color="secondary" /> : <FavoriteBorder />}
                            </Button>
                        </Stack>
                    </Box>

                    <Typography variant="body2" component="span" sx={{ opacity: 0.7 }}>
                        $ {price}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}
