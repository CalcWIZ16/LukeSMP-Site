import * as THREE from 'three';
import { GLTFLoader } from 'GLTFLoader';

// Our Javascript will go here.
//Scene
const scene = new THREE.Scene();

//Camera
const camera = new THREE.PerspectiveCamera(54, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.set( 0, 0, -1.5 + window.scrollY / 250.0 );
// camera.lookAt(0, 0, -1.5);
camera.position.x = -200;
camera.position.y = 100;
camera.position.z = 500 + (window.scrollY);
camera.lookAt(500, 0, 100);

//Renderer
const renderer = new THREE.WebGLRenderer( {
    antialias: true,
    canvas: document.getElementById("viewport")
});
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(new THREE.Color(0xfefefe));
document.body.appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

// let spotLight = new THREE.SpotLight(0xffffff, 2.5, 25, Math.PI / 6);
// spotLight.position.set(9, 10, 1);
// scene.add(spotLight);

// const cube = new THREE.Mesh(
//     new THREE.BoxGeometry( 1, 1, 1 ),
//     new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
// );
// scene.add( cube );


const loader = new GLTFLoader();
loader.load(
    './assets/objects/object.glb',
    function ( gltf ) {
        scene.add( gltf.scene );
        renderer.render( scene, camera );
    },
    undefined, function ( error ) { console.error( error ); 
} );

// window.addEventListener('resize', onWindowResize, false)
// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     render()
// }
// renderer.render( scene, camera );

//move camera on scroll
let animate = function() {
    requestAnimationFrame(animate);

    //controls.update();
    renderer.render(scene, camera);
};

animate();

function updateCamera(ev) {
    let div1 = document.getElementById("div1");
    camera.position.z = -1.5 + window.scrollY / 250.0;
}

window.addEventListener("scroll", updateCamera);