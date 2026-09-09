window.PHASE_COLORS = ["teal-deep", "teal", "purple", "pink", "emerald", "amber", "rust"];

window.ROADMAP = [
  {
    id: 1,
    title: "Python for Java Developers",
    short: "Python for Java Devs",
    color: "teal-deep",
    weeks: "Weeks 1-3",
    weeksDetail: "3 weeks · 6 modules",
    difficulty: 2,
    summary: "Build Python fluency by mapping familiar Java and Spring Boot concepts to Python, FastAPI, async programming, packaging, and testable service design.",
    endState: "You can build and test a production-style FastAPI service, integrate external APIs, handle async workloads, and structure Python code with the discipline expected from a senior backend engineer.",
    sections: [
      { n: "1.1", title: "Python Language Bridge", items: ["Java-to-Python syntax mapping: classes, modules, collections, exceptions", "Type hints, dataclasses, enums, protocols, and dependency boundaries", "Idiomatic Python for engineers who already know clean code"] },
      { n: "1.2", title: "Backend Service Foundations", items: ["FastAPI routing, Pydantic models, validation, and OpenAPI docs", "Service, repository, adapter, and configuration layers", "Structured logging, exception handling, and health endpoints"] },
      { n: "1.3", title: "Async and Integration Patterns", items: ["asyncio, async/await, task orchestration, timeouts, and retries", "Calling REST APIs with authentication, rate limits, and circuit-breaker thinking", "Background jobs for ingestion, notifications, and agent workflows"] },
      { n: "1.4", title: "Data and Persistence", items: ["SQLAlchemy basics for PostgreSQL and RDS-style schemas", "JSON, CSV, PDF, and document processing pipelines", "Caching patterns for API and LLM workloads"] },
      { n: "1.5", title: "Testing and Quality", items: ["pytest, fixtures, mocks, contract-style API tests", "Static checks with ruff, mypy, and pre-commit", "Designing regression tests for AI-assisted features"] },
      { n: "1.6", title: "Developer Workflow", items: ["Virtual environments, dependency pinning, and project layout", "Dockerizing FastAPI services", "CI-ready commands that fit Jenkins or Azure DevOps pipelines"] }
    ]
  },
  {
    id: 2,
    title: "LLM API Development",
    short: "LLM APIs",
    color: "teal",
    weeks: "Weeks 4-6",
    weeksDetail: "3 weeks · 7 modules",
    difficulty: 3,
    summary: "Move from using chat tools to engineering reliable LLM-backed application features with APIs, structured outputs, streaming, observability, and cost control.",
    endState: "You can expose an enterprise-ready AI endpoint that handles prompts, model routing, streaming responses, structured JSON, retries, trace IDs, and secure configuration.",
    sections: [
      { n: "2.1", title: "LLM Mental Model", items: ["Tokens, context windows, temperature, latency, and cost", "Model families and when to use fast, reasoning, or embedding models", "Limits of LLMs: hallucination, stale knowledge, prompt sensitivity"] },
      { n: "2.2", title: "API Integration", items: ["OpenAI and AWS Bedrock API patterns", "Secure key management through environment variables and secrets", "Request timeouts, retries, fallbacks, and error envelopes"] },
      { n: "2.3", title: "Prompt Engineering for Services", items: ["System prompts, developer instructions, few-shot examples, and response constraints", "Reusable prompt templates versioned with code", "Prompt reviews as part of pull requests"] },
      { n: "2.4", title: "Structured Outputs", items: ["JSON schemas for classification, extraction, and workflow decisions", "Validation with Pydantic before data reaches downstream systems", "Recovering from malformed or incomplete model responses"] },
      { n: "2.5", title: "Streaming User Experience", items: ["Server-sent events for token streaming", "React or Angular chat UI integration", "Cancellation, loading states, and graceful degradation"] },
      { n: "2.6", title: "Observability and Cost", items: ["Trace IDs from frontend to LLM provider", "Token usage, latency percentiles, and failure rates", "Model routing and semantic caching strategies"] },
      { n: "2.7", title: "Enterprise Controls", items: ["PII handling and redaction before model calls", "Input validation, abuse limits, and audit logging", "Environment promotion from local to dev to production"] }
    ]
  },
  {
    id: 3,
    title: "RAG Systems",
    short: "RAG Systems",
    color: "purple",
    weeks: "Weeks 7-10",
    weeksDetail: "4 weeks · 8 modules",
    difficulty: 4,
    capstone: 2,
    summary: "Design retrieval-augmented generation systems that answer from private enterprise knowledge instead of relying on model memory.",
    endState: "You can ingest documents, chunk them intelligently, generate embeddings, retrieve with metadata filters, cite sources, and evaluate answer quality with repeatable tests.",
    sections: [
      { n: "3.1", title: "RAG Architecture", items: ["Ingestion, chunking, embedding, retrieval, generation, and citation flow", "When RAG is better than fine-tuning", "Failure modes: missing chunks, weak reranking, stale indexes"] },
      { n: "3.2", title: "Document Ingestion", items: ["PDF, markdown, wiki, Confluence-style pages, and service runbooks", "Metadata extraction for system, owner, date, version, and access level", "Incremental indexing and reprocessing strategy"] },
      { n: "3.3", title: "Chunking and Embeddings", items: ["Semantic chunking, overlap, parent-child chunks, and table handling", "Embedding model selection and dimension trade-offs", "Embedding batch jobs with retry and checkpointing"] },
      { n: "3.4", title: "Vector and Hybrid Search", items: ["Chroma or FAISS locally; OpenSearch, pgvector, or managed vector stores in production", "Keyword plus vector retrieval for enterprise acronyms and IDs", "Metadata filters for application, environment, team, and document type"] },
      { n: "3.5", title: "Answer Generation", items: ["Grounded answers with citations and confidence boundaries", "Prompting the model to say when evidence is insufficient", "Source previews and user feedback loops"] },
      { n: "3.6", title: "RAG Evaluation", items: ["Golden question sets from real operational scenarios", "Retrieval metrics: hit rate, recall@k, precision@k", "Answer metrics: faithfulness, answer relevance, citation accuracy"] },
      { n: "3.7", title: "Security and Governance", items: ["Access-aware retrieval and document-level permissions", "Prompt-injection mitigation from retrieved text", "Audit logs for user question, retrieved sources, and answer"] },
      { n: "3.8", title: "RAG APIs", items: ["FastAPI query service with streaming responses", "Spring Boot gateway that delegates to Python RAG service", "Operational endpoints for index status and re-ingestion"] }
    ]
  },
  {
    id: 4,
    title: "Agent Engineering",
    short: "Agent Engineering",
    color: "pink",
    weeks: "Weeks 11-15",
    weeksDetail: "5 weeks · 9 modules",
    difficulty: 5,
    capstone: 3,
    summary: "Build agents that can reason over tasks, call tools, inspect results, recover from failures, and pause for human approval when enterprise risk requires it.",
    endState: "You can design and implement a tool-using agent with clear state, guardrails, traces, approval checkpoints, and integration points for DevOps and release workflows.",
    sections: [
      { n: "4.1", title: "Agent Fundamentals", items: ["Planner, tool caller, memory, executor, verifier, and human approval roles", "ReAct, plan-and-execute, supervisor, and workflow-agent patterns", "When a deterministic workflow is better than an agent"] },
      { n: "4.2", title: "Tool Design", items: ["Tool schemas, descriptions, validation, and typed return values", "GitHub, Jenkins, CloudWatch, ticketing, wiki, and database tools", "Read-only defaults with explicit approval for write actions"] },
      { n: "4.3", title: "LangChain and LangGraph", items: ["Chains, tools, state graphs, conditional edges, and retries", "Checkpointing long-running workflows", "Tracing agent decisions with LangSmith or equivalent tooling"] },
      { n: "4.4", title: "Memory and Context", items: ["Short-term conversation memory and long-term knowledge stores", "Context packing, summarization, and token budgets", "Separating instructions, retrieved facts, user input, and tool outputs"] },
      { n: "4.5", title: "Human in the Loop", items: ["Approval gates for releases, infrastructure changes, and external messages", "Explainable action plans before execution", "Resume flows after approval or rejection"] },
      { n: "4.6", title: "Agent Safety", items: ["Prompt-injection defense for tool outputs", "Action limits, max retries, allowlists, and timeouts", "Safe failure messages and escalation paths"] },
      { n: "4.7", title: "Multi-Agent Patterns", items: ["Planner, researcher, validator, executor, and reporter agents", "Parallel fan-out for log analysis or document research", "Avoiding over-engineered multi-agent systems"] },
      { n: "4.8", title: "MCP and Integration", items: ["Model Context Protocol concepts and tool server design", "Filesystem, GitHub, Slack, and internal API adapters", "Credential boundaries and audit trails"] },
      { n: "4.9", title: "Agent Testing", items: ["Scenario tests for successful and failed tool calls", "Golden traces for regression testing", "Cost, latency, and tool-call budget checks"] }
    ]
  },
  {
    id: 5,
    title: "Java/Spring Boot + AI Integration",
    short: "Spring Boot + AI",
    color: "emerald",
    weeks: "Weeks 16-18",
    weeksDetail: "3 weeks · 6 modules",
    difficulty: 4,
    capstone: 4,
    summary: "Use your strongest platform advantage: integrate AI services into enterprise Java systems without forcing every capability into Python.",
    endState: "You can design a Java-first AI application where Spring Boot owns authentication, business APIs, workflow orchestration, and operational controls while Python services handle specialized AI workloads when needed.",
    sections: [
      { n: "5.1", title: "AI Architecture for Java Teams", items: ["Spring Boot as API gateway and business orchestration layer", "Python AI microservices for RAG, agents, and model-specific workloads", "Synchronous APIs, async queues, and event-driven integration"] },
      { n: "5.2", title: "Spring AI and Bedrock", items: ["Spring AI concepts for chat, prompts, embeddings, and vector stores", "AWS Bedrock integration options", "Configuration and secrets through standard Spring profiles"] },
      { n: "5.3", title: "Enterprise API Design", items: ["REST endpoints for chat, retrieval, agent actions, and feedback", "Request correlation IDs and audit records", "Error handling that works for frontend, backend, and support teams"] },
      { n: "5.4", title: "Frontend Integration", items: ["Angular or React chat interfaces with streaming status", "Reusable components for citations, traces, approvals, and feedback", "Role-based screens for users, reviewers, and admins"] },
      { n: "5.5", title: "Workflow and Messaging", items: ["SQS, EventBridge, Kafka-style concepts, and background processing", "Release workflow events from Jenkins or Azure DevOps", "Outbox and retry patterns for reliable enterprise actions"] },
      { n: "5.6", title: "Security and Compliance", items: ["IAM, OAuth/JWT, service-to-service authentication, and least privilege", "PII masking and access-aware retrieval", "Audit-friendly logs for regulated environments"] }
    ]
  },
  {
    id: 6,
    title: "Production AI Deployment on AWS",
    short: "AWS AI Deployment",
    color: "amber",
    weeks: "Weeks 19-22",
    weeksDetail: "4 weeks · 7 modules",
    difficulty: 4,
    capstone: 5,
    summary: "Deploy AI systems with the AWS and DevOps tools you already know: Docker, ECS, Lambda, S3, RDS, CloudWatch, IAM, Terraform, Jenkins, and Azure DevOps.",
    endState: "You can ship an AI service to AWS with containerized workloads, secure secrets, observability, CI/CD, Terraform-managed infrastructure, and cost controls.",
    sections: [
      { n: "6.1", title: "Reference AWS Architecture", items: ["CloudFront or frontend hosting plus API Gateway or ALB", "Spring Boot and FastAPI services on ECS Fargate", "Lambda for event-driven ingestion and scheduled jobs"] },
      { n: "6.2", title: "Data and Storage", items: ["S3 for documents, logs, artifacts, and uploads", "RDS PostgreSQL for users, feedback, state, and metadata", "OpenSearch or pgvector for retrieval workloads"] },
      { n: "6.3", title: "Security and IAM", items: ["Task roles, least-privilege policies, security groups, and secrets", "Environment isolation for dev, test, and production", "Audit logging for agent actions"] },
      { n: "6.4", title: "CI/CD", items: ["Jenkins and Azure DevOps pipelines for build, test, scan, deploy", "Docker image publishing and ECS rollout strategies", "Automated smoke tests and rollback criteria"] },
      { n: "6.5", title: "Infrastructure as Code", items: ["Terraform modules for ECS, RDS, S3, IAM, and CloudWatch", "Parameterization by environment", "State management and reviewable infrastructure changes"] },
      { n: "6.6", title: "Observability", items: ["CloudWatch logs, metrics, dashboards, and alarms", "Application traces for model calls, retrieval, and tool execution", "Latency, error, token usage, and cost dashboards"] },
      { n: "6.7", title: "Reliability and Cost", items: ["Rate limits, queues, retries, and backpressure", "Model routing, prompt compression, and cache hit-rate targets", "Load testing with k6 or Locust"] }
    ]
  },
  {
    id: 7,
    title: "AI Portfolio Projects",
    short: "Portfolio Projects",
    color: "rust",
    weeks: "Weeks 23-26",
    weeksDetail: "4 weeks · 6 modules",
    difficulty: 4,
    capstone: 6,
    summary: "Convert the roadmap into a visible engineering portfolio with serious problem statements, architecture diagrams, demos, deployment notes, and interview-ready documentation.",
    endState: "You have multiple portfolio repositories that show enterprise-grade AI application engineering, not tutorial cloning.",
    sections: [
      { n: "7.1", title: "Portfolio Positioning", items: ["Define target roles: AI Application Engineer, Agent Engineer, GenAI Developer", "Map every project to a business problem and measurable outcome", "Make the Java, cloud, and enterprise experience explicit"] },
      { n: "7.2", title: "Project Documentation", items: ["README structure: problem, architecture, stack, features, setup, demo, roadmap", "Architecture diagrams and sequence flows", "Operational notes: logging, security, cost, tests, and limitations"] },
      { n: "7.3", title: "Demo Strategy", items: ["Short demo videos with realistic user scenarios", "Screenshots for UI, trace views, and AWS dashboards", "Hosted demos where cost and security permit"] },
      { n: "7.4", title: "Code Quality", items: ["Clean service boundaries, tests, Dockerfiles, and local setup scripts", "Example environment files without secrets", "Issue backlog that shows planned production improvements"] },
      { n: "7.5", title: "Publishing Cadence", items: ["Weekly commits and progress notes", "LinkedIn posts focused on engineering decisions", "Release notes for each meaningful project milestone"] },
      { n: "7.6", title: "Interview Narrative", items: ["Explain trade-offs: model choice, RAG design, tool safety, deployment path", "Prepare system design walkthroughs for each project", "Tie outcomes to enterprise delivery experience from SERV, IBM, and Cognizant"] }
    ]
  }
];

