import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper >

      <h2 > Contact page   </h2>
      <div className="map" >

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d407.03194543239715!2d86.04921312003471!3d26.870252149321942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec11270f1183e7%3A0x8296f4cef65e7347!2sShree%20Sunrise%20English%20Boarding%20School!5e1!3m2!1sen!2snp!4v1697273556834!5m2!1sen!2snp"
          width="100%"
          height="500px"
          style={
            { border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" >  </iframe>
      </div>
      <div className="container" >

        <div className="contact-form" >

          <form method="POST"
            action="https://formspree.io/f/myyqlplz"
            className="contact-inputs" >

            <input type="text"
              name="username"
              required autoComplete="off"
              id=""
              placeholder="Username" />

            <input type="text"
              name="email"
              id=""
              autoComplete="off"
              required
              placeholder="Email" />

            <textarea placeholder="Enter Your Message"
              id=""
              cols="30"
              rows="10"
              required name="message" >   </textarea>
            <input type="submit"
              value="submit" />

          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;