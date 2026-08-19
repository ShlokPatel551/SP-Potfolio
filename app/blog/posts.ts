export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  body: {
    heading?: string;
    paragraphs?: string[];
    bullets?: string[];
    code?: { language: string; snippet: string };
    callout?: string;
  }[];
};

export const POSTS: Post[] = [
  {
    slug: "github-actions-as-a-server",
    title: "GitHub Actions is the server I never had to pay for",
    excerpt:
      "MailSender pulls 500+ leads a day across four platforms and costs $0/month to run. Here's why a cron-triggered workflow beat every VPS I considered.",
    date: "2025-11-04",
    readingTime: "6 min read",
    tags: ["Automation", "GitHub Actions", "Python", "Infra"],
    body: [
      {
        paragraphs: [
          "When I built MailSender, the first architecture question wasn't which framework or which scraper library — it was: where does this thing actually live?",
          "The obvious answer for a Python job that runs on a schedule is 'a small VPS with a cron entry.' I've set up dozens of those. But for a project that has to survive on zero budget and zero babysitting, the boring VPS answer is worse than it looks.",
        ],
      },
      {
        heading: "The hidden cost of a small server",
        paragraphs: [
          "A $6/month droplet sounds free. What's not free is: keeping the OS patched, remembering to rotate logs, hardening SSH, monitoring disk usage, restarting the cron daemon when systemd throws a fit, and being on the hook every time something silently stops running.",
          "For a lead-scraper that runs four times a day, none of that work produces user value. It's pure operational tax.",
        ],
      },
      {
        heading: "Why Actions won",
        bullets: [
          "Cron is a first-class primitive. `schedule: cron: '0 */6 * * *'` and you're done — no daemon, no service file, no logrotate.",
          "Secrets management is baked in. Gmail OAuth tokens, Google Sheets service accounts, and the Telegram bot key all live in encrypted repo secrets, not on some server's disk.",
          "Every run is a fresh, disposable Ubuntu container. If Playwright leaves crumbs, they die with the runner. No 'why is /tmp full again' at 2am.",
          "Logs are the run output. Zero effort. Grep-able from the web UI or `gh run view`.",
          "Free tier covers ~2000 minutes/month of private-repo compute. MailSender uses maybe 40.",
        ],
      },
      {
        heading: "What it looks like",
        code: {
          language: "yaml",
          snippet: `name: mailsender
on:
  schedule:
    - cron: '0 */6 * * *'
  workflow_dispatch:

jobs:
  scrape:
    runs-on: ubuntu-latest
    timeout-minutes: 20
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with: { python-version: '3.11' }
      - run: pip install -r requirements.txt
      - run: playwright install chromium
      - run: python -m mailsender.run
        env:
          SHEETS_SA_JSON: \${{ secrets.SHEETS_SA_JSON }}
          TELEGRAM_TOKEN:  \${{ secrets.TELEGRAM_TOKEN }}
          GMAIL_REFRESH:   \${{ secrets.GMAIL_REFRESH }}`,
        },
      },
      {
        heading: "Where it breaks down",
        paragraphs: [
          "Actions is not a good fit if you need low latency (cold start + browser install is ~30-45s) or if a single run needs more than 6 hours. It's also worth watching your minute usage the moment a job goes north of 10 minutes on a frequent schedule.",
          "For a hobby-scale or founder-scale automation, though? The answer to 'do I need a server?' is more often than not: no, you need a workflow file.",
        ],
      },
      {
        callout:
          "Rule of thumb I use now: if a job runs on a schedule, terminates in under 20 minutes, and doesn't need a public inbound URL — start on GitHub Actions. Only reach for infrastructure when Actions actually stops fitting.",
      },
    ],
  },
  {
    slug: "packet-sniffer-taught-me-tcp",
    title: "Writing a packet sniffer taught me TCP better than any book",
    excerpt:
      "I read the same chapter on the three-way handshake five times. It didn't stick until I watched my own code decode a SYN packet off the wire.",
    date: "2025-09-18",
    readingTime: "5 min read",
    tags: ["Networking", "Security", "Python", "Scapy"],
    body: [
      {
        paragraphs: [
          "There's a specific kind of knowledge that only shows up when you build the tool instead of using it. TCP was that for me.",
          "I could recite the handshake — SYN, SYN-ACK, ACK — long before I actually understood what those flags mean, why the sequence numbers are chosen the way they are, or what a half-open connection looks like from the outside.",
        ],
      },
      {
        heading: "What clicked",
        paragraphs: [
          "Scapy hands you a packet as a Python object. You can print it, index into it, ask for its layers, and see the exact byte layout. Once I wrote a sniffer that binds to an interface and prints every packet's Ethernet → IP → TCP breakdown, the abstractions collapsed into concrete things I could point at.",
          "The moment I actually understood retransmission wasn't reading about it — it was watching my own laptop send the same segment three times because my flaky wifi dropped the ACK.",
        ],
      },
      {
        heading: "The pattern that helped",
        bullets: [
          "Pick a protocol you 'know.' Write a sniffer that decodes just that layer, badly.",
          "Break it on purpose. Send a malformed packet, block an ACK, force a retransmit. Watch what your tool sees vs. what you expected.",
          "Add one detection pattern — SYN flood, ARP spoof signature, unusual ICMP volume. You'll learn the protocol's failure modes by having to describe them in code.",
        ],
      },
      {
        heading: "The unexpected win",
        paragraphs: [
          "The first real thing I caught with my own sniffer wasn't a textbook example — it was a misconfigured smart plug on my home network blasting ARP broadcasts every few seconds. I noticed because my anomaly counter kept spiking every time I re-ran capture.",
          "Would Wireshark have shown me the same thing? Yes. Would I have looked? No. Building the tool is what made me look.",
        ],
      },
      {
        callout:
          "If a concept isn't sticking from reading, write the smallest possible tool that forces you to touch it end-to-end. The tool doesn't have to be good. It has to be yours.",
      },
    ],
  },
  {
    slug: "512-bytes-to-boot",
    title: "512 bytes to boot: what a bootloader taught me about abstraction",
    excerpt:
      "Every modern framework is a leaky abstraction over something. Writing 512 bytes of x86 assembly that hands control to a kernel showed me the floor.",
    date: "2025-06-22",
    readingTime: "7 min read",
    tags: ["Assembly", "Systems", "x86", "OS Dev"],
    body: [
      {
        paragraphs: [
          "The BIOS gives you 512 bytes. That's it. Your bootloader has to fit in one disk sector, end with the magic bytes `0x55 0xAA`, load the rest of your kernel off disk, and hand over control — all before you have a stack, an OS, or anything resembling a standard library.",
          "Working under that budget changes how you think about everything above it.",
        ],
      },
      {
        heading: "You don't have anything",
        paragraphs: [
          "No printf. No malloc. No file system. You have registers, ~30KB of usable RAM below the loaded code, and BIOS interrupts. If you want to print a character, you set AH to `0x0E`, put your character in AL, and call `int 0x10`. If you want to read a sector off disk, that's `int 0x13`.",
          "That's the interface. That's the whole operating environment.",
        ],
      },
      {
        heading: "The 'load the kernel' loop",
        code: {
          language: "asm",
          snippet: `; read 4 sectors of kernel from disk into 0x1000:0x0000
    mov ah, 0x02        ; BIOS: read sectors
    mov al, 4           ; sector count
    mov ch, 0           ; cylinder
    mov cl, 2           ; start at sector 2 (sector 1 is us)
    mov dh, 0           ; head
    mov bx, 0x1000
    mov es, bx
    xor bx, bx          ; es:bx = 0x1000:0x0000
    int 0x13
    jc  disk_error      ; carry set on error
    jmp 0x1000:0x0000   ; hand control to kernel`,
        },
      },
      {
        heading: "Why this matters even if you'll never do it again",
        bullets: [
          "You stop treating 'the OS' as a black box. Every syscall you make above this layer is eventually one of these BIOS-shaped things, wrapped and wrapped and wrapped.",
          "Byte budgets teach you compression. When you have 512 bytes total and 2 are reserved for the boot signature, you fight for every instruction.",
          "It permanently changes your intuition about startup cost. The reason your favourite framework takes 400ms to cold-start is now, retroactively, extremely funny.",
        ],
      },
      {
        heading: "The abstraction I actually learned",
        paragraphs: [
          "Abstractions aren't there to hide complexity — they're there to let you compose it. Standing at the bottom of the stack, in real-mode x86 with 30KB of RAM, I could feel exactly how much work every layer above me was doing on my behalf. That gratitude doesn't come from reading about it.",
        ],
      },
      {
        callout:
          "Every developer should write something under an artificial constraint once — 512 bytes, 4KB of RAM, one syscall. The constraint teaches faster than any tutorial.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
