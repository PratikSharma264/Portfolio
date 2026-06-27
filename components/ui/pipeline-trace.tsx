"use client";

const stages = [
  { label: "query", x: 40 },
  { label: "retrieve", x: 175 },
  { label: "rank", x: 310 },
  { label: "generate", x: 445 },
  { label: "answer", x: 560 },
];

export function PipelineTrace() {
  return (
    <svg
      viewBox="0 0 600 160"
      className="h-auto w-full max-w-md"
      role="img"
      aria-label="Diagram of a retrieval-augmented generation pipeline: query, retrieve, rank, generate, answer"
    >
      <line
        x1={stages[0].x}
        y1="80"
        x2={stages[stages.length - 1].x}
        y2="80"
        stroke="var(--color-border)"
        strokeWidth="1.5"
      />
      <line
        x1={stages[0].x}
        y1="80"
        x2={stages[stages.length - 1].x}
        y2="80"
        stroke="var(--color-amber)"
        strokeWidth="1.5"
        className="dash-flow"
      />

      {stages.map((stage, i) => (
        <g key={stage.label}>
          <circle
            cx={stage.x}
            cy="80"
            r={i === stages.length - 1 ? 7 : 5.5}
            fill={i === stages.length - 1 ? "var(--color-amber)" : "var(--color-surface)"}
            stroke="var(--color-amber)"
            strokeWidth="1.5"
            className={i !== stages.length - 1 ? "pulse-node" : undefined}
            style={{ animationDelay: `${i * 0.3}s` }}
          />
          <text
            x={stage.x}
            y="108"
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="11"
            fill="var(--color-text-lo)"
          >
            {stage.label}
          </text>
        </g>
      ))}

      <text
        x={stages[2].x}
        y="40"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="10"
        fill="var(--color-glacier)"
      >
        failure-mode check
      </text>
      <line
        x1={stages[2].x}
        y1="45"
        x2={stages[2].x}
        y2="73"
        stroke="var(--color-glacier)"
        strokeWidth="1.2"
        strokeDasharray="2 4"
      />
    </svg>
  );
}
