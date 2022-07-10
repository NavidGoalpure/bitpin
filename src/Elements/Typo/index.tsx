import styled, { css } from 'styled-components/macro';
import { device } from '../../consts/device';

export const H1Style = css`
  font-family: Poppins;
  font-style: normal;
  font-size: 52px;
  font-weight: 700;
  line-height: 65px;
  letter-spacing: 0.001em;
  color: var(--color-gray1);
  @media ${device.mobileL} {
    font-size: 22px;
    line-height: 30px;
  }
`;
export const H1 = styled.h1`
  ${H1Style}
`;
export const H2Style = css`
  font-family: Poppins;
  font-style: normal;
  font-size: 40px;
  line-height: 54px;
  letter-spacing: 0.001em;
  color: var(--color-gray1);
  @media ${device.mobileL} {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
  }
`;
export const H2 = styled.h2`
  ${H2Style}
`;
//-----------------
export const H3Style = css<{
  weight?: number | string;
  lineHeight?: number;
  mobileWeight?: number | string;
  mobilelineHeight?: number;
}>`
  font-weight: ${({ weight }) => weight};
  font-family: Poppins;
  font-style: normal;
  font-size: 32px;
  ////////////////line height and font weight////////////////////
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}px;`};

  ${({ weight }) => weight && `font-weight: ${weight};`}

  color: var(--color-gray1);
  ///////////////media///////////////////////
  @media ${device.mobileL} {
    font-size: 16px;
    ${({ mobilelineHeight }) =>
      mobilelineHeight && `line-height: ${mobilelineHeight}px;`};
    ${({ mobileWeight }) => mobileWeight && `font-weight: ${mobileWeight};`}
  }
`;
export const H3 = styled.h2`
  ${H3Style}
`;
//-----------------
export const H4Style = css`
  font-family: Poppins;
  font-style: normal;
  font-size: 22px;

  color: var(--color-gray1);
`;
export const H4 = styled.h4`
  ${H4Style}
`;
//------------------
export const H5Style = css<{
  weight?: number | string;
  lineHeight?: number;
  mobileWeight?: number | string;
  mobilelineHeight?: number;
}>`
  font-family: Poppins;
  font-style: normal;
  font-size: 18px;
  color: var(--color-gray1);
  ////////////////line height and font weight////////////////////
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}px;`};
  ${({ weight }) => weight && `font-weight: ${weight};`}
  ///////////////media///////////////////////
  @media ${device.mobileL} {
    font-size: 16px;
    ${({ mobilelineHeight }) =>
      mobilelineHeight && `line-height: ${mobilelineHeight}px;`};
    ${({ mobileWeight }) => mobileWeight && `font-weight: ${mobileWeight};`}
  }
`;
export const H5 = styled.h5`
  ${H5Style}
`;
//-----------------
export const Body18Style = css<{
  weight?: number | string;
  lineHeight?: number;
  mobileWeight?: number | string;
  mobilelineHeight?: number;
  hasUnderLine?: boolean;
}>`
  font-family: Open Sans;
  font-style: normal;
  font-size: 18px;
  color: var(--color-gray1);
  ////////////////////under line ///////////////////
  text-decoration-line: ${({ hasUnderLine }) => hasUnderLine && `underline`}
    ////////////////line height and font weight////////////////////
    ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}px;`};
  ${({ weight }) => weight && `font-weight: ${weight};`}
  ///////////////media///////////////////////  
  @media ${device.mobileL} {
    font-size: 18px;
    ${({ mobilelineHeight }) =>
      mobilelineHeight && `line-height: ${mobilelineHeight}px;`};
    ${({ mobileWeight }) => mobileWeight && `font-weight: ${mobileWeight};`}
  }
`;

export const Body18 = styled.h3`
  ${Body18Style}
`;
export const Body16Style = css<{
  weight?: number | string;
  lineHeight?: number;
  mobileWeight?: number | string;
  mobilelineHeight?: number;
  hasUnderLine?: boolean;
}>`
  font-family: Open Sans;
  font-style: normal;
  font-size: 16px;
  color: var(--color-gray1);
  ////////////////////under line ///////////////////
  text-decoration-line: ${({ hasUnderLine }) => hasUnderLine && `underline`}
    ////////////////line height and font weight////////////////////
    ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}px;`};
  ${({ weight }) => weight && `font-weight: ${weight};`}
  ///////////////media///////////////////////  
  @media ${device.mobileL} {
    ${({ mobilelineHeight }) =>
      mobilelineHeight && `line-height: ${mobilelineHeight}px;`};
    ${({ mobileWeight }) => mobileWeight && `font-weight: ${mobileWeight};`}
  }
`;
export const Body16 = styled.h3`
  ${Body16Style}
`;

export const Body14Style = css<{
  weight?: number | string;
  lineHeight?: number;
  mobileWeight?: number | string;
  mobilelineHeight?: number;
  hasUnderLine?: boolean;
  hasLetterSpace?: boolean;
}>`
  font-family: Open Sans;
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
  color: var(--color-gray1);
  ////////////////////letter space ///////////////////////
  ${({ hasLetterSpace }) => hasLetterSpace && 'letter-spacing: 0.24em;'}
  ////////////////////under line ///////////////////
  text-decoration-line: ${({ hasUnderLine }) => hasUnderLine && `underline`}
  ///////////////line height and font weight////////////////////
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}px;`};
  ${({ weight }) => weight && `font-weight: ${weight};`}
  ///////////////media///////////////////////
  @media ${device.mobileL} {
    ${({ mobilelineHeight }) =>
      mobilelineHeight && `line-height: ${mobilelineHeight}px;`};
    ${({ mobileWeight }) => mobileWeight && `font-weight: ${mobileWeight};`}
  }
`;
export const Body14 = styled.h3`
  ${Body14Style}
`;
////////////////////////////
export const Body12Style = css<{
  weight?: number | string;
  lineHeight?: number;
  mobileWeight?: number | string;
  mobilelineHeight?: number;
}>`
  font-family: Open Sans;
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  color: var(--color-gray1);
  ///////////////line height and font weight////////////////////
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}px;`};
  ${({ weight }) => weight && `font-weight: ${weight};`}
  @media ${device.mobileL} {
    ${({ mobilelineHeight }) =>
      mobilelineHeight && `line-height: ${mobilelineHeight}px;`};
    ${({ mobileWeight }) => mobileWeight && `font-weight: ${mobileWeight};`}
  }
`;
export const Body12 = styled.h3`
  ${Body12Style}
`;
////////////////////////////
export const Body10Style = css<{
  weight?: number | string;
  lineHeight?: number;
  mobileWeight?: number | string;
  mobilelineHeight?: number;
}>`
  font-family: Open Sans;
  font-style: normal;
  font-size: 10px;
  line-height: 14px;
  ///////////////line height and font weight////////////////////
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}px;`};
  ${({ weight }) => weight && `font-weight: ${weight};`}
  @media ${device.mobileL} {
    ${({ mobilelineHeight }) =>
      mobilelineHeight && `line-height: ${mobilelineHeight}px;`};
    ${({ mobileWeight }) => mobileWeight && `font-weight: ${mobileWeight};`}
  }
`;
export const Body10 = styled.h3`
  ${Body12Style}
`;
