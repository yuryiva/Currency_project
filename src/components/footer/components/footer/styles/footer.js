import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 60px;
  background: radial-gradient(circle, rgba(92,39,251,1) 0%, rgba(112,71,247,1) 100%);
  @media (max-width: 500px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    max-height: 400px;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 100px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 18px;
  text-decoration: none;
  &:hover {
      color: #rgb(26, 79, 88);
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;