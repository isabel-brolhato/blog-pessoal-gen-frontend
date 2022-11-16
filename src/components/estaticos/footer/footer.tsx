import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {

    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
        )

        var footerComponent;

        if(token != ''){
footerComponent =  <Grid container direction="row" justifyContent="center" alignItems="center">
<Grid alignItems="center" item xs={12}>
    <Box className='bar'>
        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h5" align="center" gutterBottom className='textos'>Get in touch </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
            <a href="https://www.github.com/isabel-brolhato/" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className='redes' />
            </a>
            <a href="https://www.linkedin.com/in/isabel-brolhato/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className='redes' />
            </a>
        </Box>
    </Box>
</Grid>
</Grid>
        }

    return (
        <>
        {footerComponent}
        </>
    )
}

export default Footer;