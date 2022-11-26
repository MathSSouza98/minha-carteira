import React from "react";

import * as S from './styles';

interface IcontentHeaderProps{
    title:string;
    children: React.ReactNode;
    lineColor: string;
}


const ContentHeader: React.FC<IcontentHeaderProps> = ({
    title, children, lineColor
}) => (
        <S.Container>
            <S.TitleContainer lineColor={lineColor}>
            <h1>{title}</h1>
            </S.TitleContainer>
            <S.Controllers>
                {children}
            </S.Controllers>
                
        </S.Container>
    );

export default ContentHeader;