import * as React from "react";

import AddIcon from "@mui/icons-material/Add";

import { Container, styled, Typography } from "@mui/material";

import Accordion from "@mui/material/Accordion";

import AccordionDetails from "@mui/material/AccordionDetails";

import AccordionSummary from "@mui/material/AccordionSummary";

import styleds from "styled-components";

import FacebookIcon from "../assets/images/landingPage/facebookIcon.svg";
import InstagramIcon from "../assets/images/landingPage/instagramInstgramIcon.svg";

import YoutubeIcon from "../assets/images/landingPage/youtubeIcon.svg";

import IconButtonStyled from "./UI/IconButtonStyled";

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (e, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const Footerdata = [
        {
            question: "Вернут ли вам депозит, если вы съедете раньше срока?",
            panel: 1,
            answer: "Это может быть прописано мелким шрифтом в договоре, а может возникнуть внезапно по прихоти хозяина. Не все готовы идти в суд из-за двадцати-тридцати тысяч рублей, тем более, что юридические услуги и время стоят дорого.",
        },
        {
            question: "How can I show what I am typing during the test? ",
            panel: 2,
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            question: "Why should I take the Bilingual English Test? ",
            panel: 3,
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            question: "How can I make sure my microphone picks up my voice clearly?",
            panel: 4,
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            question: "How can I allow a test to record my computer's screen? ",
            panel: 5,
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
    ];
    return (
        <StyledFooter>
            <StyledContainer>
                <Header>FAQ:</Header>
                {Footerdata.map((el) => {
                    return (
                        <StyledAccordion
                            key={el.panel}
                            expanded={expanded === el.panel}
                            onChange={handleChange(el.panel)}>
                            <StyledAccordionSummary aria-controls="panel1bh-content" id={el.panel}>
                                <Typography>{el.question}</Typography>
                            </StyledAccordionSummary>
                            <StyledAccordionDetails>
                                <StyledTypographyAccordion>{el.answer}</StyledTypographyAccordion>
                            </StyledAccordionDetails>
                        </StyledAccordion>
                    );
                })}
            </StyledContainer>
            <StyledFooterInline>
                <h3>KluchKG</h3>
                <StyledText>© Copyright KluchKG. All Rights Reserved</StyledText>
                <IconButtonStyled Icon={YoutubeIcon} />
                <IconButtonStyled Icon={FacebookIcon} />
                <IconButtonStyled Icon={InstagramIcon} />
            </StyledFooterInline>
        </StyledFooter>
    );
}
const StyledFooter = styleds.div`
    width: 100%;
    background:white;
`;
const StyledFooterInline = styleds.div`
    width: 1150px;
    height: 140px;
    margin: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    img {
        :nth-child(3) {
            margin-left: 300px;
    }
`;

const StyledText = styleds.span`
    margin-top:110px;
    margin-left:200px;
    font-family: Poppins;
    font-style: Regular;
    font-size: 14px;
`;
const StyledAccordionSummary = styled((props) => (
    <AccordionSummary expandIcon={<AddIcon />} {...props} />
))(() => ({
    background: ` white`,
    flexDirection: "row",
    borderTop: `1px solid #4A4A4A`,

    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(45deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: "-16px",
        marginTop: "20px",
        height: "40px",
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "20px",
        lineHeight: "40px",
    },
}));

const StyledAccordion = styled((props) => (
    <Accordion disableGutters elevation={0} square {...props} />
))(() => ({
    background: `white`,
    borderBottom: `1px solid #4A4A4A`,

    "&:not(:last-child)": {
        borderBottom: 0,
    },
}));

const StyledAccordionDetails = styled(AccordionDetails)(() => ({}));

const Header = styled("h1")`
    font-family: "Gilroy";
    font-weight: 700;
    font-size: 40px;
    line-height: 51px;
    margin-bottom: 10px;
`;

const StyledContainer = styled(Container)`
    width: 1220px;
    padding: 120px 0;
    background: white;
`;

const StyledTypographyAccordion = styled(Typography)`
    width: 100%;
    font-family: "Poppins";
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    border-radius: none;
    margin-left: -16px;
`;
