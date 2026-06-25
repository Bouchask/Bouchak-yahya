import { motion } from "framer-motion";

interface LoadingProps {
  message?: string;
  size?: "sm" | "md" | "lg";
}

export default function Loading({ message = "Loading...", size = "md" }: LoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <motion.div
        className="flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={`rounded-full bg-primary ${sizeClasses[size]}`}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 0.6, delay: i * 0.1, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </motion.div>
      <p className="mt-4 text-muted-foreground text-sm font-mono">{message}</p>
    </div>
  );
}

export function SuspenseLoading({ message = "Loading..." }: { message?: string }) {
  return <Loading message={message} />;
}
