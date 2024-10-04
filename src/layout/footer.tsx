"use client";

import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <span>
        Site:
        <a
          href="https://www.linkedin.com/in/ferrazmanuela/"
          target="_blank"
          rel="noreferrer"
        >
          Manuela Ferraz
        </a>
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #2e2e2e;
  min-height: 10px;
  padding: 4px;

  span,
  a {
    color: #898989;
  }

  span {
    font-size: 12px;
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
  }
`;

export default Footer;
