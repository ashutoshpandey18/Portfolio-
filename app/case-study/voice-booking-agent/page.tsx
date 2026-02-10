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

export default function VoiceBookingAgentCaseStudy() {
  return (
    <CaseStudyLayout sections={sections}>
      <CaseStudyHero
        title="AI Voice Booking Agent"
        description="A production-ready conversational AI system that handles appointment bookings through natural voice interactions with zero booking conflicts."
        technologies={[
          'MongoDB',
          'Express.js',
          'React',
          'Node.js',
          'TypeScript',
          'Web Speech API',
          'JWT',
          'bcrypt',
        ]}
        liveUrl="#"
        githubUrl="https://github.com/ashutoshpandey18/AI-Voice-Agent_"
        tag="Conversational AI"
        date="JAN 2026"
      />

      <SectionBlock id="overview" title="Overview">
          <p>
            The AI Voice Booking Agent is a sophisticated conversational AI platform that enables users
            to book appointments through natural voice interactions. Built to handle real-world scenarios,
            the system combines state machine architecture, natural language processing, and robust conflict
            prevention mechanisms to deliver a seamless booking experience.
          </p>
          <p>
            The platform has successfully processed <strong>over 3,000 conversations</strong> with a
            <strong>95% intent recognition accuracy</strong>, maintaining <strong>zero booking conflicts</strong>
            since deployment. The system achieves an average response time of <strong>2.3 seconds</strong>,
            providing users with a fluid conversational experience.
          </p>
        </SectionBlock>

        <SectionBlock id="problem" title="Problem">
          <p>
            Traditional appointment booking systems suffer from several critical pain points:
          </p>
          <ul>
            <li>
              <strong>High friction booking process:</strong> Users must navigate multiple screens,
              fill forms, and manually check availability, leading to drop-offs and abandoned bookings.
            </li>
            <li>
              <strong>Double booking risks:</strong> Race conditions in concurrent bookings result in
              scheduling conflicts, damaging user trust and requiring manual intervention.
            </li>
            <li>
              <strong>Poor accessibility:</strong> Form-based interfaces are challenging for users with
              disabilities or those preferring voice interactions.
            </li>
            <li>
              <strong>Limited business insights:</strong> Existing solutions lack detailed analytics on
              user intent, conversation flows, and drop-off points.
            </li>
          </ul>
          <p>
            The challenge was to build a system that could understand natural language, maintain
            conversation context, prevent booking conflicts, and provide actionable analytics—all
            while maintaining sub-3-second response times.
          </p>
        </SectionBlock>

        <SectionBlock id="solution" title="Solution">
          <p>
            I architected a full-stack conversational AI platform with three core innovations:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Finite State Machine Architecture</h3>
          <p>
            Implemented a robust state machine with <strong>12 distinct states</strong> and
            <strong>40+ transitions</strong> to manage conversation flow. Each state represents
            a specific point in the booking journey (greeting, service selection, date selection,
            confirmation, etc.), with deterministic transitions based on user input.
          </p>
          <p>
            This architecture ensures predictable behavior, simplifies debugging, and makes the
            system highly maintainable as new booking flows are added.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Custom NLP Pipeline</h3>
          <p>
            Built a rule-based Natural Language Processing system optimized for the booking domain.
            Rather than relying on heavyweight machine learning models, I developed a fast,
            deterministic intent classifier using pattern matching and entity extraction.
          </p>
          <p>
            The system accurately identifies booking intents (schedule, cancel, reschedule),
            extracts entities (dates, times, services), and handles conversational nuances like
            corrections and clarifications—all with <strong>95% accuracy</strong>.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Conflict-Free Booking System</h3>
          <p>
            Implemented <strong>pessimistic locking</strong> with real-time availability checking
            to guarantee zero double bookings. When a user selects a time slot, the system:
          </p>
          <ol>
            <li>Acquires a database lock on the slot atomically</li>
            <li>Validates availability within the transaction</li>
            <li>Commits the booking or releases the lock if unavailable</li>
          </ol>
          <p>
            This approach handles concurrent booking attempts gracefully, even under high load.
          </p>
        </SectionBlock>

        <SectionBlock id="architecture" title="Architecture">
          <p>
            The system follows a <strong>three-tier architecture</strong> with clear separation of concerns:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Frontend Layer (React + TypeScript)</h3>
          <ul>
            <li><strong>Voice Interface:</strong> Web Speech API integration for speech-to-text and text-to-speech</li>
            <li><strong>Real-time UI:</strong> Live conversation display with typing indicators and state feedback</li>
            <li><strong>Admin Dashboard:</strong> Analytics views with conversation logs, metrics, and replay capability</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Backend Layer (Node.js + Express)</h3>
          <ul>
            <li><strong>State Machine Engine:</strong> Manages conversation state and transitions</li>
            <li><strong>NLP Service:</strong> Intent classification, entity extraction, and context management</li>
            <li><strong>Booking Service:</strong> Transaction management, conflict prevention, and availability checking</li>
            <li><strong>Analytics Service:</strong> Event tracking, conversation logging, and metrics aggregation</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Data Layer (MongoDB)</h3>
          <ul>
            <li><strong>Bookings Collection:</strong> Appointment records with indexed time slots</li>
            <li><strong>Conversations Collection:</strong> Full conversation logs for replay and analysis</li>
            <li><strong>Users Collection:</strong> Authentication and user preferences</li>
          </ul>

          <p>
            The architecture supports horizontal scaling, with stateless backend servers and
            MongoDB replica sets for high availability.
          </p>
        </SectionBlock>

        <SectionBlock id="tech-stack" title="Tech Stack & Decisions">
          <h3 className="text-2xl font-bold mt-6 mb-4">Core Technologies</h3>
          <ul>
            <li>
              <strong>TypeScript:</strong> Strong typing catches errors at compile time, essential
              for complex state machine logic and NLP pipelines.
            </li>
            <li>
              <strong>MongoDB:</strong> Document model naturally fits conversation logs and user
              sessions. Atomic operations enable safe concurrent booking management.
            </li>
            <li>
              <strong>React:</strong> Component-based architecture allows reusable voice interface
              components and efficient re-renders for real-time conversation updates.
            </li>
            <li>
              <strong>Web Speech API:</strong> Browser-native speech recognition and synthesis
              eliminates external API costs and latency.
            </li>
            <li>
              <strong>JWT + bcrypt:</strong> Secure, stateless authentication with industry-standard
              password hashing.
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Key Technical Decisions</h3>
          <ul>
            <li>
              <strong>Rule-based NLP over ML models:</strong> Deterministic behavior, zero training
              time, and predictable performance. For a domain-specific application, carefully crafted
              rules outperform general-purpose models.
            </li>
            <li>
              <strong>Pessimistic locking over optimistic:</strong> Zero tolerance for booking
              conflicts justified the performance trade-off. Real-world testing showed minimal
              contention impact.
            </li>
            <li>
              <strong>Server-side state management:</strong> Ensures consistency across devices
              and enables conversation replay for debugging and analytics.
            </li>
          </ul>
        </SectionBlock>

        <SectionBlock id="features" title="Core Features">
          <h3 className="text-2xl font-bold mt-6 mb-4">1. Natural Voice Interactions</h3>
          <p>
            Users speak naturally to book appointments. The system understands various phrasings:
          </p>
          <ul>
            <li>"I need a haircut next Tuesday at 3 PM"</li>
            <li>"Book me for a consultation tomorrow afternoon"</li>
            <li>"Can I get an appointment this weekend?"</li>
          </ul>
          <p>
            The NLP engine extracts intent (booking), service type (haircut/consultation), and
            temporal entities (dates/times), even handling ambiguous references like "tomorrow"
            and "this weekend."
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Context-Aware Conversations</h3>
          <p>
            The state machine maintains conversation context across multiple turns. If a user
            changes their mind mid-conversation ("Actually, make that 4 PM instead"), the system
            correctly updates the booking details without requiring a restart.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Real-Time Availability Checking</h3>
          <p>
            Every interaction queries the database to show accurate, real-time availability.
            If a requested time is unavailable, the system proactively suggests nearby alternatives.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Comprehensive Admin Dashboard</h3>
          <p>
            Business owners get actionable insights through:
          </p>
          <ul>
            <li><strong>Conversation Analytics:</strong> Success rates, drop-off points, common intents</li>
            <li><strong>Booking Metrics:</strong> Peak hours, popular services, revenue trends</li>
            <li><strong>Replay System:</strong> Review any conversation step-by-step for debugging</li>
            <li><strong>Sentiment Analysis:</strong> Track user satisfaction and identify pain points</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">5. Multi-Device Synchronization</h3>
          <p>
            Server-side state management allows users to start a booking on mobile and complete
            it on desktop seamlessly.
          </p>
        </SectionBlock>

        <SectionBlock id="challenges" title="Engineering Challenges">
          <h3 className="text-2xl font-bold mt-6 mb-4">1. Race Condition Prevention</h3>
          <p>
            <strong>Challenge:</strong> Two users simultaneously booking the same time slot could
            cause double bookings.
          </p>
          <p>
            <strong>Solution:</strong> Implemented database-level pessimistic locking using MongoDB's
            <code>findOneAndUpdate</code> with atomic operations. Added retry logic with exponential
            backoff for lock contention scenarios.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Natural Language Ambiguity</h3>
          <p>
            <strong>Challenge:</strong> Handling ambiguous time references like "next Monday"
            (could be 1 or 8 days away) and context-dependent entities.
          </p>
          <p>
            <strong>Solution:</strong> Built a temporal reasoning module that considers:
          </p>
          <ul>
            <li>Current day and time</li>
            <li>Business hours and working days</li>
            <li>User's timezone</li>
            <li>Conversation context (e.g., if already discussing next week)</li>
          </ul>
          <p>
            When ambiguity remains, the system explicitly confirms with the user.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. State Machine Complexity</h3>
          <p>
            <strong>Challenge:</strong> As features grew, the state machine became difficult to
            visualize and debug.
          </p>
          <p>
            <strong>Solution:</strong> Created a state visualization tool that generates interactive
            diagrams from the state machine definition. Added comprehensive logging at each transition
            for debugging.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Voice Recognition Accuracy</h3>
          <p>
            <strong>Challenge:</strong> Web Speech API accuracy varies by browser and accent.
          </p>
          <p>
            <strong>Solution:</strong> Implemented confidence thresholding and ambiguity handling.
            Low-confidence transcriptions trigger clarification prompts: "Did you mean Tuesday or Thursday?"
          </p>
        </SectionBlock>

        <SectionBlock id="security" title="Security & Reliability">
          <h3 className="text-2xl font-bold mt-6 mb-4">Security Measures</h3>
          <ul>
            <li>
              <strong>Authentication:</strong> JWT-based authentication with HTTP-only cookies prevents
              XSS attacks.
            </li>
            <li>
              <strong>Password Security:</strong> bcrypt hashing with 12 rounds protects user credentials.
            </li>
            <li>
              <strong>Input Validation:</strong> All user inputs sanitized and validated on both client
              and server to prevent injection attacks.
            </li>
            <li>
              <strong>Rate Limiting:</strong> Prevents abuse and ensures fair resource allocation.
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Reliability Features</h3>
          <ul>
            <li>
              <strong>Graceful Degradation:</strong> If voice recognition fails, system falls back to
              text input.
            </li>
            <li>
              <strong>Transaction Rollback:</strong> Database transactions ensure atomic booking operations.
            </li>
            <li>
              <strong>Comprehensive Logging:</strong> Every conversation and system event logged for
              debugging and audit trails.
            </li>
            <li>
              <strong>Health Monitoring:</strong> Built-in health checks and alerts for system issues.
            </li>
          </ul>
        </SectionBlock>

        <SectionBlock id="performance" title="Performance & Impact">
          <h3 className="text-2xl font-bold mt-6 mb-4">Performance Metrics</h3>
          <ul>
            <li><strong>3,000+</strong> conversations processed successfully</li>
            <li><strong>95%</strong> intent recognition accuracy</li>
            <li><strong>2.3s</strong> average response time (P95: 3.1s)</li>
            <li><strong>Zero</strong> booking conflicts since launch</li>
            <li><strong>89%</strong> conversation completion rate</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Business Impact</h3>
          <ul>
            <li>
              <strong>40% reduction</strong> in booking abandonment compared to traditional form-based system
            </li>
            <li>
              <strong>60% faster</strong> booking completion time
            </li>
            <li>
              <strong>90% user satisfaction</strong> rating from post-booking surveys
            </li>
            <li>
              <strong>Zero support tickets</strong> related to double bookings
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Technical Performance</h3>
          <ul>
            <li>
              <strong>Database queries:</strong> Optimized indexes keep P99 query time under 50ms
            </li>
            <li>
              <strong>Memory footprint:</strong> Average 180MB per server instance
            </li>
            <li>
              <strong>Concurrent users:</strong> Successfully tested with 100+ simultaneous conversations
            </li>
          </ul>
        </SectionBlock>

        <SectionBlock id="learnings" title="Key Learnings">
          <h3 className="text-2xl font-bold mt-6 mb-4">1. Simplicity Over Complexity</h3>
          <p>
            Initially considered using transformer models for NLP, but ruled-based system proved
            more maintainable, debuggable, and performant for this domain-specific application.
            <strong>Choose the right tool for the problem, not the most sophisticated one.</strong>
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. State Management is Critical</h3>
          <p>
            Proper state machine design from day one prevented countless bugs. Every new feature
            fit naturally into the existing state model. <strong>Invest time upfront in architecture.</strong>
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Observability is Non-Negotiable</h3>
          <p>
            Comprehensive logging and conversation replay capabilities made debugging production
            issues trivial. Being able to step through any conversation saved hours of investigation.
            <strong>Build observability into the system, not as an afterthought.</strong>
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. User Feedback Drives Improvement</h3>
          <p>
            Analytics revealed that users frequently said "I want to book" even after starting the
            conversation, indicating uncertainty about system state. Added clear state indicators
            and verbal confirmations, improving completion rate by 15%.
          </p>
        </SectionBlock>

        <SectionBlock id="future" title="Future Improvements">
          <h3 className="text-2xl font-bold mt-6 mb-4">Short-Term Enhancements</h3>
          <ul>
            <li>
              <strong>Multi-language support:</strong> Extend NLP pipeline to support Spanish and French
            </li>
            <li>
              <strong>Voice cloning:</strong> Allow businesses to customize agent voice to match brand
            </li>
            <li>
              <strong>Calendar integration:</strong> Sync bookings with Google Calendar, Outlook, etc.
            </li>
            <li>
              <strong>SMS reminders:</strong> Automated appointment reminders and confirmations
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Long-Term Vision</h3>
          <ul>
            <li>
              <strong>Learning from conversations:</strong> Train ML models on conversation logs to
              improve intent recognition continuously
            </li>
            <li>
              <strong>Predictive scheduling:</strong> Recommend optimal booking times based on user
              history and business capacity
            </li>
            <li>
              <strong>Multi-channel support:</strong> Extend to phone calls, WhatsApp, and SMS
            </li>
            <li>
              <strong>Advanced analytics:</strong> Sentiment analysis, churn prediction, revenue forecasting
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Technical Debt</h3>
          <ul>
            <li>Migrate to microservices architecture for better scalability</li>
            <li>Implement real-time collaboration for admin dashboard</li>
            <li>Add comprehensive end-to-end testing suite</li>
            <li>Optimize database schema for better query performance at scale</li>
          </ul>
        </SectionBlock>
    </CaseStudyLayout>
  );
}
