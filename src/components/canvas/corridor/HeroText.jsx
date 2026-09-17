import { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

// Local fonts for sketch-style typography (TTF format required by troika)
const RUBIK_SCRIBBLE_URL = '/fonts/RubikScribble-Regular.ttf';
const CABIN_SKETCH_URL = '/fonts/CabinSketch-Regular.ttf';

// Wordmark rendered as individual 3D letters. Spacing/positions are derived from
// this string, so changing the name re-flows the split animation automatically.
const WORDMARK = 'BHARGAVA';

// Tuned against the original 6-letter layout (spacing 0.36 @ fontSize 0.85):
// spacing/fontSize is held at ~0.42 so letter density stays identical, and
// SPLIT_RATIO is set so the outermost letter travels about as far as it used to.
const LETTER_SPACING = 0.32;
const LETTER_FONT_SIZE = 0.75;
const SPLIT_RATIO = 1.4;

/**
 * HeroText Component - Custom styled for Sree Bhargava
 */
const HeroText = ({ position = [0, 0.3, 0] }) => {
    const groupRef = useRef();
    const letterRefs = useRef([]);
    const taglineRefs = useRef([]);
    const { camera } = useThree();

    // Responsive scale based on screen width - FLUID
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const updateScale = () => {
            const width = window.innerWidth;
            const minWidth = 320;
            const maxWidth = 1200;
            const minScale = 0.6;
            const maxScale = 1.0;

            const clampedWidth = Math.max(minWidth, Math.min(maxWidth, width));
            const t = (clampedWidth - minWidth) / (maxWidth - minWidth);
            setScale(minScale + t * (maxScale - minScale));
        };

        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    // Split and dodge state
    const splitAmount = useRef(0);
    const targetSplit = useRef(0);
    const floatY = useRef(0);
    const worldPosVec = useRef(new THREE.Vector3());

    // Letter positions for the wordmark split effect, centered on x = 0
    const letters = useMemo(() => {
        const chars = [...WORDMARK];
        const span = (chars.length - 1) * LETTER_SPACING;
        return chars.map((char, i) => {
            const baseX = i * LETTER_SPACING - span / 2;
            return { char, baseX, splitDir: baseX * SPLIT_RATIO };
        });
    }, []);

    // Half-width of the wordmark, used to keep the doodles clear of the letters
    const wordmarkHalfWidth = ([...WORDMARK].length - 1) * LETTER_SPACING / 2;

    // Tagline words for split effect
    const taglineWords = useMemo(() => [
        { text: 'Creative', baseX: -1.3, splitDir: -1.8 },
        { text: 'AI', baseX: 0, splitDir: 0 },
        { text: 'Engineer', baseX: 1.3, splitDir: 1.8 },
    ], []);

    // Animation loop
    useFrame((state, delta) => {
        if (!groupRef.current) return;

        const time = state.clock.elapsedTime;

        // === SPLIT LOGIC based on camera distance ===
        groupRef.current.getWorldPosition(worldPosVec.current);
        const distance = camera.position.z - worldPosVec.current.z;

        const SPLIT_START = 3;
        const SPLIT_PEAK = 0;
        const SPLIT_END = -2;
        const SPLIT_AMOUNT = 0.9;

        if (distance > SPLIT_PEAK && distance < SPLIT_START) {
            const t = (SPLIT_START - distance) / (SPLIT_START - SPLIT_PEAK);
            targetSplit.current = SPLIT_AMOUNT * easeOutQuad(t);
        } else if (distance <= SPLIT_PEAK && distance > SPLIT_END) {
            const t = (distance - SPLIT_END) / (SPLIT_PEAK - SPLIT_END);
            targetSplit.current = SPLIT_AMOUNT * easeOutQuad(t);
        } else {
            targetSplit.current = 0;
        }

        splitAmount.current = THREE.MathUtils.lerp(splitAmount.current, targetSplit.current, 0.08);

        // Apply split to each letter of the wordmark
        letterRefs.current.forEach((ref, i) => {
            if (ref) {
                if (ref.material) ref.material.opacity = 1;
                ref.scale.setScalar(1);

                const letter = letters[i];
                ref.position.x = letter.baseX + letter.splitDir * splitAmount.current;
                ref.position.y = 0.2 + Math.sin(time * 0.7 + i * 0.5) * 0.015;
                ref.rotation.z = Math.sin(time * 0.5 + i) * 0.02 * (1 + splitAmount.current);
            }
        });

        // Apply split to tagline words
        taglineRefs.current.forEach((ref, i) => {
            if (ref) {
                if (ref.material) ref.material.opacity = 1;

                const word = taglineWords[i];
                ref.position.x = word.baseX + word.splitDir * splitAmount.current * 0.6;
                ref.position.y = -0.45 + Math.sin(time * 0.6 + i * 0.3) * 0.008;
            }
        });

        // === FLOATING ANIMATION ===
        floatY.current = Math.sin(time * 0.5) * 0.02;
        groupRef.current.position.y = position[1] + floatY.current;
    });

    return (
        <group ref={groupRef} position={position} scale={[scale, scale, 1]}>
            {/* Wordmark Letters */}
            {letters.map((letter, i) => (
                <Text
                    key={`${letter.char}-${i}`}
                    ref={(el) => (letterRefs.current[i] = el)}
                    position={[letter.baseX, 0.35, 0]}
                    fontSize={LETTER_FONT_SIZE}
                    font={RUBIK_SCRIBBLE_URL}
                    color="#1a1a1a"
                    outlineWidth={0.014}
                    outlineColor="#1a1a1a"
                    anchorX="center"
                    anchorY="middle"
                    letterSpacing={0}
                >
                    {letter.char}
                </Text>
            ))}

            {/* Tagline words */}
            {taglineWords.map((word, i) => (
                <Text
                    key={word.text}
                    ref={(el) => (taglineRefs.current[i] = el)}
                    position={[word.baseX, -1.6, 0.3]}
                    fontSize={0.13}
                    font={CABIN_SKETCH_URL}
                    color="#333333"
                    anchorX="center"
                    anchorY="middle"
                    letterSpacing={0.04}
                >
                    {word.text}
                </Text>
            ))}

            {/* Decorative doodles */}
            <SmallStar position={[-(wordmarkHalfWidth + 0.7), 0.7, 0]} scale={0.07} />
            <SmallStar position={[wordmarkHalfWidth + 0.75, 0.6, 0]} scale={0.05} />
            <SmallStar position={[-1.3, -1.5, 0]} scale={0.04} />
            <SmallStar position={[1.3, -1.45, 0]} scale={0.035} />
        </group>
    );
};

const easeOutQuad = (t) => t * (2 - t);

const SmallStar = ({ position, scale = 0.1 }) => {
    return (
        <group position={position} scale={scale}>
            {[0, 1, 2, 3].map((i) => (
                <mesh key={i} rotation={[0, 0, (i * Math.PI) / 4]}>
                    <planeGeometry args={[1, 0.12]} />
                    <meshBasicMaterial color="#1a1a1a" transparent opacity={0.6} side={2} />
                </mesh>
            ))}
        </group>
    );
};

export default HeroText;
