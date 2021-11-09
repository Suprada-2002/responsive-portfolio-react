import styled from "styled-components";

import Back from "../stuff/project_back.svg";
export const Wrapper = styled.section`
  height: fit-content;
  width: 100vw;
  background-image: url(${Back});

  .title {
    font-weight: 800;
    font-size: 1.7rem;
    color: var(--white);
    text-align: center;
    padding-top: 3rem;

    span {
      border-bottom: 3px solid var(--light_blue);
    }
  }

  .cards {
    color: black;

    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    grid-template-rows:auto;

    gap: 10px;
    padding: 3rem 10rem;
    justify-content: space-around;

    .card {
      flex-direction: column;
      border-radius: 10px;
      background: linear-gradient(
        to right,
        var(--light_blue),
        var(--dark_blue)
      );
      color: var(--white);
      text-align: center;

      &:hover {
        box-shadow: 5px 5px 20px var(--white);
      }

      a {
        color: var(--white);
        text-decoration: none;
        font-size: 1rem;

        &:hover {
          color: var(--light_black);
        }
      }

      h1 {
        font-size: 1.2rem;
        font-weight: 800;
      }

      p {
        font-size: 0.8rem;
        font-weight: 300;
      }

      img {
        padding: 0.3rem 0.3rem;
        width: 340px;
        aspect-ratio: 3 / 2;
        border-radius: 20px;
      }
    }
  }

  .links {
    text-align: center;
    .other-project {
      text-decoration: none;
      color: var(--white);
      cursor: pointer;
      text-align: center;
      &:hover {
        color: var(--light_blue);
        cursor: pointer;
      }
    }
  }

  @media screen and (min-width: 670px) and (max-width: 1300px) {
    .cards {
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 670px) {
    .cards {
      grid-template-rows: 1fr;
      grid-template-columns: auto;
    }
  }
`;
