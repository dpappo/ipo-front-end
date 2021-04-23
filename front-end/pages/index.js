import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const submitData = function (email) {
    console.log("submitting email: ", email);
    axios({
      method: "post",
      url: "https://ipo-email.herokuapp.com/join",
      data: {
        email: email,
      },
    }).catch((error) => {
      console.log(error.response);
    });

    // axios.post('/user', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  };

  const [email, setEmail] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>IPOs in Your Inbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Be in the know for all the IPOs</h1>
        <br />
        <p className={styles.description}>
          Emails sent to your inbox in the nick of time, with curated
          information, so that you can beat the market on that fresh IPO.
        </p>

        <div className={styles.grid}>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              submitData(email);
            }}
          >
            <Form.Row className="align-items-center">
              <Col xs="auto">
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Control
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    placeholder="jeff@bezos.com"
                  />
                </Form.Group>
              </Col>
              <Col xs="auto">
                <Button
                  variant="primary"
                  className="mb-2"
                  type="submit"
                  // onClick={(event) => submitData(event)}
                >
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </div>
        <Image
          src="/../public/illustration.png"
          alt="business illustration"
          width={500}
          height={500}
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
