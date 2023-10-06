import styled from "styled-components";

export const Repositories = styled.div`
  margin-top: 50px;
  max-width: 900px;

  section {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;

    display: flex;
    align-items: center;

    & + section {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }

      span {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    button {
      border: none;
      background: none;
      margin-left: auto;

      svg {
        color: #cbcbd6;
      }
    }
  }
`;
