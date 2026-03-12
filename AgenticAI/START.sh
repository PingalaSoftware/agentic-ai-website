#!/bin/bash

echo "🚀 Starting Agentic AI Show 2026 Website..."
echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "🔨 Building the application..."
npm run build

echo ""
echo "✅ Build complete!"
echo ""
echo "🌐 Starting development server..."
echo "   Open http://localhost:3000 in your browser"
echo ""
echo "   Press Ctrl+C to stop the server"
echo ""

npm run dev
