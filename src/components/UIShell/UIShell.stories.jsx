import { useState, useCallback } from 'react';
import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderPanel,
} from '@carbon/react';
import {
  Search,
  Notification,
  Switcher as SwitcherIcon,
} from '@carbon/icons-react';

export default {
  title: 'Carbon/UIShell',
  component: 'UIShell',
}

export const HeaderBaseWActionsAndRightPanel = () => {
  const [expanded, setExpanded] = useState(true);
  const toggle = useCallback(() => setExpanded(expanded => !expanded), [setExpanded]);
  return (
    <Header aria-label="IBM Platform Name">
      <HeaderName href="#" prefix="IBM">
        [Platform]
      </HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search">
          <Search size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction
          aria-label="Notifications"
          isActive={expanded}
          onClick={toggle}
        >
          <Notification size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction
          aria-label="App Switcher"
          tooltipAlignment="end">
          <SwitcherIcon size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
      <HeaderPanel aria-label="Header Panel" expanded={expanded}>
        This is some text
      </HeaderPanel>
    </Header>
  );
};

HeaderBaseWActionsAndRightPanel.storyName =
  'Header Base and Right Panel';