import ethereum from '../images/icon-ethereum.svg'
import clock from '../images/icon-clock.svg'

function MainContent(){
    return(
        <main>
            <h1>Equilibrium #3429</h1>
            <p>Our equilibrium collection promotes balance and calm</p>
        

            <section>
                <ul className="list--one">
                    <li>
                        <img src={ethereum}
                        alt ='svg ethereum img'
                        className='list--svg--img'/>
                    </li>
                    <li className='list--item--two'> 0.041 ETH </li>
                </ul>

                <ul className="list--one">
                    <li> 
                        <img src={clock}
                            alt ='svg clock img'
                            className='list--svg--img'
                        />
                    </li>
                    <li className='list--item--four'> 3 days </li>
                </ul>
            </section>
        </main>
    )
}

export default MainContent;