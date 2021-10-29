// global css file can only be imported here 
// need to restart server after adding this file
import '../styles/global.css'

export default function App({Component, pageProps}) {
  return <Component {...pageProps} />
}