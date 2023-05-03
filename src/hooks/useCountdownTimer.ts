import { time } from "console";
import { useRef , useCallback , useState, useEffect } from "react"
// import { setInterval } from "timers/promises";

const useCountdownTimer  = (seconds : number) => {

    const [timeLeft , setTimeLeft] = useState(seconds);
    // to change the timer in future by directly accesing ref using current func
    const intervalRef = useRef<NodeJS.Timer | null>(null);


    const startCountdown = useCallback( () => {
        console.log("countdown started");

        intervalRef.current = setInterval(() => {
            setTimeLeft((timeLeft) => timeLeft - 1);
        } , 1000);

    } , [setTimeLeft]);


    const resetCountdown = useCallback( () => {
        console.log( "resetting countdown...");

        if(intervalRef.current)  clearInterval(intervalRef.current)
        
        setTimeLeft(seconds);
    } , [seconds]);

    // when the countdown reaches 0 , clear the countdown interval
    useEffect( ()=> {
        if( !timeLeft && intervalRef.current )
        {
            console.log( "clearing timer...");

            clearInterval(intervalRef.current);
        }
    } , [timeLeft , intervalRef])

    return { timeLeft , startCountdown , resetCountdown };
}

export default useCountdownTimer;