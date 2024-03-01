import tw, { styled } from "twin.macro";

export const Container = tw.div`relative w-full h-full flex justify-center items-center bg-gray-300`;

export const Wrapper = styled.div`
  /* ${tw`relative w-1/2 h-1/2 border-8 border-solid border-sky-600`} */

  position: relative;
  width: 246px;
  height: 96px;
  background-color: skyblue;
  border: 1px solid #4386e3;

  &:after {
    content: "";
    position: absolute;
    bottom: -16.5px;
    left: -16px;

    width: 31px;
    height: 31px;
    background-color: #d1d5db;

    border-top: 1px solid #4386e3;
    transform: rotate(45deg);
  }
`;

export const CollageBorderRight = styled.div`
  ${tw`absolute w-[1%] h-2/5 bg-sky-600`};
  top: 20%;
  left: 0;
`;

export const CollageBorderLeft = styled.div`
  ${tw`absolute w-[1%] h-2/5 bg-sky-600`};
  top: 20%;
  right: 0;
`;
