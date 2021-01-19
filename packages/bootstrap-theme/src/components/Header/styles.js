import { styled } from "frontity";
import Link from '../Link/'

export const Container = styled.div`
  width: 800px;
  max-width: 100%;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h3`
  margin: 0;
  margin-bottom: 16px;
  margin-top: 2rem;
  text-align: center;
  color: black;
`;

export const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 3rem;
  margin-top: 2rem;
  text-align: center;
  color: white;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
