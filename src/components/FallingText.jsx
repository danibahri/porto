import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const FallingText = () => {
  const sceneRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Runner = Matter.Runner,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    const engine = Engine.create();
    const world = engine.world;

    const width = sceneRef.current.clientWidth;
    const height = 400;

    const render = Render.create({
      element: sceneRef.current,
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width,
        height,
        background: "transparent",
        wireframes: false,
        pixelRatio: window.devicePixelRatio,
      },
    });

    // Boundaries
    const ground = Bodies.rectangle(width / 2, height + 10, width, 20, {
      isStatic: true,
      render: { visible: false },
    });
    const leftWall = Bodies.rectangle(-10, height / 2, 20, height, {
      isStatic: true,
      render: { visible: false },
    });
    const rightWall = Bodies.rectangle(width + 10, height / 2, 20, height, {
      isStatic: true,
      render: { visible: false },
    });

    World.add(world, [ground, leftWall, rightWall]);

    // Tech Stack Words
    const words = [
      "React",
      "Tailwind",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Next.js",
      "Framer Motion",
      "Git",
      "HTML5",
      "CSS3",
      "Vite",
      "Three.js",
      "Matter.js",
      "Firebase",
      "Supabase",
    ];

    const colors = ["#8b5cf6", "#ec4899", "#3b82f6", "#10b981", "#f59e0b"];

    words.forEach((word, i) => {
      const x = Math.random() * width;
      const y = -Math.random() * 500 - 50;

      const body = Bodies.rectangle(x, y, word.length * 15 + 20, 40, {
        chamfer: { radius: 20 },
        render: {
          fillStyle: colors[i % colors.length],
          text: {
            content: word,
            color: "#ffffff",
            size: 16,
            family: "Inter, sans-serif",
          },
        },
      });

      // Custom rendering for text
      body.render.text = {
        content: word,
        color: "#ffffff",
        size: 16,
        family: "Inter, sans-serif",
      };

      World.add(world, body);
    });

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    World.add(world, mouseConstraint);
    render.mouse = mouse;

    // Custom renderer to draw text
    const originalRender = Render.world;
    Render.world = function (render) {
      originalRender(render);
      const context = render.context;
      const bodies = Matter.Composite.allBodies(render.engine.world);

      context.beginPath();
      for (let i = 0; i < bodies.length; i += 1) {
        const body = bodies[i];
        if (body.render.text) {
          const { content, color, size, family } = body.render.text;
          context.font = `bold ${size}px ${family}`;
          context.fillStyle = color;
          context.textAlign = "center";
          context.textBaseline = "middle";

          context.save();
          context.translate(body.position.x, body.position.y);
          context.rotate(body.angle);
          context.fillText(content, 0, 0);
          context.restore();
        }
      }
    };

    Runner.run(engine);
    Render.run(render);

    return () => {
      Render.stop(render);
      World.clear(world);
      Engine.clear(engine);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
          Tech Stack
        </h2>
        <p className="text-gray-400 text-center mb-8">Play with the physics!</p>
        <div
          ref={sceneRef}
          className="w-full h-[400px] relative border border-white/10 rounded-2xl bg-white/5"
        />
        <canvas ref={canvasRef} className="hidden" />
        {/* Canvas is appended by Matter.js, but we need a ref for React to be happy? 
            Actually Matter.Render.create appends it to 'element'. 
            Let's let Matter handle it, but we need to ensure clean up.
        */}
      </div>
    </section>
  );
};

export default FallingText;
