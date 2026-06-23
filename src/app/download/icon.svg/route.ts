const iconSvg = `<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="22" cy="22" r="22" fill="#08090C" />
  <circle cx="22" cy="22" r="18" stroke="#818CF8" stroke-width="2.2" />
  <line x1="12" y1="12" x2="12" y2="32" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" />
  <line x1="12" y1="12" x2="26" y2="12" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" />
  <line x1="26" y1="12" x2="24" y2="22" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" />
  <line x1="12" y1="22" x2="24" y2="22" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" />
  <line x1="24" y1="22" x2="38" y2="38" stroke="#818CF8" stroke-width="2.2" stroke-linecap="round" />
</svg>`;

export function GET() {
  return new Response(iconSvg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Content-Disposition": 'attachment; filename="icon.svg"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
