
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  /* ------------------------ STATE ------------------------ */
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({}); // { success: bool, message: string }

  /* -------------------- HANDLE INPUT --------------------- */
  const onFormUpdate = (field, value) => {
    setFormDetails({ ...formDetails, [field]: value });
  };

  /* -------------------- FORM SUBMIT ---------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/xovlapab", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDetails),
      });

      setButtonText("Send");
      setFormDetails(formInitialDetails); // clear inputs

      if (response.ok) {
        setStatus({ success: true, message: "Message sent successfully!" });
      } else {
        setStatus({
          success: false,
          message: "Something went wrong. Please try again later.",
        });
      }
    } catch (err) {
      setButtonText("Send");
      setStatus({
        success: false,
        message: "Network error. Please try again later.",
      });
    }
  };

  /* ----------------------- RENDER ------------------------ */
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          {/* -------- Contact Illustration -------- */}
          <Col xs={12} md={6}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <img
                  src={contactImg}
                  alt="Contact Illustration"
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                />
              )}
            </TrackVisibility>
          </Col>

          {/* --------------- Contact Form --------------- */}
          <Col xs={12} md={6}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <h2>Get In Touch</h2>

                  <form onSubmit={handleSubmit}>
                    <Row>
                      {/* First Name */}
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          required
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>

                      {/* Last Name */}
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          required
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                      </Col>

                      {/* Email */}
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          required
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>

                      {/* Phone */}
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>

                      {/* Message */}
                      <Col xs={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          required
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>

                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>

                      {/* Status Message */}
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success ? "text-success" : "text-danger"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
