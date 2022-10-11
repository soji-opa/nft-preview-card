 import equilibrium from '../images/image-equilibrium.jpg'
 
 function Header(){
    return (
        <header className="header--wrap">
            <img 
            src={equilibrium}
            alt ='header img'
            className='header--img'/>
        </header>
    )
 }

 export default Header;