import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import styled from "styled-components";
import { Typography, Color, Media } from "ui";

export const StyledTabs = styled(Tabs)`
  min-height: 200px;
  margin-bottom: 72px;
`;

export const StyledTabList = styled(TabList)`
  display: flex;
  gap: 40px;

  border-bottom: 1px solid ${Color.Gray};

  .react-tabs__tab--selected {
    background: ${Color.Primary_Background};
    border-bottom: 2px solid ${Color.Primary};
  }

  ${Media.MD} {
    gap: 20px;
  }
  ${Media.SM} {
    gap: 5px;
  }
`;
export const StyledTab = styled(Tab)`
  padding: 12px 40px;

  ${Typography.B1}

  cursor: pointer;

  ${Media.MD} {
    padding: 12px 30px;
  }
  ${Media.SM} {
    padding: 12px 10px;
  }
`;
export const StyledTabPanel = styled(TabPanel)`
  margin-top: 48px;

  ${Typography.B1}
`;
