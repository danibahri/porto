import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "Halo, saya adalah asisten AI untuk portofolio Ahmad Ramadani Bahri. Bagaimana saya bisa membantu Anda hari ini?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        console.error("API Key not found");
        throw new Error("API Key not found");
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        systemInstruction: `Kamu adalah asisten AI untuk portofolio Ahmad Ramadani Bahri. Jawablah dengan ramah, antusias, dan profesional dalam Bahasa Indonesia.
        
        Tugasmu adalah menjelaskan fitur dan konten website ini kepada pengunjung. Berikut adalah detail lengkap website ini:

        1. **Hero Section (Beranda)**:
           - Menampilkan nama "Ahmad Ramadani Bahri" dan role "Creative Developer".
           - **Fitur Unik**: Ada kartu ID (Lanyard) 3D interaktif yang menggantung. Kartu ini bisa ditarik-tarik (physics-based), sudah dibalik 180 derajat, dan diperbesar 5x lipat agar jelas.
           - **Background**: Efek Aurora yang indah dan bergerak.

        2. **Music Player**:
           - Pemutar musik melayang di pojok kiri bawah.
           - **Fitur**: Bisa di-minimize menjadi tombol bulat berputar.
           - **Playlist**: Memiliki 3 lagu (Lofi Study, Ambient Piano, Cyberpunk City) yang bisa dipilih lewat tombol list.
           - **Visualizer**: Ada visualizer audio real-time yang bergerak sesuai irama musik.

        3. **Tentang Saya (About)**:
           - Menjelaskan passion Ahmad dalam pengembangan web interaktif.
           - Menggunakan animasi scroll-reveal.

        4. **Teknologi (Tech Stack)**:
           - Menampilkan bola 3D interaktif (Tech Cloud) berisi ikon-ikon teknologi yang dikuasai.

        5. **Pengalaman (Experience)**:
           - Timeline vertikal yang rapi menjelaskan riwayat pekerjaan profesional.

        6. **Proyek (Projects)**:
           - Menampilkan "Proyek Unggulan" dengan efek kartu Spotlight (border bersinar saat di-hover).

        7. **Kontak**:
           - Tombol sosial media dengan efek magnetik saat didekati kursor.

        8. **Fitur Lainnya**:
           - **Cursor**: Blob cursor yang mengikuti mouse seperti jelly.
           - **Scroll Velocity**: Teks berjalan yang kecepatannya mengikuti kecepatan scroll pengguna.
           - **Chatbot**: Kamu sendiri! Asisten pintar yang siap membantu.

        Jika ditanya tentang website ini, jelaskan betapa keren dan interaktifnya fitur-fitur di atas, terutama Lanyard 3D dan Music Player-nya!`,
      });

      const chat = model.startChat({
        history: messages
          .filter((_, index) => index > 0) // Skip the initial greeting
          .map((m) => ({
            role: m.role === "model" ? "model" : "user",
            parts: [{ text: m.text }],
          })),
        generationConfig: {
          maxOutputTokens: 100,
        },
      });

      const result = await chat.sendMessage(input);
      const response = await result.response;
      const text = response.text();

      setMessages((prev) => [...prev, { role: "model", text: text }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "Sorry, I encountered an error. Please check the API key.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 z-50 p-4 bg-black border border-white/10 rounded-full shadow-lg text-white hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="p-4 bg-white/5 border-b border-white/10 flex items-center gap-2">
              <Sparkles className="text-purple-400" size={20} />
              <h3 className="font-bold text-white">Portfolio AI</h3>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === "user"
                        ? "bg-purple-600 text-white rounded-br-none"
                        : "bg-white/10 text-gray-200 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-2xl rounded-bl-none flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white/5 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about my skills..."
                  className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-purple-500 text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="p-2 bg-purple-600 rounded-xl text-white hover:bg-purple-700 disabled:opacity-50 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
