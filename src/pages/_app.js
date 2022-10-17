import "../../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/theme.config";
import Layout from "../components/Layout/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
