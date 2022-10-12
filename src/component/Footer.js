import soji from '../images/soji.jpeg'

function Footer(){
    return(
        <div className="footer">
            
            <img
                src={soji}
                alt='footer-img'
                className='footer--img'
            />
            
            <p className='footer--text'> Creation of <span>Hegemon</span></p>
        </div>
    )
}

export default Footer;