const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    // assetPrefix: isProd ? 'https://assets.cheatdot.com' : undefined,
    async rewrites() {
        return [
            {
                source: '/user/:mb_id([A-Za-z0-9+/=%]+)/board/:type(write|comment|visit_book)',
                destination: '/user/:mb_id/board/:type',
            },
            {
                source: '/guild/:channel(\\d+)',
                destination: '/guild/:channel',
            },
            {
                source: '/guild/:channel(\\d+)/:channel_id(\\d+)',
                destination: '/guild/:channel/:channel_id',
            },
        ];
    },
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'cheatdot.com' },
            { protocol: 'https', hostname: 'j.cheatdot.com' },
            { protocol: 'https', hostname: 'c.cheatdot.com' },
            { protocol: 'https', hostname: 'cdn.cheatdot.com' },
            { protocol: 'https', hostname: 'guild.cheatdot.com' }
        ],
        loader: 'default',
    },
    crossOrigin: 'anonymous'
}