window.CAPSTONES = [
  {
    n: 1,
    title: "AI DevOps Copilot",
    phase: "Built across Phases 2, 4, and 6",
    domain: "DevOps automation and engineering support",
    problem: "Engineering teams lose time switching between Jenkins, deployment logs, cloud dashboards, and runbooks when diagnosing failed builds or releases.",
    architecture: "React or Angular UI -> Spring Boot API gateway -> Python agent service -> Jenkins, GitHub, CloudWatch, S3 runbooks, and notification tools. Human approval is required before any write action.",
    features: ["Build failure summarization", "Log clustering and likely cause detection", "Runbook-grounded recommendations", "Jenkins and GitHub status lookup", "Approval-gated retry or rollback suggestions", "Audit trail for every tool call"],
    build: [
      "Problem statement: Engineering teams need a reliable assistant that reduces mean time to understand failed CI/CD runs without bypassing human judgment.",
      "Architecture: Spring Boot gateway delegates agent workflows to FastAPI, with tool adapters for Jenkins, GitHub, CloudWatch, and S3-hosted runbooks.",
      "Features: summarize build failures, identify related commits, retrieve runbooks, propose next actions, and require approval before operational changes.",
      "Learning outcome: agent tool design, DevOps integration, CloudWatch analysis, human-in-the-loop control, and production auditability.",
      "GitHub repo: https://github.com/your-username/ai-devops-copilot",
      "Demo: https://your-demo-url/ai-devops-copilot"
    ],
    stack: ["Java 21", "Spring Boot", "FastAPI", "LangGraph", "Jenkins", "GitHub API", "CloudWatch", "Docker", "ECS"],
    proves: "You can apply agent engineering to a real DevOps workflow with enterprise controls."
  },
  {
    n: 2,
    title: "Enterprise Knowledge Assistant",
    phase: "Built during Phase 3",
    domain: "Enterprise knowledge search and grounded Q&A",
    problem: "Enterprise knowledge is spread across PDFs, wikis, runbooks, architecture notes, and release documents, making accurate answers slow to find.",
    architecture: "Document ingestion pipeline -> S3 document store -> embedding and chunking workers -> vector store/OpenSearch -> RAG API -> React or Angular chat UI with citations.",
    features: ["Document ingestion", "Hybrid search", "Citation-backed answers", "Access-aware retrieval", "Feedback capture", "Evaluation dashboard"],
    build: [
      "Problem statement: Employees need trustworthy answers from internal documentation without manually searching multiple repositories.",
      "Architecture: S3 stores documents, async workers chunk and embed content, OpenSearch or pgvector powers retrieval, and FastAPI returns grounded answers through a Spring Boot gateway.",
      "Features: upload documents, ask natural-language questions, show citations, filter by system or team, capture feedback, and evaluate retrieval quality.",
      "Learning outcome: production RAG design, document ingestion, embeddings, access-aware retrieval, and answer evaluation.",
      "GitHub repo: https://github.com/your-username/enterprise-knowledge-assistant",
      "Demo: https://your-demo-url/enterprise-knowledge-assistant"
    ],
    stack: ["FastAPI", "Spring Boot", "OpenSearch", "pgvector", "S3", "RDS PostgreSQL", "Bedrock/OpenAI", "React"],
    proves: "You can build a grounded AI assistant for private enterprise knowledge."
  },
  {
    n: 3,
    title: "Release Management Agent",
    phase: "Built during Phases 4 and 5",
    domain: "Release governance and deployment readiness",
    problem: "Release managers need to review tickets, commits, approvals, test results, and deployment risks before promoting changes across environments.",
    architecture: "Spring Boot workflow API -> LangGraph release agent -> Azure DevOps/Jenkins/GitHub tools -> RAG over release policies -> approval UI -> audit log in RDS.",
    features: ["Release readiness checklist", "Risk summary", "Missing approval detection", "Change impact explanation", "Deployment note generation", "Human approval checkpoints"],
    build: [
      "Problem statement: Release decisions require evidence from multiple systems, and manual checks create delay and missed risks.",
      "Architecture: A Spring Boot workflow service coordinates a LangGraph agent that reads CI/CD, ticket, commit, and policy data before generating a release recommendation.",
      "Features: validate release checklist, summarize test status, identify missing approvals, generate release notes, and preserve an audit record.",
      "Learning outcome: agentic workflow design, enterprise integration, approval gates, state management, and explainable automation.",
      "GitHub repo: https://github.com/your-username/release-management-agent",
      "Demo: https://your-demo-url/release-management-agent"
    ],
    stack: ["Spring Boot", "LangGraph", "Azure DevOps", "Jenkins", "GitHub API", "RDS", "React", "Docker"],
    proves: "You can turn release governance into a controlled agent workflow."
  },
  {
    n: 4,
    title: "AI Resume + Interview Platform",
    phase: "Built during Phase 5",
    domain: "Career tooling and interview preparation",
    problem: "Professionals changing into AI roles need tailored resumes, role-specific interview practice, and project narratives that reflect real engineering experience.",
    architecture: "React UI -> Spring Boot user and assessment APIs -> FastAPI LLM service -> RAG over resume, job descriptions, project docs, and interview rubrics.",
    features: ["Resume analysis", "JD-to-resume gap report", "AI interview simulator", "Project story builder", "Feedback scoring", "Exportable improvement plan"],
    build: [
      "Problem statement: Senior engineers need AI-role positioning that highlights enterprise delivery, architecture, cloud, and production project experience.",
      "Architecture: Spring Boot owns users and sessions, FastAPI handles LLM workflows, and RAG retrieves resume, job description, and portfolio evidence.",
      "Features: analyze resumes, compare against job descriptions, simulate interviews, score answers, and generate project-based talking points.",
      "Learning outcome: full-stack AI product design, structured outputs, user state, frontend integration, and responsible coaching UX.",
      "GitHub repo: https://github.com/your-username/ai-resume-interview-platform",
      "Demo: https://your-demo-url/ai-resume-interview-platform"
    ],
    stack: ["React", "Spring Boot", "FastAPI", "PostgreSQL", "OpenAI/Bedrock", "Docker", "AWS ECS"],
    proves: "You can build a complete AI application that combines product thinking with enterprise engineering."
  },
  {
    n: 5,
    title: "Cloud Cost Optimization Assistant",
    phase: "Built during Phase 6",
    domain: "AWS operations and FinOps",
    problem: "Cloud teams need actionable cost insights across EC2, ECS, Lambda, S3, RDS, and logs without reading every dashboard manually.",
    architecture: "Scheduled Lambda ingestion -> AWS Cost Explorer and CloudWatch adapters -> RDS cost history -> AI analysis service -> dashboard and recommendation workflow.",
    features: ["Cost anomaly summaries", "Service-level recommendations", "Underused resource detection", "Savings plan notes", "Approval workflow", "Weekly executive report"],
    build: [
      "Problem statement: AWS cost data is available, but teams need engineering-specific recommendations that explain trade-offs and next steps.",
      "Architecture: Lambda collects cost and utilization signals, RDS stores history, and an AI service generates recommendations through a Spring Boot API.",
      "Features: detect anomalies, rank optimization opportunities, explain risks, generate weekly reports, and track action status.",
      "Learning outcome: AWS integration, cost-aware AI, scheduled workflows, dashboard design, and operational recommendation systems.",
      "GitHub repo: https://github.com/your-username/cloud-cost-optimization-assistant",
      "Demo: https://your-demo-url/cloud-cost-optimization-assistant"
    ],
    stack: ["AWS Cost Explorer", "CloudWatch", "Lambda", "RDS", "Spring Boot", "FastAPI", "Terraform", "React"],
    proves: "You can combine AWS operations knowledge with AI-assisted decision support."
  },
  {
    n: 6,
    title: "Log Analyzer with Root Cause Analysis",
    phase: "Built during Phases 3, 4, and 6",
    domain: "Application support and production reliability",
    problem: "Support teams need faster root-cause analysis across application logs, deployment history, incidents, and known-error documentation.",
    architecture: "Log ingestion from CloudWatch -> parsing and indexing pipeline -> RAG over incidents and runbooks -> RCA agent -> report API and dashboard.",
    features: ["Log pattern detection", "Incident similarity search", "Root-cause hypothesis generation", "Evidence-backed RCA report", "Severity classification", "Recommended remediation"],
    build: [
      "Problem statement: Production incidents take too long to triage when logs, releases, and known-error documents are disconnected.",
      "Architecture: CloudWatch logs flow into an indexing pipeline, RAG retrieves similar incidents and runbooks, and an agent produces evidence-backed RCA reports.",
      "Features: cluster errors, detect new patterns, correlate with releases, generate RCA summaries, and recommend remediation steps.",
      "Learning outcome: log analytics, retrieval over operational data, agent reasoning, reliability workflows, and production observability.",
      "GitHub repo: https://github.com/your-username/log-analyzer-rca",
      "Demo: https://your-demo-url/log-analyzer-rca"
    ],
    stack: ["CloudWatch", "OpenSearch", "FastAPI", "LangGraph", "Spring Boot", "S3", "RDS", "Docker", "ECS"],
    proves: "You can build AI systems for real production support and reliability use cases."
  }
];

