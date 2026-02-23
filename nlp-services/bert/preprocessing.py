"""Tokenize objective text into CoNLL format for NER prediction."""

import re


def tokenize_to_conll(text: str) -> str:
    """Convert raw text to CoNLL-style lines: 'token O' per line.

    Returns the formatted string (not written to disk).
    """
    tokens = re.findall(r'\b\w+\b|[.,\'"]', text)
    return "".join(f"{token} O\n" for token in tokens)


def write_conll_file(text: str, output_path: str) -> None:
    """Tokenize *text* and write CoNLL-formatted lines to *output_path*."""
    with open(output_path, "w") as f:
        f.write(tokenize_to_conll(text))
