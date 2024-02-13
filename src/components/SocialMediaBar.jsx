import { useState, useEffect } from "react"
import sodumb from '../assets/images/sodumb.png'

const SocialMediaBar = () => {
  const [sayhi, setsayhi] = useState(false)
  const [sayhello, sethello] = useState(false)

  useEffect(() => {
    if (sayhi || sayhello) {
      document.body.style.position = 'fixed';
      document.body.style.inset = '0';
    } else {
      document.body.style.position = 'unset';
    }
  }, [sayhi , sayhello]);

  return (
    <>
        <div className="socialmediabar-container">
            <div className="socialmediabar">
                <div className="social-icons">
                    <div></div>
                    <div className="socialmediabar-text" data-darkbox-src="darkbox-hello.html" onClick={() => sethello(true)}><a href="#">Hello</a></div>
                    <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                    <a href="#" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
                    <a href="#" aria-label="Twitch"><i className="fab fa-twitch"></i></a>
                    <div className="socialmediabar-text" onClick={() => setsayhi(true)}><a href="#">Say hi</a></div>
                    <div></div>
                </div>
            </div>
        </div>

        

        <div className="darkbox-overlay" style={{ visibility: sayhi && 'visible', opacity : sayhi && '1' }}>
            <div className="darkbox-content">
              <div className="darkbox-close" id="closedarkbox">
                <a href="#" onClick={() => setsayhi(false)}><i className="fa fa-window-close" aria-hidden="true"></i></a>
              </div>
            </div>
            <div className="darkbox-page-title">Say hi</div>
            <div className="darkbox-section">
              <div className="darkbox-section-container">
                <div className="darkbox-section-title">HIT ME UP<i className="fa-solid fa-envelope"></i></div>
                <form action="#" method="post">
                  <div className="contact-form">
                    <select id="subject-select" name="subject" required>
                      <option value="">--Please choose a subject--</option>
                      <option value="booking">I'd like to book you and/or your band(s)</option>
                      <option value="hiring">I want to hire you as a backing musician</option>
                      <option value="lessons">I want to take private lessons</option>
                      <option value="comment">Just want to comment on your site / other</option>
                    </select>
                    <textarea id="message" name="message" maxLength="250" rows="4" cols="50" placeholder="Your Message (max 250 characters):" required></textarea>
                    <input type="text" id="name-input" name="name" placeholder="Your Name" required />
                    <input type="email" id="email-input" name="email" placeholder="your@email.address" required />
                    <button type="submit" id="signup-button">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>


          {/* Hello */}
          <div className={`darkbox-overlay`} style={{ visibility: sayhello && 'visible' , opacity : sayhello && '1' }}>
            <div className="darkbox-content">
                <div className="darkbox-close" id="closedarkbox">
                    <a href="#" onClick={() => sethello(false)}><i className="fa fa-window-close" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className="darkbox-page-title">Hello</div>
            <div className="darkbox-section">
                <div className="darkbox-p">
                    <div className="darkbox-p-text">
                        <p>Welcome to my digital abode! After years of wandering the boundless realms of the internet, like a
                            digital nomad without a permanent address, I've finally decided to settle down. This website, my
                            newly established cyber sanctuary, marks the end of my nomadic journey and the beginning of a new,
                            exciting chapter. It's a place where I can gather all my creative sparks under one roof, a home base
                            in the vast digital cosmos.</p>
                        <br />
                        <div className="darkbox-p-image"><img src={sodumb} /></div>
                        <p>You <b>might</b> remember me from a previous online venture—a site that once buzzed with activity and
                            resonated with my refined tastes. That experience was exhilarating, a digital exposé that echoed
                            across the web. Now, I'm channeling that energy into this singular space, a focal point for all my
                            future endeavors. Imagine it as a compass that always points to me, a constant in the ever-shifting
                            landscape of the internet.</p>
                        <br />
                        <p>Music is not just my profession; it's the rhythm of my soul, the melody that guides my journey. This
                            website is a living archive of my musical explorations. From the soul-stirring strums of my guitar
                            to the visual symphony of my music videos, every note I play and every scene I capture will find a
                            home here. And it's not just about listening—I'm also passionate about sharing the joy of music. As
                            a music teacher, I'm excited to offer educational materials to kindle the musical flames in others.
                            Whether you're a budding musician or an experienced maestro, there's something here for everyone.
                        </p>
                        <br />
                        <p>But wait, there's more! This isn't just a stage for my music; it's also a platform for my thoughts, a
                            personal blog where I can share the melodies and musings swirling in my mind. From backstage stories
                            to reflections on life's intricate harmonies, expect a mix of humor, insight, and perhaps a dash of
                            the unexpected. And for those eager to catch me live, this site will always have the most up-to-date
                            information on my upcoming appearances. So, bookmark this page, tune in, and join me on this
                            incredible journey. Welcome to the show! 🎸🌟</p>
                    </div>
                </div>
            </div>
          </div>
        
    </>
  )
}

export default SocialMediaBar