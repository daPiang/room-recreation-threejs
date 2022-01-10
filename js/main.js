const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Lights
//Ambience
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

//Lamp Light
const lamp_light = new THREE.PointLight(0xf1c61c, 1);
lamp_light.position.set(-39,-4,-29);
scene.add(lamp_light);

//PC Light
const pc_light = new THREE.PointLight(0xf11c44, 0.4);
pc_light.position.set(-31,-6.5,44.5);
scene.add(pc_light);

//Materials
const floor_mat = new THREE.MeshLambertMaterial({color:0x2b2b2b});
const wall_mat = new THREE.MeshLambertMaterial({color:0x244c70});
const wood = new THREE.MeshLambertMaterial({color:0x785a47});
const pillow_mat = new THREE.MeshLambertMaterial({color:0xffffff});
const blanket_mat = new THREE.MeshLambertMaterial({color:0x790b0b});
const stand_mat = new THREE.MeshLambertMaterial({color:0x8a7845});
const metal = new THREE.MeshLambertMaterial({color:0x212121});
const lampshade = new THREE.MeshLambertMaterial({color:0xf7d281});
const red_cloth = new THREE.MeshLambertMaterial({color:0x992222});
const glass = new THREE.MeshLambertMaterial({color:0x5fbbfc});
const curtain_mat = new THREE.MeshLambertMaterial({color:0x5f0808});
const pc_glass_mat = new THREE.MeshLambertMaterial({color:0x3f3f3f});
const silver = new THREE.MeshLambertMaterial({color:0x959595});

//Floor
const floor_geo = new THREE.BoxGeometry(50,1, 100);
const floor = new THREE.Mesh( floor_geo, floor_mat );
floor.position.set(-20,-20,0);
scene.add(floor);

//Wall1
const wall_geo = new THREE.BoxGeometry(1, 40, 100);
const wall1 = new THREE.Mesh(wall_geo, wall_mat);
wall1.position.set(-45,0,0);
scene.add(wall1);
//Wall2
const wall_geo2 = new THREE.BoxGeometry(50, 40, 1);
const wall2 = new THREE.Mesh(wall_geo2, wall_mat);
wall2.position.set(-20.3,0,-50);
scene.add(wall2);

//Bed
//Frame
const frame_geo = new THREE.BoxGeometry(20, 3, 15);
const frame = new THREE.Mesh(frame_geo, wood);
frame.position.set(-33,-18.5,-42);
frame.rotation.set(0,0,0);
scene.add(frame);
//Pillow
const pillow_geo = new THREE.BoxGeometry(5, 4, 15);
const pillow = new THREE.Mesh(pillow_geo, pillow_mat);
pillow.position.set(-41,-15.5,-42.2);
scene.add(pillow);
//Blanket
const blanket_geo = new THREE.BoxGeometry(15, 4, 15);
const blanket = new THREE.Mesh(blanket_geo, blanket_mat);
blanket.position.set(-30.5,-15.5,-41.8);
scene.add(blanket);

//NightStand
const stand_geo = new THREE.BoxGeometry(7,7,7);
const stand = new THREE.Mesh(stand_geo, wood);
stand.position.set(-39,-16,-29);
scene.add(stand);
//Knob
const knob_geo = new THREE.BoxGeometry(1,1,3);
const knob = new THREE.Mesh(knob_geo, silver);
knob.position.set(-35.5,-15.5,-29);
scene.add(knob);

//Lamp
//Base
const lamp_base_geo = new THREE.BoxGeometry(4,1,4);
const lamp_base = new THREE.Mesh(lamp_base_geo, metal);
lamp_base.position.set(-39,-12,-29);
scene.add(lamp_base);
//Stem
const lamp_stem_geo = new THREE.BoxGeometry(1,3,1);
const lamp_stem = new THREE.Mesh(lamp_stem_geo, metal);
lamp_stem.position.set(-39,-9.9,-29);
scene.add(lamp_stem);
//Head
const lamp_geo = new THREE.BoxGeometry(4,4,4);
const lamp = new THREE.Mesh(lamp_geo, lampshade);
lamp.position.set(-39,-7,-29);
scene.add(lamp);

//Desk L-Shaped Floater
//Top
const desk_geo1 = new THREE.BoxGeometry(7, 1.5, 20);
const desk1 = new THREE.Mesh(desk_geo1, wood);
desk1.position.set(-41,-12,40);
scene.add(desk1);
//Bottom
const desk_geo2 = new THREE.BoxGeometry(13, 1.5, 7);
const desk2 = new THREE.Mesh(desk_geo2, wood);
desk2.position.set(-31,-12,46.5);
scene.add(desk2);

//Chair
//Stem
const chair_stem_geo = new THREE.BoxGeometry(1.5,4,1.5);
const chair_stem = new THREE.Mesh(chair_stem_geo, metal);
chair_stem.position.set(-31,-18,37);
scene.add(chair_stem);
//Chair Seat
const chair_seat_geo = new THREE.BoxGeometry(6,1,6);
const chair_seat = new THREE.Mesh(chair_seat_geo, metal);
chair_seat.position.set(-31,-15,37);
scene.add(chair_seat);
//Chair Back
const chair_back_geo = new THREE.BoxGeometry(6,7,1);
const chair_back = new THREE.Mesh(chair_back_geo, metal);
chair_back.position.set(-31,-11,34);
scene.add(chair_back);
//Chair Head
const chair_head_geo = new THREE.BoxGeometry(4.5,2,1);
const chair_head = new THREE.Mesh(chair_head_geo, red_cloth);
chair_head.position.set(-31,-6.7,34);
scene.add(chair_head);

