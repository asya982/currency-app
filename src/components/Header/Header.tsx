import { FC, useState } from "react";
import Navigation from "../Navigation/Navigation";

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <aside>
        {new Date().toLocaleDateString("en-en", {
          month: "short",
          day: "numeric",
        })}
      </aside>
      <Navigation open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
