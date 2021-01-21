import React from 'react';
import styled from 'styled-components';
import {IoIosSearch,FaUserFriends,IoNotificationsSharp
        ,RiArrowDropDownLine} from 'react-icons/all';

export const Navbar = styled.div`
    height:66px;
    background-color:#F6F6F6
    width:100%;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    // box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    // box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`;
export const LogoContainer = styled.div`
    flex:1 0 20%;
`;
export const Logo = styled.h2`
    font-size:16px;
    font-weight:600;
    color:#0D6CE7;
    text-align:center;
`;
export const SearchbarContainer = styled.div`
    flex:1 0 30%;
    height:60%;
    display:flex;
    justify-content:center;
`;
export const Searchbar = styled.div`
    height:100%;
    width:80%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    border-radius:15px;
    background-color:#FBFBFB;
    display:flex;
    align-items:center;
    & span {
        color:rgba(var(--f52,142,142,142),1);
        margin:0 7px 0 0px;
    }
    & span.icon {
        margin-top:7px;
        margin-left:20px;
    }
`; 
export const IoSearch = styled(IoIosSearch)`
color:#7F7F7F;
`;
export const Links = styled.div`
    display:flex;
    flex-direction:row;
    flex:1 0 50%;
`;
export const WrittenLinks = styled.div`
    flex:1 0 80%;
    display:flex;
    justify-content:flex-end;
`;
export const LinkName = styled.a`
    font-weight:600;
    font-size:16px;
    text-decoration:none;
    cursor:pointer;
    color:#1877F2;
    margin:15px;
    &.last{
        padding-right:25px;
    }
`;
export const IconLinks = styled.div`
    flex:1 0 20%;
    display:flex;
    align-items:center;
    color:rgba(var(--f52,142,142,142),.9);
    & svg {
        margin:10px;
    }
`;
export const IoNotification = styled(IoNotificationsSharp)`
    color: #0D6CE7;
`;

export const NavBar = () => {
    return (
        <Navbar>
            <LogoContainer>
                <Logo>
                    Social Media
                </Logo>
            </LogoContainer>
            <SearchbarContainer>
                <Searchbar>
                    <span className="icon"><IoSearch size={18}/></span>
                    <span>Search</span>
                </Searchbar>
            </SearchbarContainer>
            <Links>
                <WrittenLinks>
                    <LinkName>
                        Profile
                    </LinkName>
                    <LinkName>
                        Home
                    </LinkName>
                    <LinkName className="last">
                        Create  
                    </LinkName>
                </WrittenLinks>
                <IconLinks>
                    <FaUserFriends size={21}/>
                    <IoNotification size={21}/>
                    <RiArrowDropDownLine size={32}/>
                </IconLinks>
            </Links>
        </Navbar>
    )
}
