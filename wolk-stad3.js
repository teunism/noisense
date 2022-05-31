const btn = document.querySelector('.playButton');
// const popup = document.querySelector('.playPopup');

btn.addEventListener('click', () => {
    // hide button

    btn.remove();


});

// popup.addEventListener('click', () => {
//     // hide button

//     location.href = './kaart.html';


// });


// const artiesten = [{
//         artiestNaam: 'Snapped Ankles',
//         songNaam: 'Petrol',
//         releaseDate: '2019',
//         songUrl: 'https://p.scdn.co/mp3-preview/6951986f21e4c62bcd78491a9969bc04ff61a5b5?cid=774b29d4f13844c495f206cafdad9c86', 
//     },
//     // {
//     //     artiestNaam: 'Snowy Band',
//     //     songNaam: 'Call It A Day',
//     //     releaseDate: '2022',
//     //     songUrl: 'https://p.scdn.co/mp3-preview/6951986f21e4c62bcd78491a9969bc04ff61a5b5?cid=774b29d4f13844c495f206cafdad9c86', 
//     // },
//     {
//         artiestNaam: 'Pop Filter',
//         songNaam: 'Big Yellow Van',
//         releaseDate: '2022',
//         songUrl: 'https://p.scdn.co/mp3-preview/3f1933f51513b69adc73e35ce0cfd6fb8d87fdc1?cid=774b29d4f13844c495f206cafdad9c86', 
//     }
// ];









import * as THREE from './three.module.js';
import {
    Interaction
} from './src/interaction/Interaction.js';

import {
    OrbitControls
} from './OrbitControls.js';



// new a interaction, then you can add interaction-event with your free style
// const interaction = new Interaction(renderer, scene, camera);



let renderer, scene, camera;
let controls, group;

let selectedObject = null;
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();





init();
animate();

function init() {

    // init renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.prepend(renderer.domElement);

    // init scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xEDE9E9);

    group = new THREE.Group();
    scene.add(group);

    // init camera
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(15, 15, 15);
    camera.lookAt(scene.position);

    //controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.listenToKeyEvents(window); // optional

    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05;

    controls.screenSpacePanning = false;

    controls.minDistance = 100;
    controls.maxDistance = 500;

    controls.maxPolarAngle = Math.PI / 2;


    // const map14 = new THREE.TextureLoader().load('./img/Group 14.png');
    // const Song12 = new THREE.SpriteMaterial({
    //     map: map14
    // });

    // const sprite9 = new THREE.Sprite(Song12);
    // sprite9.scale.set(35, 16, 1);
    // sprite9.position.set(30, -20, -70);
    // scene.add(sprite9);



    //zet CSV om naar array
    Papa.parse('./PCA2.csv', {
        download: true,
        complete: function (results) {
            const lijst = results.data;


            for (let step = 0; step < lijst.length; step++) {

                var schaalFactor = 180;
                var coordinaat = new THREE.Vector3((lijst[step][1] * schaalFactor), (lijst[step][3] * schaalFactor), (lijst[step][2] * schaalFactor));


                var emotie = lijst[step][0];
                drawAxisLabel(emotie, coordinaat);

                // console.log(coordinaat);
            }

        }
    });


    const drawAxisLabel = (text, position) => {
        const label = drawText(text);

        label.position.set(position.x, position.y, position.z);
        scene.add(label);
        group.add(label);
    };



    //load font: Tuna2 
    var Tuna2 = new FontFace('Tuna2', 'url(./font/Graphik-Regular.otf)');
    Tuna2.load().then(function (loaded_face) {
        // loaded_face holds the loaded FontFace
    }).catch(function (error) {
        // error occurred
    });

    const drawText = message => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        context.font = "32px Arial";
        context.fillStyle = "rgba(0, 0, 0, 1)";
        context.fillText(message, 0, 64);


        const texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;

        const spriteMaterial = new THREE.SpriteMaterial({
            map: texture
        });

        const sprite = new THREE.Sprite(spriteMaterial);

        sprite.center.set(0, 0.5);
        sprite.scale.set(20, 10, 10);

        return sprite;
    };



    drawText();
    drawAxisLabel('aaa', 10);


    window.addEventListener('resize', onWindowResize);
}

function animate() {
    controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize('100%', window.innerHeight);
}

const stadCanvas = document.querySelector('.homeBody canvas');
const interaction = new Interaction(renderer, scene, camera);

const randomSong = () => new Audio(artiesten[Math.floor(Math.random() * artiesten.length)].songUrl)
let currentSong;

group.on("mouseover", function (ev) {
    currentSong = randomSong();

    if (currentSong.paused) {
        currentSong.volume = 0;
        currentSong.play();
        stadCanvas.style.cursor = 'pointer';

        const fadeAudioIn = setInterval(() => {
            // When volume at zero stop all the intervalling
            if (currentSong.volume >= 0.95) {
                clearInterval(fadeAudioIn);
            }
            // Only fade if past the fade out point or not at zero already
            if (currentSong.volume < 0.9) {
                currentSong.volume += 0.1;
            }
        }, 200);

        // Set the point in playback that fadeout begins. This is for a 2 second fade out.
        let fadePoint = currentSong.duration - 2;

        const fadeAudioOut = setInterval(function () {
            // Only fade if past the fade out point or not at zero already
            if ((currentSong.currentTime >= fadePoint) && (currentSong.volume >= 0.1)) {
                currentSong.volume -= 0.1;
            }
            // When volume at zero stop all the intervalling
            if (currentSong.volume <= 0.0) {
                clearInterval(fadeAudioOut);
            }
        }, 200);
    }
});

group.on("mouseout", function (ev) {
    if (!currentSong.paused) {
        // Set the point in playback that fadeout begins. This is for a 2 second fade out.

        const fadeAudioOut = setInterval(function () {
            // When volume at zero stop all the intervalling
            if (currentSong.volume <= 0.1) {
                currentSong.pause();
                clearInterval(fadeAudioOut);
                currentSong.volume = 1;
            }
            // Only fade if past the fade out point or not at zero already
            if (currentSong.volume >= 0.1) {
                currentSong.volume -= 0.1;
            }
        }, 50);
        stadCanvas.style.cursor = 'default';
    }
});



// function stopSong() {
//     currentSong.pause();
//     currentSong.time = 0;
// }




stadCanvas.style.width = '100%';