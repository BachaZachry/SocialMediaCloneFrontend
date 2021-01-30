import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';


const Container = styled.div`
    display:flex;
    flex-direction:column;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    margin:10px;
`;
const Identification = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    & img {
        border-radius:100%;
        height:50px;
    }
`;

const Information = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    & div {
        margin:4px;
    }
`;
const Post = styled.div`
    display:flex;
    flex-direction:column;

`;

export const PostItem = (props) => {
    const {content} = props;
    return (
        <Container>
            <Identification>
                <img src="#" />
                <Information>
                    <div>Name</div>
                    <div>date</div>
                </Information>
            </Identification>
            <Post>
                <p>{content}</p>
            </Post>
        </Container>
    )
}
