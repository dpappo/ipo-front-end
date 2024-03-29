import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import "../styles/globals.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import qs from "qs";

export default function Home() {
  //rebuild toggle on
  // const submitData = function (email) {
  //   console.log("submitting email: ", email);
  //   axios({
  //     method: "post",
  //     url: "https://ipo-email.herokuapp.com/join",
  //     data: qs.stringify({
  //       email: email,
  //     }),
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //   }).catch((error) => {
  //     console.log(error.response);
  //   });
  //   setEmail("");
  //   setSubscribe(true);
  // };

  // const [email, setEmail] = useState("");
  // const [subscribe, setSubscribe] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>IPOs in Your Inbox</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Be in the know for all the IPOs. Emails sent to your inbox in the nick of time, with curated information, so that you can beat the market on that fresh IPO."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://ipoemail.com/" />
        <meta property="og:title" content="IPOs in Your Inbox" />
        <meta
          property="og:description"
          content="Be in the know for all the IPOs. Emails sent to your inbox in the nick of time, with curated information, so that you can beat the market on that fresh IPO."
        />
        <meta property="og:image" content="/illustration.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" value="ipoemail.com" />
        <meta name="twitter:title" value="IPOs in Your Inbox" />
        <meta
          name="twitter:description"
          value="Be in the know for all the IPOs. Emails sent to your inbox in the nick of time, with curated information, so that you can beat the market on that fresh IPO."
        />
        <meta name="twitter:image" content="/illustration.png" />
        <meta name="twitter:url" value="http://www.ipoemail.com/" />
        <meta name="twitter:label1" value="Be in the know for all the IPOs" />
        <meta
          name="twitter:data1"
          value="Emails sent to your inbox in the nick of time"
        />
        <meta name="twitter:label2" value="Curated information" />
        <meta
          name="twitter:data2"
          value="so that you can beat the market on that fresh IPO"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FJEWS9VHGC"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-FJEWS9VHGC');`,
          }}
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Find the Best IPOs for Investment. <span>In Your Mailbox.</span>
        </h1>
        <br />
        <p className={styles.description}>
          Emails sent to your inbox in the nick of time, with curated
          information, so that you can beat the market on that fresh IPO. When a
          stock IPO is offered, our IPO calendar has you covered. We'll send you
          charts, prices, and trading information exactly when you need it. Oh,
          did we mention it's <span>free</span>?
        </p>
        {/* 
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
        {subscribe && (
          <Alert variant="success">
            Got it! Go check your inbox to confirm your subscription
          </Alert>
        )} */}

        <div className={styles.flexContainer}>
          <iframe
            scrolling="no"
            id="iframe"
            style={{ border: "none", height: "290px" }}
            src="https://cdn.forms-content.sg-form.com/532f2320-a478-11eb-a67b-8e97e70c24cc"
          />
          <Image
            src="/illustration.png"
            alt="Illustration of business success from a great ipo investment by Olha Khomich from Ouch!"
            width={500}
            height={500}
          />
        </div>
      </main>

      <div className={styles.main}>
        <h1 className={styles.title}>
          Looking for New IPOs for April 2021? IPO Email Alerts has you covered.
        </h1>
        <br />
        <p className={styles.description}>
          While nobody knows what day 1 trading performance will be on that hot
          new IPO, what we do know when that IPO will drop and how you can be
          first to market in 2021. Be the next Wolf of Wall Street by signing up
          for IPO email alerts with IPOEmail.
        </p>

        <div className={styles.flexContainer} style={{ flexDirection: "row" }}>
          <iframe
            scrolling="no"
            id="iframe"
            style={{ border: "none", height: "290px" }}
            src="https://cdn.forms-content.sg-form.com/532f2320-a478-11eb-a67b-8e97e70c24cc"
          />
          <Image
            src="/illustration2.png"
            alt="Illustration of what happens when get alerted of new IPOs in your inbox by Olha Khomich from Ouch!"
            width={500}
            height={500}
          />
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: [
            ".form_15iP5 {",
            "  min-width: auto !important;",
            "  width: auto !important;",
            "}",
          ].join("\n"),
        }}
      ></style>

      {/* <footer className={styles.footer}>
      </footer> */}
    </div>
  );
}
