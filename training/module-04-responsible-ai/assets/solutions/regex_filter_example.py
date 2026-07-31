"""
Simple regex-based post-filter example for instructor solutions.
This is a reference snippet to demonstrate how to flag or redact outputs containing disallowed tokens.
Not production-ready; adapt to your stack and logging/alerting requirements.
"""
import re

# Example blocklist (extend carefully)
BLOCKLIST = re.compile(r"\b(violent|hate|slur|sexual|ssn|password)\b", re.IGNORECASE)


def check_output(output: str) -> bool:
    """Return True if output is clean, False if flagged."""
    return BLOCKLIST.search(output) is None


def redact_output(output: str) -> str:
    """Redact blocklist tokens and return safe output (simple example)."""
    return BLOCKLIST.sub("[REDACTED]", output)


if __name__ == "__main__":
    samples = [
        "The candidate's SSN is 123-45-6789.",
        "A peaceful story about family life.",
        "This contains hate speech and a slur."
    ]

    for s in samples:
        clean = check_output(s)
        print("INPUT:", s)
        print("CLEAN?", clean)
        if not clean:
            print("REDACTED:", redact_output(s))
        print("---")
