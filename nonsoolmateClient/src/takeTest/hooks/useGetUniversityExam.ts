import { useQuery } from "react-query";
import { getUniversityExam } from "takeTest/api/getUniversityExam";

export function useGetUniversityExam(id: number) {
  const { data } = useQuery(["info", id], () => getUniversityExam(id), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });
  return data;
}
