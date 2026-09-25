import "./globals.css";
import { FitLogProvider } from "@/context/FitLogContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "FitLog — Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#090909] text-white antialiased">
        <FitLogProvider>
          {children}

          <ToastContainer
            position="bottom-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="dark"
          />
        </FitLogProvider>
      </body>
    </html>
  );
}