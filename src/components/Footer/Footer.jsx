import { BoxFooter, TextFooter, GitLink } from "./Footer.styled";

function Footer() {
  return (
    <BoxFooter>
      <div>
        <TextFooter align="center">Copyright &copy;</TextFooter>
        <GitLink
          component="a"
          href="https://github.com/Kartavchenko"
          target="_blank"
          rel="noreferrer noopener"
        >
          Go to my GitHub
        </GitLink>
      </div>
    </BoxFooter>
  );
};

export default Footer;
