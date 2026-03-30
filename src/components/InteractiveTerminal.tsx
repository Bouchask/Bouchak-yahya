import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import { personalInfo } from "@/data/portfolio";

interface TerminalAction {
  command: string;
  outputs: string[];
  action: () => void;
}

const TYPING_SPEED = 35;
const OUTPUT_DELAY = 400;

export default function InteractiveTerminal() {
  const { t } = useLang();
  const [lines, setLines] = useState<{ text: string; type: "prompt" | "output" | "success" | "info" }[]>([
    { text: t("terminal.welcome"), type: "info" },
    { text: t("terminal.hint"), type: "info" },
    { text: "", type: "prompt" },
  ]);
  const [isRunning, setIsRunning] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const simulateCommand = useCallback(async (action: TerminalAction) => {
    if (isRunning) return;
    setIsRunning(true);

    let typed = "";
    for (const char of action.command) {
      typed += char;
      setLines((prev) => {
        const newLines = [...prev];
        newLines[newLines.length - 1] = { text: typed, type: "prompt" };
        return newLines;
      });
      await new Promise((r) => setTimeout(r, TYPING_SPEED));
    }

    await new Promise((r) => setTimeout(r, OUTPUT_DELAY));

    for (const output of action.outputs) {
      await new Promise((r) => setTimeout(r, 300));
      setLines((prev) => [
        ...prev,
        { text: output, type: output.includes("[OK]") || output.includes("[SUCCESS]") ? "success" : "output" },
      ]);
    }

    await new Promise((r) => setTimeout(r, 600));
    action.action();

    await new Promise((r) => setTimeout(r, 400));
    setLines((prev) => [...prev, { text: "", type: "prompt" }]);
    setIsRunning(false);
  }, [isRunning]);

  const actions: { label: string; icon: string; terminal: TerminalAction }[] = [
    {
      label: "GitHub",
      icon: "⟩",
      terminal: {
        command: `./connect --target github --user ${personalInfo.githubUser}`,
        outputs: [
          `[RESOLVING] github.com/${personalInfo.githubUser} ...`,
          "[FETCHING] repositories... 12 repos found",
          "[OK] Connection established.",
          "[REDIRECTING] Opening GitHub profile...",
        ],
        action: () => window.open(personalInfo.github, "_blank"),
      },
    },
    {
      label: "LinkedIn",
      icon: "⟩",
      terminal: {
        command: `./connect --target linkedin --profile ${personalInfo.linkedinUser}`,
        outputs: [
          `[RESOLVING] linkedin.com/in/${personalInfo.linkedinUser} ...`,
          "[AUTH] Verifying professional network...",
          "[OK] Profile loaded — 500+ connections",
          "[REDIRECTING] Opening LinkedIn...",
        ],
        action: () => window.open(personalInfo.linkedin, "_blank"),
      },
    },
    {
      label: "Download CV",
      icon: "↓",
      terminal: {
        command: "wget --output ./Yahya_Bouchak_CV.pdf",
        outputs: [
          "[CONNECTING] Secure download channel...",
          "[DOWNLOADING] Yahya_Bouchak_CV.pdf ████████████ 100%",
          "[SUCCESS] File ready — 2 pages, AI Engineer resume",
          "[OPENING] Initiating download...",
        ],
        action: () => {
          const a = document.createElement("a");
          a.href = personalInfo.cvFile;
          a.download = "Yahya_Bouchak_CV.pdf";
          a.click();
        },
      },
    },
    {
      label: "Email",
      icon: "@",
      terminal: {
        command: `./send-mail --to ${personalInfo.email}`,
        outputs: [
          "[INIT] Mail client starting...",
          "[COMPOSING] Opening mail composer...",
          "[OK] Ready to send.",
        ],
        action: () => window.open(`mailto:${personalInfo.email}`),
      },
    },
  ];

  const getLineColor = (type: string) => {
    switch (type) {
      case "prompt": return "text-primary";
      case "success": return "text-primary";
      case "output": return "text-terminal-cyan";
      case "info": return "text-muted-foreground";
      default: return "text-foreground";
    }
  };

  return (
    <div className="terminal-window max-w-2xl mx-auto">
      <div className="terminal-titlebar">
        <div className="terminal-dot terminal-dot-red" />
        <div className="terminal-dot terminal-dot-amber" />
        <div className="terminal-dot terminal-dot-green" />
        <span className="ml-3 text-xs text-muted-foreground">
          yahya@ai-engineer:~/portfolio
        </span>
      </div>

      <div className="terminal-body max-h-[300px] overflow-y-auto">
        <AnimatePresence>
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className={`${getLineColor(line.type)} leading-7`}
            >
              {line.type === "prompt" ? (
                <span>
                  <span className="text-terminal-amber">yahya</span>
                  <span className="text-muted-foreground">@</span>
                  <span className="text-terminal-cyan">portfolio</span>
                  <span className="text-muted-foreground"> $ </span>
                  {line.text}
                  {i === lines.length - 1 && <span className="cursor-blink" />}
                </span>
              ) : (
                <span>{line.text}</span>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>

      <div className="border-t border-border p-4 flex flex-wrap gap-2">
        {actions.map((action) => (
          <button
            key={action.label}
            onClick={() => simulateCommand(action.terminal)}
            disabled={isRunning}
            className="flex items-center gap-2 px-4 py-2 text-xs font-mono border border-border rounded bg-secondary hover:border-primary/50 hover:text-primary transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <span className="text-primary">{action.icon}</span>
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
