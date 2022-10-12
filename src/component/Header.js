 import equilibrium from '../images/image-equilibrium.jpg'
 import eyes from '../images/icon-view.svg'
 
 function Header(){
    return (
        <header className="header--wrap">
            <img 
            src={equilibrium}
            alt ='header img'
            className='header--img'/>

            {/* <div className='image--active'>
                <img
                    src={eyes}
                    alt='eyes img'
                />
            </div> */}
        </header>
    )
 }

 export default Header;