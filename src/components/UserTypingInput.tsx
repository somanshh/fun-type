import Caret from "./Caret";
import cn  from "classnames"

const UserTypingInput = ({
  userInput,
  words,
  className,
}: {
  userInput: string;
  words: string;
  className?: string;
}) => {
  const typedCharacters = userInput.split("");

  return (
    <div className={`w-full  ${className}`}>

      {typedCharacters.map((char, index) => {
        return <Character
             key={`${char}_${index}`} 
            actual={char} 
            expected={words[index]}
            />;
      })}

      <Caret />
    </div>
  );
};


const Character = ({ actual , expected }: { actual: string  , expected: string }) => {
  const isCorrect = actual === expected;
  const isWhiteSpace = expected === " ";

    return(
     <span className= {cn({
      // if the typed word is not correct that make the color red
        "text-red-500": !isCorrect && !isWhiteSpace ,
        // if it correct then make it yellow
        "text-green-400": isCorrect && !isWhiteSpace,
        // if expected char is a blankspace and user typed something else then make its bg red
        "bg-red-500/50": !isCorrect && isWhiteSpace,
        "whitespace-nowrap": true,
      })
    }>
      {expected}
    </span>
    );
}

export default UserTypingInput;