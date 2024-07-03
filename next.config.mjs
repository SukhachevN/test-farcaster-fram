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
        ];
    },
};

export default nextConfig;
