import Text from "../Text";

const Heading = Text.withComponent("div");
Heading.defaultProps = {
  fontWeight: "normal",
  fontSize: 4,
  lineHeight: "title",
  m: 0
};

Heading.h1 = Heading.withComponent("h1");
Heading.h1.defaultProps = {
  fontWeight: "bold",
  fontSize: 1,
  m: 0
};

Heading.h2 = Heading.withComponent("h2");
Heading.h2.defaultProps = {
  fontWeight: "bold",
  fontSize: 2,
  m: 0
};

Heading.h3 = Heading.withComponent("h3");
Heading.h3.defaultProps = {
  fontWeight: "bold",
  fontSize: 3,
  m: 0
};

Heading.h4 = Heading.withComponent("h4");
Heading.h4.defaultProps = {
  fontWeight: "bold",
  fontSize: 4,
  m: 0
};

Heading.h5 = Heading.withComponent("h5");
Heading.h5.defaultProps = {
  fontWeight: "bold",
  fontSize: 5,
  m: 0
};

Heading.h6 = Heading.withComponent("h6");
Heading.h6.defaultProps = {
  fontWeight: "bold",
  fontSize: 6,
  m: 0
};

export default Heading;