window.OUT_OF_SCOPE = [
  {
    title: "My Role Target",
    why: "Current: Senior Java Full Stack Developer. 6 months: AI Application Engineer. 12 months: Agent Engineer / GenAI Developer. 24 months: AI Solutions Engineer / AI Architect.",
    pointer: "The portfolio should prove progression through shipped systems: API-based AI features, RAG systems, agents, Java/Spring integration, and AWS deployment."
  },
  {
    title: "Experience Advantage",
    why: "The roadmap is designed around existing strengths in Java, Spring Boot, Angular, React, AWS, Jenkins, Docker, Terraform, Azure DevOps, and enterprise delivery across SERV, IBM, and Cognizant.",
    pointer: "Every project should read like enterprise software engineering enhanced by AI, not a beginner ML exercise."
  },
  {
    title: "What Not to Prioritize First",
    why: "Training foundation models, deep ML theory, and research-heavy fine-tuning are valuable later, but they are not the shortest path to AI Application Engineer or Agent Engineer roles.",
    pointer: "Prioritize LLM APIs, RAG, agent workflows, AWS deployment, security, observability, and portfolio demos."
  }
];

window.NEXT_STEPS = [
  {
    label: "Learn",
    title: "Study one focused capability every week",
    body: "Pick one topic from the active phase, complete official docs or a focused course section, and write concise notes that explain the idea in enterprise engineering language."
  },
  {
    label: "Build",
    title: "Convert learning into a working feature",
    body: "Each week should produce code: an API endpoint, ingestion job, retrieval improvement, agent tool, deployment script, dashboard, or test harness."
  },
  {
    label: "Document",
    title: "Record architecture and trade-offs",
    body: "Update the project README with problem statement, architecture, tech stack, setup steps, screenshots, limitations, and the engineering decisions behind the implementation."
  },
  {
    label: "Publish",
    title: "Make progress visible",
    body: "Push commits, tag milestones, add demo placeholders or videos, and share short progress notes that position the work toward AI Application Engineer and Agent Engineer roles."
  }
];
