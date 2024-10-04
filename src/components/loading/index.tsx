import { LoadingSpinner, Wrapper } from "./styles";

function Loading() {
  return (
    <Wrapper>
      <span>Loading...</span>
      <LoadingSpinner />
    </Wrapper>
  );
}

export default Loading;
