/**
 * Studio Content Data
 * 
 * Custom content for Sree Bhargava's interactive monitor towers.
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
        label: 'Agent Demo',
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
        id: 'studio-satellite-sr',
        platform: 'blog',
        title: 'Satellite Super-Resolution: 10 m to 2.5 m, Measured',
        description: 'Deep-learning super-resolution for Sentinel-2 imagery, validated against a bicubic control on PSNR, SSIM, SAM and ERGAS — plus a downstream land-cover test that checks the detail is actually useful, not just sharp.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: 'https://github.com/BhargavaKandala/Satellite-Super-Resolution-using-DL',
        date: '2026-09-01',
        readTime: '12 min',
    },
    {
        id: 'studio-self-correcting',
        platform: 'blog',
        title: 'Why Exit Code 0 Is a Terrible Success Signal',
        description: 'A coding agent that reads its own tracebacks and retries. The interesting part was the failure: given a weak success check, the model "fixed" a broken program by reducing it to a single import that exits cleanly and computes nothing.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: 'https://github.com/BhargavaKandala/Self-correcting-Code-Assistant',
        date: '2026-09-04',
        readTime: '10 min',
    },
    {
        id: 'studio-jarvis',
        platform: 'blog',
        title: 'JARVIS-OS: A Voice Assistant That Never Leaves the Machine',
        description: 'Local speech in and out — faster-whisper for listening, Kokoro via ONNX for speaking — with skills mapped into the model at runtime and long-term memory kept as a Markdown graph rather than a database.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        thumbnail: null,
        url: 'https://github.com/BhargavaKandala/JARVIS-V0.1',
        date: '2026-08-21',
        readTime: '9 min',
    },
    {
        id: 'studio-multi-agent-builder',
        platform: 'tiktok',
        title: 'One Idea In, A Working App Out',
        description: 'Four local agents — planner, developer, tester, reviewer — split the job the way a real team would. The reviewer gets the code *and* the tester\'s criticism of it, which is what turns the review into an actual fix.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: 'https://github.com/BhargavaKandala/multi-agent-app-builder',
        date: '2026-09-06',
        readTime: '7 min',
    },
    {
        id: 'studio-offline-agent',
        platform: 'blog',
        title: 'A ReAct Agent With No Framework Underneath',
        description: 'Tool calling against a 4B local model, with the reason-act-observe loop written out in plain Python instead of hidden behind a library. Turn on airplane mode mid-session and it keeps going.',
        thumbnail: null,
        url: 'https://github.com/BhargavaKandala/Fully-Offline-AI-agent-using-SLM',
        date: '2026-07-26',
        readTime: '8 min',
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
