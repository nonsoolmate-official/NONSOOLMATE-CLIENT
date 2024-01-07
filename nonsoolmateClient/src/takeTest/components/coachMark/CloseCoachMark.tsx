import { columnFlex, commonFlex, mainButtonStyle } from "style/commonStyle";
import styled from "styled-components";
import { CoachMarkProps } from "./CoachMark";

export default function CloseCoachMark(props: CoachMarkProps) {
  const { setCoachMarkStatus } = props;
  return (
    <CloseCoachMarkContainer>
      <Text>논술메이트 시험 화면에 대해 알려드릴게요!</Text>
      <CloseCoachMarkButton onClick={() => setCoachMarkStatus(false)} type="button">
        닫기
      </CloseCoachMarkButton>
    </CloseCoachMarkContainer>
  );
}

const CloseCoachMarkContainer = styled.div`
  ${columnFlex};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 34rem;
`;
const Text = styled.p`
  ${commonFlex};
  ${({ theme }) => theme.fonts.Headline3};

  height: 12rem;
  text-align: center;
`;
const CloseCoachMarkButton = styled(mainButtonStyle)`
  width: 10rem;
  height: 4rem;
  padding: 0.8rem;
`;