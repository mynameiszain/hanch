const Sayhi = ({ sayhi, setsayhi }) => {
    const handleCloseClickSayhi = () => {
        setsayhi(false);
    };

    return (
        <div className="darkbox-overlay">
            <div className="darkbox-content">
                <div className="darkbox-close" id="closedarkbox">
                    <a href="#" onClick={handleCloseClickSayhi}><i className="fa fa-window-close" aria-hidden="true"></i></a>
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
                            <textarea id="message" name="message" maxLength="250" rows="4" cols="50"
                                placeholder="Your Message (max 250 characters):" required></textarea>
                            <input type="text" id="name-input" name="name" placeholder="Your Name" required />
                            <input type="email" id="email-input" name="email" placeholder="your@email.address" required />
                            <button type="submit" id="signup-button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Sayhi