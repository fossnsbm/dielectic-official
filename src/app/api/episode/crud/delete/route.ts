import { connectToDatabase } from '@/utils/db'
import YourModel from '@/model/episode'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  await connectToDatabase()

  try {
    const { _id } = await req.json()

    const data = await YourModel.findByIdAndDelete({ _id })
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error deleting data from the database' },
      { status: 500 },
    )
  }
}
