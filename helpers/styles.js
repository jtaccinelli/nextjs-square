import { extendTheme } from "@chakra-ui/react";
import { css, Global } from "@emotion/react";
import chroma from "chroma-js";

export const createColorScale = (base, step) => {
  const dark = chroma.mix(base, "black", 4 * step);
  const light = chroma.mix(base, "white", 4 * step);
  const scale = chroma.scale([light, base, dark]).colors(9);

  return scale.reduce((obj, value, index) => {
    return {
      ...obj,
      [`${index + 1}00`]: value,
    };
  }, {});
};

export const customTheme = extendTheme({
  semanticTokens: {
    space: {
      base: "2",
      spacing: "4",
      margin: "6",
      touch: "12",
    },
  },
});

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Public Sans";
          font-style: normal;
          font-weight: 100 900;
          font-stretch: 100%;
          font-display: swap;
          src: url("https://fonts.gstatic.com/s/publicsans/v7/ijwRs572Xtc6ZYQws9YVwnNGfJ7QwOk1.woff2")
            format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html,
        body,
        #__next {
          height: 100vh;
          width: 100vw;
        }

        :root {
          font-family: "Public Sans", sans-serif;
          font-size: 14px;
          color: black;
        }

        a,
        a:visited {
          color: inherit;
          text-decoration: inherit;
          cursor: pointer;
        }
      `}
    />
  );
};
