@echo off
chcp 65001 >nul
title Sistema de Gestão — Iniciando

REM Verifica se Node.js está instalado
node --version >nul 2>&1
if errorlevel 1 (
    color 4F
    cls
    echo.
    echo   ❌ ERRO: Node.js não encontrado!
    echo.
    echo   Instale em: https://nodejs.org (LTS)
    echo   Depois reinicie este arquivo.
    echo.
    pause
    exit /b 1
)

REM Verifica se node_modules existe
if not exist "node_modules" (
    color 0E
    cls
    echo.
    echo   ⏳ Instalando dependências...
    echo.
    echo   (isso pode levar 2-3 minutos, não feche!)
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo   ❌ Erro na instalação!
        pause
        exit /b 1
    )
)

REM Inicia o servidor
color 2F
cls
echo.
echo   ✓ Servidor iniciando...
echo.
echo   ========================================
echo     📦 NOME DA LOJA - Gestão de Estoque
echo   ========================================
echo.
echo   🌐 Abra no navegador:
echo      http://localhost:3000
echo.
echo   ========================================
echo.
timeout /t 2

start http://localhost:3000

call npm run dev