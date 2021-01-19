import { css, styled } from "frontity";

export const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

export const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  height: 50vh;
  width: 100%;
}

`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
  padding-right: 15px;
  padding-left: 15px;
`;
