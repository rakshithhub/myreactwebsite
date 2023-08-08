import { styled } from "styled-components";
import { useGlobalContext } from "./Context";
import { Button } from "./Styled/Button";

const Service = () => {
  const { servicess } = useGlobalContext();
  console.log(servicess[0]);
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12">
              <h1 className="service-heading">our service</h1>
            </div>
            {servicess[0].map((e) => {
              return (
                  <div className="col-xs-12 col-sm-6 col-lg-4 g-5" key={e.id}>
                  <div className="card service-div" key={e.id} style={{ width: "18rem" }}>
                    <img src={e.thumbnail} className="img-fluid card-img-top service-img" alt="..." />
                    <div className="card-body text-center">
                      <h5 className="card-title">{e.title}</h5>
                      <p className="card-text">
                        {e.description}
                      </p>
                      <Button>Read More</Button>
                    </div>
                  </div>
                  </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .service-heading{
    text-transform: capitalize;
    text-align: center;
    margin: 2rem 0; 
  }
  .service-div{
    height: 350px;
    
  .service-img{
    height: 150px;
  }
  }

`;
export default Service;
