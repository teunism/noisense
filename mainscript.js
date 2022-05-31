import * as THREE from './three.module.js';

import { OrbitControls } from './OrbitControls.js';

import { GLTFLoader } from "./GLTFLoader.js";


const gui = new dat.GUI();

let camera, controls, scene, renderer;

var loader = new GLTFLoader();


const initScene = () => {
    scene = new THREE.Scene();
    scene.background = null;
    //scene.fog = new THREE.FogExp2( 0xBF7B91, 0.001 );
};


function init() {

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(400, 200, 0);



    // controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.listenToKeyEvents(window); // optional

    //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05;

    controls.screenSpacePanning = false;

    controls.minDistance = 100;
    controls.maxDistance = 500;

    controls.maxPolarAngle = Math.PI / 2;


    // world
    const geometry = new THREE.BoxGeometry(100, 100, 100);
    const material = new THREE.MeshDepthMaterial({
        opacity: 0.1,
        blending: THREE.NormalBlending,
        depthTest: true
    });
    var obj;


    //crazyPlanes
    // const geometry4 = new THREE.PlaneGeometry( 100, 100, 1, 1 );
    // const material4 = new THREE.MeshDepthMaterial({
    //     opacity: 0.1,
    //     depthTest: true});
    // var obj;

    // const crazyPlane = new THREE.Mesh( geometry4, material4 );
    // crazyPlane.position.set(10,10,10);
    // crazyPlane.material.wireframe = true;
    // scene.add(crazyPlane);

    // composer = new EffectComposer( renderer );

    // const renderPass = new RenderPass( scene, camera );
    // composer.addPass( renderPass );

    // outlinePass = new OutlinePass( new THREE.Vector2( window.innerWidth, window.innerHeight ), scene, camera );
    // composer.addPass( outlinePass );



    //3d object import
    // loader.load("scatterplotScript2.gltf", function (gltf) {
    // obj = gltf.scene.scale.set(100,100,100);;
    // scene.add(gltf.scene);
    //});


    //zet CSV om naar array
    // Papa.parse('./PCA2.csv', {
    //     download: true,
    //     complete: function(results) {
    //         console.log(results.data[0][0]);
    //         const lijst = results.data;


    //     for (let step = 0; step < lijst.length; step++) {

    //         var schaalFactor = 150;
    //         var coordinaat = new THREE.Vector3((lijst[step][1]*schaalFactor), (lijst[step][3]*schaalFactor), (lijst[step][2]*schaalFactor));


    //         var emotie = lijst[step][0];
    //         drawAxisLabel(emotie, coordinaat );

    //         console.log(coordinaat);
    //       }

    //     }
    // });






    //image sprites
    const map2 = new THREE.TextureLoader().load('./img/Group 2.png');
    const map3 = new THREE.TextureLoader().load('./img/Group 3.png');
    const map4 = new THREE.TextureLoader().load('./img/Group 4.png');
    const map5 = new THREE.TextureLoader().load('./img/Group 5.png');
    const map6 = new THREE.TextureLoader().load('./img/Group 6.png');
    const map7 = new THREE.TextureLoader().load('./img/Group 7.png');
    const map8 = new THREE.TextureLoader().load('./img/Group 8.png');
    const map9 = new THREE.TextureLoader().load('./img/Group 9.png');
    const map10 = new THREE.TextureLoader().load('./img/Group 10.png');
    const map11 = new THREE.TextureLoader().load('./img/Group 11.png');
    const map12 = new THREE.TextureLoader().load('./img/Group 12.png');
    const map13 = new THREE.TextureLoader().load('./img/Group 13.png');
    const map14 = new THREE.TextureLoader().load('./img/Group 14.png');

    const Song1 = new THREE.SpriteMaterial({ map: map2 });
    const Song2 = new THREE.SpriteMaterial({ map: map3 });
    const Song3 = new THREE.SpriteMaterial({ map: map4 });
    const Song4 = new THREE.SpriteMaterial({ map: map5 });
    const Song5 = new THREE.SpriteMaterial({ map: map6 });
    const Song6 = new THREE.SpriteMaterial({ map: map7 });
    const Song7 = new THREE.SpriteMaterial({ map: map8 });
    const Song8 = new THREE.SpriteMaterial({ map: map9 });
    const Song9 = new THREE.SpriteMaterial({ map: map10 });
    const Song10 = new THREE.SpriteMaterial({ map: map11 });
    const Song11 = new THREE.SpriteMaterial({ map: map13 });
    const Song12 = new THREE.SpriteMaterial({ map: map14 });

    const sprite2 = new THREE.Sprite(Song1);
    sprite2.scale.set(35, 16, 1);
    sprite2.position.set(30, -20, -70);
    scene.add(sprite2);

    const sprite3 = new THREE.Sprite(Song2);
    sprite3.scale.set(35, 16, 1);
    sprite3.position.set(100, 1, 100);
    scene.add(sprite3);

    const sprite4 = new THREE.Sprite(Song3);
    sprite4.scale.set(35, 16, 1);
    sprite4.position.set(100, 100, 1);
    scene.add(sprite4);

    const sprite5 = new THREE.Sprite(Song4);
    sprite5.scale.set(35, 16, 1);
    sprite5.position.set(-100, 1, 1);
    scene.add(sprite5);

    const sprite6 = new THREE.Sprite(Song5);
    sprite6.scale.set(35, 16, 1);
    sprite6.position.set(100, 150, -10);
    scene.add(sprite6);

    const sprite7 = new THREE.Sprite(Song6);
    sprite7.scale.set(35, 16, 1);
    sprite7.position.set(150, -15, -50);
    scene.add(sprite7);

    const sprite8 = new THREE.Sprite(Song7);
    sprite8.scale.set(35, 16, 1);
    sprite8.position.set(-70, 80, 1);
    scene.add(sprite8);

    const sprite9 = new THREE.Sprite(Song8);
    sprite9.scale.set(35, 16, 1);
    sprite9.position.set(20, 20, 80);
    scene.add(sprite9);


    //for (let step = 0; step < 18, step++) {

    //     const loader = new THREE.TextureLoader();
    //     const songtextures = Promise.all([loader.load('./img/Group 2.png'), loader.load('./img/Group 3.png'), loader.load('./img/Group 4.png')], (resolve, reject) => {
    //         resolve(songtextures);
    //     }).then(result => {
    //         // result in array of textures

    //     });

    //     console.log(songtextures);


    //   //}





    //vloer
    var geometry2 = new THREE.PlaneGeometry(10000, 10000, 1, 1);
    var material2 = new THREE.MeshBasicMaterial({ color: 0xAAAAAA });
    var floor = new THREE.Mesh(geometry2, material2);
    floor.material.side = THREE.DoubleSide;
    floor.rotation.x = (Math.PI * .5);
    scene.add(floor);
    floor.position.set(100, -100, 100);


    //cubes
    for (let i = 0; i < 200; i++) {

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = Math.random() * 1600 - 800;
        mesh.position.y = -100;
        mesh.position.z = Math.random() * 1600 - 800;
        mesh.updateMatrix();
        mesh.matrixAutoUpdate = false;
        scene.add(mesh);
        mesh.material.wireframe = true;
    }




    // lights
    const dirLight1 = new THREE.DirectionalLight(0xffffff);
    dirLight1.position.set(1, 1, 1);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x002288);
    dirLight2.position.set(- 1, - 1, - 1);
    scene.add(dirLight2);

    const ambientLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    scene.add(ambientLight);



    window.addEventListener('resize', onWindowResize);



  

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}


