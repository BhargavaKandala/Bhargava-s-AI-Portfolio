/**
 * Gallery projects.
 *
 * Kept in its own module (no three.js imports) so both the 3D GalleryRoom and
 * the always-loaded ScreenReaderOverlay can read it. The overlay is what makes
 * these projects visible to screen readers and crawlers, since the 3D canvas
 * itself is opaque to both.
 */
export const GALLERY_PROJECTS = [
    {
        id: 'satellite-super-resolution',
        title: 'SATELLITE SUPER-RESOLUTION',
        front: '/textures/gallery/timberkittyprzod.webp',
        painted: '/textures/gallery/timberkittyprzod_painted.webp',
        url: 'https://github.com/BhargavaKandala/Satellite-Super-Resolution-using-DL',
        description: 'Turns 10 m Sentinel-2 imagery into 2.5 m super-resolved GeoTIFFs with uncertainty maps and spectral-consistency metrics. Beats the bicubic baseline on PSNR, SSIM, SAM and ERGAS — and on downstream land-cover accuracy.',
        techStack: ['/textures/gallery/pytorchlogo.webp', '/textures/gallery/pythonlogo.webp', '/textures/gallery/opencvlogo.webp']
    },
    {
        id: 'self-correcting-code-assistant',
        title: 'SELF-CORRECTING CODE ASSISTANT',
        front: '/textures/gallery/bioprzod.webp',
        painted: '/textures/gallery/bioprzod_painted.webp',
        url: 'https://github.com/BhargavaKandala/Self-correcting-Code-Assistant',
        description: 'An agent that writes Python, runs it, reads its own tracebacks and rewrites the broken code until the tests pass. Two verification gates stop it from satisfying the checker instead of the task.',
        techStack: ['/textures/gallery/pythonlogo.webp', '/textures/gallery/langchainlogo.webp', '/textures/gallery/ollamalogo.webp']
    },
    {
        id: 'jarvis-os',
        title: 'JARVIS-OS',
        front: '/textures/gallery/youngmultiprzod.webp',
        painted: '/textures/gallery/youngmultiprzod_painted.webp',
        url: 'https://github.com/BhargavaKandala/JARVIS-V0.1',
        description: 'A fully local, voice-driven AI command centre — faster-whisper speech recognition, Kokoro ONNX speech synthesis, runtime skill mapping and a persistent Markdown-graph memory.',
        techStack: ['/textures/gallery/pythonlogo.webp', '/textures/gallery/geminilogo.webp', '/textures/gallery/langchainlogo.webp']
    }
];
