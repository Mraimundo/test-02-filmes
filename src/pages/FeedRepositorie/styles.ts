import styled from "styled-components";

export const Container = styled.div`
  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 30px;

    nav {
      display: flex;
      align-items: center;

      a {
        display: block;
        margin-left: 10px;
        padding: 10px;
        font-size: 20px;
        font-weight: bold;
        color: ${(props) => props.theme["gray-200"]};
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme["gray-200"]};

  max-width: 450px;
  line-height: 56px;
  padding: 30px 0px 15px 0px;
`;
