'use strict';

import React from 'react';
import { Link } from 'react-router';
import { AppBar, IconButton, Popover, Menu, MenuItem } from 'material-ui';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

class PageHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }

    this.styles = {
      menuStyle: {
        backgroundColor: '#343434'
      }
    }
  }

  render() {
    return (
      <div>
        <AppBar
          title="Matt Viteri - blog"
          style={this.styles.menuStyle}
          showMenuIconButton={false}
          iconElementRight={<IconButton><MenuIcon /></IconButton>}
          onRightIconButtonClick={this.handleRequestOpen}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          >
          <Menu>
            <MenuItem primaryText="mattviteri.com" onClick={this.goHome} />
          </Menu>
        </Popover>
      </div>
    );
  }

  handleRequestOpen = (event) => {
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  }

  goHome() {
    window.location = 'https://www.mattviteri.com';
  }
}

export default PageHeader;
