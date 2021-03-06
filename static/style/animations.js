// Animations from https://github.com/IanLunn/Hover
import { css } from 'styled-components';
import { theme } from 'styled-tools';

export const typistAnimation = css`
  .Typist .Cursor {
    display: inline-block;

    &--blinking {
      opacity: 1;
      animation: blink 1s linear infinite;
      @keyframes blink {
        0% { opacity:1; }
        50% { opacity:0; }
        100% { opacity:1; }
      }
    }
  }
`;

export const buzzOutAnimation = css`
  @-webkit-keyframes hvr-buzz-out {
    10% {
      -webkit-transform: translateX(3px) rotate(2deg);
      transform: translateX(3px) rotate(2deg);
    }
    20% {
      -webkit-transform: translateX(-3px) rotate(-2deg);
      transform: translateX(-3px) rotate(-2deg);
    }
    30% {
      -webkit-transform: translateX(3px) rotate(2deg);
      transform: translateX(3px) rotate(2deg);
    }
    40% {
      -webkit-transform: translateX(-3px) rotate(-2deg);
      transform: translateX(-3px) rotate(-2deg);
    }
    50% {
      -webkit-transform: translateX(2px) rotate(1deg);
      transform: translateX(2px) rotate(1deg);
    }
    60% {
      -webkit-transform: translateX(-2px) rotate(-1deg);
      transform: translateX(-2px) rotate(-1deg);
    }
    70% {
      -webkit-transform: translateX(2px) rotate(1deg);
      transform: translateX(2px) rotate(1deg);
    }
    80% {
      -webkit-transform: translateX(-2px) rotate(-1deg);
      transform: translateX(-2px) rotate(-1deg);
    }
    90% {
      -webkit-transform: translateX(1px) rotate(0);
      transform: translateX(1px) rotate(0);
    }
    100% {
      -webkit-transform: translateX(-1px) rotate(0);
      transform: translateX(-1px) rotate(0);
    }
  }
  @keyframes hvr-buzz-out {
    10% {
      -webkit-transform: translateX(3px) rotate(2deg);
      transform: translateX(3px) rotate(2deg);
    }
    20% {
      -webkit-transform: translateX(-3px) rotate(-2deg);
      transform: translateX(-3px) rotate(-2deg);
    }
    30% {
      -webkit-transform: translateX(3px) rotate(2deg);
      transform: translateX(3px) rotate(2deg);
    }
    40% {
      -webkit-transform: translateX(-3px) rotate(-2deg);
      transform: translateX(-3px) rotate(-2deg);
    }
    50% {
      -webkit-transform: translateX(2px) rotate(1deg);
      transform: translateX(2px) rotate(1deg);
    }
    60% {
      -webkit-transform: translateX(-2px) rotate(-1deg);
      transform: translateX(-2px) rotate(-1deg);
    }
    70% {
      -webkit-transform: translateX(2px) rotate(1deg);
      transform: translateX(2px) rotate(1deg);
    }
    80% {
      -webkit-transform: translateX(-2px) rotate(-1deg);
      transform: translateX(-2px) rotate(-1deg);
    }
    90% {
      -webkit-transform: translateX(1px) rotate(0);
      transform: translateX(1px) rotate(0);
    }
    100% {
      -webkit-transform: translateX(-1px) rotate(0);
      transform: translateX(-1px) rotate(0);
    }
  }
  .hvr-buzz-out {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  }
  .hvr-buzz-out:hover, .hvr-buzz-out:focus, .hvr-buzz-out:active {
    -webkit-animation-name: hvr-buzz-out;
    animation-name: hvr-buzz-out;
    -webkit-animation-duration: 0.75s;
    animation-duration: 0.75s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }
`;

export const forwardAnimation = css`
  .hvr-forward {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }
  .hvr-forward:hover, .hvr-forward:focus, .hvr-forward:active {
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }
`;

export const hangAnimation = css`
  @-webkit-keyframes hvr-hang {
    0% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
    50% {
      -webkit-transform: translateY(4px);
      transform: translateY(4px);
    }
    100% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
  }
  @keyframes hvr-hang {
    0% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
    50% {
      -webkit-transform: translateY(4px);
      transform: translateY(4px);
    }
    100% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
  }
  @-webkit-keyframes hvr-hang-sink {
    100% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
  }
  @keyframes hvr-hang-sink {
    100% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
  }
  .hvr-hang {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  }
  .hvr-hang:hover, .hvr-hang:focus, .hvr-hang:active {
    -webkit-animation-name: hvr-hang-sink, hvr-hang;
    animation-name: hvr-hang-sink, hvr-hang;
    -webkit-animation-duration: .3s, 1.5s;
    animation-duration: .3s, 1.5s;
    -webkit-animation-delay: 0s, .3s;
    animation-delay: 0s, .3s;
    -webkit-animation-timing-function: ease-out, ease-in-out;
    animation-timing-function: ease-out, ease-in-out;
    -webkit-animation-iteration-count: 1, infinite;
    animation-iteration-count: 1, infinite;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-direction: normal, alternate;
    animation-direction: normal, alternate;
  }
`;

