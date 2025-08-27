import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    message: 'Welcome to LivePast API',
    version: '1.0.0'
  })
}