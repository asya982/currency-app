import { FC } from "react";
import meme from "../../assets/images/michael.jpg";
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
      <img src={meme} alt="Michael from the Office" />
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>About the Currency app</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              This app is designed for easy and pleasant conversion currencies{" "}
            </p>
            <ul>
              Pages structure
              <li>
                Main page - there you can convert from one currency to another{" "}
              </li>
              <li>
                Rates page - there you can see top 10 most popular currencies
                and there conversion to 100 UAH. You can also convert to those
                currencies{" "}
              </li>
              <li>
                About page - You are here now! This page contains information
                about developer and this app, feel free to investigate it!{" "}
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>About me</Typography>
          </AccordionSummary>
          <AccordionDetails>
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
              <li>
                Fleabag <li>The office</li>
              </li>
            </ul>
            Have a nice day <AutoAwesome />
            <img src={onePiece} alt="Straw hats crew" />
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
};

export default AboutPage;
