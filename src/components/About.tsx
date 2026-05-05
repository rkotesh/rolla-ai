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

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xcecbf6,
      transparent: true,
      opacity: 0.55,
      wireframe: true,
    });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.72, 0.018, 12, 128), ringMaterial);
    group.add(ring);

    const glow = new THREE.Mesh(
      new THREE.TorusGeometry(1.42, 0.012, 10, 96),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.25,
        wireframe: true,
      })
    );
    glow.rotation.x = Math.PI / 2.9;
    group.add(glow);

    const dots = new THREE.Points(
      new THREE.BufferGeometry().setFromPoints(
        Array.from({ length: 72 }, (_, index) => {
          const angle = (index / 72) * Math.PI * 2;
          const radius = 1.78 + (index % 3) * 0.025;
          return new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
        })
      ),
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.028,
        transparent: true,
        opacity: 0.55,
      })
    );
    group.add(dots);

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
      group.rotation.z = elapsed * 0.22;
      glow.rotation.z = -elapsed * 0.34;
      ring.scale.setScalar(1 + Math.sin(elapsed * 1.4) * 0.025);
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      ring.geometry.dispose();
      glow.geometry.dispose();
      dots.geometry.dispose();
      ringMaterial.dispose();
      glow.material.dispose();
      dots.material.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="bg-[#534AB7] rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl"
        >
          {/* Background Elements */}
          <motion.div
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
            animate={{ scale: [1, 1.12, 1], x: ["33%", "26%", "33%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black opacity-10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"
            animate={{ scale: [1, 1.18, 1], x: ["-25%", "-18%", "-25%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Built by a developer,<br />
                <span className="text-[#CECBF6]">designed for non-developers</span>
              </h2>
              <div className="w-16 h-1 bg-[#CECBF6] mb-8 opacity-50" />
              <p className="text-lg text-indigo-100 mb-6 leading-relaxed">
                &quot;I started Rolla because I kept seeing small businesses lose hours every day to tasks that software could handle in seconds.&quot;
              </p>
              <p className="text-lg text-indigo-100 mb-8 leading-relaxed">
                &quot;I&apos;m a Python developer and AI student — and I built Rolla to make automation accessible to everyone, not just those who can code.&quot;
              </p>
              <div className="flex items-center space-x-4">
                <motion.a whileHover={{ y: -3, scale: 1.08 }} whileTap={{ scale: 0.96 }} href="https://linkedin.com/in/sankulakoteswararao" target="_blank" rel="noopener noreferrer" aria-label="Koteswararao Sankula on LinkedIn" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                  <LinkedinIcon className="w-5 h-5 text-white" />
                </motion.a>
                <motion.a whileHover={{ y: -3, scale: 1.08 }} whileTap={{ scale: 0.96 }} href="https://github.com/rkotesh/" target="_blank" rel="noopener noreferrer" aria-label="Koteswararao Sankula on GitHub" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                  <GithubIcon className="w-5 h-5 text-white" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center justify-center"
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
                  className="absolute inset-[13%] overflow-hidden rounded-full border-4 border-white/25 bg-white/10 shadow-2xl"
                >
                  <Image
                    src="/images/koteswararao-sankula.jpg"
                    alt="Koteswararao Sankula"
                    fill
                    sizes="(min-width: 768px) 216px, 168px"
                    className="object-cover object-[50%_28%]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#534AB7]/20 via-transparent to-white/10" />
                </motion.div>
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-1">Koteswararao Sankula</h3>
              <p className="text-[#CECBF6] font-medium text-center">
                Founder, Rolla · Python Developer<br />
                <span className="text-indigo-200 text-sm">B.Tech AI&ML 2026</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
