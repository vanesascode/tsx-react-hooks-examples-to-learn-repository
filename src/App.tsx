import {
  PrintInputValueOnClickUseState,
  PrintInputValueOnChange,
  UseMemoEfficiency,
  FetchAbortController,
  FetchAsyncEasy,
  FetchThenEasy,
  WeatherApi,
  TodoListFetchApi,
} from "./components";

import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <>
      <TodoListFetchApi />
      <WeatherApi />
      <PrintInputValueOnClickUseState />
      <PrintInputValueOnChange />

      <UseMemoEfficiency />
      <div style={{ backgroundColor: "blue" }}>
        <FetchAsyncEasy />
      </div>
      <div style={{ backgroundColor: "red" }}>
        <FetchThenEasy />
      </div>
      <ErrorBoundary
        fallback={<div>Sorry, the data couldn't be loaded :)</div>}
      >
        <div style={{ backgroundColor: "pink" }}>
          <FetchAbortController />
        </div>
      </ErrorBoundary>
    </>
  );
}

export default App;
