import React, { ChangeEvent, useState, useEffect } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import './Login.css';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';

function Login() {

    let navigate = useNavigate();

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        nome: "",
        usuario: "",
        foto: "",
        senha: "",
        token: ""
    })

const dispatch = useDispatch()

const [token, setToken] = useState('')


    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value
        });
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token])

    async function logar(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
           await login('/usuarios/logar', userLogin, setToken)
           toast.success('Logged in successfully, welcome!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined
        })
        } catch (error) {
            toast.error('Incorrect information, please try again', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            })
        }
        await login('/usuarios/logar', userLogin, setToken)
    }


    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className="bg-color">
            <Grid alignItems='center' xs={6} className="box">
                <Box paddingX={20}>
                    <form onSubmit={logar}>
                        
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Welcome <img src="https://www.svgrepo.com/show/67656/smile.svg" className='smiley'></img></Typography>
    
                        <TextField onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} value={userLogin.usuario} id='usuario' label='Username' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} value={userLogin.senha} id='senha' label='Password' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>

                            <Button type='submit' variant='contained' color='primary' className='login-btn' disabled={!userLogin.usuario || ! userLogin.senha}>
                                Enter
                            </Button>

                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Don't have an account yet?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'><Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Join us!</Typography></Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    );
}

export default Login;