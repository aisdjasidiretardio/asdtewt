const fs = require("fs");

const file = "app/portal-client.tsx";
let src = fs.readFileSync(file, "utf8");

const winnerIndex = src.indexOf("export function WinnerRoom()");

if (winnerIndex === -1) {
  throw new Error("WinnerRoom not found.");
}

const before = src.slice(0, winnerIndex);
let room = src.slice(winnerIndex);

/*
 * 1. DELETE THE OLD DRAW ROOM HERO FOR REAL
 *
 * Removes:
 * THE DRAW ROOM
 * SEVEN DOORS.
 * SEVEN FORTUNES.
 * description
 * 7 / $1000 / 1000x boxes
 */
const oldHero = /<Kicker>\s*The draw room\s*<\/Kicker>[\s\S]*?<\/Promise>/i;

if (!oldHero.test(room)) {
  throw new Error(
    'Could not locate "<Kicker>The draw room</Kicker> ... </Promise>"'
  );
}

room = room.replace(oldHero, "");


/*
 * 2. REMOVE ANY EXISTING SMALL "MINTED OUT · FINAL DRAW"
 */
room = room.replace(
  /<Kicker>[\s\S]{0,200}?Minted out[\s\S]{0,200}?final draw[\s\S]{0,200}?<\/Kicker>/i,
  ""
);

room = room.replace(
  /<PostMintTitle[^>]*>[\s\S]{0,200}?Minted out[\s\S]{0,200}?final draw[\s\S]{0,200}?<\/PostMintTitle>/i,
  ""
);

room = room.replace(
  /<Title[^>]*>[\s\S]{0,200}?Minted out[\s\S]{0,200}?final draw[\s\S]{0,200}?<\/Title>/i,
  ""
);


/*
 * 3. REMOVE OLD "DRAW IN:" IF ONE EXISTS
 */
room = room.replace(
  /<Lead[^>]*>[\s\S]{0,100}?Draw in\s*:?\s*[\s\S]{0,100}?<\/Lead>/i,
  ""
);


/*
 * 4. INSERT THE BIG TITLE DIRECTLY ABOVE THE TIMER
 */
const drawStatusIndex = room.indexOf("<DrawStatus>");

if (drawStatusIndex === -1) {
  throw new Error("DrawStatus not found.");
}

const bigHeading = `
          <Title
            style={{
              fontSize:"clamp(3.8rem, 9vw, 7.4rem)",
              lineHeight:".94",
              margin:"0 0 20px"
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

          `;

room =
  room.slice(0, drawStatusIndex) +
  bigHeading +
  room.slice(drawStatusIndex);


/*
 * 5. ENSURE TIMER = HOURS / MINUTES / SECONDS ONLY
 */
let result = before + room;

result = result.replace(
  /grid-template-columns:repeat\(4,1fr\);/g,
  "grid-template-columns:repeat(3,1fr);"
);

result = result.replace(
  /const hours = Math\.floor\(\s*\(remaining % 86400000\) \/ 3600000\s*\);/,
  `const hours = Math.floor(
    remaining / 3600000
  );`
);

fs.writeFileSync(file, result, "utf8");


/*
 * 6. HARD VERIFY THE RESULT
 */
const check = fs.readFileSync(file, "utf8");
const finalRoom = check.slice(
  check.indexOf("export function WinnerRoom()")
);

const forbidden = [
  "Seven doors",
  "Seven fortunes",
  "The draw room"
];

console.log("");
console.log("VERIFYING...");
console.log("");

let failed = false;

for (const text of forbidden) {
  const exists = finalRoom.toLowerCase().includes(text.toLowerCase());

  console.log(
    `${text}: ${exists ? "STILL EXISTS - ERROR" : "REMOVED"}`
  );

  if (exists) {
    failed = true;
  }
}

const mintedExists =
  finalRoom.includes('Minted out {"\\\\u00B7"} final draw');

console.log(
  `Big Minted Out title: ${mintedExists ? "YES" : "NO - ERROR"}`
);

if (failed || !mintedExists) {
  process.exit(1);
}

console.log("");
console.log("SUCCESS.");
console.log("");
