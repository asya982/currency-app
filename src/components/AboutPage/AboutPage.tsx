import { FC } from "react";
import money from "../../assets/images/money.jpg";
import onePiece from "../../assets/images/thePromiseWeMade.jpg";
import styles from "./AboutPage.module.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { AutoAwesome } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AboutPage: FC = () => {
  return (
    <section className={styles.aboutPage}>
      <h1>About</h1>
      <img src={money} alt="Money from CK Jeans" />
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color={"var(--primary)"}>
              About the Currency app
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.accordionBody}>
            <p>
              This app is designed for easy and pleasant conversion currencies{" "}
            </p>
            <ul>
              Pages structure
              <li>
                <b>Main page</b> - there you can convert from one currency to
                another{" "}
              </li>
              <li>
                <b>Rates page</b> - there you can see top 10 most popular
                currencies and there conversion to 100 UAH. You can also convert
                to those currencies{" "}
              </li>
              <li>
                <b>About page</b> - You are here now! This page contains
                information about developer and this app, feel free to
                investigate it!{" "}
              </li>
            </ul>
            <p>
              You can see the source code in the{" "}
              <a
                id="link"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/asya982/currency-app"
              >
                Git hub
              </a>
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={"var(--primary)"}>About me</Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.accordionBody}>
            <p>
              I’m an young front-end develop, which has a dream to become the
              world’s greatest software developer!
            </p>
            <p>
              In my free time I like to do yoga, read books, knit and watch some
              interesting movies and TV-Shows!
            </p>
            <ul>
              Here my recommendations for you:
              <li>One piece (is real btw)</li>
              <li>Fleabag</li>
              <li>The office</li>
            </ul>
            <div className={styles.wishes}>
              Have a nice day <AutoAwesome color="warning" />
            </div>
            <img src={onePiece} alt="Straw hats crew" />
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
};

export default AboutPage;
