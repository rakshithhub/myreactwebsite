import { styled } from "styled-components";
import { Button } from "./Styled/Button";

const Contact = () => {
  return (
    <>
      <Wrapper>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-lg-12 map-img">
              <div className="contact-service">
                <h1 className="contact-heading">feel free to contact us</h1>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6426857836623!2d77.44131267444457!3d28.610494285082982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee432ca5bb45%3A0x67209b82a460c3c0!2sSupertech%20Eco%20Village%202%20Tower%20B-14%2C%20SUPERTECH%20ECO%20VILLAGE-2%2C%20Eco%20Village%202%2C%20Bhangel%2C%20Greater%20Noida%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201009!5e0!3m2!1sen!2sin!4v1690217109117!5m2!1sen!2sin"
                className="contact-map"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-lg-12 ">
              <form className="contact-form">
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  autoComplete="off"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  autoComplete="off"
                  required
                />
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: 100 }}
                  defaultValue={""}
                />
                <Button type="submit">Send</Button>
              </form>
            </div>
          </div>
        </div>{" "}
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .container-fluid{

    .contact-form{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      input,textarea{
        width: 30vw;
        margin: 1.1rem 0;
        text-align: center;
        border-color: teal;
        text-transform: capitalize;
      }
      input{
        border: none;
        border-bottom: 1px solid teal;  
      }
      textarea{
        text-align: left;
      }
    }

  }
  .map-img {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .contact-heading {
      text-transform: capitalize;
      text-align: center;
      margin-bottom: 3rem;
    }
    .contact-map{
      width: 97vw;
      height: 300px;
    }
  }
`;

export default Contact;
