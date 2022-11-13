import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function TopNavBar( { page , setPage }) {

    const theme = createTheme({
        palette: {
          secondary: {
            main: "#ffffff"
          },
        },
      });

    return (
        
        <AppBar position="sticky" style={{ background: "#4f92ff" }}>
            <ThemeProvider theme={theme}>
                <Tabs
                    value={page}
                    textColor="secondary"
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: "#fc6590"
                        }
                    }}>
                    <Tab label="Build Current Habits" value="current" onClick={() => setPage("current")}/>
                    <Tab label="Form A New Habit" value="new" onClick={() => setPage("new")}/>
                </Tabs>
            </ThemeProvider>
        </AppBar>
    );
}

export default TopNavBar;