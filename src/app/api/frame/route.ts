import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const id: any = searchParams.get('id');
    const idAsNumber = parseInt(id);

    const nextId = idAsNumber + 1;

    if (idAsNumber === 7) {
        return new NextResponse(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>This is frame 7</title>
                    <meta property="fc:frame" content="vNext" />
                    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmfPP4Dbg9c4PsrYKgPHAFoxDhgQoQX7uWSvWjz2W7t9Bz" />
                    <meta property="fc:frame:button:1" content="Visit" />
                    <meta property="fc:frame:button:1:action" content="post_redirect" />
                    <meta property="fc:frame:button:2" content="Learn" />
                    <meta property="fc:frame:button:2:action" content="post_redirect" />
                    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
                </head>
            </html>`);
    } else {
        return new NextResponse(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>This is frame ${id}</title>
            <meta property="fc:frame" content="vNext" />
            <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmfPP4Dbg9c4PsrYKgPHAFoxDhgQoQX7uWSvWjz2W7t9Bz" />
            <meta property="fc:frame:button:1" content="Next page" />
            <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
        </head>
    </html>`);
    }
}

export async function POST(req: NextRequest) {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';
