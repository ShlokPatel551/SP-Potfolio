export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  status: "Production" | "Prototype" | "Personal";
  role: string;
  timeframe: string;
  stack: string[];
  repo: string;
  live?: string;
  overview: string;
  problem: string[];
  approach: string[];
  build: {
    title: string;
    detail: string;
  }[];
  outcomes: string[];
  learnings: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "mailsender",
    name: "MailSender",
    tagline:
      "Multi-source lead engine that scrapes, dedupes, and delivers 500+ qualified leads a day.",
    status: "Production",
    role: "Solo builder — architecture, scrapers, dashboard, ops",
    timeframe: "2025 – present",
    stack: [
      "Python",
      "Playwright",
      "Google Sheets API",
      "Gmail OAuth",
      "Telegram Bot API",
      "React",
      "GitHub Actions",
    ],
    repo: "https://github.com/ShlokPatel551/-MailSender",
    overview:
      "Liffio's outbound engine needed a single system that could pull leads from Instagram, LinkedIn, Reddit, and Gmail, dedupe them across sources, sync into Google Sheets for the sales team, and page the founder on Telegram when interesting things happened — all without babysitting.",
    problem: [
      "Sales was manually copy-pasting leads out of 4 different tools every morning.",
      "No dedupe — the same prospect kept getting emailed twice from different lists.",
      "Zero visibility into which source was actually producing meetings.",
      "The scrapers that existed broke every time a platform shifted their DOM.",
    ],
    approach: [
      "Modelled every source as a pluggable 'scraper' with a common lead schema so the dedupe layer downstream didn't care where a lead came from.",
      "Chose Playwright over raw HTTP because Instagram and LinkedIn actively fingerprint and rotate; a real browser context was the only thing that survived a week.",
      "Made Google Sheets the source of truth for the sales team — familiar UI, no extra tool to log into.",
      "Wrapped the whole pipeline in GitHub Actions cron so there was no server to keep alive.",
    ],
    build: [
      {
        title: "Four platform scrapers",
        detail:
          "Instagram, LinkedIn, Reddit, and Gmail. Each returns leads in the same normalized shape (name, handle, source, first_seen_at, context).",
      },
      {
        title: "Dedupe + enrichment layer",
        detail:
          "Fuzzy-matches leads across sources on handle + display name, keeps the earliest seen record, merges context. Cuts ~30% duplicate outreach.",
      },
      {
        title: "Sheets sync",
        detail:
          "Writes leads into a Google Sheet with source tags and status columns the sales team can filter on. Two-way sync so status changes flow back.",
      },
      {
        title: "Telegram daily digest",
        detail:
          "Every morning: total new leads, top-3 hottest by score, per-source breakdown, and any scraper errors that need attention.",
      },
      {
        title: "React operator dashboard",
        detail:
          "Small internal UI to trigger runs on demand, tail logs, and re-authenticate Gmail/Google when tokens expire.",
      },
    ],
    outcomes: [
      "Runs unattended 24/7 via GitHub Actions — zero infra bill.",
      "Cut manual lead-gathering time from ~90 minutes/day to zero.",
      "Dedupe layer alone removed roughly a third of duplicate outreach.",
      "Telegram digest turned 'is the pipeline healthy?' from a 20-minute check into a 5-second read.",
    ],
    learnings: [
      "Normalizing at the scraper boundary — instead of the dedupe layer — was the single biggest architectural win. Adding a fifth source now takes an afternoon.",
      "Playwright + persistent browser contexts is dramatically more stable than rotating headers on raw HTTP for scraping targets that actively defend.",
      "GitHub Actions cron is under-appreciated as a 'no-server' scheduler for personal scale automations.",
    ],
  },
  {
    slug: "packet-sniffer",
    name: "Network Packet Sniffer",
    tagline:
      "Real-time packet capture and protocol decoder that surfaces suspicious traffic patterns as they happen.",
    status: "Personal",
    role: "Solo project — capture, decode, pattern detection",
    timeframe: "2023",
    stack: ["Python", "Scapy", "Wireshark", "argparse", "colorama"],
    repo: "https://github.com/ShlokPatel551/Network-Packet-Sniffer-and-Analyzer",
    overview:
      "A CLI packet sniffer built to actually understand how networks move data — not just to have a Wireshark clone. Captures live traffic on any interface, decodes protocol headers, and flags patterns that usually mean something is off.",
    problem: [
      "Wireshark is powerful but a firehose — hard to focus on one thing when learning.",
      "I wanted to see, per packet, exactly what a TCP or ICMP header actually contains, not just a pretty summary.",
      "Existing hobby sniffers didn't do any pattern detection — just a raw dump.",
    ],
    approach: [
      "Built directly on Scapy so the packet objects are inspectable end-to-end.",
      "Focused the CLI on three modes: live tail, protocol filter, and anomaly scan.",
      "Kept output plain-text and grep-friendly so it composes with the rest of a shell workflow.",
    ],
    build: [
      {
        title: "Live capture",
        detail:
          "Binds to any interface, decodes Ethernet → IP → TCP/UDP/ICMP → payload with per-layer summaries.",
      },
      {
        title: "Protocol filtering",
        detail:
          "Command-line flags to focus on one protocol, port, or source/dest IP — keeps the noise down while investigating.",
      },
      {
        title: "Anomaly patterns",
        detail:
          "Detects a small set of suspicious patterns out of the box: SYN floods, ARP spoofing signatures, unusual ICMP volume, DNS spikes.",
      },
      {
        title: "Session log",
        detail:
          "Every capture session writes a rolling log with timestamps so you can go back and inspect what happened at 3am.",
      },
    ],
    outcomes: [
      "Made TCP handshake, ARP resolution, and ICMP behaviour visceral — going from textbook diagrams to actually seeing them on the wire.",
      "Detected a misconfigured device on my home network sending thousands of ARP broadcasts a minute — first real-world find.",
      "Became a study aid for the Network+ and Cybersecurity certifications listed elsewhere on this site.",
    ],
    learnings: [
      "Building your own tool teaches you the protocol in a way that reading a book cannot.",
      "Simple, composable CLI output beats a fancy UI when the goal is learning and grep-ability.",
      "Scapy's packet-object model is a hidden gem — everything is Python, everything is inspectable.",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
