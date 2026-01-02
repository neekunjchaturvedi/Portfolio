import { Github, Package } from "lucide-react";
import React from "react";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: React.ReactNode;
}

export const BLOG_POSTS: BlogPost[] = [
  //   {
  //     id: "building-saas",
  //     title: "Building Renard.Live",
  //     excerpt: "How we Built a SAAS platform in a code sprint.",
  //     date: "Dec 15, 2025",
  //     readTime: "5 min read",
  //     tags: [
  //       "React",
  //       "Browser-Extension",
  //       "CLI-Reader",
  //       "VectorDB",
  //       "Express",
  //       "Node",
  //     ],
  //     content: (
  //       <div className="space-y-6 text-gray-300 leading-relaxed">
  //         <p>
  //           When I set out to build the E-Commerce Dashboard, my primary goal was
  //           to explore the capabilities of{" "}
  //           <strong>Next.js 14's App Router</strong>. I wanted to move away from
  //           client-side heavy data fetching and leverage React Server Components
  //           (RSC) to reduce the bundle size and improve initial load times.
  //         </p>
  //         <h3 className="text-xl font-bold text-white mt-8 mb-4">
  //           The Challenge: State Management vs. Server Data
  //         </h3>
  //         <p>
  //           One of the biggest hurdles was managing the real-time inventory
  //           updates. While RSCs are great for fetching data, they aren't
  //           interactive. I had to architect a hybrid approach:
  //         </p>
  //         <ul className="list-disc pl-6 space-y-2">
  //           <li>
  //             <strong>Server Components</strong> for the initial dashboard shell
  //             and heavy data tables.
  //           </li>
  //           <li>
  //             <strong>Client Components</strong> for the interactive filters and
  //             "Quick Edit" modals.
  //           </li>
  //           <li>
  //             <strong>Supabase Realtime</strong> to push inventory changes to the
  //             client without a full page refresh.
  //           </li>
  //         </ul>
  //         <h3 className="text-xl font-bold text-white mt-8 mb-4">
  //           Optimizing Performance
  //         </h3>
  //         <p>
  //           By implementing aggressive caching policies using `unstable_cache`
  //           (now stable in newer versions) and properly memoizing expensive
  //           calculations on the server, I reduced the Time to First Byte (TTFB) by
  //           40%. The result was a dashboard that felt instant, even when
  //           processing thousands of SKUs.
  //         </p>
  //         <div className="bg-gray-900 p-4 border-l-4 border-blue-500 my-8">
  //           <p className="italic text-gray-400">
  //             "The shift to Server Actions meant I could remove almost 15kb of API
  //             layer boilerplate code. The code became cleaner, safer, and much
  //             easier to debug."
  //           </p>
  //         </div>
  //       </div>
  //     ),
  //   },
  {
    id: "abuse",
    title: "Building Abuse",
    excerpt: "Every Teminal Deserves Personality.",
    date: "Nov 28, 2025",
    readTime: "8 min read",
    tags: ["CLI-Tool", "JavaScript", "CommanderJS", "Npm", "ChalkJS"],
    content: (
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          Terminals are powerful, fast, and brutally honest — but they’re also
          boring. Developers mistype commands all the time: <code>gti</code>,
          <code>npn</code>, <code>makdir</code>, <code>clea</code>… and the
          shell responds with a cold, robotic <em>command not found</em>.
        </p>

        <p>
          I wanted my terminal to have a personality. Something that not only
          tells me I messed up — but does it with style. That’s how{" "}
          <strong>Abuse</strong> was born: a CLI tool that roasts you when you
          mistype a command and helps you recover instantly.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">
          Why I Built Abuse
        </h3>

        <p>
          This project started as a fun experiment but quickly turned into a
          serious CLI utility. The goals were simple:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Make terminal errors less frustrating</li>
          <li>Provide instant command suggestions</li>
          <li>Add configurable humor without breaking workflows</li>
          <li>Keep everything lightweight and dependency-minimal</li>
        </ul>

        <p>
          Abuse is intentionally small, fast, and opinionated — it does one
          thing and does it well.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">
          Tech Stack & Design Choices
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>JavaScript</strong> — Zero friction, instant iteration, and
            perfect for CLI tooling.
          </li>
          <li>
            <strong>Commander.js</strong> — Clean command definitions,
            predictable flags, and excellent subcommand support.
          </li>
          <li>
            <strong>Chalk</strong> — Color matters in terminals. Chalk keeps
            output readable, expressive, and fun.
          </li>
        </ul>

        <p>
          I intentionally avoided heavy frameworks. Abuse needs to start fast,
          execute fast, and exit fast — anything slower defeats the purpose.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">Architecture</h3>

        <pre className="bg-neutral-900 text-neutral-100 rounded-lg p-4 overflow-x-auto text-sm leading-relaxed font-mono">
          <code>{`
├── bin/
│   └── abuse.js                # CLI entrypoint
│
├── commands/
│   ├── analyze.js              # Debugging / analysis tools
│   ├── config.js               # Config management
│   ├── handle.js               # Core "roast + suggestion" handler
│   ├── init.js                 # Initialization helpers
│   ├── logs.js                 # Log viewing/clearing
│   └── shell.js                # Shell integration (bash, zsh, PowerShell)
│
├── core/
│   ├── configManager.js        # Loads/saves user config from ~/.abuse
│   ├── logManager.js           # Writes logs to ~/.abuse/logs.jsonl
│   └── templateEngine.js       # Insult generator + dataset selector
│
├── data/
│   ├── common/
│   │   └── commands.json       # Common typos → correct command mapping
│   └── insults/
│       └── en/
│           ├── sarcastic/
│           ├── friendly/
│           └── badass/
│
├── package.json
├── LICENSE
└── README.md
`}</code>
        </pre>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">
          How Abuse Works Internally
        </h3>

        <p>
          When you run <code>abuse shell --install</code>, Abuse injects a small
          hook into your shell configuration file (<code>.bashrc</code> or
          <code>.zshrc</code>).
        </p>

        <pre className="bg-neutral-900 p-4 rounded-lg overflow-x-auto text-sm font-mono text-green-300">
          {`# --- Abuse++ Hook (Bash/Zsh) ---
command_not_found_handle() {
  abuse handle "$*"
}`}
        </pre>

        <p>
          This hook is triggered whenever a command is not found. Instead of
          letting the shell handle the error, the failed command is redirected
          to Abuse for further processing.
        </p>

        <p>Internally, Abuse follows a well-defined pipeline:</p>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Capture the failed command and its context</li>
          <li>
            Scan the local <code>PATH</code> for similar executable names
          </li>
          <li>Apply string similarity algorithms and known typo mappings</li>
          <li>Select an insult based on configured severity and style</li>
          <li>Log the interaction for diagnostics and future improvements</li>
        </ol>

        <p>
          The suggestion engine deliberately prioritizes correctness over
          creativity — humor enhances the experience, but inaccurate suggestions
          are never worth it.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">
          Configuration System
        </h3>

        <p>
          Abuse stores user preferences at <code>~/.abuse/config.json</code>.
          Everything is configurable:
        </p>

        <pre className="bg-neutral-900 p-4 rounded-lg overflow-x-auto text-sm font-mono text-gray-200">
          {`{
  "language": "en",
  "severity": "medium",
  "enabled": true,
  "exempt_commands": ["sudo", "ssh"],
  "insult_style": "sarcastic",
  "data_dir": "~/.abuse"
}`}
        </pre>

        <p>
          Critical commands like <code>sudo</code> and <code>ssh</code> are
          exempt by default — because roasting production mistakes is not funny.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">
          Logging & Diagnostics
        </h3>

        <p>
          Every interaction is logged to <code>~/.abuse/logs.jsonl</code>. Logs
          are JSON lines so they’re easy to parse, analyze, or ship elsewhere.
        </p>

        <p>
          This makes Abuse surprisingly useful for studying common mistakes and
          improving shell UX.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">
          Installation & Usage
        </h3>

        <pre className="bg-neutral-900 p-4 rounded-lg overflow-x-auto text-sm font-mono text-green-300">
          {`sudo npm install -g abuse-plus
abuse shell --install`}
        </pre>

        <p>
          Once installed, every mistyped command gets roasted automatically. You
          can also invoke Abuse explicitly:
        </p>

        <pre className="bg-neutral-900 p-4 rounded-lg overflow-x-auto text-sm font-mono text-blue-300">
          {`gti status
One or more choices were empty. (post-processing if applied)
💀 Your keyboard didn't deserve this.
❌ Command "gti" is not installed.
💡 Maybe you meant: git or g++ (system)`}
        </pre>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">
          Why Open Source
        </h3>

        <p>
          Abuse is fully open-source because humor, tooling, and developer
          experience should be shared. The insult datasets are designed so
          anyone can contribute new languages, styles, or roasts without
          touching core logic.
        </p>

        <p className="italic text-gray-400">
          Abuse CLI is free, open-source, and community-driven. Built by
          developers, for developers.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">
          What's Coming Next
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Windows support</li>
          <li>AI-powered suggestions</li>
          <li>Usage statistics & insights</li>
          <li>More languages & roast packs</li>
        </ul>

        <p>
          If you love FOSS, enjoy CLI tooling, or just want your terminal to
          insult you with better grammar — this project is for you.
        </p>
        <div className="flex gap-6">
          <button
            onClick={() =>
              window.open("https://github.com/neekunjchaturvedi/abuse")
            }
            className="flex items-center gap-2 text-md text-gray-400 hover:text-white transition-colors py-8"
          >
            <Github size={16} />
            <span>Github</span>
          </button>
          <button
            onClick={() =>
              window.open("https://www.npmjs.com/package/abuse-plus")
            }
            className="flex items-center gap-2 text-md text-gray-400 hover:text-white transition-colors py-8"
          >
            <Package size={16} />
            <span>Npm</span>
          </button>
        </div>
      </div>
    ),
  },
  {
    id: "spectraq",
    title: "Architecting Spectra Q",
    excerpt: "Scaling real-time communities without breaking the socket layer.",
    date: "Jan 2, 2025",
    readTime: "10 min read",
    tags: [
      "Microservices",
      "Socket.IO",
      "Redis",
      "PubSub",
      "Message Queues",
      "Authentication",
      "TypeScript",
      "Distributed Systems",
    ],
    content: (
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          Building a real-time community platform sounds easy until you hit
          scale. Chats work fine with a few users — then suddenly a single
          community has thousands of concurrent members, message fan-out
          explodes, and your socket server starts choking.
        </p>

        <p>
          <strong>Spectra Q</strong> is a community-first chat platform built to
          handle that exact problem. It’s designed from day one to support
          large-scale communities without turning real-time messaging into a
          bottleneck.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">
          What is Spectra Q?
        </h3>

        <p>
          Spectra Q is an advanced community platform built on a microservices
          architecture. Each major concern is isolated into its own service:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Authentication Service</li>
          <li>Community Management Service</li>
          <li>Notification & Mail Service</li>
          <li>Real-time Chat Service</li>
        </ul>

        <p>
          The core challenge wasn’t building chat — it was scaling it reliably
          while keeping latency low and system complexity manageable across
          multiple services.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">
          Authentication at Scale
        </h3>

        <p>
          Authentication in Spectra Q goes beyond basic email-password flows.
          The platform uses an advanced OTP-based verification system designed
          for both security and performance.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Time-bound OTPs with strict expiry windows</li>
          <li>Hash-based OTP storage to avoid plaintext secrets</li>
          <li>Rate-limited verification attempts to prevent abuse</li>
          <li>Stateless validation backed by persistent storage</li>
        </ul>

        <p>
          This approach keeps the authentication service lightweight while
          maintaining strong guarantees against replay attacks and brute-force
          attempts.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">
          Message Queues for Mail & Notifications
        </h3>

        <p>
          Email delivery and notifications are intentionally decoupled from
          user-facing APIs. Instead of sending emails synchronously, Spectra Q
          uses message queues to offload all outbound communication.
        </p>

        <p>
          When an event occurs — account verification, OTP generation, or
          critical notification — the auth or community service publishes a
          message to the queue.
        </p>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Service emits a mail or notification event</li>
          <li>Event is pushed into a message queue</li>
          <li>Dedicated mail workers consume and process jobs</li>
          <li>Retries and failures are handled asynchronously</li>
        </ol>

        <p>
          This guarantees that slow or failing email providers never block core
          application flows.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">
          The Scaling Problem
        </h3>

        <p>
          Traditional Socket.IO setups assume a single room per community. That
          works until a room grows too large:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Broadcast latency increases</li>
          <li>Single-node memory usage spikes</li>
          <li>Horizontal scaling becomes painful</li>
        </ul>

        <p>
          I needed a model where communities could scale horizontally without
          forcing all users into a single socket room.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">
          Room-Based Sharding Strategy
        </h3>

        <p>
          In Spectra Q, every community has a primary identifier —
          <code>communityId</code>. Instead of binding all users to one room,
          the chat service dynamically shards communities into multiple rooms.
        </p>

        <p>The flow looks like this:</p>

        <ol className="list-decimal pl-6 space-y-2">
          <li>User joins a community</li>
          <li>User is connected to a socket room mapped to that community</li>
          <li>
            When a room reaches a threshold, a new room is created for the same
            community
          </li>
          <li>Room IDs are registered and tracked in Redis</li>
        </ol>

        <p>
          Each room handles a subset of users, dramatically reducing broadcast
          load per room.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">
          Redis Pub/Sub for Message Fan-Out
        </h3>

        <p>
          The real magic happens when messages need to cross room boundaries.
          Instead of direct socket fan-out, Spectra Q uses Redis Pub/Sub as the
          message backbone.
        </p>

        <pre className="bg-neutral-900 p-4 rounded-lg overflow-x-auto text-sm font-mono text-gray-200">
          {`community:{communityId}:messages`}
        </pre>

        <p>When a message is sent in any room belonging to a community:</p>

        <ol className="list-decimal pl-6 space-y-2">
          <li>The message is published to Redis</li>
          <li>All chat instances subscribed to that channel receive it</li>
          <li>Each instance forwards the message to its local rooms</li>
        </ol>

        <p>
          This decouples socket rooms from message distribution and allows the
          system to scale horizontally with zero awareness between nodes.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">
          Technology Stack
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Node.js + Express</strong> — Lightweight, fast, and
            battle-tested
          </li>
          <li>
            <strong>TypeScript</strong> — Strict contracts across services
          </li>
          <li>
            <strong>Socket.IO</strong> — Real-time bidirectional communication
          </li>
          <li>
            <strong>Redis / Valkey</strong> — Pub/Sub backbone and ephemeral
            state
          </li>
          <li>
            <strong>Message Queues</strong> — Async processing for mails and
            events
          </li>
          <li>
            <strong>Prisma + Supabase</strong> — Type-safe persistence layer
          </li>
        </ul>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">
          Why This Architecture Works
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Horizontal Scalability</strong> — Services scale
            independently
          </li>
          <li>
            <strong>Low Latency</strong> — Small socket rooms and async
            pipelines
          </li>
          <li>
            <strong>Fault Isolation</strong> — Failures don’t cascade across
            services
          </li>
          <li>
            <strong>Backpressure Handling</strong> — Queues absorb spikes safely
          </li>
        </ul>

        <p>
          The result is a system that feels simple from the outside but is
          extremely resilient under real-world load.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">
          Lessons Learned
        </h3>

        <p>
          Real-time systems fail not because of sockets, but because of
          synchronous assumptions. Once you embrace async boundaries — message
          queues, pub/sub, and stateless services — scaling becomes predictable.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">What’s Next</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Message persistence & replay</li>
          <li>Presence-aware load balancing</li>
          <li>Typed event contracts across services</li>
          <li>Advanced analytics for community activity</li>
        </ul>

        <p className="italic text-gray-400">
          Spectra Q is still evolving — but its foundations are designed to
          scale from day one.
        </p>
      </div>
    ),
  },
];
