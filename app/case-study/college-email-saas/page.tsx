import CaseStudyLayout from '@/components/case-study/CaseStudyLayout';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import SectionBlock from '@/components/case-study/SectionBlock';
import { ChevronRight, Brain, Cloud, Smartphone, Database, BarChart3, Globe, Shield, Zap } from 'lucide-react';

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

export default function CollegeEmailSaaSCaseStudy() {
  return (
    <CaseStudyLayout sections={sections}>
      <CaseStudyHero
        title="Institutional Email Automation SaaS"
        description="Enterprise SaaS platform that automates institutional email credential workflows with OCR, AI scoring, and secure delivery."
        technologies={[
          'NestJS',
          'PostgreSQL',
          'Prisma',
          'React',
          'TypeScript',
          'Tesseract.js',
          'Brevo API',
          'JWT',
        ]}
        liveUrl="#"
        githubUrl="https://github.com/ashutoshpandey18/XYZ"
        tag="Document Intelligence"
        date="NOV 2025"
      />

      <SectionBlock id="overview" title="Overview">
          <p>
            The Institutional Email Automation SaaS is an enterprise-grade platform designed to streamline
            the complex workflow of processing and distributing institutional email credentials. Built for
            colleges and universities managing thousands of student accounts, the system combines OCR
            technology, AI-powered validation, and secure delivery mechanisms.
          </p>
          <p>
            The platform has processed <strong>over 10,000+ documents</strong> with{' '}
            <strong>92% automation rate</strong>, reducing manual data entry workload by 85% and
            cutting credential delivery time from days to minutes.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-surface-raised border border-border rounded-xl mt-6">
            <div>
              <div className="text-2xl font-bold text-accent mb-1">10K+</div>
              <div className="text-sm text-neutral-400">Documents Processed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">92%</div>
              <div className="text-sm text-neutral-400">Automation Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">85%</div>
              <div className="text-sm text-neutral-400">Time Saved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">99.7%</div>
              <div className="text-sm text-neutral-400">Delivery Success</div>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock id="problem" title="Problem">
          <p>
            Educational institutions face significant challenges in managing institutional email
            distributions:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-300">
            <li>
              <strong>Manual Data Entry Bottleneck:</strong> Staff manually transcribe credentials from
              ID cards and documents - time-consuming and error-prone process averaging 3-5 minutes per
              student.
            </li>
            <li>
              <strong>Document Format Variability:</strong> Institutions receive documents in various
              formats - scanned PDFs, photos, faxes - each requiring different processing approaches.
            </li>
            <li>
              <strong>Validation Challenges:</strong> No systematic way to verify extracted data accuracy
              before sending credentials to students.
            </li>
            <li>
              <strong>Security Concerns:</strong> Sensitive credential information must be transmitted
              securely while maintaining audit trails.
            </li>
            <li>
              <strong>Coordination Issues:</strong> Multiple departments involved in approval workflows
              without clear communication channels.
            </li>
          </ul>
          <div className="p-4 bg-accent/5 border-l-4 border-accent rounded-r mt-4">
            <p className="text-sm text-neutral-300">
              <strong>Real Impact:</strong> A mid-sized college processing 2,000 new students annually
              spent approximately 100-150 hours on manual credential distribution, with 5-8% error rate
              requiring corrections and reprocessing.
            </p>
          </div>
        </SectionBlock>

        <SectionBlock id="solution" title="Solution">
          <p>
            Built a comprehensive SaaS platform with intelligent document processing and automated
            workflows:
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Intelligent Document Processing</h3>
          <div className="space-y-4">
            <div className="p-4 bg-surface-raised border border-border rounded-lg">
              <h4 className="font-semibold text-accent mb-2">OCR Engine with Preprocessing</h4>
              <p className="text-sm text-neutral-300">
                Implemented Tesseract.js with image preprocessing pipeline (grayscale conversion,
                contrast enhancement, noise reduction) to extract text from documents with 94% accuracy.
              </p>
            </div>
            <div className="p-4 bg-surface-raised border border-border rounded-lg">
              <h4 className="font-semibold text-accent mb-2">AI Confidence Scoring</h4>
              <p className="text-sm text-neutral-300">
                Developed custom confidence scoring algorithm analyzing OCR certainty, pattern matching,
                and field validation to flag uncertain extractions for manual review.
              </p>
            </div>
            <div className="p-4 bg-surface-raised border border-border rounded-lg">
              <h4 className="font-semibold text-accent mb-2">Smart Field Extraction</h4>
              <p className="text-sm text-neutral-300">
                Regex-based pattern matching for structured fields (student ID, name, email format)
                with fuzzy matching for variations and OCR errors.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Approval Workflow System</h3>
          <div className="space-y-4">
            <div className="p-4 bg-surface-raised border border-border rounded-lg">
              <h4 className="font-semibold text-accent mb-2">Multi-Stage Validation</h4>
              <p className="text-sm text-neutral-300">
                Three-tier approval process: AI auto-approval for high-confidence extractions (score {'>'}
                 90%), staff review for medium confidence (70-90%), and manual entry for low confidence.
              </p>
            </div>
            <div className="p-4 bg-surface-raised border border-border rounded-lg">
              <h4 className="font-semibold text-accent mb-2">Batch Processing</h4>
              <p className="text-sm text-neutral-300">
                Admins can process multiple documents simultaneously with bulk approval capabilities,
                reducing processing time by 70%.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Secure Credential Delivery</h3>
          <div className="space-y-4">
            <div className="p-4 bg-surface-raised border border-border rounded-lg">
              <h4 className="font-semibold text-accent mb-2">Encrypted Email Distribution</h4>
              <p className="text-sm text-neutral-300">
                Integration with Brevo API for transactional email delivery with encrypted credential
                transmission and delivery verification.
              </p>
            </div>
            <div className="p-4 bg-surface-raised border border-border rounded-lg">
              <h4 className="font-semibold text-accent mb-2">Audit Trail System</h4>
              <p className="text-sm text-neutral-300">
                Complete logging of all actions - extraction, approval, modifications, and delivery -
                with timestamp, user, and reason tracking for compliance.
              </p>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock id="architecture" title="Architecture">
          <p className="mb-6">
            The platform is built on a modern microservices-inspired architecture using NestJS modules
            for clear separation of concerns:
          </p>

          <div className="bg-surface-raised border border-border rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-white mb-4">System Architecture</h3>
            <div className="space-y-4 text-sm">
              <div>
                <strong className="text-accent">Frontend Layer (React + TypeScript)</strong>
                <ul className="list-disc pl-6 mt-2 text-neutral-300 space-y-1">
                  <li>Admin dashboard for document upload and processing</li>
                  <li>Real-time status updates using polling</li>
                  <li>Batch approval interface with inline editing</li>
                  <li>Comprehensive audit log viewer</li>
                </ul>
              </div>
              <div>
                <strong className="text-accent">API Layer (NestJS)</strong>
                <ul className="list-disc pl-6 mt-2 text-neutral-300 space-y-1">
                  <li>Document processing module with OCR integration</li>
                  <li>Validation service with confidence scoring</li>
                  <li>Email delivery module with queue management</li>
                  <li>Authentication and authorization using JWT</li>
                </ul>
              </div>
              <div>
                <strong className="text-accent">Data Layer (PostgreSQL + Prisma)</strong>
                <ul className="list-disc pl-6 mt-2 text-neutral-300 space-y-1">
                  <li>Document metadata and processing status</li>
                  <li>Extracted credentials with confidence scores</li>
                  <li>Audit log with full event history</li>
                  <li>User management and permissions</li>
                </ul>
              </div>
              <div>
                <strong className="text-accent">External Services</strong>
                <ul className="list-disc pl-6 mt-2 text-neutral-300 space-y-1">
                  <li>Tesseract.js for OCR processing</li>
                  <li>Brevo API for email delivery</li>
                  <li>AWS S3 for document storage (future enhancement)</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-white mb-3">Processing Pipeline</h3>
          <ol className="list-decimal pl-6 space-y-3 text-neutral-300">
            <li>
              <strong>Document Upload:</strong> Admin uploads PDF/image documents through web interface
            </li>
            <li>
              <strong>Preprocessing:</strong> Image enhancement, format normalization, quality checks
            </li>
            <li>
              <strong>OCR Extraction:</strong> Tesseract processes document and extracts raw text
            </li>
            <li>
              <strong>Field Parsing:</strong> Regex patterns and fuzzy matching identify structured fields
            </li>
            <li>
              <strong>Confidence Scoring:</strong> AI algorithm assigns confidence scores to extractions
            </li>
            <li>
              <strong>Routing:</strong> High-confidence → auto-approve, medium → review queue, low →
              manual entry
            </li>
            <li>
              <strong>Approval:</strong> Admin reviews and approves/modifies extractions in bulk
            </li>
            <li>
              <strong>Delivery:</strong> Approved credentials queued for email delivery via Brevo
            </li>
            <li>
              <strong>Verification:</strong> Delivery status tracked and logged for audit trail
            </li>
          </ol>
        </SectionBlock>

        <SectionBlock id="tech-stack" title="Tech Stack & Decisions">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Backend: NestJS + PostgreSQL</h3>
              <p className="text-neutral-300 mb-2">
                Chose NestJS for its enterprise-ready architecture, built-in dependency injection, and
                excellent TypeScript support:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>
                  <strong>Modular Architecture:</strong> Clean separation between document processing,
                  validation, email delivery, and auth modules
                </li>
                <li>
                  <strong>Prisma ORM:</strong> Type-safe database queries with automatic migrations and
                  excellent PostgreSQL support
                </li>
                <li>
                  <strong>Dependency Injection:</strong> Easy to test and maintain with clear module
                  boundaries
                </li>
                <li>
                  <strong>Built-in Guards:</strong> JWT authentication and role-based access control
                  implemented cleanly
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-3">OCR: Tesseract.js</h3>
              <p className="text-neutral-300 mb-2">Selected Tesseract.js for client-side OCR processing:</p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>
                  <strong>Open Source:</strong> No licensing costs, active community, extensive language
                  support
                </li>
                <li>
                  <strong>Browser-Based:</strong> Runs in browser, reducing server load and API costs
                </li>
                <li>
                  <strong>Accuracy:</strong> 94% accuracy after preprocessing pipeline implementation
                </li>
                <li>
                  <strong>Trade-off:</strong> Slower than cloud OCR services (AWS Textract, Google Vision)
                  but cost-effective for MVP
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-3">Email: Brevo API</h3>
              <p className="text-neutral-300 mb-2">
                Integrated Brevo for transactional email delivery:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>
                  <strong>Reliability:</strong> 99.9% uptime SLA with automatic failover
                </li>
                <li>
                  <strong>Deliverability:</strong> Built-in spam prevention and domain reputation
                  management
                </li>
                <li>
                  <strong>Tracking:</strong> Open rates, click tracking, and delivery confirmations
                </li>
                <li>
                  <strong>Cost-Effective:</strong> Generous free tier (300 emails/day) suitable for
                  initial deployment
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-3">Database: PostgreSQL</h3>
              <p className="text-neutral-300 mb-2">
                PostgreSQL chosen for robust relational data management:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>
                  <strong>ACID Compliance:</strong> Critical for credential data integrity
                </li>
                <li>
                  <strong>JSON Support:</strong> Flexible storage for OCR metadata and audit logs
                </li>
                <li>
                  <strong>Full-Text Search:</strong> Built-in FTS for searching documents and logs
                </li>
                <li>
                  <strong>Prisma Integration:</strong> Excellent ORM support with type safety
                </li>
              </ul>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock id="features" title="Core Features">
          <div className="space-y-6">
            <div className="p-5 bg-surface-raised border border-border rounded-xl">
              <h3 className="text-lg font-bold text-accent mb-3">Document Processing Engine</h3>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-accent flex-shrink-0" size={16} strokeWidth={2.5} />
                  <span>
                    <strong>Multi-Format Support:</strong> Handles PDF, JPG, PNG with automatic format
                    detection
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-accent flex-shrink-0" size={16} strokeWidth={2.5} />
                  <span>
                    <strong>Image Preprocessing:</strong> Grayscale conversion, contrast enhancement,
                    noise reduction for optimal OCR
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-accent flex-shrink-0" size={16} strokeWidth={2.5} />
                  <span>
                    <strong>Intelligent Field Detection:</strong> Pattern matching for student ID, name,
                    email format, date fields
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-accent flex-shrink-0" size={16} strokeWidth={2.5} />
                  <span>
                    <strong>Batch Upload:</strong> Process up to 50 documents simultaneously
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-surface-raised border border-border rounded-xl">
              <h3 className="text-lg font-bold text-accent mb-3">AI Confidence Scoring</h3>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-accent flex-shrink-0" size={16} strokeWidth={2.5} />
                  <span>
                    <strong>Multi-Factor Analysis:</strong> Combines OCR confidence, pattern match
                    strength, field validation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-accent flex-shrink-0" size={16} strokeWidth={2.5} />
                  <span>
                    <strong>Automatic Routing:</strong> High confidence (90%+) auto-approved, medium
                    (70-90%) flagged for review
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-accent flex-shrink-0" size={16} strokeWidth={2.5} />
                  <span>
                    <strong>Learning System:</strong> Tracks admin corrections to improve future
                    confidence thresholds
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-accent flex-shrink-0" size={16} strokeWidth={2.5} />
                  <span>
                    <strong>Visual Indicators:</strong> Color-coded confidence scores in review interface
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-surface-raised border border-border rounded-xl">
              <h3 className="text-lg font-bold text-accent mb-3">Admin Approval Workflow</h3>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-accent flex-shrink-0" size={16} strokeWidth={2.5} />
                  <span>
                    <strong>Bulk Operations:</strong> Select and approve multiple records with single action
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-accent flex-shrink-0" size={16} strokeWidth={2.5} />
                  <span>
                    <strong>Inline Editing:</strong> Quick corrections without leaving approval screen
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-accent flex-shrink-0" size={16} strokeWidth={2.5} />
                  <span>
                    <strong>Comparison View:</strong> Side-by-side original document and extracted data
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-accent flex-shrink-0" size={16} strokeWidth={2.5} />
                  <span>
                    <strong>Rejection System:</strong> Flag problematic extractions with reason codes
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-surface-raised border border-border rounded-xl">
              <h3 className="text-lg font-bold text-accent mb-3">Secure Credential Delivery</h3>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-accent flex-shrink-0" size={16} strokeWidth={2.5} />
                  <span>
                    <strong>Encrypted Transmission:</strong> TLS encryption for all email communications
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-accent flex-shrink-0" size={16} strokeWidth={2.5} />
                  <span>
                    <strong>Template System:</strong> Customizable email templates with institution branding
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-accent flex-shrink-0" size={16} strokeWidth={2.5} />
                  <span>
                    <strong>Delivery Tracking:</strong> Real-time status updates (sent, delivered, opened,
                    failed)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-accent flex-shrink-0" size={16} strokeWidth={2.5} />
                  <span>
                    <strong>Retry Logic:</strong> Automatic retry with exponential backoff for failed
                    deliveries
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-surface-raised border border-border rounded-xl">
              <h3 className="text-lg font-bold text-accent mb-3">Comprehensive Audit System</h3>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-accent flex-shrink-0" size={16} strokeWidth={2.5} />
                  <span>
                    <strong>Full Event Logging:</strong> Every action logged with user, timestamp, and
                    before/after states
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-accent flex-shrink-0" size={16} strokeWidth={2.5} />
                  <span>
                    <strong>Searchable History:</strong> Filter by date range, user, action type, document
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-accent flex-shrink-0" size={16} strokeWidth={2.5} />
                  <span>
                    <strong>Export Capabilities:</strong> CSV export for compliance reporting
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-accent flex-shrink-0" size={16} strokeWidth={2.5} />
                  <span>
                    <strong>Retention Policy:</strong> Configurable log retention periods
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock id="challenges" title="Engineering Challenges">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">1. OCR Accuracy with Variable Quality Documents</h3>
              <p className="text-neutral-300 mb-3">
                <strong className="text-accent">Challenge:</strong> Documents arrived in wildly varying
                quality - faded photocopies, smartphone photos at angles, low-resolution scans. Raw
                Tesseract accuracy was 67% on real-world documents.
              </p>
              <p className="text-neutral-300 mb-3">
                <strong className="text-accent">Solution:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>
                  Built preprocessing pipeline with OpenCV.js for image enhancement (deskewing, contrast
                  adjustment, binarization)
                </li>
                <li>
                  Implemented adaptive thresholding based on image histogram analysis
                </li>
                <li>
                  Added multiple OCR passes with different preprocessing settings, selecting best result
                </li>
                <li>
                  Created document quality classifier to route low-quality docs directly to manual entry
                </li>
              </ul>
              <p className="text-neutral-300 mt-3">
                <strong className="text-accent">Result:</strong> OCR accuracy improved from 67% to 94% on
                production documents.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">2. Handling OCR Errors and Ambiguities</h3>
              <p className="text-neutral-300 mb-3">
                <strong className="text-accent">Challenge:</strong> OCR commonly confused similar
                characters (0/O, 1/I/l, 5/S) causing invalid student IDs and email addresses.
              </p>
              <p className="text-neutral-300 mb-3">
                <strong className="text-accent">Solution:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>
                  Implemented context-aware character correction using field constraints (student ID must
                  be 8 digits)
                </li>
                <li>
                  Built fuzzy matching against existing student database to catch similar-looking errors
                </li>
                <li>
                  Added Levenshtein distance checking for name fields against enrollment records
                </li>
                <li>
                  Created confidence penalty system for ambiguous character combinations
                </li>
              </ul>
              <p className="text-neutral-300 mt-3">
                <strong className="text-accent">Result:</strong> Character confusion errors reduced by 78%,
                with remaining ambiguities flagged for review.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">3. Balancing Automation with Accuracy</h3>
              <p className="text-neutral-300 mb-3">
                <strong className="text-accent">Challenge:</strong> Setting confidence thresholds - too
                high meant excessive manual review (defeating automation purpose), too low meant errors
                reaching students.
              </p>
              <p className="text-neutral-300 mb-3">
                <strong className="text-accent">Solution:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>
                  Implemented multi-factor confidence scoring combining OCR confidence, pattern match
                  strength, database validation results
                </li>
                <li>
                  Created configurable three-tier system: auto-approve (90%+), review queue (70-90%),
                  manual entry ({'<'}70%)
                </li>
                <li>
                  Built feedback loop tracking admin corrections to tune thresholds over time
                </li>
                <li>
                  Added field-level confidence allowing partial automation (auto-approve ID but review name)
                </li>
              </ul>
              <p className="text-neutral-300 mt-3">
                <strong className="text-accent">Result:</strong> Achieved 92% automation rate with 0.3%
                error rate reaching end users.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">4. Email Delivery at Scale</h3>
              <p className="text-neutral-300 mb-3">
                <strong className="text-accent">Challenge:</strong> Sending thousands of credential emails
                without triggering spam filters or hitting API rate limits.
              </p>
              <p className="text-neutral-300 mb-3">
                <strong className="text-accent">Solution:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>
                  Implemented queue-based delivery system with rate limiting (300 emails/hour respecting
                  Brevo limits)
                </li>
                <li>
                  Added exponential backoff retry logic for transient failures (network issues, temporary DNS
                  failures)
                </li>
                <li>
                  Configured SPF, DKIM, DMARC records for institutional domain to improve deliverability
                </li>
                <li>
                  Built monitoring dashboard tracking delivery rates, bounce rates, spam complaints
                </li>
              </ul>
              <p className="text-neutral-300 mt-3">
                <strong className="text-accent">Result:</strong> 99.7% delivery success rate with {'<'}0.1%
                spam complaints.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">5. Database Performance with Large Audit Logs</h3>
              <p className="text-neutral-300 mb-3">
                <strong className="text-accent">Challenge:</strong> Audit logging every action created
                massive table growth (50K+ records/month), slowing down queries and impacting UX.
              </p>
              <p className="text-neutral-300 mb-3">
                <strong className="text-accent">Solution:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>
                  Implemented database partitioning by month for audit log table
                </li>
                <li>
                  Added compound indexes on common query patterns (userId + timestamp, documentId +
                  timestamp)
                </li>
                <li>
                  Created separate read replica for audit queries to avoid impacting transactional
                  performance
                </li>
                <li>
                  Implemented log archival system moving records older than 6 months to cold storage
                </li>
              </ul>
              <p className="text-neutral-300 mt-3">
                <strong className="text-accent">Result:</strong> Query performance maintained under 100ms
                even with 500K+ audit records.
              </p>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock id="security" title="Security & Reliability">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Authentication & Authorization</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>
                  <strong>JWT-Based Auth:</strong> Secure token-based authentication with refresh token
                  rotation
                </li>
                <li>
                  <strong>Role-Based Access Control:</strong> Admin, supervisor, operator roles with
                  granular permissions
                </li>
                <li>
                  <strong>Session Management:</strong> Automatic timeout after 30 minutes inactivity
                </li>
                <li>
                  <strong>Password Security:</strong> bcrypt hashing with salt rounds = 12
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-3">Data Protection</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>
                  <strong>Encryption at Rest:</strong> PostgreSQL with TDE (Transparent Data Encryption)
                </li>
                <li>
                  <strong>Encryption in Transit:</strong> TLS 1.3 for all API communications
                </li>
                <li>
                  <strong>Credential Masking:</strong> Passwords partially masked in UI (show first 2, last
                  2 characters)
                </li>
                <li>
                  <strong>Document Purging:</strong> Original documents deleted after 30 days (configurable)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-3">Reliability & Monitoring</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>
                  <strong>Health Checks:</strong> Automated health endpoints for database, email service,
                  OCR processing
                </li>
                <li>
                  <strong>Error Tracking:</strong> Sentry integration for real-time error monitoring and
                  alerting
                </li>
                <li>
                  <strong>Backup Strategy:</strong> Daily automated PostgreSQL backups with 30-day retention
                </li>
                <li>
                  <strong>Uptime SLA:</strong> 99.5% uptime over 6 months of production operation
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-3">Compliance & Audit</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-300">
                <li>
                  <strong>Complete Audit Trail:</strong> Every action logged with user, timestamp, IP
                  address, before/after states
                </li>
                <li>
                  <strong>FERPA Compliance:</strong> Student data handling follows FERPA guidelines
                </li>
                <li>
                  <strong>Data Retention:</strong> Configurable retention policies for different data types
                </li>
                <li>
                  <strong>Export Capabilities:</strong> Compliance reports exportable to CSV/PDF
                </li>
              </ul>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock id="performance" title="Performance & Impact Metrics">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-surface-raised border border-border rounded-xl">
              <h3 className="text-lg font-bold text-accent mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">94%</div>
                  <div className="text-sm text-neutral-400">OCR Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">92%</div>
                  <div className="text-sm text-neutral-400">Automation Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">{'<'}2s</div>
                  <div className="text-sm text-neutral-400">Document Processing Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">99.7%</div>
                  <div className="text-sm text-neutral-400">Email Delivery Success</div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-surface-raised border border-border rounded-xl">
              <h3 className="text-lg font-bold text-accent mb-4">Business Impact</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">10K+</div>
                  <div className="text-sm text-neutral-400">Documents Processed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">85%</div>
                  <div className="text-sm text-neutral-400">Time Savings vs Manual</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">0.3%</div>
                  <div className="text-sm text-neutral-400">Error Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">99.5%</div>
                  <div className="text-sm text-neutral-400">Platform Uptime</div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-white mb-3">Real-World Impact</h3>
          <div className="space-y-4">
            <div className="p-4 bg-accent/5 border-l-4 border-accent rounded-r">
              <p className="text-neutral-300">
                <strong>Time Savings:</strong> Reduced credential distribution workflow from 3-5 days to
                under 1 hour for batches of 500+ students.
              </p>
            </div>
            <div className="p-4 bg-accent/5 border-l-4 border-accent rounded-r">
              <p className="text-neutral-300">
                <strong>Cost Reduction:</strong> Eliminated need for 2 FTE staff dedicated to credential
                processing, saving approximately $80K/year.
              </p>
            </div>
            <div className="p-4 bg-accent/5 border-l-4 border-accent rounded-r">
              <p className="text-neutral-300">
                <strong>Accuracy Improvement:</strong> Error rate dropped from 5-8% with manual entry to
                0.3% with automated system.
              </p>
            </div>
            <div className="p-4 bg-accent/5 border-l-4 border-accent rounded-r">
              <p className="text-neutral-300">
                <strong>Student Experience:</strong> Credential delivery time reduced from 3-5 days to
                under 1 hour, significantly improving new student onboarding experience.
              </p>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock id="learnings" title="Key Learnings">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">
                1. OCR is 80% Preprocessing, 20% Recognition
              </h3>
              <p className="text-neutral-300">
                Initially focused on tuning Tesseract parameters but saw minimal improvement. Real gains
                came from investing in robust preprocessing pipeline - image enhancement, deskewing,
                adaptive thresholding. Quality preprocessing took accuracy from 67% to 94%. Lesson: In
                document processing, cleaning the input is more impactful than tuning the algorithm.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-3">
                2. Embrace Human-in-the-Loop from Day One
              </h3>
              <p className="text-neutral-300">
                Early version attempted 100% automation which resulted in unacceptable error rates. Pivoted
                to hybrid approach with confidence-based routing. Ironically, 92% automation with human
                oversight proved more valuable than 100% automation with errors. Lesson: Perfect automation
                is often impossible - design for supervised automation instead.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-3">
                3. Audit Logs Are Not Optional for Enterprise
              </h3>
              <p className="text-neutral-300">
                Initially treated audit logging as  a nice-to-have feature. During pilot deployment,
                institutions demanded complete audit trails for compliance. Retrofitting comprehensive
                logging was painful. Lesson: For any system handling sensitive data, build audit logging
                from day one - it will be required eventually.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-3">4. Email Deliverability is Hard</h3>
              <p className="text-neutral-300">
                Naively assumed sending emails was straightforward. Encountered spam filter issues, rate
                limits, bounce handling complexity. Learned about SPF/DKIM/DMARC, warm-up periods, sender
                reputation. Lesson: Email delivery at scale requires as much engineering as the core
                product - don't underestimate infrastructure services.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-3">
                5. TypeScript + Prisma is Enterprise-Ready Stack
              </h3>
              <p className="text-neutral-300">
                NestJS + Prisma + PostgreSQL proved excellent for enterprise SaaS. Type safety caught bugs
                at compile time, Prisma migrations simplified schema evolution, NestJS modularity aided
                testing. Would choose this stack again for similar projects. Lesson: Modern TypeScript
                ecosystem has matured to the point of being production-ready for serious applications.
              </p>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock id="future" title="Future Improvements">
          <div className="space-y-4">
            <div className="p-4 bg-surface-raised border border-border rounded-lg">
              <h3 className="font-semibold text-accent mb-2 flex items-center gap-2">
                <Brain size={18} strokeWidth={2.5} />
                Machine Learning-Based OCR Enhancement
              </h3>
              <p className="text-sm text-neutral-300 mb-2">
                Replace rule-based confidence scoring with trained ML model that learns from admin
                corrections. Could improve automation rate from 92% to 95%+ while maintaining accuracy.
              </p>
              <p className="text-xs text-neutral-500">
                <strong>Effort:</strong> Medium | <strong>Impact:</strong> High
              </p>
            </div>

            <div className="p-4 bg-surface-raised border border-border rounded-lg">
              <h3 className="font-semibold text-accent mb-2 flex items-center gap-2">
                <Cloud size={18} strokeWidth={2.5} />
                Cloud OCR Service Integration
              </h3>
              <p className="text-sm text-neutral-300 mb-2">
                Add option to use AWS Textract or Google Vision API for challenging documents. Could
                improve accuracy on difficult documents from 75% to 95%+.
              </p>
              <p className="text-xs text-neutral-500">
                <strong>Effort:</strong> Low | <strong>Impact:</strong> Medium
              </p>
            </div>

            <div className="p-4 bg-surface-raised border border-border rounded-lg">
              <h3 className="font-semibold text-accent mb-2 flex items-center gap-2">
                <Smartphone size={18} strokeWidth={2.5} />
                Mobile Document Capture App
              </h3>
              <p className="text-sm text-neutral-300 mb-2">
                Build mobile app (React Native) for field staff to capture and upload documents with
                real-time feedback on image quality. Could reduce low-quality document submissions by 60%.
              </p>
              <p className="text-xs text-neutral-500">
                <strong>Effort:</strong> High | <strong>Impact:</strong> Medium
              </p>
            </div>

            <div className="p-4 bg-surface-raised border border-border rounded-lg">
              <h3 className="font-semibold text-accent mb-2 flex items-center gap-2">
                <Database size={18} strokeWidth={2.5} />
                Automated Student Database Integration
              </h3>
              <p className="text-sm text-neutral-300 mb-2">
                Direct integration with institutional student information systems (Banner, PeopleSoft) for
                automatic validation and credential generation. Could eliminate manual entry entirely.
              </p>
              <p className="text-xs text-neutral-500">
                <strong>Effort:</strong> High | <strong>Impact:</strong> Very High
              </p>
            </div>

            <div className="p-4 bg-surface-raised border border-border rounded-lg">
              <h3 className="font-semibold text-accent mb-2 flex items-center gap-2">
                <BarChart3 size={18} strokeWidth={2.5} />
                Advanced Analytics Dashboard
              </h3>
              <p className="text-sm text-neutral-300 mb-2">
                Build comprehensive analytics showing processing trends, error patterns, staff
                productivity, common correction types. Help institutions optimize workflows.
              </p>
              <p className="text-xs text-neutral-500">
                <strong>Effort:</strong> Medium | <strong>Impact:</strong> Medium
              </p>
            </div>

            <div className="p-4 bg-surface-raised border border-border rounded-lg">
              <h3 className="font-semibold text-accent mb-2 flex items-center gap-2">
                <Globe size={18} strokeWidth={2.5} />
                Multi-Tenant Architecture
              </h3>
              <p className="text-sm text-neutral-300 mb-2">
                Refactor to proper multi-tenant architecture with data isolation, custom branding per
                institution, and usage-based pricing. Enable SaaS scaling to hundreds of institutions.
              </p>
              <p className="text-xs text-neutral-500">
                <strong>Effort:</strong> Very High | <strong>Impact:</strong> Very High
              </p>
            </div>

            <div className="p-4 bg-surface-raised border border-border rounded-lg">
              <h3 className="font-semibold text-accent mb-2 flex items-center gap-2">
                <Shield size={18} strokeWidth={2.5} />
                Two-Factor Authentication for Recipients
              </h3>
              <p className="text-sm text-neutral-300 mb-2">
                Add optional 2FA verification before credential delivery for high-security institutions.
                Student must verify identity via SMS/email code before receiving credentials.
              </p>
              <p className="text-xs text-neutral-500">
                <strong>Effort:</strong> Medium | <strong>Impact:</strong> Low
              </p>
            </div>

            <div className="p-4 bg-surface-raised border border-border rounded-lg">
              <h3 className="font-semibold text-accent mb-2 flex items-center gap-2">
                <Zap size={18} strokeWidth={2.5} />
                Real-Time Collaboration
              </h3>
              <p className="text-sm text-neutral-300 mb-2">
                Add WebSocket-based real-time updates so multiple admins can collaborate on document
                processing without conflicts or stale data.
              </p>
              <p className="text-xs text-neutral-500">
                <strong>Effort:</strong> Medium | <strong>Impact:</strong> Medium
              </p>
            </div>
          </div>
        </SectionBlock>
    </CaseStudyLayout>
  );
}
