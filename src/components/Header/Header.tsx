import moment from "moment";
import { FC, useState } from "react";
import Navigation from "../Navigation/Navigation";


const Header: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <section>{moment.now().toLocaleString()}</section>
      <Navigation open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
