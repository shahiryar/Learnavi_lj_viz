import BackgroundMusic from './BackgroundMusic'
import {useState} from 'react'
import './UpperLayer.css'
import Info from './Info'
const purple = "#722F5F"
const cyan = "#72D8C8"
export default function UpperLayer() {
    const [footerTextHov, setFooterTextHov] = useState(false)
    return (<div>
        <a id="LogoLink" href="https://learnavi.com/" >
            <img src="LearnaviLogo.svg" alt="Learnavi Logo" style={{ width: 42, height: 42, display: "inline", margin: "auto" }} />
            <h2 style={{ display: "inline", textAlign: "center", marginLeft: 15, color: "white", font: "caption", fontWeight: "bold", fontSize: "1.5rem" }}>Learnavi</h2>
        </a>
        <div id="prompt" style={{ visibility: "hidden", textAlign: "center", position: "fixed", top: "1vw", left: "25%", width: "50%", zIndex: 1, background: "rgba(149, 94, 239, 0.2)", borderRadius: 50, paddingInlineStart: 20, margin: "auto" }}>
            <p style={{ fontFamily: "Courier New", fontSize: 20, color: cyan }}>Prompt</p>
        </div>
        <div id="controls" style={{ textAlign: "center", position: "fixed", bottom: "4vw", right: "3vw  ", zIndex: 1, paddingInlineStart: 20, margin: "auto" }}>
            <BackgroundMusic />
            <Info/>
        </div>
        <footer style={{ width: "93vw", zIndex: 1, position: "absolute", bottom: "0.5vw", left: "3vw", display: "flex", flexDirection: "row", alignItems: "start", justifyContent: "space-between", margin: "auto" }}>
            <p style={{ color: "white", opacity: 0.5 }} 
            onPointerOver={(event)=>setFooterTextHov(true)} 
            onPointerOut={(event)=>{setFooterTextHov(false)}}>
                {footerTextHov? "Made with ❤️ by Shahiryar @Learnavi": "Made with ❤ by Shahiryar @Learnavi"}
                </p>
            <div style={{ alignSelf: "flex-end", marginTop: "1em", marginBottom: "1em" }}>
                <a className={"footerLink"} href="https://learnavi.com/legalnotice/privacypolicy" >Help</a>
                <p className={"footerLinksDiv"} > | </p>
                <a className={"footerLink"} href="https://learnavi.com/legalnotice/privacypolicy" >Privacy Policy </a>
                <p className={"footerLinksDiv"}> | </p>
                <a className={"footerLink"} href="https://learnavi.com/legalnotice/codeofconduct" >Terms and Condition</a>
            </div>
        </footer>
    </div>)
}