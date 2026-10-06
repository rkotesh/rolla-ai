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

    // Torus Knot — electric cobalt wireframe
    const knotMaterial = new THREE.MeshBasicMaterial({
      color: 0x2554f6,
      transparent: true,
      opacity: 0.35,
      wireframe: true,
    });
    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.7, 0.02, 120, 16, 2, 3),
      knotMaterial
    );
    group.add(knot);

    // Outer Orbit Ring
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.3,
      wireframe: true,
    });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.9, 0.015, 12, 128), ringMaterial);
    group.add(ring);

    // Inner Glow Ring
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x2554f6,
      transparent: true,
      opacity: 0.2,
      wireframe: true,
    });
    const glow = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.012, 10, 96), glowMaterial);
    glow.rotation.x = Math.PI / 3;
    group.add(glow);

    // Dot Ring
    const dotCount = 100;
    const dotsGeometry = new THREE.BufferGeometry();
    const dotsPositions = new Float32Array(dotCount * 3);
    for (let i = 0; i < dotCount; i++) {
      const angle = (i / dotCount) * Math.PI * 2;
      dotsPositions[i * 3] = Math.cos(angle) * 1.85;
      dotsPositions[i * 3 + 1] = Math.sin(angle) * 1.85;
      dotsPositions[i * 3 + 2] = 0;
    }
    dotsGeometry.setAttribute("position", new THREE.BufferAttribute(dotsPositions, 3));
    const dotsMaterial = new THREE.PointsMaterial({
      color: 0x2554f6,
      size: 0.045,
      transparent: true,
      opacity: 0.75,
    });
    const dots = new THREE.Points(dotsGeometry, dotsMaterial);
    group.add(dots);

    // Background particles
    const particleCount = 90;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesPositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.0 + Math.random() * 1.2;
      particlesPositions[i] = r * Math.sin(phi) * Math.cos(theta);
      particlesPositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlesPositions[i + 2] = r * Math.cos(phi);
    }
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(particlesPositions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x6366f1,
      size: 0.026,
      transparent: true,
      opacity: 0.35,
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
    <section id="about" className="py-28 bg-[#F4EFE6]/60 relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#2554F6]/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#6366F1]/4 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="bg-white rounded-[32px] border border-black/[0.07] shadow-[0_20px_60px_rgba(15,16,20,0.08)] overflow-hidden"
        >
          <div className="relative z-10 grid lg:grid-cols-12 gap-0 items-stretch">
            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-black/[0.07]"
            >
              <div className="bento-pill mb-6">↳ Founder Letter · 2026</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F1014] mb-6 leading-tight">
                Built by developers,{" "}
                <span className="font-serif italic font-normal text-[#2554F6]">
                  engineered for growth
                </span>
              </h2>

              {/* Accent line */}
              <div className="w-12 h-1 bg-[#2554F6] rounded-full mb-8 opacity-60" />

              <p className="text-[#33363F] text-base md:text-lg leading-relaxed mb-5">
                &ldquo;I started Rolla to bridge the gap between complex software architecture and high-converting, user-friendly digital experiences.&rdquo;
              </p>
              <p className="text-[#33363F] text-base md:text-lg leading-relaxed mb-10">
                &ldquo;We don&apos;t build surface-level templates. We build high-throughput websites and full-stack software applications that give businesses durable competitive moats.&rdquo;
              </p>

              {/* Team Cards */}
              <div className="space-y-3 mb-10">
                {[
                  { name: "Koteswararao Sankula", role: "Founder · Full-Stack Engineer", detail: "B.Tech CS, 2026" },
                  { name: "Narendra Kumar", role: "Co-Founder · Systems Architect", detail: "B.Tech CS, 2026" },
                ].map((person, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-black/[0.07] bg-[#FAF7F2] cursor-pointer group hover:border-[#2554F6]/30 hover:bg-[#2554F6]/3 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2554F6] to-[#6366F1] flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {person.name[0]}
                    </div>
                    <div>
                      <p className="text-[#0F1014] text-sm font-bold group-hover:text-[#2554F6] transition-colors">{person.name}</p>
                      <p className="font-mono text-[0.62rem] text-[#2554F6] uppercase tracking-wider mt-0.5">{person.role}</p>
                      <p className="font-mono text-[0.6rem] text-[#686C78] mt-0.5">{person.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-2.5">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.94 }}
                  href="https://linkedin.com/in/sankulakoteswararao"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-black/[0.08] text-[#33363F] hover:text-[#2554F6] hover:border-[#2554F6]/30 flex items-center justify-center transition-all duration-200"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.94 }}
                  href="https://github.com/rkotesh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-black/[0.08] text-[#33363F] hover:text-[#0F1014] hover:border-black/20 flex items-center justify-center transition-all duration-200"
                >
                  <GithubIcon className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right — Orbit Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col items-center justify-center p-8 md:p-12 bg-[#FAF7F2]/60"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative mb-8 h-72 w-72 sm:h-80 sm:w-80 md:h-88 md:w-88 lg:h-80 lg:w-80 xl:h-96 xl:w-96 overflow-visible"
              >
                <FounderOrbit />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
                  className="absolute inset-[10%] overflow-hidden rounded-full border-2 border-white shadow-[0_0_0_1px_rgba(37,84,246,0.2),0_16px_40px_rgba(37,84,246,0.15)]"
                >
                  <Image
                    src="/images/koteswararao-sankula.png"
                    alt="Koteswararao Sankula"
                    fill
                    sizes="(min-width: 768px) 360px, 260px"
                    className="object-cover object-[50%_28%] transition-transform duration-500 hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1014]/20 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </motion.div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-[#0F1014] mb-2">
                  Koteswararao Sankula
                </h3>
                <span className="inline-block font-mono text-[0.65rem] text-[#2554F6] uppercase tracking-widest bg-[#2554F6]/8 rounded-full px-3.5 py-1.5 border border-[#2554F6]/15">
                  Founder · Lead Systems Architect
                </span>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
                  <span className="font-mono text-xs text-[#059669] uppercase tracking-wider font-semibold">
                    Available for New Deployments
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
