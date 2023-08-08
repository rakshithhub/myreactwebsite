import { NavLink } from "react-router-dom"
import { Button } from "./Styled/Button"
import { styled } from "styled-components"

const Error = () => {
  return (
    <>
        <Wrapper>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-lg-12 error-contant">
                        <figure>
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-message-3702341-3119133.png" alt="404 not found"/>
                        </figure>
                        <NavLink to="/">
                            <Button>Go Back</Button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </Wrapper>
    </>
    )
}
const Wrapper = styled.section`
    .container{
        .error-contant{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`

export default Error