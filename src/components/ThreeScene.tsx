import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    object: THREE.Group;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance" 
    });
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x6366f1, 2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const blueLight = new THREE.PointLight(0xa855f7, 2);
    blueLight.position.set(-5, -5, 5);
    scene.add(blueLight);

    // CORE OBJECT (Digital Crystal)
    const objectGroup = new THREE.Group();
    
    // Wireframe geometry
    const geometry = new THREE.IcosahedronGeometry(2, 2);
    const material = new THREE.MeshPhongMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const mesh = new THREE.Mesh(geometry, material);
    objectGroup.add(mesh);

    // Inner glowing sphere
    const innerGeo = new THREE.IcosahedronGeometry(0.8, 2);
    const innerMat = new THREE.MeshPhongMaterial({
      color: 0xa855f7,
      emissive: 0xa855f7,
      emissiveIntensity: 2,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    objectGroup.add(innerMesh);

    // Grid Floor
    const gridHelper = new THREE.GridHelper(100, 50, 0x6366f1, 0x222222);
    gridHelper.position.y = -10;
    gridHelper.rotation.x = Math.PI / 10;
    scene.add(gridHelper);

    // Particle field
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 30;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
        size: 0.015,
        color: 0xffffff,
        transparent: true,
        opacity: 0.8
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    scene.add(objectGroup);
    camera.position.z = 8;
    camera.position.y = 2;

    sceneRef.current = { scene, camera, renderer, object: objectGroup };

    // GSAP SCROLL ANIMATION
    const scrollAnim = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      }
    });

    scrollAnim
      .to(objectGroup.rotation, { y: Math.PI * 4, x: Math.PI }, 0)
      .to(objectGroup.position, { x: 4, y: -2, z: -5 }, 0)
      .to(gridHelper.position, { y: -5, z: -10 }, 0)
      .to(camera.position, { z: 12, y: 0 }, 0);

    // ANIMATION LOOP
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Idle animation
      objectGroup.rotation.y += 0.001;
      objectGroup.rotation.z += 0.0005;
      
      particlesMesh.rotation.y += 0.0002;
      particlesMesh.position.y = Math.sin(Date.now() * 0.0005) * 0.5;

      renderer.render(scene, camera);
    };
    animate();

    // WINDOW RESIZE
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 pointer-events-none opacity-40 lg:opacity-70"
    />
  );
}
