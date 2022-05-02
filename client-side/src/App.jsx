import { Typography, AppBar } from "@mui/material"

import Options from "./components/Options"
import VideoPlayer from './components/VideoPlayer'
import Notifications from "./components/Notifications"

const App = () => {
    return (
        <main className="wrapper">
            <AppBar
                className="appBar"
                position="static"
                color="inherit"
            >
                <Typography variant="h2" align="center">Video Chat App by Danny Sequeira</Typography>
            </AppBar>

            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </main>
    );
}

export default App;