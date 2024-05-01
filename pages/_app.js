import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Head from "next/head";
import { CartProvider } from '../contexts/CartContext';
// import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div>
      {/* <SessionProvider session={session}> */}
      <Head>
        <title>Minus The Labels</title>
        <meta name="description" content="Minus The Labels" />
      </Head>
      <NavBar />
      <CartProvider>
          <Component {...pageProps} />
      </CartProvider>
      <Footer />
      {/* </SessionProvider> */}
    </div>
  );
}

export default MyApp;