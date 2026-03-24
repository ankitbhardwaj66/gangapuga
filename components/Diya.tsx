"use client";

export default function Diya({ className = "" }: { className?: string }) {
  return (
    <div className={`diya-container ${className}`}>
      {/* Glow */}
      <div className="diya-glow" />

      {/* Flame */}
      <div className="diya-flame-wrap">
        <div className="diya-flame" />
        <div className="diya-flame diya-flame-inner" />
      </div>

      {/* Wick */}
      <div className="diya-wick" />

      {/* Lamp body */}
      <div className="diya-body">
        <div className="diya-oil" />
      </div>

      {/* Base */}
      <div className="diya-base" />
    </div>
  );
}
