"""Generate Shlok Patel's CV PDF (v2 layout).

Rebuilds the CV using the v2 structure — categorised skills, senior-tone
summary, dropped high-school entries — populated with data from the
existing PDF. No fabricated metrics: placeholders that neither source
resolves (dashboard numbers, GitHub handle, projects) are omitted.
"""
from pathlib import Path

from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    ListFlowable,
    ListItem,
)


ROOT = Path(__file__).resolve().parent.parent
OUT_ROOT = ROOT / "Shlok Patel CV.pdf"
OUT_PUBLIC = ROOT / "public" / "Shlok-Patel-CV.pdf"


BASE_FONT = "Helvetica"
BOLD_FONT = "Helvetica-Bold"

styles = {
    "name": ParagraphStyle(
        "name", fontName=BOLD_FONT, fontSize=17, alignment=1, leading=19,
        spaceAfter=2, tracking=2,
    ),
    "contact": ParagraphStyle(
        "contact", fontName=BASE_FONT, fontSize=9.5, alignment=1, leading=12,
    ),
    "section": ParagraphStyle(
        "section",
        fontName=BOLD_FONT,
        fontSize=11,
        leading=13,
        spaceBefore=10,
        spaceAfter=4,
        textColor="#000000",
    ),
    "body": ParagraphStyle(
        "body", fontName=BASE_FONT, fontSize=9.5, leading=12.5, spaceAfter=2,
    ),
    "role": ParagraphStyle(
        "role", fontName=BASE_FONT, fontSize=9.5, leading=12.5, spaceAfter=2,
    ),
    "bullet": ParagraphStyle(
        "bullet", fontName=BASE_FONT, fontSize=9.5, leading=12.5,
    ),
}


def rule():
    from reportlab.platypus import HRFlowable
    return HRFlowable(
        width="100%", thickness=0.6, color="#000000",
        spaceBefore=1, spaceAfter=4,
    )


def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(t, styles["bullet"]), leftIndent=10, spaceBefore=1)
         for t in items],
        bulletType="bullet",
        start="•",
        bulletFontName=BASE_FONT,
        bulletFontSize=8,
        leftIndent=12,
        bulletIndent=2,
        spaceBefore=0,
        spaceAfter=0,
    )


def section(title):
    return [Paragraph(title.upper(), styles["section"]), rule()]


