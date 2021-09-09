import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--container);
  border-radius: 10px;

  padding: 2rem 5rem;

  position: relative;

  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;

    position: relative;
    background-color: var(--container);
    border-radius: 10px;

    width: 100%;

    z-index: 5;

    form {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 1rem;

      padding: 0.5rem;

      width: 100%;
      height: 100%;
    }
  }
`;

export const RedesSociais = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 0.5rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 300px;
  }
`;

export const Linhas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: 5px solid var(--green);

  position: absolute;

  width: 100%;
  height: 100%;

  top: 12px;
  left: 12px;

  z-index: -10;
`;
