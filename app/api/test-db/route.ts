import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db('riza-db')

    const test = await db.collection('users').insertOne({ message: 'Hello Riza!' })

    return NextResponse.json({ success: true, test })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}