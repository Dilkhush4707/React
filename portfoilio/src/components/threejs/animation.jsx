import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const RubiksCube = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, controls;
    let cubes = [];
    const cubeSize = 1;
    const gap = 0.1;

    // Colors for Rubik's Cube faces (standard colors)
    const colors = {
      front: 0xff0000,   // Red
      back: 0x00ff00,    // Green
      left: 0x0000ff,    // Blue
      right: 0xffff00,   // Yellow
      top: 0xffa500,     // Orange
      bottom: 0xffffff   // White
    };

    function init() {
      // Scene setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x222222);
      containerRef.current.appendChild(renderer.domElement);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      // Create 3x3x3 Rubik's Cube
      for(let x = -1; x <= 1; x++) {
        for(let y = -1; y <= 1; y++) {
          for(let z = -1; z <= 1; z++) {
            const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
            const materials = [];
            
            // Create materials for each face
            for(let i = 0; i < 6; i++) {
              materials.push(new THREE.MeshPhongMaterial({
                color: getFaceColor(i, x, y, z),
                shininess: 100
              }));
            }

            const cube = new THREE.Mesh(geometry, materials);
            cube.position.set(
              x * (cubeSize + gap),
              y * (cubeSize + gap),
              z * (cubeSize + gap)
            );
            
            cubes.push(cube);
            scene.add(cube);
          }
        }
      }

      // Add edge lines
      cubes.forEach(cube => {
        const edges = new THREE.EdgesGeometry(cube.geometry);
        const line = new THREE.LineSegments(
          edges,
          new THREE.LineBasicMaterial({ color: 0x000000 })
        );
        cube.add(line);
      });

      // Camera and controls
      camera.position.set(5, 5, 5);
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;

      // Handle window resize
      window.addEventListener('resize', onWindowResize);

      animate();
    }

    function getFaceColor(faceIndex, x, y, z) {
      // Determine face color based on position
      const positions = [x, y, z];
      const faceAxes = [
        { axis: 'z', dir: 1 },  // Front
        { axis: 'z', dir: -1 }, // Back
        { axis: 'x', dir: -1 }, // Left
        { axis: 'x', dir: 1 },  // Right
        { axis: 'y', dir: 1 },  // Top
        { axis: 'y', dir: -1 }  // Bottom
      ];

      const { axis, dir } = faceAxes[faceIndex];
      const position = positions[['x', 'y', 'z'].indexOf(axis)];
      
      if (position === dir) {
        return colors[
          ['front', 'back', 'left', 'right', 'top', 'bottom'][faceIndex]
        ];
      }
      return 0x444444; // Internal faces
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }

    init();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      containerRef.current.removeChild(renderer.domElement);
      controls.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default RubiksCube;