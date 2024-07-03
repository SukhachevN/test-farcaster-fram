/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/cosmiccowboys',
                destination: 'https://nomis.cc/multichain',
                permanent: true,
            },
            {
                source: '/pinatacloud',
                destination: 'https://nomis.cc/multichain',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
