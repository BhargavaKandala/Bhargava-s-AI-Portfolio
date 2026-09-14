import { useEffect, useRef } from 'react';
import { useScene } from '../context/SceneContext';

/**
 * useDocumentMeta — Dynamic Meta Tags & Virtual Routing (History API)
 */

const ROOM_META = {
    null: {
        path: '/',
        title: 'Younus — Creative Web Developer & Interactive Web Engineer',
        description: 'Portfolio of Younus, Creative Web Developer specializing in immersive digital experiences, scrollytelling, 3D web experiences, motion design, and scalable full stack architecture.',
    },
    about: {
        path: '/about',
        title: 'About — Younus Portfolio',
        description: 'Learn about Younus — a Creative Web Developer bridging design and development to build immersive digital experiences inspired by Apple, Stripe, and Linear.',
    },
    gallery: {
        path: '/gallery',
        title: 'Gallery & Featured Work — Younus Portfolio',
        description: 'Explore projects built by Younus, including vegMart (a quick-commerce vegetable delivery app), Shawarma Delights (a restaurant website), and a fashion store e-commerce demo.',
    },
    studio: {
        path: '/studio',
        title: 'The Studio — Younus Portfolio',
        description: 'Explore Younus\'s interactive 3D studio showcasing full stack engineering architecture, 3D web experiments, and high-performance UI systems.',
    },
    contact: {
        path: '/contact',
        title: 'Contact — Younus Portfolio',
        description: 'Let\'s build something people remember. Get in touch with Younus for immersive web experiences and scalable full stack applications.',
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
        if (ogUrl) ogUrl.setAttribute('content', `https://developer.younus${meta.path}`);

        // Update canonical link
        const canonicalTag = document.querySelector('link[rel="canonical"]');
        if (canonicalTag) {
            canonicalTag.setAttribute('href', `https://developer.younus${meta.path}`);
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
