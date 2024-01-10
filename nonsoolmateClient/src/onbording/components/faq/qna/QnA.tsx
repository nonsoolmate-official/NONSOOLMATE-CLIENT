import { useState } from "react";
import DivideLine from "../DivideLine";
import { QnaTypes } from "../types/qaatypes";
import Answer from "./Answer";
import Question from "./Question";
import styled from "styled-components";
import { columnFlex, commonFlex } from "style/commonStyle";

interface QnAprops extends QnaTypes {}

export default function QnA(props: QnAprops) {
  const { question, answer, answer2 } = props;
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);

  function handleToggleOpen() {
    setIsToggleOpen((prev) => !prev);
  }

  return (
    <>
      <Question isToggleOpen={isToggleOpen} question={question} onClick={handleToggleOpen} />
      {isToggleOpen && (
        <AnswerContainer>
          <Answer answer={answer} />
          {answer2 && <Answer answer={answer2} />}
        </AnswerContainer>
      )}
      <DivideLine />
    </>
  );
}

const AnswerContainer = styled.p`
  ${columnFlex}

  margin-bottom: 2rem;
`;
