import { motion } from 'motion/react';

type AnimatedTextProps = {
  text: string;
};

const AnimatedText = ({ text }: AnimatedTextProps) => {
  return (
    <span>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index / 8,
            duration: 0,
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default AnimatedText;
