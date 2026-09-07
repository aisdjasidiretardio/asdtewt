const fs = require("fs");

const file = "app/portal-client.tsx";
let src = fs.readFileSync(file, "utf8");

const winnerStart = src.indexOf("export function WinnerRoom()");
if (winnerStart === -1) {
  throw new Error("WinnerRoom not found");
}

const heroStart = src.indexOf("<WinnerHero>", winnerStart);
const heroEndTag = "</WinnerHero>";
const heroEnd = src.indexOf(heroEndTag, heroStart);

if (heroStart === -1 || heroEnd === -1) {
  throw new Error("WinnerHero block not found");
}

const replacement = `<WinnerHero>
        <Container>

          <Title
            style={{
              fontSize:"clamp(3.4rem, 8vw, 7rem)",
              lineHeight:".95",
              marginBottom:"18px"
            }}
          >
            Minted out {"\\u00B7"} final draw
          </Title>

          <Lead
            style={{
              margin:"0 auto 24px"
            }}
          >
            Draw in:
          </Lead>

          <DrawStatus>
            {isCountdown ? (
              <Countdown
                aria-label="Time remaining until the draw"
              >
                <TimeCell>
                  <b>{pad(hours)}</b>
                  <span>Hours</span>
                </TimeCell>

                <TimeCell>
                  <b>{pad(minutes)}</b>
                  <span>Minutes</span>
                </TimeCell>

                <TimeCell>
                  <b>{pad(seconds)}</b>
                  <span>Seconds</span>
                </TimeCell>
              </Countdown>
            ) : (
              <DrawMessage>
                <DrawLabel>
                  {hasWinners
                    ? "The seven winning IDs have been revealed."
                    : "The draw is live. Check X for the winning IDs."}
                </DrawLabel>
              </DrawMessage>
            )}
          </DrawStatus>

          <p
            style={{
              margin:"20px 0 0",
              color:"var(--red)",
              fontFamily:'"Cormorant Garamond", serif',
              fontSize:"1rem",
              fontWeight:700,
              letterSpacing:".08em",
              textTransform:"uppercase"
            }}
          >
            September 8 {"\\u00B7"} 3:30 PM UTC
          </p>

          <div
            style={{
              display:"flex",
              flexWrap:"wrap",
              justifyContent:"center",
              gap:"12px",
              marginTop:"28px"
            }}
          >
            <PortalFinalButton
              href="https://x.com/onecoinrbh"
              target="_blank"
              rel="noreferrer"
              style={{
                background:"var(--lapis)",
                color:"var(--light)",
                boxShadow:"5px 5px 0 var(--gold)"
              }}
            >
              Check X for the draw {"\\u2197"}
            </PortalFinalButton>

            <PortalFinalButton
              href="https://opensea.io/collection/onecoin"
              target="_blank"
              rel="noreferrer"
            >
              Get your NFT {"\\u2197"}
            </PortalFinalButton>
          </div>

        </Container>
      </WinnerHero>`;

src =
  src.slice(0, heroStart) +
  replacement +
  src.slice(heroEnd + heroEndTag.length);

// Make sure countdown has only 3 columns.
src = src.replace(
  /grid-template-columns:repeat\(4,1fr\);/g,
  "grid-template-columns:repeat(3,1fr);"
);

// Make hours total hours.
src = src.replace(
  /const hours = Math\.floor\(\s*\(remaining % 86400000\) \/ 3600000\s*\);/,
  `const hours = Math.floor(
    remaining / 3600000
  );`
);

fs.writeFileSync(file, src, "utf8");

// HARD VERIFICATION
const result = fs.readFileSync(file, "utf8");
const winnerRoom = result.slice(result.indexOf("export function WinnerRoom()"));

const forbidden = [
  "Seven doors.",
  "Seven fortunes.",
  "The draw room"
];

for (const text of forbidden) {
  if (winnerRoom.includes(text)) {
    throw new Error("FAILED TO REMOVE: " + text);
  }
}

if (!winnerRoom.includes('Minted out {"\\\\u00B7"} final draw')) {
  throw new Error("New Minted Out title was not inserted");
}

console.log("");
console.log("SUCCESS");
console.log("Removed: The draw room");
console.log("Removed: Seven doors.");
console.log("Removed: Seven fortunes.");
console.log("Large title inserted: Minted out · final draw");
console.log("");
