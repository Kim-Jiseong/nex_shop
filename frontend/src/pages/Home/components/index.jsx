import React, { useEffect, useRef, useState} from "react";
import * as S from "./style";


function ListItem(props) {

  return (
    <S.Container>
        <S.ImgWrapper>
            <img style={{width:"100%", height:"100%", objectFit: "cover"}} src={props.product.main_img}/>
        </S.ImgWrapper>
        <S.TextWrapper>
            <div>WITH {props.product.name}</div>
            <div>{props.product.info}</div>
            <div>{props.product.price}원</div>
        </S.TextWrapper>
    </S.Container>
  );
}

export default ListItem;
