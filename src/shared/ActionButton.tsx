import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./type";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <div>
      {/* SelectedPage is enum */}
      <AnchorLink
        className="hover rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white    "
        onClick={() => setSelectedPage(SelectedPage.ContactUS)}
        href={`#${SelectedPage.ContactUS}`}
      >
        {children}
      </AnchorLink>
    </div>
  );
};

export default ActionButton;
