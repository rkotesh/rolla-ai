"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import * as THREE from "three";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

function FounderOrbit() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const group = new THREE.Group();
    scene.add(group);

    // Torus Knot — electric indigo wireframe
    const knotMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.25,
      wireframe: true,
    });
    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.65, 0.015, 120, 16, 2, 3),
      knotMaterial
    );
    group.add(knot);

    // Outer Orbit Ring
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xa5b4fc,
      transparent: true,
      opacity: 0.45,
      wireframe: true,
    });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.85, 0.01, 12, 128), ringMaterial);
    group.add(ring);

    // Inner Glow Ring
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.15,
      wireframe: true,
    });
    const glow = new THREE.Mesh(new THREE.TorusGeometry(1.48, 0.008, 10, 96), glowMaterial);
    glow.rotation.x = Math.PI / 3;
    group.add(glow);

    // Dot Ring
    const dotCount = 96;
    const dotsGeometry = new THREE.BufferGeometry();
    const dotsPositions = new Float32Array(dotCount * 3);
    for (let i = 0; i < dotCount; i++) {
      const angle = (i / dotCount) * Math.PI * 2;
      dotsPositions[i * 3] = Math.cos(angle) * 1.8;
      dotsPositions[i * 3 + 1] = Math.sin(angle) * 1.8;
      dotsPositions[i * 3 + 2] = 0;
    }
    dotsGeometry.setAttribute("position", new THREE.BufferAttribute(dotsPositions, 3));
    const dotsMaterial = new THREE.PointsMaterial({
      color: 0xa5b4fc,
      size: 0.035,
      transparent: true,
      opacity: 0.7,
    });
    const dots = new THREE.Points(dotsGeometry, dotsMaterial);
    group.add(dots);

    // Background particles
    const particleCount = 80;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesPositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.9 + Math.random() * 1.2;
      particlesPositions[i] = r * Math.sin(phi) * Math.cos(theta);
      particlesPositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlesPositions[i + 2] = r * Math.cos(phi);
    }
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(particlesPositions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x6366f1,
      size: 0.022,
      transparent: true,
      opacity: 0.45,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
 
    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseX = (x / rect.width) * 2 - 1;
      mouseY = -(y / rect.height) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    const resize = () => {
      const size = canvas.clientWidth;
      renderer.setSize(size, size, false);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    let frameId = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      targetX = THREE.MathUtils.lerp(targetX, mouseX * 0.45, 0.05);
      targetY = THREE.MathUtils.lerp(targetY, mouseY * 0.45, 0.05);
      group.rotation.z = elapsed * 0.15;
      group.rotation.x = targetY;
      group.rotation.y = targetX;
      knot.rotation.x = elapsed * 0.25;
      knot.rotation.y = -elapsed * 0.2;
      glow.rotation.z = -elapsed * 0.3;
      const scaleVal = 1 + Math.sin(elapsed * 1.5) * 0.035;
      ring.scale.setScalar(scaleVal);
      dots.scale.setScalar(1 + Math.cos(elapsed * 1.5) * 0.02);
      particles.rotation.y = elapsed * 0.03;
      particles.rotation.x = elapsed * 0.015;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      knot.geometry.dispose();
      ring.geometry.dispose();
      glow.geometry.dispose();
      dotsGeometry.dispose();
      particlesGeometry.dispose();
      knotMaterial.dispose();
      ringMaterial.dispose();
      glowMaterial.dispose();
      dotsMaterial.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-rolla-bg relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="border border-[#1e2028] relative overflow-hidden"
        >
          {/* Top accent border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6366F1] via-[#A5B4FC] to-transparent" />

          {/* Background glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#6366F1] opacity-[0.04] blur-3xl rounded-full translate-x-1/2 -translate-y-1/4 pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-2 gap-0">
            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-14 border-r border-[#1e2028]"
            >
              <div className="sys-label mb-6">↳ Founder Letter · 2026</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Built by a developer,{" "}
                <span className="font-serif italic text-[#A5B4FC]">
                  designed for your business
                </span>
              </h2>
              <div className="w-10 h-[2px] bg-[#6366F1] mb-8" />
              <p className="text-[#C4C9D4] text-sm leading-relaxed mb-5">
                &ldquo;I started Rolla to bridge the gap between complex technology and clean, user-friendly digital experiences.&rdquo;
              </p>
              <p className="text-[#C4C9D4] text-sm leading-relaxed mb-10">
                &ldquo;I&apos;m a full-stack developer focused on building high-performance websites and web applications that help businesses launch, scale, and thrive online.&rdquo;
              </p>

              {/* Team */}
              <div className="space-y-4 mb-10">
                {[
                  { name: "Koteswararao Sankula", role: "Founder · Full-Stack Engineer", detail: "B.Tech CS, 2026" },
                  { name: "Narendra Kumar", role: "Co-Founder · Systems Architect", detail: "B.Tech CS, 2026" },
                ].map((person, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 border border-[#1e2028] bg-[#08090C]/60">
                    <div className="w-1.5 h-full min-h-[32px] bg-[#6366F1] shrink-0" />
                    <div>
                      <p className="text-white text-sm font-bold">{person.name}</p>
                      <p className="font-mono text-[0.6rem] text-[#C4C9D4] uppercase tracking-wider">{person.role}</p>
                      <p className="font-mono text-[0.55rem] text-[#8a91a0] mt-0.5">{person.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ y: -2, scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://linkedin.com/in/sankulakoteswararao"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="border border-[#1e2028] hover:border-[#6366F1]/55 p-2.5 transition-colors bg-[#0D0E12]"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#C4C9D4] hover:text-[#A5B4FC]" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2, scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://github.com/rkotesh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="border border-[#1e2028] hover:border-[#6366F1]/55 p-2.5 transition-colors bg-[#0D0E12]"
                >
                  <GithubIcon className="w-4 h-4 text-[#C4C9D4] hover:text-[#A5B4FC]" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right — Orbit visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center justify-center p-8 md:p-14"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                whileHover={{ scale: 1.035, rotate: 1.5 }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative mb-6 h-56 w-56 overflow-visible md:h-72 md:w-72"
              >
                <FounderOrbit />
                <motion.div
                  initial={{ opacity: 0, scale: 0.82 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
                  className="absolute inset-[13%] overflow-hidden rounded-full border-2 border-[#6366F1]/20 bg-[#0D0E12] shadow-2xl"
                >
                  <Image
                    src="/images/koteswararao-sankula.png"
                    alt="Koteswararao Sankula"
                    fill
                    sizes="(min-width: 768px) 216px, 168px"
                    className="object-cover object-[50%_28%]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6366F1]/10 via-transparent to-transparent" />
                </motion.div>
              </motion.div>

              <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-1">Koteswararao Sankula</h3>
                <p className="font-mono text-[0.6rem] text-[#6366F1] uppercase tracking-widest">
                  Founder · Rolla Digital Engineering
                </p>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                  <span className="font-mono text-[0.55rem] text-[#4ADE80] uppercase tracking-widest">Available for New Projects</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
