import { ThemeProvider, CssBaseline, Button } from "@mui/material";
import { baseDarkTheme } from "@/theme/base/DefaultColors";


const TestPage = () => {
  return (
    <ThemeProvider theme={baseDarkTheme}>
      <CssBaseline />
      <Button variant="contained" color="primary">
        Test Button
      </Button>
    </ThemeProvider>
  );
};

export default TestPage;
