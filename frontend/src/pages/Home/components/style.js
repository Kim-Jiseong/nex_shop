import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    display:flex;
    padding: 1rem 0 1rem 0;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #252525;
`;
export const ImgWrapper = styled.div`
    width: 40%;
    height: 100px;
    overflow: hidden;
    object-fit: cover;
    /* margin: 2rem 2rem 2rem 0; */
    border-radius: 9px;
`;
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: space-between;
    & div{
        font-weight: 400;
        font-size: 1.2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin-bottom: 1rem;
        white-space: pre-line;
        &:first-child{
            font-weight: 600;
            font-size: 1.2rem;
            -webkit-line-clamp: 2;
        }
        &:last-child{
            font-weight: 600;
        }

    }
`;
export const YB = styled.div`
    height:200px;
    width:100%;
`;