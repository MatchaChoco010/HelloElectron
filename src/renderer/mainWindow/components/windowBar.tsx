import * as React from 'react';
import {
  ToolbarGroup,
  IconButton,
  AppBar,
  DropDownMenu,
  MenuItem,
} from 'material-ui';
import {
  NavigationClose,
  CommunicationClearAll,
} from 'material-ui/svg-icons';

interface WindowBarPropsType {
  filter: 'All' | 'Active' | 'Completed';
  palette: __MaterialUI.Styles.ThemePalette;
}
const WindowBar = (props: WindowBarPropsType) => {
  const textColor = props.palette.alternateTextColor;
  const barItem = (
    <ToolbarGroup>
      <DropDownMenu
        value={props.filter}
        labelStyle={{ color: textColor }}
      >
        <MenuItem value={'All'} primaryText="All"/>
        <MenuItem value={'Active'} primaryText="Active"/>
        <MenuItem value={'Completed'} primaryText="Completed"/>
      </DropDownMenu>
      <IconButton tooltip="clear all completed tasks">
        <CommunicationClearAll color={textColor}/>
      </IconButton>
      <IconButton>
        <NavigationClose color={textColor}/>
      </IconButton>
    </ToolbarGroup>
  );
  return (
    <AppBar
      title="TODOooo!"
      showMenuIconButton={false}
      iconElementRight={barItem}
    />
  );
};

export { WindowBar };
