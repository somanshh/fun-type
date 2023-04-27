// import React from 'react'
import { motion } from "framer-motion";
import { formatPercentage } from "../utils/helper";
import { State } from "../hooks/useEngine";

export const Results = ({
  state ,
  errors,
  accuracyPercentage,
  total,
  className,
}: {
  state: State;
  errors: number;
  accuracyPercentage: number;
  total: number;
  className?: string;
}) => {
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const durarion = { opacity: 1.4 };

  if(state != 'finish') return null; 

  return (
    <>
      <motion.ul
        initial={initial}
        animate={animate}
        className={`flex flex-col items-center text-primary-600 space-y-3 ${className} `}
      >
        <motion.li
          initial={initial}
          animate={animate}
          transition={{ duration: 0.3 }}
          className="text-xl font-semibold"
        >
          Results
        </motion.li>

        <motion.li
          initial={initial}
          animate={animate}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          Accuracy: {formatPercentage(accuracyPercentage)}
        </motion.li>

        <motion.li
          initial={initial}
          animate={animate}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="text-red-500"
        >
          Erros : {errors}
        </motion.li>

        <motion.li
          initial={initial}
          animate={animate}
          transition={{ duration: 0.3, delay: 1.7 }}
        >
          Typed: {total}
        </motion.li>

      </motion.ul>
    </>
  );
};
