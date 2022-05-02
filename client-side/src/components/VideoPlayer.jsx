import { Grid, Typography, Paper } from '@mui/material'
import { useContext } from 'react'

import { SocketContext } from '../SocketContext'

const VideoPlayer = () => {

    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)

    return (
        <Grid container className="grid--container">
            {
                stream && (
                    <Paper Paper className="paper">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
                            <video playsInline muted ref={myVideo} autoPlay className="video"></video>
                        </Grid>
                    </Paper>
                )
            }
            {
                callAccepted && !callEnded && (
                    <Paper className="paper">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" gutterBottom>{call.name || 'user name'}</Typography>
                            <video playsInline ref={userVideo} autoPlay className="video"></video>
                        </Grid>
                    </Paper>
                )
            }

            {/* user video */}

        </Grid >
    )
}

export default VideoPlayer