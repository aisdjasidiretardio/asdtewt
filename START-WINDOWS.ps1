$ErrorActionPreference = "Stop"

$ProjectPath = "C:\Users\adamp\Documents\onecoin"

if (!(Test-Path $ProjectPath)) {
  New-Item -ItemType Directory -Path $ProjectPath | Out-Null
}

Set-Location $ProjectPath

if (!(Test-Path "package.json")) {
  Write-Host "Extract the contents of onecoin-website.zip into $ProjectPath first." -ForegroundColor Yellow
  exit 1
}

if (!(Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host "Node.js is not installed. Install Node.js 22 LTS, then run this file again." -ForegroundColor Red
  exit 1
}

Write-Host "Installing the One Coin website..." -ForegroundColor Cyan
npm install

Write-Host "Starting the website..." -ForegroundColor Green
npm run dev