def build_story():
    story = []

    # Header
    story.append(Paragraph("SHLOK PATEL", styles["name"]))
    story.append(
        Paragraph(
            "2015 Oak Tree Rd, Edison, NJ 08820 &nbsp;|&nbsp; "
            "(732) 983-1148 &nbsp;|&nbsp; shlokpatel1020@gmail.com",
            styles["contact"],
        )
    )
    story.append(
        Paragraph(
            '<link href="https://github.com/ShlokPatel551">github.com/ShlokPatel551</link>'
            " &nbsp;|&nbsp; LinkedIn",
            styles["contact"],
        )
    )
    story.append(Spacer(1, 4))

    # Summary
    story.extend(section("Summary"))
    story.append(
        Paragraph(
            "IT professional with hands-on experience in systems administration, "
            "network infrastructure, and Python-based automation. CompTIA A+ and "
            "Network+ certified, holding an M.S. in Information Technology. "
            "Experienced supporting production servers and troubleshooting across "
            "hardware, software, and networking layers. Seeking a systems "
            "administration, IT support engineering, or network operations role.",
            styles["body"],
        )
    )

    # Technical Skills
    story.extend(section("Technical Skills"))
    skill_rows = [
        ("Networking",
         "TCP/IP, DNS, DHCP, VPN, VLANs, routing and switching, firewall "
         "configuration, network troubleshooting"),
        ("Scripting &amp; Development",
         "Python (automation, scripting), Bash, back-end development, "
         "Android development"),
        ("Systems &amp; Infrastructure",
         "Server administration, deployment automation, system monitoring, "
         "backup and recovery, patch management"),
        ("Security",
         "Network security fundamentals, access control, security compliance "
         "documentation"),
        ("Data",
         "Excel (advanced formulas, reporting), data analysis, Google Workspace"),
    ]
    for label, value in skill_rows:
        story.append(Paragraph(f"<b>{label}:</b> {value}", styles["body"]))

    # Professional Experience
    story.extend(section("Professional Experience"))

    story.append(
        Paragraph(
            "<b>Software Development Engineer &amp; Systems Administrator</b> "
            "&nbsp;|&nbsp; Sunrise Wholesalers Inc.",
            styles["role"],
        )
    )
    story.append(
        Paragraph("New Jersey, USA &nbsp;|&nbsp; November 2025 – Present",
                  styles["role"])
    )
    story.append(
        bullets(
            [
                "Administer production servers and supporting network "
                "infrastructure, maintaining uptime and security across "
                "business-critical systems.",
                "Build Python automation for deployment, monitoring, and "
                "routine maintenance to reduce manual intervention.",
                "Design, develop, and maintain internal software systems and "
                "applications supporting daily operations.",
                "Diagnose and resolve hardware, software, and networking issues "
                "as first-line technical owner.",
                "Maintain system documentation and security compliance records; "
                "collaborate cross-functionally on reliability and scalability.",
            ]
        )
    )
    story.append(Spacer(1, 6))

    story.append(
        Paragraph(
            "<b>Intern — Digital Media &amp; Technical Support</b> "
            "&nbsp;|&nbsp; Dev Infotech",
            styles["role"],
        )
    )
    story.append(
        Paragraph("Vadodara, Gujarat, India &nbsp;|&nbsp; June 2019",
                  styles["role"])
    )
    story.append(
        bullets(
            [
                "Provided technical support to customers, diagnosing and "
                "resolving website and hosting issues.",
                "Registered and managed domain names and web hosting accounts; "
                "repaired site functionality faults and optimised UI/UX.",
                "Produced monthly Excel reports using advanced formulas to "
                "surface data trends for internal stakeholders.",
                "Managed content and market research across social platforms "
                "(Pinterest, Facebook, Instagram) to support content strategy.",
            ]
        )
    )

    # Education
    story.extend(section("Education"))
    education_lines = [
        (
            "University of North America, Virginia, USA",
            "M.S. Information Technology",
            "2024 – 2025",
        ),
        (
            "Maharaja Sayajirao University of Baroda, Gujarat, India",
            "B.C.A. Computer Applications",
            "2019 – 2022",
        ),
    ]
    for school, degree, years in education_lines:
        story.append(
            Paragraph(
                f"<b>{school}</b> — {degree} &nbsp;|&nbsp; {years}",
                styles["body"],
            )
        )

    # Certifications
    story.extend(section("Certifications"))
    cert_lines = [
        "<b>CompTIA Network+</b> (Apr 2021) &nbsp;|&nbsp; "
        "<b>CompTIA A+</b> (Jan 2021)",
        "<b>Cisco Network Support and Security</b> (Sep 2023) &nbsp;|&nbsp; "
        "<b>Network Certified Engineer: Programming, Security, IoT 4.0</b> "
        "(Feb 2022)",
        "<b>Python Essentials 1 &amp; 2</b> (Aug 2023) &nbsp;|&nbsp; "
        "<b>NDG Developing IT Professionals</b> (Nov 2020) &nbsp;|&nbsp; "
        "<b>IoT Using MicroPython</b> (Sep 2019)",
    ]
    for line in cert_lines:
        story.append(Paragraph(line, styles["body"]))

    return story


def build_pdf(path: Path):
    doc = SimpleDocTemplate(
        str(path),
        pagesize=LETTER,
        leftMargin=0.7 * inch,
        rightMargin=0.7 * inch,
        topMargin=0.55 * inch,
        bottomMargin=0.55 * inch,
        title="Shlok Patel CV",
        author="Shlok Patel",
    )
    doc.build(build_story())


if __name__ == "__main__":
    for out in (OUT_ROOT, OUT_PUBLIC):
        out.parent.mkdir(parents=True, exist_ok=True)
        build_pdf(out)
        print(f"wrote {out}")
