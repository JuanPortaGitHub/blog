import { AppProps } from "next/app";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
