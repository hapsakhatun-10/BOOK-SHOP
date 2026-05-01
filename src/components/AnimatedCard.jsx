"use client";

import { useSpring, animated } from "@react-spring/web";

export default function AnimatedCard({ children }) {

    const style = useSpring({
        from: { transform: "translateY(0px)" },
        to: async (next) => {
            while (1) {
                await next({ transform: "translateY(-8px)" });
                await next({ transform: "translateY(0px)" });
            }
        },
        config: { tension: 120, friction: 10 },
    });

    return (
        <animated.div style={style}>
            {children}
        </animated.div>
    );
}