import { useEffect, useRef, useState, useCallback } from "react";

const LOG_TEMPLATES = [
  () => {
    const epoch = Math.floor(Math.random() * 100) + 1;
    const loss = (Math.random() * 0.05 + 0.005).toFixed(4);
    const acc = (Math.random() * 0.05 + 0.95).toFixed(4);
    return `[Epoch ${epoch}/100] loss: ${loss} - accuracy: ${acc} - lr: 3e-4`;
  },
  () => `[INFO] Optimizing weights... gradient_norm: ${(Math.random() * 2).toFixed(3)}`,
  () => `[BATCH ${Math.floor(Math.random() * 512)}] forward_pass: ${(Math.random() * 50 + 10).toFixed(1)}ms`,
  () => `>>> model.train() — loading batch ${Math.floor(Math.random() * 1000)} / 4096`,
  () => `[CHECKPOINT] Saving model_weights_v${Math.floor(Math.random() * 30)}.pt ...OK`,
  () => {
    const val = (Math.random() * 0.03 + 0.01).toFixed(4);
    return `[VALIDATION] val_loss: ${val} — best: 0.0089 — patience: 12/20`;
  },
  () => `[GPU:0] Memory: ${Math.floor(Math.random() * 4000 + 6000)}MB / 16384MB — Util: ${Math.floor(Math.random() * 30 + 70)}%`,
  () => `>>> scheduler.step() — new_lr: ${(Math.random() * 0.001).toExponential(2)}`,
  () => `[LAYER] transformer.encoder.${Math.floor(Math.random() * 12)}.attention — grad: ${(Math.random() * 0.1).toFixed(5)}`,
  () => `[DATA] Preprocessing pipeline: tokenize → normalize → augment → batch`,
  () => `[METRIC] F1: ${(Math.random() * 0.05 + 0.94).toFixed(3)} | Precision: ${(Math.random() * 0.05 + 0.94).toFixed(3)} | Recall: ${(Math.random() * 0.05 + 0.93).toFixed(3)}`,
  () => `>>> torch.cuda.synchronize() — stream aligned`,
  () => `[INFERENCE] Latency: ${(Math.random() * 20 + 5).toFixed(1)}ms — Throughput: ${Math.floor(Math.random() * 500 + 200)} tokens/s`,
  () => `[KAFKA] Consumer offset: ${Math.floor(Math.random() * 100000)} — lag: ${Math.floor(Math.random() * 50)}`,
  () => `[PIPELINE] Feature extraction → Embedding → Classification → Output`,
];

interface LogLine {
  id: number;
  text: string;
  opacity: number;
}

export default function TrainingBackground() {
  const [logs, setLogs] = useState<LogLine[]>([]);
  const counterRef = useRef(0);

  const addLog = useCallback(() => {
    const template = LOG_TEMPLATES[Math.floor(Math.random() * LOG_TEMPLATES.length)];
    const newLog: LogLine = {
      id: counterRef.current++,
      text: template(),
      opacity: 0.12 + Math.random() * 0.08,
    };
    setLogs((prev) => [...prev.slice(-40), newLog]);
  }, []);

  useEffect(() => {
    // Seed initial logs
    for (let i = 0; i < 20; i++) {
      setTimeout(() => addLog(), i * 100);
    }
    const interval = setInterval(addLog, 1800 + Math.random() * 1200);
    return () => clearInterval(interval);
  }, [addLog]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />

      {/* Scrolling logs */}
      <div className="absolute inset-0 flex flex-col justify-end px-4 pb-4 font-mono text-[11px] leading-relaxed">
        {logs.map((log) => (
          <div
            key={log.id}
            className="whitespace-nowrap text-primary animate-[fadeIn_0.5s_ease]"
            style={{ opacity: log.opacity }}
          >
            {log.text}
          </div>
        ))}
      </div>

      {/* Scanline effect */}
      <div className="scanline-overlay" />
    </div>
  );
}
