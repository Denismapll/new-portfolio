import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact() {

  return (
    <Container id="contact">
      <header>
        <h2>Contato</h2>
        <p>Tem algum projeto em mente ? </p>
        <p>Entre em contato comigo !</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:Denis.alencarferraz@gmail.com"><img src={emailIcon} alt="Email" /></a>
          <a href="mailto:Denis.alencarferraz@gmail.com">Denis.alencarferraz@gmail.com</a>
        </div>
        {/* <div>
          <a href="tel:+919630576848"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919630576848">(+91) 9630576848</a>
        </div> */}
      </div>
    </Container>
  )
}