// Create a texture loader so we can load our image file
var loader2 = new THREE.TextureLoader();

// Load an image file into a custom material
var materialfoto = new THREE.MeshLambertMaterial({

    map: loader2.load('img/frame.png')
});

materialfoto.transparent = true

// create a plane geometry for the image with a width of 10
// and a height that preserves the image's aspect ratio
var foto1 = new THREE.PlaneGeometry(512, 256);

// combine our image geometry and material into a mesh
var fotomesh = new THREE.Mesh(foto1, materialfoto);

// set the position of the image mesh in the x,y,z dimensions
fotomesh.position.set(0, 0, 0)
fotomesh.scale.set(.1, .1);


// add the image to the scene
// scene.add( fotomesh );





const drawAxisLabel = (text, position) => {
    const label = drawText(text);

    label.position.set(position.x, position.y, position.z);
    scene.add(label);
};



//load font: Tuna2 
var Tuna2 = new FontFace('Tuna2', 'url(./font/Graphik-Regular.otf)');
Tuna2.load().then(function (loaded_face) {
    // loaded_face holds the loaded FontFace
    console.log('e');
}).catch(function (error) {
    // error occurred
});

const drawText = message => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    context.font = "32px Tuna2";
    context.fillStyle = "rgba(0, 0, 0, 1)";
    context.fillText(message, 0, 64);

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    const spriteMaterial = new THREE.SpriteMaterial({ map: texture });

    const sprite = new THREE.Sprite(spriteMaterial);

    sprite.center.set(0, 0.5);
    sprite.scale.set(20, 10, 10);

    return sprite;
};



initScene();
drawText();


function animate() {

    requestAnimationFrame(animate);

    controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true

    render();

}



function render() {

    renderer.render(scene, camera);


}


init();

animate();