/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/visit',
                destination: 'https://nomis.cc/multichain',
                permanent: false,
            },
            {
                source: '/learn',
                destination: 'https://nomis.cc/rubic',
                permanent: false,
            },
            {
                source: '/redirect',
                destination: 'https://192.168.1.149:5173/',
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
