import { faker } from "@faker-js/faker";
import RestartButton from "./components/RestartButton";
import { Results } from "./components/Results";
import UserTypingInput from "./components/UserTypingInput";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helper";
// import { State } from- "./hooks/useEngine";


function App() {

  const {state , words , timeLeft , typed  , restart , errors , totalTyped } = useEngine();

  return (
    <>
      <CountDownTimer timeLeft={timeLeft} />

      <WordsContainer>
        <GenerateWords words={words} />
        <UserTypingInput className="absolute inset-0" words={words} userInput={typed} />
      </WordsContainer>

      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={restart}
      />

      <Results
        state= {state}
        className="mt-10"
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors , totalTyped)}
        total={totalTyped}
      />
    </>
  );
}

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative max-w-xl mt-3 text-3xl leading-relaxed break-all">
      {children}
    </div>
  );
};

const GenerateWords = ({ words }: { words: string }) => {
  return <div className=" text-slate-500">{words}</div>;
};

const CountDownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return (
    <h2 className="text-yellow-400 text-3xl font-medium mb-10 ml-5">
      {" "}
      Time: {timeLeft}
    </h2>
  );
};

export default App;
