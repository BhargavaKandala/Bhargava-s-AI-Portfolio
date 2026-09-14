import { useEffect } from 'react';

/**
 * Lightweight RoomWarmup Component
 * Signals scene ready immediately on mount to ensure instant 3D rendering.
 */
const RoomWarmup = ({ onWarmupComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onWarmupComplete?.();
        }, 50);
        return () => clearTimeout(timer);
    }, [onWarmupComplete]);

    return null;
};

export default RoomWarmup;
