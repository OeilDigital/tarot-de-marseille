import { useState, useCallback } from "react"
import './App.css';
import Deck from "./components/Deck"
import MeanModal from "./components/MeanModal"

function App({ data }) {
  // const google = process.env.PUBLIC_URL + "/googlePlay.png";
  const src = process.env.PUBLIC_URL + "/burger-android.png";
  // const [close, setClose] = useState(false);
  const [mean, setMean] = useState(false)
  const [result, setResult] = useState([])
  const [langage, setLangage] = useState(true)

  function updateMean() {
    const meanButton = document.querySelector('.btnMean')
    meanButton.classList.remove('btnMean')
    meanButton.classList.add('btnMeanFalse')
    setMean(true)
  }

  const refreshMeanDraw = useCallback((listMeanDraw) => {
    setResult([...result, listMeanDraw]);
  }, [result])

  function changeLangage(bool) {
    setLangage(bool)
  }

  return (
    <>
      <div className="App">
        <Deck data={data} updateMean={() => updateMean()} result={result} refreshMeanDraw={(listMeanDraw) => refreshMeanDraw(listMeanDraw)} langage={langage} changeLangage={(bool) => changeLangage(bool)} />
        {mean && <MeanModal result={result} langage={langage} />}
        <div id="title-on">
          <svg id="logo-on" width="298" height="75" viewBox="0 0 298 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M240.016 12.768H262.44V71.864V72.864H263.44C266.511 72.864 269.017 72.1986 270.8 70.7122C272.614 69.2013 273.464 67.0343 273.464 64.376V12.768H288.304C290.971 12.768 293.15 12.0556 294.649 10.4608C296.137 8.87766 296.792 6.5952 296.792 3.79999V2.79999H295.792H247.504C244.838 2.79999 242.658 3.51234 241.16 5.10717C239.672 6.69032 239.016 8.97278 239.016 11.768V12.768H240.016Z" stroke="url(#grad2)" strokeWidth="2" />
            <path d="M196.118 69.6837L196.126 69.6878L196.134 69.6918C200.511 71.8139 205.431 72.864 210.874 72.864C216.317 72.864 221.238 71.8139 225.615 69.6918L225.615 69.6919L225.625 69.6864C229.995 67.5018 233.432 64.5066 235.905 60.6965L235.905 60.6965L235.909 60.6898C238.382 56.8142 239.618 52.531 239.618 47.864V26.744C239.618 22.0783 238.382 17.8541 235.903 14.1001C233.429 10.2911 229.992 7.32831 225.623 5.20823C221.305 3.01763 216.38 1.936 210.874 1.936C205.428 1.936 200.504 3.01945 196.126 5.20819C191.818 7.32962 188.414 10.2933 185.942 14.1002C183.462 17.8541 182.226 22.0783 182.226 26.744V47.864C182.226 52.531 183.463 56.8142 185.935 60.6898L185.935 60.6898L185.939 60.6965C188.41 64.5029 191.812 67.498 196.118 69.6837ZM224.132 15.973L224.132 15.973L224.14 15.9802C227.221 18.6462 228.786 22.2594 228.786 26.936V47.768C228.786 52.4445 227.22 56.0948 224.132 58.827C221.041 61.5612 216.666 62.992 210.874 62.992C205.15 62.992 200.805 61.5628 197.713 58.827C194.624 56.0948 193.058 52.4445 193.058 47.768V26.936C193.058 22.2594 194.624 18.6462 197.705 15.9802L197.705 15.9802L197.713 15.973C200.805 13.2372 205.15 11.808 210.874 11.808C216.666 11.808 221.041 13.2388 224.132 15.973Z" stroke="url(#grad2)" strokeWidth="2" />
            <path d="M172.136 45.0309C170.775 42.8212 168.924 41.0838 166.606 39.8186C169.314 38.2747 171.434 36.2953 172.93 33.8689C174.694 31.0098 175.551 27.5956 175.551 23.672C175.551 17.4369 173.619 12.3619 169.684 8.55868C165.812 4.69014 160.611 2.79999 154.199 2.79999H127.703C126.134 2.79999 124.763 3.29346 123.664 4.31419C122.611 5.2865 122.095 6.55252 122.095 8.02399V71.864V72.864H123.095C126.157 72.864 128.641 72.2024 130.367 70.7054C132.175 69.1947 133.023 67.0302 133.023 64.376V44.544H154.487C157.61 44.544 159.786 45.4666 161.209 47.1626L161.22 47.176L161.232 47.189C162.732 48.8563 163.567 51.4229 163.567 55.064V71.864V72.864H164.567C167.638 72.864 170.143 72.1986 171.927 70.7122C173.74 69.2013 174.591 67.0342 174.591 64.376V54.488C174.591 50.8237 173.791 47.6542 172.136 45.0309ZM161.545 31.8075L161.54 31.813L161.535 31.8186C159.709 33.758 157.209 34.768 153.911 34.768H133.023V12.672H153.911C157.438 12.672 159.993 13.6401 161.737 15.4398C163.485 17.2441 164.431 19.9035 164.431 23.576C164.431 27.1591 163.434 29.8613 161.545 31.8075Z" stroke="url(#grad2)" strokeWidth="2" />
            <path d="M61.6741 72.8446L62.4817 73.0061L62.795 72.2445L70.7961 52.8H97.0084L105.009 72.2445L105.323 73.0061L106.13 72.8446C108.233 72.4241 109.951 71.4946 111.208 70.0157C112.455 68.5493 113.078 66.8139 113.078 64.856C113.078 63.4817 112.753 62.0692 112.136 60.6272L89.1937 5.43219L89.1908 5.42527L89.1878 5.4184C88.7114 4.31896 88.032 3.43131 87.121 2.82395C86.2085 2.21562 85.1348 1.936 83.9503 1.936C82.7146 1.936 81.6014 2.20968 80.668 2.81839C79.7326 3.42841 79.0549 4.32479 78.6084 5.43816L55.6711 60.6221C55.6704 60.6238 55.6697 60.6254 55.669 60.6271C55.0516 62.0692 54.7263 63.4817 54.7263 64.856C54.7263 66.8682 55.3439 68.6382 56.5963 70.1117L56.6045 70.1213L56.613 70.1308C57.8724 71.5383 59.5856 72.4269 61.6741 72.8446ZM74.3814 43.024L83.9174 18.9239L93.4248 43.024H74.3814Z" stroke="url(#grad2)" strokeWidth="2" />
            <path d="M2.36 12.768H24.784V71.864V72.864H25.784C28.8547 72.864 31.3605 72.1986 33.1442 70.7122C34.9573 69.2013 35.808 67.0342 35.808 64.376V12.768H50.648C53.3146 12.768 55.494 12.0556 56.9927 10.4608C58.4805 8.87766 59.136 6.5952 59.136 3.79999V2.79999H58.136H9.848C7.18142 2.79999 5.00204 3.51234 3.50329 5.10717C2.01551 6.69032 1.36 8.97278 1.36 11.768V12.768H2.36Z" stroke="url(#grad2)" strokeWidth="2" />
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#ffcf33ef", stopOpacity: "1" }} />
                <stop offset="100%" style={{ stopColor: "#ffffff6a", stopOpacity: "1" }} />
              </linearGradient>
              <radialGradient
                id="RadialRepeatGradient"
                spreadMethod="repeat"
                cx="75%"
                cy="25%"
                fx="64%"
                fy="18%"
              >
                <stop offset="0%" style={{ stopColor: "black", stopOpacity: "1" }} />
                <stop offset="100%" style={{ stopColor: "gold", stopOpacity: "1" }} />
              </radialGradient>
            </defs>
          </svg>
          <p className="deMarseille"><span className="de">de</span> Marseille</p>
        </div>
      </div>
      <div className="warning">
        <div className="title">
          <svg id="logo" width="298" height="75" viewBox="0 0 298 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M240.016 12.768H262.44V71.864V72.864H263.44C266.511 72.864 269.017 72.1986 270.8 70.7122C272.614 69.2013 273.464 67.0343 273.464 64.376V12.768H288.304C290.971 12.768 293.15 12.0556 294.649 10.4608C296.137 8.87766 296.792 6.5952 296.792 3.79999V2.79999H295.792H247.504C244.838 2.79999 242.658 3.51234 241.16 5.10717C239.672 6.69032 239.016 8.97278 239.016 11.768V12.768H240.016Z" stroke="#FFF500" strokeWidth="2" />
            <path d="M196.118 69.6837L196.126 69.6878L196.134 69.6918C200.511 71.8139 205.431 72.864 210.874 72.864C216.317 72.864 221.238 71.8139 225.615 69.6918L225.615 69.6919L225.625 69.6864C229.995 67.5018 233.432 64.5066 235.905 60.6965L235.905 60.6965L235.909 60.6898C238.382 56.8142 239.618 52.531 239.618 47.864V26.744C239.618 22.0783 238.382 17.8541 235.903 14.1001C233.429 10.2911 229.992 7.32831 225.623 5.20823C221.305 3.01763 216.38 1.936 210.874 1.936C205.428 1.936 200.504 3.01945 196.126 5.20819C191.818 7.32962 188.414 10.2933 185.942 14.1002C183.462 17.8541 182.226 22.0783 182.226 26.744V47.864C182.226 52.531 183.463 56.8142 185.935 60.6898L185.935 60.6898L185.939 60.6965C188.41 64.5029 191.812 67.498 196.118 69.6837ZM224.132 15.973L224.132 15.973L224.14 15.9802C227.221 18.6462 228.786 22.2594 228.786 26.936V47.768C228.786 52.4445 227.22 56.0948 224.132 58.827C221.041 61.5612 216.666 62.992 210.874 62.992C205.15 62.992 200.805 61.5628 197.713 58.827C194.624 56.0948 193.058 52.4445 193.058 47.768V26.936C193.058 22.2594 194.624 18.6462 197.705 15.9802L197.705 15.9802L197.713 15.973C200.805 13.2372 205.15 11.808 210.874 11.808C216.666 11.808 221.041 13.2388 224.132 15.973Z" stroke="#FFF500" strokeWidth="2" />
            <path d="M172.136 45.0309C170.775 42.8212 168.924 41.0838 166.606 39.8186C169.314 38.2747 171.434 36.2953 172.93 33.8689C174.694 31.0098 175.551 27.5956 175.551 23.672C175.551 17.4369 173.619 12.3619 169.684 8.55868C165.812 4.69014 160.611 2.79999 154.199 2.79999H127.703C126.134 2.79999 124.763 3.29346 123.664 4.31419C122.611 5.2865 122.095 6.55252 122.095 8.02399V71.864V72.864H123.095C126.157 72.864 128.641 72.2024 130.367 70.7054C132.175 69.1947 133.023 67.0302 133.023 64.376V44.544H154.487C157.61 44.544 159.786 45.4666 161.209 47.1626L161.22 47.176L161.232 47.189C162.732 48.8563 163.567 51.4229 163.567 55.064V71.864V72.864H164.567C167.638 72.864 170.143 72.1986 171.927 70.7122C173.74 69.2013 174.591 67.0342 174.591 64.376V54.488C174.591 50.8237 173.791 47.6542 172.136 45.0309ZM161.545 31.8075L161.54 31.813L161.535 31.8186C159.709 33.758 157.209 34.768 153.911 34.768H133.023V12.672H153.911C157.438 12.672 159.993 13.6401 161.737 15.4398C163.485 17.2441 164.431 19.9035 164.431 23.576C164.431 27.1591 163.434 29.8613 161.545 31.8075Z" stroke="#FFF500" strokeWidth="2" />
            <path d="M61.6741 72.8446L62.4817 73.0061L62.795 72.2445L70.7961 52.8H97.0084L105.009 72.2445L105.323 73.0061L106.13 72.8446C108.233 72.4241 109.951 71.4946 111.208 70.0157C112.455 68.5493 113.078 66.8139 113.078 64.856C113.078 63.4817 112.753 62.0692 112.136 60.6272L89.1937 5.43219L89.1908 5.42527L89.1878 5.4184C88.7114 4.31896 88.032 3.43131 87.121 2.82395C86.2085 2.21562 85.1348 1.936 83.9503 1.936C82.7146 1.936 81.6014 2.20968 80.668 2.81839C79.7326 3.42841 79.0549 4.32479 78.6084 5.43816L55.6711 60.6221C55.6704 60.6238 55.6697 60.6254 55.669 60.6271C55.0516 62.0692 54.7263 63.4817 54.7263 64.856C54.7263 66.8682 55.3439 68.6382 56.5963 70.1117L56.6045 70.1213L56.613 70.1308C57.8724 71.5383 59.5856 72.4269 61.6741 72.8446ZM74.3814 43.024L83.9174 18.9239L93.4248 43.024H74.3814Z" stroke="#FFF500" strokeWidth="2" />
            <path d="M2.36 12.768H24.784V71.864V72.864H25.784C28.8547 72.864 31.3605 72.1986 33.1442 70.7122C34.9573 69.2013 35.808 67.0342 35.808 64.376V12.768H50.648C53.3146 12.768 55.494 12.0556 56.9927 10.4608C58.4805 8.87766 59.136 6.5952 59.136 3.79999V2.79999H58.136H9.848C7.18142 2.79999 5.00204 3.51234 3.50329 5.10717C2.01551 6.69032 1.36 8.97278 1.36 11.768V12.768H2.36Z" stroke="#FFF500" strokeWidth="2" />
          </svg>
          <p className="deMarseille2">
            <span class="de2">de</span>
               &nbsp; Marseille
          </p>
        </div>
        {/* <p className="warning-text">Veuillez tourner votre écran afin de pouvoir réaliser votre tirage dans des conditions optimales<br /><br /><br /><br /><span>Vous pouvez également télécharger l'application depuis les paramétres de Google Chrome <img src={src} style={{ height: "1.5rem", marginBottom: "-1%" }} alt="logo menu Google Chrome Android" /> de votre téléphone (Android)</span><br /><br /><span>ou</span><br /><br /><span><a href="https://www.youtube.com/watch?v=wAxh2jPkbRc" rel="noreferrer" target="_blank"><img src={google} style={{ height: "10svw" }} alt="logo GooglePlay" /></a></span></p> */}
        {langage ?
          (<><p className="warning-text">Veuillez tourner votre écran afin de pouvoir réaliser votre tirage dans des conditions optimales<br /><br /><br /><br /><span>Vous pouvez également télécharger l'application depuis les paramétres de Google Chrome <img src={src} style={{ height: "1.5rem", marginBottom: "-1%" }} alt="logo menu Google Chrome Android" /> de votre téléphone (Android)</span></p><img className="ukFlagPortrait" src={process.env.PUBLIC_URL + "/uk-small.png"} alt="uk flag" onClick={() => changeLangage(false)} /></>)
          :
          (<><p className="warning-text">Please turn your screen so that you can make your print in optimal conditions.<br /><br /><br /><br /><span>You can also download the app from your phone's Google Chrome settings <img src={src} style={{ height: "1.5rem", marginBottom: "-1%" }} alt="logo menu Google Chrome Android" /> (Android only)</span></p><img className="franceFlagPortrait" src={process.env.PUBLIC_URL + "/france-small.png"} alt="france flag" onClick={() => changeLangage(true)} /></>)
        }
        {/* <div className="flags">
          {langage ?
            (<img className="ukFlag" src={process.env.PUBLIC_URL + "/uk-small.png"} alt="uk flag" onClick={() => changeLangage(false)} />) :
            (<img className="franceFlag" src={process.env.PUBLIC_URL + "/france-small.png"} alt="france flag" onClick={() => changeLangage(true)} />)
          }
        </div> */}
        {/* <p className="warning-text">Veuillez tourner votre écran afin de pouvoir réaliser votre tirage dans des conditions optimales</p> */}

        {/* <p className="homage">...timeless love to Peggy "Little fairy" Magnan</p> */}
      </div>
    </>
  );
}

export default App