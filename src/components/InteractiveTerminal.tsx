import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import { personalInfo } from "@/data/portfolio";

interface TerminalLine {
  text: string;
  type: "prompt" | "output" | "success" | "info" | "error";
  command?: string;
}

const TYPING_SPEED = 20;
const OUTPUT_DELAY = 300;

export default function InteractiveTerminal() {
  const { t } = useLang();
  const [lines, setLines] = useState<TerminalLine[]>([
    { text: t("terminal.welcome"), type: "info" },
    { text: t("terminal.hint"), type: "info" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const addLines = (newLines: TerminalLine[]) => {
    setLines((prev) => [...prev, ...newLines]);
  };

  const runCommand = useCallback(async (cmd: string, silent = false) => {
    const trimmed = cmd.toLowerCase().trim();
    if (!silent) {
      addLines([{ text: cmd, type: "prompt", command: cmd }]);
    }

    if (!trimmed) return;

    if (trimmed === "clear") {
      setLines([]);
      return;
    }

    setIsRunning(true);
    await new Promise((r) => setTimeout(r, 200));

    switch (trimmed) {
      case "help":
        addLines([
          { text: "Available commands:", type: "info" },
          { text: "  help     - Show this help message", type: "output" },
          { text: "  ls       - List directory contents", type: "output" },
          { text: "  whoami   - Display professional profile", type: "output" },
          { text: "  contact  - Show contact information", type: "output" },
          { text: "  gui      - Smooth scroll to top", type: "output" },
          { text: "  clear    - Clear terminal screen", type: "output" },
        ]);
        break;
      case "ls":
        addLines([
          { text: "drwxr-xr-x  about.md", type: "output" },
          { text: "drwxr-xr-x  skills.sh", type: "output" },
          { text: "drwxr-xr-x  projects.py", type: "output" },
          { text: "-rw-r--r--  Yahya_Bouchak_CV.pdf", type: "output" },
        ]);
        break;
      case "whoami":
        addLines([
          { text: personalInfo.name, type: "success" },
          { text: "Role: Junior AI Engineer & Data Enthusiast", type: "output" },
          { text: "Location: Morocco", type: "output" },
          { text: "Stack: PyTorch, Kafka, FastAPI, React", type: "output" },
        ]);
        break;
      case "contact":
        addLines([
          { text: `Email: ${personalInfo.email}`, type: "output" },
          { text: `GitHub: ${personalInfo.github}`, type: "output" },
          { text: `LinkedIn: ${personalInfo.linkedin}`, type: "output" },
        ]);
        break;
      case "gui":
        window.scrollTo({ top: 0, behavior: "smooth" });
        addLines([{ text: "Navigating to home...", type: "info" }]);
        break;
      default:
        addLines([{ text: `Command not found: ${trimmed}. Type 'help' for a list of commands.`, type: "error" }]);
    }

    setIsRunning(false);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isRunning) {
      runCommand(inputValue);
      setInputValue("");
    }
  };

  const simulateQuickAction = async (label: string, command: string, outputs: string[], action: () => void) => {
    if (isRunning) return;
    setIsRunning(true);
    
    // Type the command
    let typed = "";
    addLines([{ text: "", type: "prompt", command: "" }]);
    
    for (const char of command) {
      typed += char;
      setLines((prev) => {
        const next = [...prev];
        next[next.length - 1] = { text: typed, type: "prompt", command: typed };
        return next;
      });
      await new Promise((r) => setTimeout(r, TYPING_SPEED));
    }

    await new Promise((r) => setTimeout(r, OUTPUT_DELAY));

    for (const output of outputs) {
      addLines([{ text: output, type: output.includes("[OK]") || output.includes("[SUCCESS]") ? "success" : "output" }]);
      await new Promise((r) => setTimeout(r, 200));
    }

    await new Promise((r) => setTimeout(r, 500));
    action();
    setIsRunning(false);
  };

  const quickActions = [
    {
      label: "GitHub",
      icon: "⟩",
      cmd: `./connect --github`,
      outputs: ["[RESOLVING] github.com/Bouchask...", "[OK] Connection established.", "[REDIRECTING]..."],
      action: () => window.open(personalInfo.github, "_blank"),
    },
    {
      label: "LinkedIn",
      icon: "⟩",
      cmd: `./connect --linkedin`,
      outputs: ["[AUTH] Verifying network...", "[OK] Profile loaded.", "[REDIRECTING]..."],
      action: () => window.open(personalInfo.linkedin, "_blank"),
    },
    {
      label: "Download CV",
      icon: "↓",
      cmd: "wget ./CV.pdf",
      outputs: ["[CONNECTING]...", "[DOWNLOADING] 100%", "[SUCCESS] Opening PDF..."],
      action: () => {
        const a = document.createElement("a");
        a.href = personalInfo.cvFile;
        a.download = "Yahya_Bouchak_CV.pdf";
        a.click();
      },
    },
    {
      label: "Email",
      icon: "@",
      cmd: "mail -s 'Hello'",
      outputs: ["[INIT] Mail client...", "[OK] Composer ready."],
      action: () => window.open(`mailto:${personalInfo.email}`),
    },
  ];

  const getLineStyles = (type: string) => {
    switch (type) {
      case "prompt": return "text-primary";
      case "success": return "text-primary font-bold";
      case "error": return "text-terminal-red";
      case "output": return "text-terminal-cyan";
      case "info": return "text-muted-foreground italic";
      default: return "text-foreground";
    }
  };

  return (
    <div 
      className="terminal-window max-w-2xl mx-auto shadow-2xl shadow-primary/5"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="terminal-titlebar">
        <div className="flex gap-1.5">
          <div className="terminal-dot terminal-dot-red" />
          <div className="terminal-dot terminal-dot-amber" />
          <div className="terminal-dot terminal-dot-green" />
        </div>
        <span className="ml-4 text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
          yahya@ai-machine:~/portfolio
        </span>
      </div>

      <div className="terminal-body h-[320px] overflow-y-auto custom-scrollbar bg-black/20">
        <AnimatePresence mode="popLayout">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1 }}
              className={`${getLineStyles(line.type)} leading-relaxed mb-1 text-[13px] font-mono`}
            >
              {line.type === "prompt" ? (
                <div className="flex items-start gap-2">
                  <span className="shrink-0">
                    <span className="text-terminal-amber font-bold">yahya</span>
                    <span className="text-muted-foreground">@</span>
                    <span className="text-terminal-cyan">portfolio</span>
                    <span className="text-primary ml-1">$</span>
                  </span>
                  <span className="break-all">{line.text}</span>
                </div>
              ) : (
                <div className="pl-4 border-l border-white/5">{line.text}</div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {!isRunning && (
          <div className="flex items-center gap-2 mt-1">
            <span className="shrink-0 text-[13px] font-mono">
              <span className="text-terminal-amber font-bold">yahya</span>
              <span className="text-muted-foreground">@</span>
              <span className="text-terminal-cyan">portfolio</span>
              <span className="text-primary ml-1">$</span>
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-foreground p-0 m-0 text-[13px] font-mono focus:ring-0"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="border-t border-border/50 p-4 flex flex-wrap gap-2 bg-secondary/30">
        {quickActions.map((action) => (
          <button
            key={action.label}
            onClick={(e) => {
              e.stopPropagation();
              simulateQuickAction(action.label, action.cmd, action.outputs, action.action);
            }}
            disabled={isRunning}
            className="flex items-center gap-2 px-3 py-1.5 text-[10px] font-mono uppercase tracking-tight border border-border/50 rounded bg-background/50 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all disabled:opacity-30"
          >
            <span className="text-primary">{action.icon}</span>
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}

