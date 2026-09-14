/**
 * Studio Content Data
 * 
 * Custom content for Younus's interactive monitor towers.
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '▶',
        label: 'Tech Demo',
        shape: 'tv', // Wide CRT style
    },
    blog: {
        color: '#5BE7FF',
        accentColor: '#00D9FF',
        icon: '📝',
        label: 'Case Study',
        shape: 'monitor', // Thin desktop monitor
    },
    tiktok: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '📱',
        label: 'Micro Motion',
        shape: 'phone', // Vertical phone
    },
    linkedin: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: 'in',
        label: 'Milestone',
        shape: 'monitor',
    },
    codrops: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '💧',
        label: 'Featured',
        shape: 'monitor',
    },
};

const RAW_CONTENT_DATA = [
    // ============ Case Studies / Projects ============
    {
        id: 'studio-vegmart',
        platform: 'blog',
        title: 'vegMart: Full Stack Quick-Commerce Build',
        description: 'Building a local vegetable ordering & delivery app with a customer storefront, an owner dashboard, and Supabase-backed inventory and order management.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: '#project/vegmart',
        date: '2026-03-24',
        readTime: '8 min',
    },
    {
        id: 'studio-shawarma-delights',
        platform: 'blog',
        title: 'Shawarma Delights: Cinematic Restaurant Landing Page',
        description: 'Designing a dark, cinematic website for a local Hyderabad fast food restaurant, built to give a small business a polished online presence.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: '#project/shawarma-delights',
        date: '2026-02-15',
        readTime: '6 min',
    },
    {
        id: 'studio-fashionstoreapp',
        platform: 'blog',
        title: 'Fashion Store App: E-Commerce UI Patterns',
        description: 'Exploring core e-commerce UI patterns — product listings, product detail views, and a cart-style shopping flow.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        thumbnail: null,
        url: '#project/fashionstoreapp',
        date: '2026-01-10',
        readTime: '5 min',
    },
    {
        id: 'studio-micro-interaction',
        platform: 'tiktok',
        title: 'Breaking Down English Grammar in 60 Seconds',
        description: 'Behind the scenes of making short, educational English-learning Reels — scripting a hook, keeping it snappy, and making grammar stick.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2026-03-01',
        views: '5.2K',
        likes: '840',
    },
    {
        id: 'studio-perf',
        platform: 'blog',
        title: 'Notes on Building Fast, Interactive Web UIs',
        description: 'A few practical habits for keeping interactive sites smooth and responsive without over-engineering the stack.',
        thumbnail: null,
        url: '#',
        date: '2025-10-15',
        readTime: '10 min',
    },
];

const ytTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego.webp', '/textures/studio/tvfront_filmikedytowaniezdjec.webp'];
const ytPaintedTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp', '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp'];
const blogTextures = ['/textures/studio/monitorfront_postnafbdoublewinner.webp'];
const blogPaintedTextures = ['/textures/studio/monitorfront_postnafbdoublewinner_painted.webp'];
const ttTextures = ['/textures/studio/phonefront_followmeontiktok.webp'];
const ttPaintedTextures = ['/textures/studio/phonefront_followmeontiktok_painted.webp'];

let ytIdx = 0, blogIdx = 0, ttIdx = 0;
let ytPIdx = 0, blogPIdx = 0, ttPIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item) => {
    return {
        ...item,
        frontTexture: item.frontTexture || (
            item.platform === 'youtube' ? ytTextures[ytIdx++ % ytTextures.length] :
                item.platform === 'blog' ? blogTextures[blogIdx++ % blogTextures.length] :
                    ttTextures[ttIdx++ % ttTextures.length]
        ),
        paintedFrontTexture: item.paintedFrontTexture || (
            item.platform === 'youtube' ? ytPaintedTextures[ytPIdx++ % ytPaintedTextures.length] :
                item.platform === 'blog' ? blogPaintedTextures[blogPIdx++ % blogPaintedTextures.length] :
                    ttPaintedTextures[ttPIdx++ % ttPaintedTextures.length]
        )
    };
});

export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
