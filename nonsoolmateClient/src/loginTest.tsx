import styled from "styled-components";
import { commonFlex } from "style/commonStyle";

const Naver = () => {
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
    import.meta.env.VITE_CLIENT_ID
  }&state=${import.meta.env.VITE_NAVER_STATE}&redirect_uri=${import.meta.env.VITE_CALLBACK_URL}`;

  const NaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };
  return <Container onClick={NaverLogin}>네이버 로그인</Container>;
};

export default Naver;

const Container = styled.button`
  ${commonFlex}

  width: 34.4rem;
  height: 7.2rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grey_50};
`;
