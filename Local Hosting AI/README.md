# Ollama Setup Guide

## Overview
This guide provides instructions to install Ollama, download the `deepseek-coder:6.7b` model, and run it on Windows, MacOS, and Linux.

## Minimum System Requirements
- **CPU**: 8-core processor (Intel i7-8700K / AMD Ryzen 5 3600 or better)
- **RAM**: 16GB
- **GPU**: NVIDIA GTX 1650 / AMD RX 580 with 4GB VRAM
- **Storage**: 20GB free space

## Recommended System Requirements
- **CPU**: 12-core processor (Intel i9-12900K / AMD Ryzen 9 5900X or better)
- **RAM**: 32GB
- **GPU**: NVIDIA RTX 3090 / AMD Radeon RX 6900 XT with 24GB VRAM
- **Storage**: 50GB free space (for multiple models)

## Installation Instructions

### Windows (PowerShell)
```powershell
winget install Ollama.Ollama
ollama pull deepseek-coder:6.7b
ollama run deepseek-coder:6.7b
```

### Windows (Batch Script - `.bat`)
```batch
@echo off
echo Installing Ollama...
winget install Ollama.Ollama
echo Pulling deepseek-coder:6.7b model...
ollama pull deepseek-coder:6.7b
echo Running Ollama...
ollama run deepseek-coder:6.7b
```

### MacOS (Bash)
```bash
brew install ollama
ollama pull deepseek-coder:6.7b
ollama run deepseek-coder:6.7b
```

### Linux (Debian-based)
```bash
curl -fsSL https://ollama.ai/install.sh | sh
ollama pull deepseek-coder:6.7b
ollama run deepseek-coder:6.7b
```

## Running and Testing Ollama
To start the Ollama server, run:
```bash
ollama serve
```

To test the setup:
```bash
ollama run deepseek-coder:6.7b
```
You should see the model responding to prompts in your terminal.

## Troubleshooting
- If Ollama is not recognized, restart your terminal.
- Ensure your GPU drivers are up to date for optimal performance.
- If the model fails to load, check if you have enough VRAM and disk space.

## Additional Notes
For more details, visit [Ollama's documentation](https://ollama.ai/docs).

