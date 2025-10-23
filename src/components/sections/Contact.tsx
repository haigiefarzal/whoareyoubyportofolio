import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const webhookURL =
      'https://discord.com/api/webhooks/1430784829535813703/kryEMk2A7JxYLOdHkacW9xK2xH52i6NHwdkWFwIhTZ8smKHAta1r8co1AbQFIyOOz1iO';

    const content = `
📩 **New Message from Portfolio Contact Form — CUSTOMER LAW FIRM**
**Name:** ${formData.name}
**Email:** ${formData.email}
**Message:** ${formData.message}
`;

    try {
      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      });

      if (response.ok) {
        setStatus('✅ Message sent successfully to Discord!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('❌ Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('❌ Error sending message.');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <p
            className="text-xl leading-relaxed"
            style={{
              color: '#f5f1e8',
              textShadow: `
                2px 2px 6px rgba(0, 0, 0, 0.7),
                0 0 8px rgba(230, 222, 207, 0.25)
              `,
            }}
          >
            LET’S IMMEDIATELY BETTER CALL HAIGIE !!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          onSubmit={handleSubmit}
          className="bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-200/50"
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors bg-white/80 cursor-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors bg-white/80 cursor-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors bg-white/80 resize-none cursor-none"
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition-colors cursor-none"
            >
              <span>Send Message</span>
              <Send size={20} />
            </motion.button>

            {status && (
              <p className="text-center text-gray-700 mt-4">{status}</p>
            )}

            <p className="text-sm text-center text-gray-500 mt-6">
              ⚙️ Pesan yang kamu kirim akan langsung masuk ke Discord{' '}
              <strong>haigiefarzal</strong> melalui channel{' '}
              <strong>CUSTOMER LAW FIRM</strong>.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
};