export const underlineRevealAnimation = css`
  .hvr-underline-reveal, .underline-reveal {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0) translateY(0px);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
  }
  .hvr-underline-reveal:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme('primary')};
    height: 4px;
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .underline-reveal:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme('primary')};
    height: 4px;
    -webkit-transform: translateY(4px);
    transform: translateY(0);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-underline-reveal:hover:before, .hvr-underline-reveal:focus:before, .hvr-underline-reveal:active:before {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

export const wobbleHorizontalAnimation = css`
  @-webkit-keyframes hvr-wobble-horizontal {
    16.65% {
      -webkit-transform: translateX(8px);
      transform: translateX(8px);
    }
    33.3% {
      -webkit-transform: translateX(-6px);
      transform: translateX(-6px);
    }
    49.95% {
      -webkit-transform: translateX(4px);
      transform: translateX(4px);
    }
    66.6% {
      -webkit-transform: translateX(-2px);
      transform: translateX(-2px);
    }
    83.25% {
      -webkit-transform: translateX(1px);
      transform: translateX(1px);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes hvr-wobble-horizontal {
    16.65% {
      -webkit-transform: translateX(8px);
      transform: translateX(8px);
    }
    33.3% {
      -webkit-transform: translateX(-6px);
      transform: translateX(-6px);
    }
    49.95% {
      -webkit-transform: translateX(4px);
      transform: translateX(4px);
    }
    66.6% {
      -webkit-transform: translateX(-2px);
      transform: translateX(-2px);
    }
    83.25% {
      -webkit-transform: translateX(1px);
      transform: translateX(1px);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  .hvr-wobble-horizontal {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  }
  .hvr-wobble-horizontal:hover, .hvr-wobble-horizontal:focus, .hvr-wobble-horizontal:active {
    -webkit-animation-name: hvr-wobble-horizontal;
    animation-name: hvr-wobble-horizontal;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }
`;

export const noiseAnimation = css`
  @keyframes noise {
    0%, 3%, 5%, 42%, 44%, 100% {
      opacity: 1;
      transform: scaleY(1);
    }
    4.3% {
      opacity: 1;
      transform: scaleY(1.7);
    }
    43% {
      opacity: 1;
      transform: scaleX(1.5);
    }
  }

  @keyframes noise-1 {
    0%, 20%, 40%, 60%, 70%, 90% {
      opacity: 0;
    }
    10% {
      opacity: .1;
    }
    50% {
      opacity: .5;
      left: -6px;
    }
    80% {
      opacity: .3;
    }
    100% {
      opacity: .6;
      left: 2px;
    }
  }

  @keyframes noise-2 {
    0%, 20%, 40%, 60%, 70%, 90% {
      opacity: 0;
    }
    10% {
      opacity: .1;
    }
    50% {
      opacity: .5;
      left: 6px;
    }
    80% {
      opacity: .3;
    }
    100% {
      opacity: .6;
      left: -2px;
    }
  }

  @keyframes noise-3 {
    0%, 3%, 5%, 42%, 44%, 65%, 67%, 100% {
      opacity: 1;
      transform: scaleY(1);
    }
    4% {
      opacity: 1;
      transform: scaleY(random(10));
    }
    43% {
      opacity: 1;
      transform: scaleX(random(10)) rotate(60deg);
    }
    66% {
      opacity: 1;
      transform: scaleX(random(10)) rotate(-60deg);
    }
  }
`;

export const toastySlideAnimation = css`
  @keyframes slide-in {
    0% { margin-bottom: -160px }
    50%, 100% { margin-bottom: 0 }
  }
`;

export default css`
  ${typistAnimation}
  ${buzzOutAnimation}
  ${forwardAnimation}
  ${hangAnimation}
  ${underlineRevealAnimation}
  ${wobbleHorizontalAnimation}

  ${noiseAnimation}
  ${toastySlideAnimation}
`;
