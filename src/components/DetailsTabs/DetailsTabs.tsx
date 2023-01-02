import "react-tabs/style/react-tabs.css";
import { IBookDetails } from "types";
import { StyledTab, StyledTabList, StyledTabPanel, StyledTabs } from "./styles";

interface IProps {
  book: IBookDetails;
}

export const DetailsTabs = ({ book }: IProps) => {
  const { desc, authors, subtitle } = book;

  return (
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
  );
};
