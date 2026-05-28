import CaseStudyLayout from '@/components/case-study/CaseStudyLayout';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import SectionBlock from '@/components/case-study/SectionBlock';

const sections = [
  { id: 'overview', title: 'Overview' },
  { id: 'problem', title: 'Problem' },
  { id: 'solution', title: 'Solution' },
  { id: 'architecture', title: 'Architecture' },
  { id: 'tech-stack', title: 'Tech Stack & Decisions' },
  { id: 'features', title: 'Core Features' },
  { id: 'challenges', title: 'Engineering Challenges' },
  { id: 'security', title: 'Security & Reliability' },
  { id: 'performance', title: 'Performance & Impact' },
  { id: 'learnings', title: 'Key Learnings' },
  { id: 'future', title: 'Future Improvements' },
];

export default function SketchFlowAICaseStudy() {
  return (
    <CaseStudyLayout sections={sections}>
      <CaseStudyHero
        title="SketchFlow AI"
        description="A high-fidelity creative IDE designed for the founder-grade development era, merging physical architectural drafting layouts with direct real-time React compilation."
        technologies={[
          'Next.js 14',
          'TypeScript',
          'Supabase',
          'HTML5 Canvas',
          'Vanilla CSS',
          'WebSockets',
          'React Hooks',
          'SVG Filters',
        ]}
        liveUrl="https://vibedraw18.vercel.app"
        githubUrl="https://github.com/ashutoshpandey18/MoodSwing"
        tag="AI Creative IDE"
        date="MAY 2026"
      />

      <SectionBlock id="overview" title="Overview">
        <p>
          SketchFlow AI (internally known as MoodSwing) is a visionary creative workspace designed to close the gap between visual drafting and functional frontend code. Created for fast-moving founders and designers, the platform implements a concept called <strong>Zero-Latency Spatial Mapping</strong>.
        </p>
        <p>
          Whatever a user drafts in the physical felt-textured <strong>Sketch Deck</strong> is instantly interpreted as structural intent, computed for responsive layout constraints, and compiled into a clean semantic React application inside the live preview pane.
        </p>
        <p>
          The system maintains interactive performance with spatial rendering latency kept <strong>under 45ms</strong>, enabling a completely fluid, frictionless visual-to-code iteration loop.
        </p>
      </SectionBlock>

      <SectionBlock id="problem" title="Problem">
        <p>
          Modern product development suffers from a massive hand-off friction between designers and engineers:
        </p>
        <ul>
          <li>
            <strong>Disconnected Prototyping:</strong> Design tools like Figma create visual mocks, but don't understand layout logic. Developers must re-write everything from scratch, losing design details in translation.
          </li>
          <li>
            <strong>Bloated Absolute Code Generators:</strong> Traditional "design-to-code" tools output absolute-positioned absolute divs, producing unmaintainable code that breaks on responsive screens.
          </li>
          <li>
            <strong>High-Latency Iterations:</strong> Changing a layout means going back to the design board, exporting assets, updating CSS, and redeploying — a loop that takes hours.
          </li>
          <li>
            <strong>Lacking Tactile Feeling:</strong> Digital design tools feel sterile, missing the raw, creative energy of physical architectural drafting grids.
          </li>
        </ul>
        <p>
          The challenge was to build a spatial engine that could translate raw drawing paths, hand-drawn boxes, and sketch notes into clean, structured, responsive CSS Flexbox/Grid systems in real time, without losing the physical "felt-pen" aesthetic.
        </p>
      </SectionBlock>

      <SectionBlock id="solution" title="Solution">
        <p>
          I architected SketchFlow AI from the ground up, implementing three foundational core systems:
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">1. Felt-Texture Sketch Deck Engine</h3>
        <p>
          Developed a custom canvas sketching interface backed by custom inline SVG wobble filters that give raw vector paths a beautiful, hand-drawn felt-pen look. Users draw naturally, enjoying the physical drafting feel while the underlying engine tracks precise spatial coordinates.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">2. Zero-Latency Spatial Layout Compiler</h3>
        <p>
          Built a real-time layout inference engine that avoids absolute positioning. The compiler analyzes the bounding boxes of drawing paths, groups them into parent containers using spatial overlap heuristics, and determines their structural relationships (nested rows, columns, grids) to output semantic responsive code.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">3. Collaborative Multi-User System</h3>
        <p>
          Configured a real-time collaboration layer complete with custom cursor syncing and a video huddle sidebar. The workspace state is fully persistent via Supabase, letting teams jump into the drafting deck together to design and compile apps on the fly.
        </p>
      </SectionBlock>

      <SectionBlock id="architecture" title="Architecture">
        <p>
          The platform follows a highly modular, reactive **unidirectional architecture** designed to handle high-frequency drawing updates without blocking the browser thread:
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Tactile Sketch Deck (HTML5 Canvas + Touch)</h3>
        <ul>
          <li><strong>Path Rasterization:</strong> Captures high-precision coordinates with sub-pixel smoothing.</li>
          <li><strong>Visual Styling Layer:</strong> Utilizes customized SVG filters for shaky hand-drawn vectors and felt pen bleeding effects.</li>
          <li><strong>Blueprint Overlay:</strong> Renders visual coordinates and grid guides on top of an industrial-chic felt-texture matrix.</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 mb-4">Spatial Compilation Pipeline (TypeScript)</h3>
        <ul>
          <li><strong>Structural Object Inference:</strong> Processes raw vector lines, classifying them into columns, text boxes, buttons, or custom containers.</li>
          <li><strong>Tree Structure Generator:</strong> Sorts elements hierarchically based on boundary coordinates to generate a nested responsive DOM tree.</li>
          <li><strong>Code Compiler:</strong> Direct translation of the DOM tree into clean Tailwind-styled Next.js React components.</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 mb-4">Data Synchronization & Collaboration (Supabase + WebSockets)</h3>
        <ul>
          <li><strong>Supabase Data Store:</strong> Instant syncing of sketch paths, canvas configurations, and metadata snapshots.</li>
          <li><strong>WebSockets:</strong> Ultra-low latency transmission of collaborative mouse pointers and live active video frames.</li>
        </ul>
      </SectionBlock>

      <SectionBlock id="tech-stack" title="Tech Stack & Decisions">
        <h3 className="text-2xl font-bold mt-6 mb-4">Core Technologies</h3>
        <ul>
          <li>
            <strong>Next.js 14 (App Router):</strong> Leverages server-side rendering for landing states while providing clean client-side dynamic routes for interactive project canvases.
          </li>
          <li>
            <strong>Supabase:</strong> Enabled rapid backend setup with robust PostgreSQL data management, instant realtime subscriptions, and bulletproof user session isolation.
          </li>
          <li>
            <strong>TypeScript:</strong> Crucial for maintaining type safety across intricate math calculations, geometry overlays, and nested parent-child spatial trees.
          </li>
          <li>
            <strong>Vanilla CSS & SVG Filters:</strong> Recreated the raw aesthetic of architectural drafting. Native CSS allows flexible felt and carbon grid backdrops without Tailwind performance overhead on canvas renders.
          </li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 mb-4">Key Technical Decisions</h3>
        <ul>
          <li>
            <strong>Spatial Geometry over Heavyweight Vision Models:</strong> Instead of processing the canvas with slow, expensive AI computer vision APIs on every stroke, I built a fast mathematical layout inference engine using 2D geometric grouping algorithms. This achieved sub-15ms parsing speed.
          </li>
          <li>
            <strong>Imperative DOM Syncing via Custom React Hooks:</strong> Controlled re-renders by executing paint operations directly on the Canvas API, bypassing React's virtual DOM reconciliation loop during high-frequency active drafting phases.
          </li>
          <li>
            <strong>Local Storage with Supabase Sync Throttling:</strong> Local drafts sync instantly at 60fps locally, while Supabase commits are debounced to reduce network overhead and ensure smooth multi-user collaboration.
          </li>
        </ul>
      </SectionBlock>

      <SectionBlock id="features" title="Core Features">
        <h3 className="text-2xl font-bold mt-6 mb-4">1. Visual Canvas Drafting Deck</h3>
        <p>
          A felt-textured digital blackboard featuring specialized architectural grids. Users draw shapes, draw buttons, and structure grids using natural felt-pen brushes.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">2. Zero-Latency Live Compiles</h3>
        <p>
          As fast as you draw, the live preview updates. Drawing a rectangle with a text note inside instantly translates to a parent container card with structured typography inside the reactive React preview block.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">3. Collaborative Video Sidebar & Real-Time Presence</h3>
        <p>
          Teams can join the same Workspace, see each other's live cursor positions with active tool pointers, and communicate through a built-in lightweight WebRTC video huddle panel directly inside the workspace sidebar.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">4. Industrial-Chic System Dock</h3>
        <p>
          A felt-textured, desktop-style dock component that lets users adjust canvas layouts, configure active SVG filters, toggle grid alignments, and export assets on the fly.
        </p>
      </SectionBlock>

      <SectionBlock id="challenges" title="Engineering Challenges">
        <h3 className="text-2xl font-bold mt-6 mb-4">1. Eliminating Absolute Positional Layouts</h3>
        <p>
          <strong>Challenge:</strong> Standard digital drawing outputs code with absolute width/height and pixel positions (`left: 232px; top: 120px`), rendering the app completely useless on different screens.
        </p>
        <p>
          <strong>Solution:</strong> Developed a custom spatial grouping algorithm. The engine runs a two-dimensional sweep across all bounding boxes, clustering overlapping blocks, and deciding whether to output flex rows or columns based on alignment thresholds.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">2. High-Frequency Vector Path Performance</h3>
        <p>
          <strong>Challenge:</strong> Syncing complex hand-drawn paths with thousands of coordinate points across collaborative sessions caused severe browser lag.
        </p>
        <p>
          <strong>Solution:</strong> Implemented **Ramer-Douglas-Peucker (RDP)** path simplification to reduce the number of coordinate points by up to 80% without losing visual detail, then buffered and compressed the path payloads before socket transmission.
        </p>
      </SectionBlock>

      <SectionBlock id="security" title="Security & Reliability">
        <h3 className="text-2xl font-bold mt-6 mb-4">Robust Sandboxed Previews</h3>
        <ul>
          <li>
            <strong>Execution Sandboxing:</strong> Preview contents run within isolated iframe boundaries, preventing malicious compiled javascript from accessing secure session tokens or Supabase clients.
          </li>
          <li>
            <strong>Type-Safe Validation:</strong> Zod parser validates all incoming spatial payloads before compiling them into React code.
          </li>
        </ul>
      </SectionBlock>

      <SectionBlock id="performance" title="Performance & Impact">
        <ul>
          <li><strong>&lt;45ms</strong> average drawing-to-compile loop latency</li>
          <li><strong>80% reduction</strong> in coordinate point complexity using path simplification</li>
          <li><strong>Instant prototyping</strong> — taking visual mockups to live frontend pages in seconds</li>
        </ul>
      </SectionBlock>

      <SectionBlock id="future" title="Future Improvements">
        <ul>
          <li><strong>Visual Event Binding:</strong> Attaching dynamic state (e.g. click actions, input forms, state transitions) visually via intuitive node graph overlays on the Sketch Deck.</li>
          <li><strong>Responsive Breakpoint Viewports:</strong> Live multi-screen preview showing mobile, tablet, and desktop side-by-side.</li>
          <li><strong>Export to Production Bundle:</strong> Direct one-click publish to Vercel/Netlify.</li>
        </ul>
      </SectionBlock>
    </CaseStudyLayout>
  );
}
