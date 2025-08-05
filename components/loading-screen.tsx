import React, { useState, useEffect } from "react";
import {
  BarChart3,
  TrendingUp,
  Target,
  Zap,
  Globe,
  Users,
  Search,
  MessageCircle,
  Activity,
  Cpu,
} from "lucide-react";
interface FloatingTechIconProps {
  Icon: React.ComponentType<IconProps>;
  delay: number;
  position: string;
}

interface IconProps {
  size?: number;
  className?: string;
}
const FastMetallicMarketingLoader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const loadingSteps = [
    { icon: Cpu, text: "Initializing Core Systems", color: "text-zinc-300" },
    { icon: Globe, text: "Connecting Global Networks", color: "text-zinc-200" },
    {
      icon: Search,
      text: "Scanning Market Intelligence",
      color: "text-slate-300",
    },
    {
      icon: Target,
      text: "Calibrating Targeting Matrix",
      color: "text-gray-300",
    },
    {
      icon: BarChart3,
      text: "Processing Analytics Engine",
      color: "text-zinc-300",
    },
    {
      icon: Activity,
      text: "Optimizing Performance Core",
      color: "text-slate-200",
    },
    { icon: Users, text: "Mapping User Pathways", color: "text-gray-200" },
    {
      icon: MessageCircle,
      text: "Activating Engagement Protocol",
      color: "text-zinc-200",
    },
  ];

  useEffect(() => {
    const totalDuration = 3000;
    const updateInterval = 30;
    const totalUpdates = totalDuration / updateInterval;
    const progressIncrement = 100 / totalUpdates;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(prev + progressIncrement, 100);

        const stepIndex = Math.floor((newProgress / 100) * loadingSteps.length);
        setCurrentStep(Math.min(stepIndex, loadingSteps.length - 1));

        if (newProgress >= 100) {
          setIsComplete(true);
          clearInterval(interval);
          return 100;
        }

        return newProgress;
      });
    }, updateInterval);

    return () => clearInterval(interval);
  }, [loadingSteps.length]);

  const MetallicOrb: React.FC<{
    size: string;
    position: string;
    delay: number;
  }> = ({ size, position, delay }) => (
    <div
      className={`absolute ${position} ${size} rounded-full opacity-15 animate-pulse`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: "2s", // Faster animation
        background:
          "radial-gradient(circle at 30% 30%, #71717a, #27272a, #09090b)",
        boxShadow:
          "inset 0 0 40px rgba(255,255,255,0.1), 0 0 40px rgba(0,0,0,0.4)",
      }}
    />
  );

  const FloatingTechIcon: React.FC<FloatingTechIconProps> = ({
    Icon,
    delay,
    position,
  }) => (
    <div
      className={`absolute ${position} opacity-25 animate-bounce`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: "2.5s",
        filter: "drop-shadow(0 0 8px rgba(255,255,255,0.1))",
      }}
    >
      <Icon size={18} className="text-zinc-400" />
    </div>
  );

  return (
    <div className="min-h-screen  flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <MetallicOrb size="w-80 h-80" position="top-10 -left-16" delay={0} />
        <MetallicOrb size="w-72 h-72" position="top-32 -right-16" delay={1} />
        <MetallicOrb size="w-56 h-56" position="-bottom-8 left-1/3" delay={2} />

        <div
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-400 to-transparent opacity-40 animate-pulse"
          style={{ animationDuration: "2s" }}
        />
      </div>

      <FloatingTechIcon Icon={Target} delay={0} position="top-16 left-16" />
      <FloatingTechIcon
        Icon={TrendingUp}
        delay={0.8}
        position="top-28 right-20"
      />
      <FloatingTechIcon
        Icon={BarChart3}
        delay={1.6}
        position="bottom-28 left-32"
      />
      <FloatingTechIcon
        Icon={Globe}
        delay={1.2}
        position="bottom-20 right-16"
      />
      <FloatingTechIcon Icon={Users} delay={0.4} position="top-1/2 left-10" />
      <FloatingTechIcon Icon={Search} delay={2} position="top-1/2 right-10" />

      <div className="relative z-10 text-center max-w-lg mx-auto px-6">
        <div className="mb-8">
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-xl mb-5 relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #27272a, #09090b)",
              boxShadow: `
                inset 0 0 25px rgba(255,255,255,0.1),
                0 6px 24px rgba(0,0,0,0.7),
                0 0 0 1px rgba(255,255,255,0.1)
              `,
            }}
          >
            <Zap size={40} className="text-zinc-300 relative z-10" />
            <div
              className="absolute inset-0 opacity-15"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), transparent)",
              }}
            />
          </div>
          <h1
            className="text-5xl font-bold mb-3 bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-500 bg-clip-text text-transparent "
            style={{
              textShadow: "0 0 25px rgba(255,255,255,0.1)",
              letterSpacing: "-0.01em",
            }}
          >
            <span className="text-primary font-playwrite glow-text">NEXUS</span>
          </h1>
          <p className="text-zinc-400 text-base font-light tracking-wide uppercase">
            Digital Marketing Engine
          </p>
        </div>

        <div className="mb-8">
          <div
            className="flex items-center justify-center mb-4 w-16 h-16 mx-auto rounded-full relative"
            style={{
              background: "radial-gradient(circle, #18181b, #09090b)",
              boxShadow: `
                inset 0 0 15px rgba(0,0,0,0.8),
                0 0 30px rgba(255,255,255,0.04),
                0 0 0 1px rgba(255,255,255,0.1)
              `,
            }}
          >
            {React.createElement(loadingSteps[currentStep].icon, {
              size: 28,
              className: `animate-pulse relative z-10 text-primary`,
            })}
            <div
              className="absolute inset-0 rounded-full opacity-25 animate-spin"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.1), transparent)",
                animationDuration: "2s",
              }}
            />
          </div>
          <p className="text-zinc-200 text-lg font-medium mb-2 tracking-wide">
            {loadingSteps[currentStep].text}
          </p>
          <p className="text-zinc-500 text-xs tracking-wider">
            [{progress.toFixed(0)}%] PROCESSING...
          </p>
        </div>

        <div className="mb-8">
          <div
            className="w-full h-1.5 rounded-full relative overflow-hidden border"
            style={{
              background: "linear-gradient(90deg, #09090b, #18181b, #09090b)",
              borderColor: "rgba(255,255,255,0.08)",
              boxShadow: "inset 0 0 8px rgba(0,0,0,0.8)",
            }}
          >
            <div
              className="h-full transition-all duration-100 ease-out relative"
              style={{
                width: `${progress}%`,
                background:
                  "linear-gradient(90deg, #52525b, #a1a1aa, #d4d4d8, #a1a1aa, #52525b)",
                boxShadow: "0 0 15px rgba(255,255,255,0.25)",
              }}
            >
              <div
                className="absolute inset-0 animate-pulse"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                  animationDuration: "1.5s",
                }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-8">
          {loadingSteps.map((step, index) => (
            <div
              key={index}
              className={`p-3 rounded-md transition-all duration-200 relative overflow-hidden border ${
                index <= currentStep
                  ? "border-zinc-600 shadow-md"
                  : "border-zinc-800"
              }`}
              style={{
                background:
                  index <= currentStep
                    ? "linear-gradient(145deg, #18181b, #09090b)"
                    : "linear-gradient(145deg, #0a0a0a, #000000)",
                boxShadow:
                  index <= currentStep
                    ? "inset 0 0 15px rgba(255,255,255,0.04), 0 2px 15px rgba(0,0,0,0.4)"
                    : "inset 0 0 15px rgba(0,0,0,0.5)",
              }}
            >
              {React.createElement(step.icon, {
                size: 20,
                className:
                  index <= currentStep ? "text-primary" : "text-zinc-700",
              })}
              {index <= currentStep && (
                <div
                  className="absolute inset-0 opacity-15 animate-pulse"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(255,255,255,0.1), transparent)",
                    animationDuration: "1s",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {isComplete && (
          <div className="animate-fadeIn">
            <div
              className="flex items-center justify-center mb-4 w-14 h-14 mx-auto rounded-full bg-primary"
              style={{
                boxShadow:
                  "0 0 30px rgba(34, 197, 94, 0.4), inset 0 0 15px rgba(255,255,255,0.2)",
              }}
            >
              <Zap size={24} className="text-black animate-pulse" />
            </div>
            <p className=" text-xl font-bold mb-2 tracking-wide text-primary">
              SYSTEM ONLINE
            </p>
            <p className="text-zinc-400 text-xs tracking-wider">
              NEXUS ENGINE READY FOR DEPLOYMENT
            </p>
          </div>
        )}

        {!isComplete && (
          <div className="flex justify-center space-x-2">
            {[0, 1, 2, 3].map((dot) => (
              <div
                key={dot}
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{
                  background: "linear-gradient(45deg, #52525b, #a1a1aa)",
                  animationDelay: `${dot * 0.15}s`,
                  animationDuration: "1s",
                  boxShadow: "0 0 8px rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default FastMetallicMarketingLoader;
