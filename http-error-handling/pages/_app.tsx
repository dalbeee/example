import type { AppProps } from "next/app";

import "../styles/globals.css";
import HttpErrorRouter from "../components/HttpErrorRouter";
import Header from "../components/Header";
import HttpErrorBoundary from "../components/HttpErrorBoundary";
import FunctionalHttpErrorBoundary from "../components/FunctionalHttpErrorBoundary";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      {/* <HttpErrorBoundary> */}
      <FunctionalHttpErrorBoundary>
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
      </FunctionalHttpErrorBoundary>
      {/* </HttpErrorBoundary> */}
    </>
  );
}

export default MyApp;
