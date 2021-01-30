import React, {useState} from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Settings from '@material-ui/icons/Settings';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Home from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuIcon from '@material-ui/icons/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';

const MainContainer = styled.div`
  flex-grow:1;
`;
const AppBarContainer = styled(AppBar)`
  background-color:#FFFFFF !important;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px !important;
  z-index:2;
`;  
const ToolbarContainer = styled(Toolbar)`

`;
const IconButtonContainer = styled(IconButton)`
  margin-right:16px !important;
`;
const TypographyContainer = styled(Typography)`
  display:block;
  color:#0D6CE7;
  @media (max-width:600px) {
    display:none;
  }
`;
const Searchbar = styled.div`
  position:relative;
  border-radius:15px;
  // background-color:${fade("#fff",0.15)};
  background-color:#FBFBFB;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  margin-right:16px;
  color:#7F7F7F;
  margin-left:32px;
  width:auto;
  @media (max-width:600px){
    width:100%;
    margin-left:0;
  }
`;
const SearchiconContainer = styled.div`
  height:100%;
  position:absolute;
  padding:0 16px;
  pointer-events:none;
  display:flex;
  align-items:center;
  justify-content:center;
`;
const InputBaseContainer = styled(InputBase)`
  width:40ch;
  color:inherit;
  aria-label:search;
  display:inline-flex;
  @media (max-width:960px){
    width:100%;
  }
  & input {
    padding:8px 8px 8px 0px;
    padding-left: calc(1em + 32px);
    transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;
const DesktopSection = styled.div`
  display:flex;
  @media (max-width:960px){
    display:none;
  }
  & span .MuiBadge-root {
    color:rgba(var(--d69,0,149,246),1);
  }
  & svg.MuiSvgIcon-root {
    color:rgba(var(--d69,0,149,246),1);
  }
`;
const AvatarContainer = styled(Avatar)`
      background-color:rgba(var(--d69,0,149,246),1) !important;
      color:white !important;
      width:24px !important;
      height:24px !important;
      font-size:1rem !important;
`;
const MobileSection = styled.div`
  display:none;
  @media (max-width:960px){
    display:flex;
  }
  & span {
    color:#0D6CE7;
  }
`;
export const NavBar = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const {username} = props;
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  
  return (
    <MainContainer>
      <AppBarContainer position="static">
          <ToolbarContainer>
            {/* <IconButtonContainer
            edge="start"
            aria-label="open drawer"
            >
              <MenuIcon />
            </IconButtonContainer> */}
            <TypographyContainer variant="h6" noWrap>
              Social Media
            </TypographyContainer>
            <MainContainer/>
            <Searchbar>
                <SearchiconContainer>
                  <SearchIcon></SearchIcon>
                </SearchiconContainer>
                <InputBaseContainer placeholder="Search..." inputProps={{ 'aria-label': 'search' }}/>
            </Searchbar>
            <MainContainer/>
            <DesktopSection>
            {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton> */}
              <IconButton aria-label="home" color="inherit">
                <Badge color="secondary">
                  <Home/>
                </Badge>
              </IconButton>
              <IconButton aria-label="profile" color="inherit">
                <Badge color="secondary">
                  <AvatarContainer>{username.charAt(0).toUpperCase() }</AvatarContainer>
                </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton aria-label="profile" color="inherit">
                <Badge color="secondary">
                  <Settings></Settings>
                </Badge>
              </IconButton>
            </DesktopSection>
            <MobileSection>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </MobileSection>
          </ToolbarContainer>
      </AppBarContainer>
      {renderMobileMenu}
      {renderMenu}
    </MainContainer>
  )
}
