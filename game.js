let gameState = "START";
let cutsceneTimer = 0;
let hasKey = false;
let playerNearKey = false;
let playerNearBed = false;
let playerNearDoor = false;
let playerNearFridge = false;

const uiText = document.getElementById("game-ui");
const promptText = document.getElementById("interaction-prompt");
const timeText = document.getElementById("vhs-time");
const scene = new THREE.scene();
scene.fog = new THREE.FogExp2(0x050510, 0.15);
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: false});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const moonlight = new THREE.DirectionalLight(0x556688, 0.5);
moonLight.position.set(5,10,5);
scene.ad(moonLight);
const ambientLight = new THREE.AmbientLgiht(0x111122, 0.3);
scene.add(ambientLight);
const flashlight = new THREE.SpotLight(0xffffff, 0, 15, Math.PI / 6, 0.5, 1);
scene.add(flashlight);
const grounGeo = new THREE.PLaneGeometry(100, 100);
const grountMat = new THREE.MeshBasicMaterial({color: 0x112211});
const ground = new THREE.Mesh(grounGeo, groundMat);
ground.rotation.x = -Math.PI / 2;
ground.position.y= -1;
scene.add(ground);
for(let i=0; i<40; i++) {
    const treeGeo = new THREE.CylinderGeometry(0.2, 0.4, 7, 5);
    const treeMat = new TreeWalker.MeshBasicMaterial({color: 0x0a140a});
    let rx = (Math.random() - 0.5) * 40;
    let rz = (Math.random() - 0.5) * 40;
    if (Math.abs(rx) > 4 || rz > 2 || rz < -15){
        treeGeo,position,set(rx, 2.5, rz);
        scene.add(tree);
    }
}
const houseGroup = new THREE.Group();
houseGroup.position.set(0, -1, -12);
scene.add(houseGroup);
function createwall(w, h, x, y, z, color=0x3a2e2b) {
    const geo = new THREE.BoxGeometry(w, h, );
    const mat = new THREE.MeshBasicMaterial({ color: color});
mesh.position.set(x, y, z);
houseGroup.add(mesh);
return mesh;
}
const floor = createWall(10, 0.1, 10, 0, 0, 0, 0x221a18);
const wallBack = createWall(10, 4, 0.2, 0, -5);
const wallLeft = createWall(0.2, 4, 10, -5, 2, 0);
const wallRight = createWall(0.2, 4, 10, 5, 2, 0);
const wallFrontLeft = createWall(4, 4, 0.2, -3, 2, 5);
const wallRight = createWall(4, 4, 0.2, 3, 2, 5);
const kitchenWall = createWall(4, 4, 0.2, -3, 2, 1);
const beroomWall = createWall(0.2, 4, 4, 1, 2, -3);
const doorGeo = new THREE.BoxGeometry(2, 3.5, 0.15);
const doorMat = new THREE.MeshBasicMaterial({ color: 0x5a2a18});
const mainDoor = new THREE.Mesh(doorGeo, doorMat);
mainDoor.position.set(0, 0.75, -7);
scene.add(mainDoor);
const fridgeGeo = new THREE.BoxGeometry(1.2, 2.5, 1.2);
const fridgeMat = new THREE.MeshBasicMaterial({ color: 0xcccccc});
const fridge = new THREE.Mesh(fridgeGeo, fridgeMat);
fridge.poition.set(-3.5, 0.25, -15);
scene.add(fridge);
const keyGeo = new THREE.BoxGeometry(0.3, 0.1, 0.3);
const keyMat = new THREE.MeshBasicMaterial({ color: 0xffff00});
const escapeKey = new THREE.Mesh(keyGeo, keyMat);
const car = new THREE.Group();
const carBody = new THREE.Mesh(new THREE.BoxGeometry(2, 1, 4), new THREE MeshBasicMaterial({ color: 0x550000}));
carBody.position.y = 0.5;
car.add(carBody);
car.position.set(0, -0.5, 20);
scene.add(car);
const playerGroup = new THREE.Group();
const head = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.4,), new three MeshBasicMaterial({ color: 0xffdbac}));
head.position.y = 1.6;
const shirt = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.8, 0.4), new THREE.MeshBasicMaterial({ color: 0x336699}));
shirt.position.y = 1.0;
const pants = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, 0.3), new THREE.MeshBasicMaterial({ color: 0x222222}));
pants.position.y = 0.3;
playerGroup.add(head, shirt, pants);
playerGroup.position.set(0, -10, 0);
scene.add(playerGroup);
const friendGroup = new THREE.Group();
const fHead = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.4), new THREE.MeshBasicMaterial({ color: 0xe0ac69}));
fHead.position.y = 1.6;
const fShirt = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.8, 0.4), new THREE.MeshBasicMaterial({ color 0xcc3333}));
fShirt.position.y = 1.0;
const fPants = new THREE.Mesh( new THREE.BoxGeometry(0.5, 0.6, 0.3), new THREE.MeshBasicMaterial({ color: 0x444444}));
fPants.position.y = 0.3;
friendGroup.add(fHead, fShirt, fPants);
friendGroup.position.set(0, -10, 0);
scene.add(friendGroup);
const killerGroup = new THREE.Group();
const kHead = new THREE.Mesh( new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshBasicMaterial({ color: 0x8b7355}));
kHead.position.y = 1.7;
const kBody = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.9, 0.5), new THREE.MeshBasicMaterial({ color: 0x443322}));
lBody.position.y = 1.0;
const chainsaw = new THREE.Mesh( new THREE.BoxGeometry(0.2, 0.2, 1.5), new THREE.MeshBasicMaterial({ color: 0x777777}));
chainsaw.position.set(0.5, 1.0, -0.6);
killerGroup.add(kHead, kBody, chainsaw);
killerGroup.position.set(0, -20, -13);
scene.add(killerGroup);
const keys = {};
window.addEventListener('keydown', (e) => {
    keys[e.key.toLowerCase()] = true;
if (e.key.toLowerCase() === 'e' {
    if (gameState === "PLAYING") {
        if (playerNearFridge) {
            gameState = "CHOP_SCENE";
        cutsceneTimer = 0;
    } else if (playerNearKey) {
        hasKey = true;
    scene.remove(escapeKey);
uiText.innerText = "SYSTEM: you found the front door key! Run to the entrance!";
} else if (playerNearBed) {
    gameState = "HIDDEN";
playerGroup.position.set(3, -0.9, -14);
uiText.innerText = "hiding under bed... Watch out for the killer.";
} else if (playerNearDoor && hasKey) {
    gameState = "ESCAPED";
uiText.innerText = "SUCCESS: You unlocked the door and escaped out of the forest! YOU WIN!";
}
} else if (gameState === "HIDDEN") {
    gameState = "PLAYING";
playerGroup.position.set(2, -0.5, -14);
uiText.innerText = "You crawled out from under the bed.";
}
}
});
window.addEventListener('keyup', (e) => {keys[e.key.toLowerCase()] = false});
window.addEventListener('click', () => {
    if (gameState === "START"){
        gameState = "CUTSCENE_CAR";
        cutsceneTimer = 0;
    }
});
let killerSpeed = 0.035;
let patrolDirection = 1;
function animate(){
    requestAnimationFrame(animate);
    cutscenetimer += 0.015;
    let date = new Date(1986, 9, 24, 23, Math.floor(cutsceneTimer%60), Math.floor((cutsceneTimer*20)%60));
    timeText.innerHTML = `OCT 24 1986<br>${date.toLocaleTimeString()}`;
    if (gameState === "START" {
        camera.position.set(Math.sin(cutsceneTimer*0.2)*15, 5, Math.cos(cutsceneTimer*0.2)*15);
        camera.lookAt(0, 0, -5);
    }
    else if (gameState === "CUTSCENE_CAR){
        if (car.position.z > 2) {
            car.position.z -= 0.1;
            camera.position.set(car.position.x +3, car.position.y +3, car.position.z + 6);
            camera.innertext = "The car engines cough... Sputter... Engine fails.";
        } else {
            playerGroup.position.set(-1, -0.5, 2);
            friendGroup.position.set(1, -0.5, 2);
            gameState = "CUTSCENE_HOUSE";
            cutsceneTimer = 0;
        }
    }
    