//PC
const comp_case_geo = new THREE.BoxGeometry(3,6,6);
const comp_case = new THREE.Mesh(comp_case_geo, metal);
comp_case.position.set(-41,-8.3,46);
scene.add(comp_case);
//Glass
const pc_glass_geo = new THREE.BoxGeometry(0.5, 5.7, 5.7);
const pc_glass = new THREE.Mesh(pc_glass_geo, pc_glass_mat);
pc_glass.position.set(-39.5,-8.3,46);
scene.add(pc_glass);

//Monitor
//Base
const monitor_base_geo = new THREE.BoxGeometry(4,1,2);
const monitor_base = new THREE.Mesh(monitor_base_geo, metal);
monitor_base.position.set(-31,-11,48.5);
scene.add(monitor_base);
//Stem
const monitor_stem_geo = new THREE.BoxGeometry(1,4,1);
const monitor_stem = new THREE.Mesh(monitor_stem_geo, metal);
monitor_stem.position.set(-31,-8.5,49);
scene.add(monitor_stem);
//Screen
const monitor_geo = new THREE.BoxGeometry(7,4,0.5);
const monitor = new THREE.Mesh(monitor_geo, metal);
monitor.position.set(-31,-6.5,48.5);
scene.add(monitor);

//Window
//Frame
const window_frame_geo = new THREE.BoxGeometry(1,20,30);
const window_frame = new THREE.Mesh(window_frame_geo, metal);
window_frame.position.set(-44.5,2,0);
scene.add(window_frame);
//Glass
const glass_geo = new THREE.BoxGeometry(1,17,27);
const glass_window = new THREE.Mesh(glass_geo, glass);
glass_window.position.set(-44,2,0);
scene.add(glass_window);

//Curtain
//Left
const curtain_geo = new THREE.BoxGeometry(1.5,30,4);
const curtain = new THREE.Mesh(curtain_geo, curtain_mat);
curtain.position.set(-44,-3,15);
scene.add(curtain);
//Right
const curtain2 = new THREE.Mesh(curtain_geo, curtain_mat);
curtain2.position.set(-44,-3,-15);
scene.add(curtain2);

//Door
//Tall Frame1
const door_side_geo = new THREE.BoxGeometry(1,25,1);
const door_side1 = new THREE.Mesh(door_side_geo, wood);
door_side1.position.set(4.5,-7,40);
scene.add(door_side1);
//Tall Frame2
const door_side2 = new THREE.Mesh(door_side_geo, wood);
door_side2.position.set(4.5,-7,25);
scene.add(door_side2);
//Top Frame
const door_top_geo = new THREE.BoxGeometry(1,1,16);
const door_top = new THREE.Mesh(door_top_geo, wood);
door_top.position.set(4.5,6,32.5);
scene.add(door_top);

//Closet
const closet_geo = new THREE.BoxGeometry(20,30,8);
const closet = new THREE.Mesh(closet_geo, wood);
closet.position.set(-5,-4.5,-45);
scene.add(closet);
//Handle1
const handle_geo = new THREE.BoxGeometry(1,6,1);
const handle1 = new THREE.Mesh(handle_geo, silver);
handle1.position.set(-3.5,-4.5,-41);
scene.add(handle1);
//Handle2
const handle2 = new THREE.Mesh(handle_geo, silver);
handle2.position.set(-6.5,-4.5,-41);
scene.add(handle2);


//Rug
const rug_geo = new THREE.BoxGeometry(30,0.5, 20);
const rug = new THREE.Mesh(rug_geo, red_cloth);
rug.position.set(-20,-19.5,0);
rug.rotation.set(0,2,0);
scene.add(rug);

//Helpers
// const rugger = new THREE.BoxHelper(rug, 0xffffff);
// scene.add(rugger);

// const closers = new THREE.BoxHelper(closet, 0xffffff);
// scene.add(closers);

// const topper = new THREE.BoxHelper(door_top, 0xffffff);
// scene.add(topper);

// const sider2 = new THREE.BoxHelper(door_side2, 0xffffff);
// scene.add(sider2);

// const sider = new THREE.BoxHelper(door_side1, 0xffffff);
// scene.add(sider);

// const monitorer = new THREE.BoxHelper(monitor, 0xffffff);
// scene.add(monitorer);

// const caser = new THREE.BoxHelper(comp_case, 0xffffff);
// scene.add(caser);

// const backer = new THREE.BoxHelper(chair_back, 0xffffff);
// scene.add(backer);

// const seater = new THREE.BoxHelper(chair_seat, 0xffffff);
// scene.add(seater);

// const desker1 = new THREE.BoxHelper(desk1, 0xffffff);
// scene.add(desker1);

// const desker2 = new THREE.BoxHelper(desk2, 0xffffff);
// scene.add(desker2);

// const lamper = new THREE.BoxHelper(lamp, 0x000000);
// scene.add(lamper);

// const stemmer = new THREE.BoxHelper(monitor_stem, 0xffffff);
// scene.add(stemmer);

// const baser = new THREE.BoxHelper(monitor_base, 0xffffff);
// scene.add(baser);

// const stander = new THREE.BoxHelper(stand, 0xffffff);
// scene.add(stander);

// const floorer = new THREE.BoxHelper(floor, 0xffffff);
// scene.add(floorer);

// const waller1 = new THREE.BoxHelper(wall1, 0xffffff);
// scene.add(waller1);

// const waller2 = new THREE.BoxHelper(wall2, 0xffffff);
// scene.add(waller2);

// const framer = new THREE.BoxHelper(frame, 0xffffff);
// scene.add(framer);

// const pillower = new THREE.BoxHelper(pillow, 0x000000);
// scene.add(pillower);

// const blanketer = new THREE.BoxHelper(blanket, 0xffffff);
// scene.add(blanketer);

//Camera
camera.position.set(130, 100, 130);
camera.lookAt(0,0,0);

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();