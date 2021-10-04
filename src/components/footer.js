import ghico from '../images/icons/githubIcon.svg'
import mailIco from '../images/icons/mailIcon.svg'
import webIco from '../images/icons/webIcon.svg'
import twitterIco from '../images/icons/twitterIcon.svg'
import spotifyIco from '../images/icons/spotifyIcon.svg'



const Footer = () => {
    
    return (
        <footer className="footer">
            <div className="contact-links">
                <ul>
                    <li><a href="https://github.com/SethThyer"><img alt="github icon" className="link" src={ghico} /></a></li>
                    <li><a href="mailto: SethThyer.Business@gmail.com?Subject=Want's To Chat!"><img alt="mail icon" className="link" src={mailIco} /></a></li>
                    <li><a href="https://seththyer.herokuapp.com/"><img alt="website icon" className="link" src={webIco} /></a></li>
                    <li><a href="https://twitter.com/Seth06098372"><img alt="twitter icon" className="link" src={twitterIco} /></a></li>
                    <li><a href="https://open.spotify.com/user/qwr2j3sfc6quajm51dtz54sde?si=1e69f957d2e84301"><img alt="spotify icon" className="link" src={spotifyIco} /></a></li>
                    
                </ul>
            </div>
        </footer>
    );
}

export default Footer;