import Image from "next/image";
import { motion } from "framer-motion";

const SkillDataProvider = ({ src, width, height, index, name }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
    >
      <div className="relative group">
        <Image
          src={src}
          width={35}  
          height={35} 
          alt={name}
          className="transform group-hover:rotate-12 transition-all duration-300"
        />
      </div>
      <p className="text-gray-300 mt-3 text-sm font-medium text-center">
        {name}
      </p>
    </motion.div>
  );
};

export default SkillDataProvider;
