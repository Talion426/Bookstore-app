import "react-tabs/style/react-tabs.css";
import { IBookDetails } from "types";
import { StyledDetailsTabs, StyledTab, StyledTabList, StyledTabPanel, StyledTabs } from "./styles";

interface IProps {
  book: IBookDetails;
}

export const DetailsTabs = ({ book }: IProps) => {
  const { desc, authors, subtitle } = book;

  const tabsVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };

  return (
    <StyledDetailsTabs
      variants={tabsVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <StyledTabs>
        <StyledTabList>
          <StyledTab>Description</StyledTab>
          <StyledTab>Authors</StyledTab>
          <StyledTab>Reviews</StyledTab>
        </StyledTabList>
        <StyledTabPanel>{desc}</StyledTabPanel>
        <StyledTabPanel>{authors}</StyledTabPanel>
        <StyledTabPanel>{subtitle}</StyledTabPanel>
      </StyledTabs>
    </StyledDetailsTabs>
  );
};
