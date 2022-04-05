const createLogger = (styles) => {
  return (...args) => {
    if (process.env.NODE_ENV !== "production") {
      console.log("%c%s", styles, ...args);
    }
  };
};

const log = {
  error: createLogger(`
    color: black; 
    background: red; 
    font-weight: 600; 
    padding: 4px 8px;
  `),
  warning: createLogger(`
    color: black; 
    background: yellow; 
    font-weight: 600; 
    padding: 4px 8px;
  `),
  info: createLogger(`
    color: white; 
    background: blue; 
    font-weight: 400; 
    padding: 4px 8px;
  `),
  plain: createLogger(``),
};

export default log;
