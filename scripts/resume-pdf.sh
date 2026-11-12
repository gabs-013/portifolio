#!/usr/bin/env bash
# Regenerates public/Gabriel-Martins-Resume.pdf from the /resume page (uses its print styles).
# Needs Google Chrome. Usage:  npm run build && npx next start -p 3000  (in one terminal), then
#   scripts/resume-pdf.sh [http://localhost:3000/resume]
set -euo pipefail
URL="${1:-http://localhost:3000/resume}"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
OUT="$(cd "$(dirname "$0")/.." && pwd)/public/Gabriel-Martins-Resume.pdf"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="$OUT" "$URL"
echo "Wrote $OUT"
