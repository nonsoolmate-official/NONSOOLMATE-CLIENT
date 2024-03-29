import styled from "styled-components";
import { Title } from "../../styles/title";
import NaverLoginButton from "./NaverLoginButton";
import SignupButton from "./SignupButton";
import SignupText from "./SignupText";
import { columnFlex, commonFlex } from "style/commonStyle";

export default function Login() {
  return (
    <Container>
      <Text>로그인</Text>
      <NaverLoginButton />
      <SignupContainer>
        <SignupText />
        <SignupButton />
      </SignupContainer>
    </Container>
  );
}

const Container = styled.section`
  ${columnFlex}

  width: 50%;
`;

const Text = styled(Title)`
  margin-bottom: 1.6rem;
`;

const SignupContainer = styled.div`
  ${commonFlex}

  gap: 0.8rem;
  margin-top: 2.8rem;
`;
