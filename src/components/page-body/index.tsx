import styled, { css } from "styled-components";

interface PageBodyProps {
  center?: boolean;
}

export default styled.div<PageBodyProps>`
width: 100vw;
height: 100vh;
display: flex;
${({ center }) => center && css` align-items: center; justify-content:  center; `}
`;