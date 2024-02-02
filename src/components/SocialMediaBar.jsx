import { useState } from "react"
import Sayhi from "./Sayhi"

const SocialMediaBar = () => {
  const [sayhi, setsayhi] = useState(false)
  return (
    <>
        <div className="socialmediabar-container">
            <div className="socialmediabar">
                <div className="social-icons">
                    <div></div>
                    <div className="socialmediabar-text" data-darkbox-src="darkbox-hello.html"><a href="#">Hello</a></div>
                    <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                    <a href="#" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
                    <a href="#" aria-label="Twitch"><i className="fab fa-twitch"></i></a>
                    <div className="socialmediabar-text" onClick={() => setsayhi(!sayhi)}><a href="#">Say hi</a></div>
                    <div></div>
                </div>
            </div>
        </div>

        {sayhi && <Sayhi />}
    </>
  )
}

export default SocialMediaBar