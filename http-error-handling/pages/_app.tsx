import "../styles/globals.css";
import type { AppProps } from "next/app";
import HttpErrorRouter from "../components/HttpErrorRouter";
import Header from "../components/Header";
import HttpErrorBoundary from "../components/HttpErrorBoundary";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <HttpErrorBoundary>
        <HttpErrorRouter status={pageProps?.status}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Component {...pageProps} />
          </div>
        </HttpErrorRouter>
      </HttpErrorBoundary>
    </>
  );
}

export default MyApp;
