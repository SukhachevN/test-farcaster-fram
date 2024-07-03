import { getFrameMetadata } from '@coinbase/onchainkit/core';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
    buttons: [{ label: 'Begin' }],
    image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmfPP4Dbg9c4PsrYKgPHAFoxDhgQoQX7uWSvWjz2W7t9Bz`,
    post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
    title: 'Title',
    description: 'Description',
    openGraph: {
        title: 'Title',
        description: 'Description',
        images: [
            `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmfPP4Dbg9c4PsrYKgPHAFoxDhgQoQX7uWSvWjz2W7t9Bz`,
        ],
    },
    other: {
        ...frameMetadata,
    },
};
