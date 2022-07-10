import {
  slideInUp,
  fadeIn,
  slideInDown,
  slideInRight,
  slideInLeft,
  bounceIn,
  merge,
} from "react-animations";
import { css, keyframes } from "styled-components/macro";

/////////BounceIn///////////
const bounceInKeyFrames = keyframes`${bounceIn}`;
const bounceInAnimation = css`
  animation: 0.4s ${bounceInKeyFrames};
`;
////////////////////
const slideUpFadeIn = merge(slideInUp, fadeIn);
const cardAnimationKeyFrames = keyframes`${slideUpFadeIn}`;
const cardAnimation = css`
  animation: 0.4s ${cardAnimationKeyFrames};
`;
//////////////fade//////////
const fadeinAnimationKeyframes = keyframes`${fadeIn}`;
const fadeinAnimation = css`
  animation: 0.8s ${fadeinAnimationKeyframes};
`;
/////////////slideUp/////////
const slideInUpAnimationKeyframes = keyframes`${slideInUp}`;
const slideInUpAnimation = css`
  animation: 0.4s ${slideInUpAnimationKeyframes};
`;
/////////////slideDown/////////
const slideInDownAnimationKeyframes = keyframes`${slideInDown}`;
const slideInDownAnimation = css`
  animation: 0.4s ${slideInDownAnimationKeyframes};
`;
/////////////slideRight/////////
export const slideInRightAnimationKeyframes = keyframes`${slideInRight}`;
const slideInRightAnimation = css`
  animation: 0.4s ${slideInRightAnimationKeyframes};
`;
/////////////slideLeft/////////
const slideInLeftAnimationKeyframes = keyframes`${slideInLeft}`;
const slideInLeftAnimation = css`
  animation: 0.4s ${slideInLeftAnimationKeyframes};
`;

/////////modalAnimation//////
const modalAnimation = slideInUpAnimation;
////////hoverAnimation//////
const hoverBigAnimation = css`
  transition: all 0.2s ease-out;
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgb(0 0 0 / 30%), 0 15px 12px rgb(0 0 0 / 22%);
`;
const hoverSmallAnimation = css`
  transition: all 0.1s ease-out;
  transform: translateY(-2px);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.14), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
////////////////////////////////
const hoverLineState1_inBefore = css`
  content: "";
  width: 0;
  height: 2px;
  position: absolute;
  right: 0;
  bottom: -0.5rem;
  background-color: var(--color-primary);
  transition: all 0.3s ease;
`;
const hoverLineState2_inBefore = css`
  width: 100%;
  left: 0;
`;
const arrival = keyframes`
0%{
  opacity:0;
  transform:translateY(50px) ;
}
40%{
  opacity:0;
  transform:translateY(50px) ;
}
100%{
  opacity:1;
  transform:translateY(0) ;
}
`;
const arrivalAnimation = css`
  animation: 0.6s ${arrival} forwards;
`;
const fadeOut = keyframes`
0%{
  margin:0;
  opacity:1;
}
50%{
  margin-right:1rem;
  opacity:0;
  font-size:12px;
}
100%{
  margin-right:1rem;
  opacity:0;
  font-size:0;
}
`;
const fadeOutAnimation = css`
  animation: ${fadeOut} 0.5s cubic-bezier(0.55, 0.06, 0.61, 1);
`;
export {
  cardAnimation,
  fadeinAnimation,
  slideInUpAnimation,
  slideInDownAnimation,
  slideInRightAnimation,
  slideInLeftAnimation,
  modalAnimation,
  hoverBigAnimation,
  hoverSmallAnimation,
  bounceInAnimation,
  arrivalAnimation,
  fadeOutAnimation,
  arrival,
  //
  hoverLineState1_inBefore,
  hoverLineState2_inBefore,
};
