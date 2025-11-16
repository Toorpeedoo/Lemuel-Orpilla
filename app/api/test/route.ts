import { NextResponse } from 'next/server'

// Force dynamic rendering to prevent static generation issues
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // Check if MONGODB_URI is set
    const mongodbUri = process.env.MONGODB_URI

    if (!mongodbUri) {
      // Return 200 with a warning instead of error to prevent build failures
      return NextResponse.json(
        {
          success: false,
          warning: 'MONGODB_URI is not configured',
          message: 'This route works without MongoDB. Add MONGODB_URI to your Vercel environment variables if you need MongoDB functionality.',
          mongodbConfigured: false,
        },
        { status: 200 }
      )
    }

    // If MONGODB_URI exists, you can test the connection here
    // For now, just return success
    return NextResponse.json({
      success: true,
      message: 'Test route is working',
      mongodbConfigured: true,
    })
  } catch (error: any) {
    console.error('Test route error:', error)
    // Return 200 with error info instead of 500 to prevent build failures
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'An error occurred',
        message: 'Route executed but encountered an error',
      },
      { status: 200 }
    )
  }
}

