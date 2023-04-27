
import { useCallback , useRef , useState , useEffect} from "react"
import { isKeyboardCodeAllowed } from "../utils/helper";

// taking the typed value as input (code) to check if it is allowed or not
// const isKeyboardCodeAllowed = (code : string) => {
//     return (
//         code.startsWith("Key") || code.startsWith("Digit") || code === "Backspace " || code === "Space"
//     );
// };  // this fnc will return true , if the typed value is valid

// enabled will tell us , to count the words or not
const useTypings = (enabled: boolean) => {

    const [cursor , setCursor] = useState(0);
    const [typed , setTyped] = useState<string>("");

    // using the 'useRef' hook to update the totalTyped words with accesing the DOM
    const totalTyped = useRef(0);

    const keydownHandler = useCallback(
        ({ key , code }: KeyboardEvent ) => {

            if( !enabled || !isKeyboardCodeAllowed(code) ) return;

            // handling the deleting char state
            switch (key) {
              case "Backspace":
                    setTyped((prev) => prev.slice(0, -1));
                    setCursor((cursor) => cursor - 1);
                    // updating the totalTyped words by using useRef
                    totalTyped.current -= 1;
                    break;
              default:
                setTyped((prev) => prev.concat(key));
                setCursor((cursor) => cursor + 1);
                totalTyped.current += 1;
            }

        } , [enabled]);

    // to delete all the char typed and replace the cursor at 0th indexx
    const clearTyped = useCallback( () => {
        setTyped("");
        setCursor(0);
    } , []);

    // to reset the count of total typed words
    const resetTotalTyped = useCallback(() => {
        totalTyped.current = 0;
    },  []);

     // add the keydown event listner to record the keystrokes
    useEffect(() => {
      window.addEventListener("keydown", keydownHandler);

      // removing the event listener while unmounting
      return () => {
        window.removeEventListener("keydown", keydownHandler);
      };
    }, [keydownHandler]);

    // returning all the variables and functions used
    return {
        typed ,
        cursor ,
        clearTyped,
        resetTotalTyped ,
        totalTyped: totalTyped.current
    };
};

export default useTypings;
