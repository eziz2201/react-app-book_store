import { css } from "styled-components";
import { media } from "./media";

const H1 = css`
  font-family: "Bebas Neue";
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;

  ${media.PHONE} {
    font-size: 32px;
    line-height: 44px;
  }
`;

const H2 = css`
  font-family: "Bebas Neue";
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;

  ${media.PHONE} {
    font-size: 28px;
    line-height: 40px;
  }
`;

const H3 = css`
  font-family: "Bebas Neue";
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
`;

const S1 = css`
  font-family: "Helios";
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
`;

const B1 = css`
  font-family: "Helios";
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
`;

const B2 = css`
  font-family: "Helios";
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

const TAB = css`
  font-family: "Helios";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const BUTTON = css`
  font-family: "Bebas Neue";
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
`;

const BURGER_MENU = css`
  font-family: "Bebas Neue";
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
`;

const SEARCH_BOOK = css`
  font-family: "Helios";
  font-weight: 700;
  font-size: 14px;
  line-height: 32px;
`;

export const typography = {
  H1,
  H2,
  H3,
  S1,
  B1,
  B2,
  TAB,
  BUTTON,
  BURGER_MENU,
  SEARCH_BOOK,
};
