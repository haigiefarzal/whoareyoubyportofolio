import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

interface HomeProps {
  onNavigate: (section: string) => void;
}

export const Home = ({ onNavigate }: HomeProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Judul utama - tetap font New Rocker */}
          <motion.h1
            className="text-7xl md:text-8xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            BETTER CALL HAIGIE
          </motion.h1>

          {/* Kutipan dengan efek vintage elegan */}
          <motion.p
            className="retro-text text-xl md:text-2xl mb-12 max-w-xl mx-auto leading-snug text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              color: '#e6decf', // krem klasik biar nyatu sama tone retro
              textShadow: `
                2px 2px 6px rgba(0, 0, 0, 0.7),
                0 0 8px rgba(230, 222, 207, 0.25)
              `,
            }}
          >
            “Trust your argument, sharpen your logic
            <br />
            the verdict will follow yourself”
          </motion.p>

          {/* Icon social media */}
          <motion.div
            className="flex gap-6 justify-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="https://github.com/haigiefarzal"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-700 transition-colors cursor-none"
            >
              <Github size={20} />
            </motion.a>

            <motion.a
              href="https://id.linkedin.com/in/muhamad-haigie-farzal-devito-a49126293"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-700 transition-colors cursor-none"
            >
              <Linkedin size={20} />
            </motion.a>

            <motion.a
              href="https://discord.com/invite/fCVhTknS"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-700 transition-colors cursor-none"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>

          {/* Tombol navigasi */}
          <motion.button
            onClick={() => onNavigate('profile')}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-all cursor-none"
          >
            Explore My Work
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
