import { styled } from 'styled-components'
import { Button } from '../Styled/Button'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../Context'

const HeroSection = () => {
    const {name,imgSrc,description} = useGlobalContext();
  return (
    <Wrapper>
        <div className="container-fluid">
            <div className="row hero-container">
                <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-4 hero-data">
                    <h3>This Is Me</h3>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <Button><NavLink to="/contact" className="hero-btn">Here Me</NavLink></Button>
                </div>

                <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-4">
                    <figure className='hero-img'>
                        <img src={imgSrc}/>
                    </figure>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    padding: 2rem 0 ;
    .hero-container{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        text-align: start;
        .hero-img img{
            height: 300px;
            width: 300px;
        }  
        @media (max-width: 575px) {
            .hero-data{
                text-align: center;
                margin-bottom: 2.8rem;
            }
            .hero-img{
                text-align: center;
            }
        }
    }

`

export default HeroSection