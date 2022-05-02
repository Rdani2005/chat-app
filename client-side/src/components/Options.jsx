import { useContext, useState } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard'

import { Button, TextField, Grid, Typography, Container, Paper } from '@mui/material'
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material';

import { SocketContext } from '../SocketContext'

const Options = ({ children }) => {

    const {
        me,
        name,
        setName,
        callUser,
        callEnded,
        leaveCall,
        callAccepted } = useContext(SocketContext)

    const [idToCall, setIdToCall] = useState('')

    return (
        <Container className='container'>
            <Paper elevation={10} className="paper--options">
                <form className="root" noValidate autoComplete='off'>
                    <Grid container className="gridContainer">
                        <Grid item xs={12} md={6} className="padding">
                            <Typography gutterBottom variant='h6'>Info de tu cuenta</Typography>
                            <TextField label="name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                            {console.log(me)}
                            <CopyToClipboard text={me} className="margin">
                                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>Copy Id</Button>
                            </CopyToClipboard>

                        </Grid>

                        <Grid item xs={12} md={6} className="padding">
                            <Typography gutterBottom variant='h6'>Hacer una Llamada</Typography>
                            
                            <TextField label="ID to Call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                            {
                                callAccepted && !callEnded ? (
                                    <Button
                                    variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} className={"margin"}
                                    >
                                        Terminar
                                    </Button>
                                ) : (
                                    
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<Phone fontSize="large" />}
                                        fullWidth onClick={() => callUser(idToCall)}
                                        className={"margin"}
                                    >
                                        {console.log(idToCall)}
                                        Llamar
                                    </Button>
                                )
                            }

                        </Grid>
                    </Grid>
                </form>
                {children}
            </Paper>
        </Container>
    )
}

export default Options