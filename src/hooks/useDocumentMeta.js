import { useEffect, useRef } from 'react';
import { useScene } from '../context/SceneContext';

/**
 * useDocumentMeta — Dynamic Meta Tags & Virtual Routing (History API)
 */

// TODO: replace with the real deployed origin (also update index.html JSON-LD
// and public/sitemap.xml, which hard-code the same origin).
const SITE_ORIGIN = 'https://YOUR-DOMAIN.com';

const ROOM_META = {
    null: {
        path: '/',
        title: 'Sree Bhargava — AI Engineer & Creative Developer',
        description: 'Portfolio of Sree Bhargava — AI Engineer building agentic systems, local LLM pipelines and deep learning models, and a creative developer building immersive 3D web experiences.',
    },
    about: {
        path: '/about',
        title: 'About — Sree Bhargava Portfolio',
        description: 'Learn about Sree Bhargava — an AI Engineer working on agentic systems, local language models and deep learning, who builds the interfaces around them too.',
    },
    gallery: {
        path: '/gallery',
        title: 'Gallery & Featured Work — Sree Bhargava Portfolio',
        description: 'Selected projects by Sree Bhargava — satellite image super-resolution, a self-correcting code agent, and a fully local voice-driven AI command centre.',
    },
    studio: {
        path: '/studio',
        title: 'The Studio — Sree Bhargava Portfolio',
        description: 'Sree Bhargava\'s interactive 3D studio — write-ups on agentic AI pipelines, local LLM tooling, and deep learning for remote sensing.',
    },
    contact: {
        path: '/contact',
        title: 'Contact — Sree Bhargava Portfolio',
        description: 'Let\'s build something people remember. Get in touch with Sree Bhargava about AI engineering, agentic systems, or creative web work.',
    },
};

// Map URL paths back to room IDs for deep linking
const PATH_TO_ROOM = {
    '/': null,
    '/about': 'about',
    '/gallery': 'gallery',
    '/studio': 'studio',
    '/contact': 'contact',
};

export function getInitialRoomFromUrl() {
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    return PATH_TO_ROOM[path] !== undefined ? PATH_TO_ROOM[path] : null;
}

export function useDocumentMeta() {
    const { currentRoom, teleportTo, hasEntered } = useScene();
    const isHandlingPopState = useRef(false);
    const lastPushedRoom = useRef(undefined); // Track what we last pushed to avoid duplicates

    // Update document meta and URL when room changes
    useEffect(() => {
        const roomKey = currentRoom === null ? 'null' : currentRoom;
        const meta = ROOM_META[roomKey] || ROOM_META['null'];

        // Update the page title
        document.title = meta.title;

        // Update meta description
        const descTag = document.querySelector('meta[name="description"]');
        if (descTag) {
            descTag.setAttribute('content', meta.description);
        }

        // Update OG meta tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', meta.title);

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', meta.description);

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute('content', `${SITE_ORIGIN}${meta.path}`);

        // Update canonical link
        const canonicalTag = document.querySelector('link[rel="canonical"]');
        if (canonicalTag) {
            canonicalTag.setAttribute('href', `${SITE_ORIGIN}${meta.path}`);
        }

        // Push to browser history
        if (!isHandlingPopState.current && lastPushedRoom.current !== currentRoom) {
            if (lastPushedRoom.current === undefined) {
                window.history.replaceState({ room: currentRoom }, '', meta.path);
            } else {
                window.history.pushState({ room: currentRoom }, '', meta.path);
            }
            lastPushedRoom.current = currentRoom;
        }
        isHandlingPopState.current = false;
    }, [currentRoom]);

    // Handle browser back/forward buttons
    useEffect(() => {
        const handlePopState = (e) => {
            const room = e.state ? e.state.room : null;
            if (room !== undefined) {
                isHandlingPopState.current = true;
                lastPushedRoom.current = room;
                teleportTo(room);
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [teleportTo]);
}
