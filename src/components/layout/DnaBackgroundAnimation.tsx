import React from 'react';

// Component to generate the DNA background animation
const DnaBackgroundAnimation = () => {
  // Unique ID for the SVG pattern
  const PATTERN_ID = "dna-helix-pattern";

  // Configuration for the DNA helix pattern
  // These values define the appearance and density of the DNA strands.
  const PATTERN_WIDTH = 70;      // Width of one repeating unit of the pattern (in pixels)
  const PATTERN_HEIGHT = 180;    // Height of one full turn of the helix (and the pattern tile)
  const HELIX_RADIUS = 20;       // Radius of the DNA helix, affecting its width
  const CENTER_X = PATTERN_WIDTH / 2; // Center X-coordinate for the helix within the pattern tile
  
  const NUM_SEGMENTS_PER_TURN = 24; // Number of line segments used to draw each strand of the helix per turn. More segments = smoother curve.
  const NUM_RUNGS_PER_TURN = 12;    // Number of rungs (connections) between the two strands per turn.

  // Colors chosen for a modern, sleek, and minimalist design
  const strandColor = "#76ABAE"; // A muted, sophisticated teal for the DNA strands
  const rungColor = "#A6C5C7";   // A lighter, complementary shade for the rungs
  const pageBackgroundColor = "#F0F4F8"; // A very light, neutral background (e.g., off-white or pale cool gray)

  // --- Generate points for the DNA strands ---
  // These arrays will store the (x, y) coordinates for drawing the two helix strands.
  const strand1Points = [];
  const strand2Points = [];

  // Loop to calculate points along one full turn of the helix
  for (let i = 0; i <= NUM_SEGMENTS_PER_TURN; i++) {
    // Calculate the y-coordinate for the current segment, progressing down the pattern height
    const y = (i / NUM_SEGMENTS_PER_TURN) * PATTERN_HEIGHT;
    // Calculate the angle for the helix equation (t in parametric form, representing progress around the helix axis)
    const angle = (y / PATTERN_HEIGHT) * 2 * Math.PI;

    // Calculate x-coordinate for the first strand using a cosine function for the helical shape
    const x1 = CENTER_X + HELIX_RADIUS * Math.cos(angle);
    strand1Points.push({ x: x1, y: y });

    // Calculate x-coordinate for the second strand, phase-shifted by PI (180 degrees) from the first strand
    const x2 = CENTER_X + HELIX_RADIUS * Math.cos(angle + Math.PI);
    strand2Points.push({ x: x2, y: y });
  }

  // Convert point arrays into SVG path data strings (e.g., "M x1 y1 L x2 y2 ...")
  // .toFixed(2) keeps the SVG data cleaner by limiting decimal places.
  const path1Data = strand1Points.map((p, i) => (i === 0 ? `M ${p.x.toFixed(2)} ${p.y.toFixed(2)}` : `L ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)).join(" ");
  const path2Data = strand2Points.map((p, i) => (i === 0 ? `M ${p.x.toFixed(2)} ${p.y.toFixed(2)}` : `L ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)).join(" ");

  // --- Generate data for the rungs connecting the strands ---
  const rungs = [];
  // Loop to create evenly spaced rungs
  for (let i = 0; i < NUM_RUNGS_PER_TURN; i++) {
    // Distribute rungs evenly along the y-axis, offset to appear centered within segments
    const y = ((i + 0.5) / NUM_RUNGS_PER_TURN) * PATTERN_HEIGHT;
    const angle = (y / PATTERN_HEIGHT) * 2 * Math.PI;

    // Calculate x-coordinates for the rung endpoints on each strand at the current y position
    const x1 = CENTER_X + HELIX_RADIUS * Math.cos(angle);
    const x2 = CENTER_X + HELIX_RADIUS * Math.cos(angle + Math.PI);
    rungs.push({ x1: x1.toFixed(2), y1: y.toFixed(2), x2: x2.toFixed(2), y2: y.toFixed(2) });
  }

  // --- DNA Segment Sub-Component ---
  // This functional component renders one instance of the DNA helix segment (strands and rungs).
  const DnaSegment = ({ yOffset = 0 }) => (
    <g transform={`translate(0, ${yOffset})`}>
      <path d={path1Data} stroke={strandColor} strokeWidth="2" fill="none" />
      <path d={path2Data} stroke={strandColor} strokeWidth="2" fill="none" />
      {rungs.map((rung, i) => (
        <line 
          key={`rung-${yOffset}-${i}`} // Unique key for each rung line
          x1={rung.x1} y1={rung.y1} 
          x2={rung.x2} y2={rung.y2} 
          stroke={rungColor} strokeWidth="1.2" 
        />
      ))}
    </g>
  );

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: pageBackgroundColor,
        zIndex: -10,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      <svg 
        width="100%" 
        height="100%" 
      >
        <defs>
          <pattern
            id={PATTERN_ID}
            patternUnits="userSpaceOnUse"
            width={PATTERN_WIDTH}
            height={PATTERN_HEIGHT}
          >
            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                values={`0 0; 0 ${-PATTERN_HEIGHT}`}
                dur="20s"
                repeatCount="indefinite"
                calcMode="linear"
              />
              <DnaSegment yOffset={0} />
              <DnaSegment yOffset={PATTERN_HEIGHT} />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${PATTERN_ID})`} />
      </svg>
    </div>
  );
};

export default DnaBackgroundAnimation;
