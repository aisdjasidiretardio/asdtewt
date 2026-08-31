# One Coin website

Mobile-first React landing page built with styled-components in the One Dollar project's illuminated-manuscript style.

## Run on Windows

1. Extract this ZIP into `C:\Users\adamp\Documents\onecoin`.
2. Open PowerShell in that folder.
3. Run:

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\START-WINDOWS.ps1
```

Then open the local URL shown in the terminal.

## Before launch

Open `app/site-client.tsx` and replace the two values at the top:

```ts
twitter: "https://x.com/YOUR_HANDLE",
contract: "https://example.com/PASTE-CONTRACT-LINK-HERE",
```

The second link must point to the deployed randomness contract or its block-explorer page.
