import {
  PrintInputValueOnClickUseState,
  PrintInputValueOnChange,
  UseMemoEfficiency,
  FetchAbortController,
} from "./components";

import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <>
      <PrintInputValueOnClickUseState />
      <PrintInputValueOnChange />
      <UseMemoEfficiency />
      <ErrorBoundary
        fallback={<div>Sorry, the data couldn't be loaded :)</div>}
      >
        <FetchAbortController />
      </ErrorBoundary>
    </>
  );
}

export default App;
