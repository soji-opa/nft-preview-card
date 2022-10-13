import ethereum from '../images/icon-ethereum.svg'
import clock from '../images/icon-clock.svg'

function MainContent(){
    return(
        <main>
            <h1> <a href='#'>Equilibrium #3429</a></h1>
            <p>Our equilibrium collection promotes balance and calm</p>

            <section>
                <div className='section--one'>
                    <img src={ethereum}
                        alt ='svg ethereum img'
                        className='list--svg--img'
                    />
                    <p className='section--text'> 0.041 ETH </p>
                </div>
                
                <div>
                    <img src={clock}
                        alt ='svg clock img'
                        className='list--svg--img'
                    />
                    <p className=' text--two'> 3 days left</p>
                </div>
            </section>
        </main>
    )
}

export default MainContent;