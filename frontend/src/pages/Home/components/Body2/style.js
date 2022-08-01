import styled,{ css, keyframes }  from "styled-components";

export const Container = styled.div`
    width:80%;
    max-width:1920px;
    display:flex;
    flex-direction: column;
    margin:0 auto;

`

export const TextContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    ${(props) =>
    (props.isDesktop == false) &&
    css`
        flex-direction: column;

    `}
`
export const CoverImg = styled.div`
    display:flex;
    width:49%;
    overflow:hidden;
    /* object-fit: cover; */
    max-height: 80rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    & img{
        width: 100%;
        object-fit: cover;
    }
    ${(props) =>
    (props.isDesktop == false) &&
    css`
        width: 100%;
        
    `}
`

export const TextWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    max-width: 40%;
    word-break: break-all;
    & div{
        font-weight: 300;
        font-size: 1.6rem;
        line-height:162%;
        text-align: right;
        letter-spacing: 0.05em;
        color: #252525;
        white-space: pre-wrap;
    }

    & div:first-child{
        font-size: 3.6rem;
        text-align: right;
        margin-bottom: 2rem;
    }
    ${(props) =>
    (props.isDesktop == false) &&
    css`
        max-width: 100%;
        margin-top: 8rem;
    `}
`

export const TextWrapper2 = styled.div`
    display:flex;
    align-items: flex-end;
    justify-content: flex-start;
    max-width:40%; 
    word-break: break-all;
    & div{
        white-space: pre-wrap;
        font-weight: 300;
        font-size: 1.6rem;
        line-height:162%;
        text-align: left;
        letter-spacing: 0.05em;
        color: #252525;

    }
    ${(props) =>
    (props.isDesktop == false) &&
    css`
        max-width: 100%;
        margin-top: 8rem;
        margin-bottom: 8rem;
    `}
`
export const TextContainer2= styled(TextContainer)`
    transform: translate(0,-40%);
    ${(props) =>
    (props.isDesktop == false) &&
    css`
        transform: translate(0,0%);
        
    `}
`
