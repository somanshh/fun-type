import { useState, useCallback, useEffect } from "react";
import useWords from "./useWords";
import useCountdownTimer from "./useCountdownTimer";
import useTypings from "./useTypings";
import { countErrors } from "../utils/helper";

export type State = "start" | "run" | "finish";

const NUMBER_OF_WORDS = 30;
const COUNTDOWN_SECONDS = 30;

const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const { words, updateWords } = useWords(NUMBER_OF_WORDS);

  const { timeLeft, startCountdown, resetCountdown } = useCountdownTimer(
    COUNTDOWN_SECONDS
  );

  const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTypings(
    state != "finish"
  );

  const isStarting = state === "start" && cursor > 0;

  const [errors, setErrors] = useState(0);

  const sumErrors = useCallback(() => {
    const wordsReached = words.substring(0, cursor);

    setErrors((prev) => prev + countErrors(typed, wordsReached));
  }, [typed, words, cursor]);

  // as soon as the user starts typing the first letter , we start
  useEffect(() => {
    if (isStarting) {
      setState("run");
      startCountdown();
    }
  }, [isStarting, startCountdown, cursor]);

  // when the time is up,  we are finished --> so set the state to finished
  useEffect(() => {
    if (!timeLeft) {
      console.log("time is up...");
      setState("finish");
      sumErrors();
    }
  }, [timeLeft, sumErrors]);

  // when the words are filled up , we generate new set of words using useEffect
  const areWordsFinished = cursor === words.length;

  useEffect(() => {
    if (areWordsFinished) {
      console.log("words are finished... generating new set of words");

      sumErrors();
      updateWords();
      clearTyped();
    }
  }, [
    cursor,
    words,
    clearTyped,
    typed,
    areWordsFinished,
    updateWords,
    sumErrors,
  ]);

  // restarting
  const restart = useCallback(() => {
    console.log("restarting...");
    resetCountdown();
    resetTotalTyped();
    setState("start");
    updateWords();
    clearTyped();
  }, [clearTyped, updateWords, resetCountdown, resetTotalTyped]);

  return { state, words, timeLeft, typed, restart, errors, totalTyped };
};

export default useEngine;
