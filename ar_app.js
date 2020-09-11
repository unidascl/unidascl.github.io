//declarar las variables de nuestra app. 
var scene, camera, renderer, clock, deltaTime, totalTime;

var arToolkitSource, arToolkitContext;

var mesh1, mesh2, mesh11,  meshImagen, meshImagen2, meshImagen3;

var marker1, marker2, marker3, marker4, marker5, marker6, marker7, marker8, marker9, marker10, marker11;

var RhinoMesh, RhinoMesh2, RhinoMesh3, RhinoMesh4, RhinoMesh5, RhinoMesh6, RhinoMesh7, RhinoMesh8, RhinoMesh9, RhinoMesh10, RhinoMesh11;

var video = document.getElementById('video');

// var loader;


init(); // llamado de la funcion principal que se encarga de hacer casi  todo en la app
animate();

function init() {
    ////////////////////////////////////////////////////////
    //THREE Setup
    ///////////////////////////////////////////////////////
    // crear nuestra escena -  OBJETO.
    scene = new THREE.Scene(); //  crea un objeto escena.

    //////////////////////////////////////////////////////
    //LUCES
    //////////////////////////////////////////////////////

    let light = new THREE.PointLight(0xffffff, 1, 100); //creo nueva luz 
    light.position.set(0, 4, 4); //indico la posicion de la luz 
    light.castShadow = true; //activo la capacidad de generar sombras.
    scene.add(light); //agrego la luz a mi escena 

    let lightSphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.1),
        new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.8
        })
    );

    lightSphere.position.copy(light);
    scene.add(lightSphere);

    //creamos luces 
    let ambientLight = new THREE.AmbientLight(0xcccccc); //creo las luz
    scene.add(ambientLight); //agrego la luz a mi escena. 

    camera = new THREE.Camera(); //creo objeto camara 
    scene.add(camera); // agrego camara a la escena

    //permite mostrar las cosas en 3d en la pantalla
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });

    renderer.setClearColor(new THREE.Color('lightgrey'), 0);
    renderer.setSize(640, 480);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0px';
    renderer.domElement.style.left = '0px';

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    document.body.appendChild(renderer.domElement); // agregarlo a nuestra pagina web


    //tiempo
    clock = new THREE.Clock();
    deltaTime = 1;
    totalTime = 1;

    ////////////////////////////////////////////////////////
    //AR Setup
    ///////////////////////////////////////////////////////

    arToolkitSource = new THREEx.ArToolkitSource({
        sourceType: 'webcam',
    });

    function onResize() {
        arToolkitSource.onResize()
        arToolkitSource.copySizeTo(renderer.domElement)
        if (arToolkitContext.arController !== null) {
            arToolkitSource.copySizeTo(arToolkitContext.arController.canvas)
        }
    }


    arToolkitSource.init(function onReady() {
        onResize();
    });

    //agregamos un event listener
    window.addEventListener('resize', function () { onResize() });

    //Setup ArKitContext
    arToolkitContext = new THREEx.ArToolkitContext({
        cameraParametersUrl: 'data/camera_para.dat',
        detectionMode: 'mono'
    });

    arToolkitContext.init(function onCompleted() {
        camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
    });

    /////////////////////////////////////////////////
    //Marker setup
    /////////////////////////////////////////////////

    marker1 = new THREE.Group(); //creamos un grupo de objetos
    scene.add(marker1); // agregamos el grupo a la escena. 

    //Creamos nuestro marcador 
    let markerControl1 = new THREEx.ArMarkerControls(arToolkitContext, marker1, {

        type: 'pattern', patternUrl: 'data/pattern-BIP.patt',
    });

    marker2 = new THREE.Group(); //creamos un grupo de objetos
    scene.add(marker2); // agregamos el grupo a la escena. 

    let markerControl2 = new THREEx.ArMarkerControls(arToolkitContext, marker2, {

        type: 'pattern', patternUrl: 'data/pattern-m-02.patt',
    });
    marker3 = new THREE.Group(); //creamos un grupo de objetos
    scene.add(marker2); // agregamos el grupo a la escena. 

    let markerControl3 = new THREEx.ArMarkerControls(arToolkitContext, marker3, {

        type: 'pattern', patternUrl: 'data/pattern-m-03.patt',
    });
    marker4 = new THREE.Group(); //creamos un grupo de objetos
    scene.add(marker4); // agregamos el grupo a la escena. 

    let markerControl4 = new THREEx.ArMarkerControls(arToolkitContext, marker4, {

        type: 'pattern', patternUrl: 'data/pattern-m-04.patt',
    });
    marker5 = new THREE.Group(); //creamos un grupo de objetos
    scene.add(marker5); // agregamos el grupo a la escena. 

    let markerControl5 = new THREEx.ArMarkerControls(arToolkitContext, marker5, {

        type: 'pattern', patternUrl: 'data/pattern-m-05.patt',
    });

    marker6 = new THREE.Group(); //creamos un grupo de objetos
    scene.add(marker6); // agregamos el grupo a la escena. 

    let markerControl6 = new THREEx.ArMarkerControls(arToolkitContext, marker6, {

        type: 'pattern', patternUrl: 'data/pattern-m-06.patt',
    });

  
    marker7 = new THREE.Group(); //creamos un grupo de objetos
    scene.add(marker7); // agregamos el grupo a la escena. 

    let markerControl7 = new THREEx.ArMarkerControls(arToolkitContext, marker7, {

        type: 'pattern', patternUrl: 'data/pattern-m-07.patt',
    });

  
    marker8 = new THREE.Group(); //creamos un grupo de objetos
    scene.add(marker8); // agregamos el grupo a la escena. 

    let markerControl8 = new THREEx.ArMarkerControls(arToolkitContext, marker8, {

        type: 'pattern', patternUrl: 'data/pattern-m-08.patt',
    });

  
    marker9 = new THREE.Group(); //creamos un grupo de objetos
    scene.add(marker9); // agregamos el grupo a la escena. 

    let markerControl9 = new THREEx.ArMarkerControls(arToolkitContext, marker9, {

        type: 'pattern', patternUrl: 'data/pattern-m-09.patt',
    });

  
    marker10 = new THREE.Group(); //creamos un grupo de objetos
    scene.add(marker10); // agregamos el grupo a la escena. 

    let markerControl10 = new THREEx.ArMarkerControls(arToolkitContext, marker10, {

        type: 'pattern', patternUrl: 'data/pattern-m-10.patt',
    });


    marker11 = new THREE.Group(); //creamos un grupo de objetos
    scene.add(marker11); // agregamos el grupo a la escena. 

    let markerControl11 = new THREEx.ArMarkerControls(arToolkitContext, marker11, {

        type: 'pattern', patternUrl: 'data/pattern-m-11.patt',
    });

    ////////////////////PISO////////////////
    let floorGeometry = new THREE.PlaneGeometry(20, 20);
    let floorMaterial = new THREE.ShadowMaterial();
    floorMaterial.opacity = 0.3;

    let floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);

    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.receiveShadow = true;
    marker1.add(floorMesh);
    marker2.add(floorMesh);
    marker3.add(floorMesh);
    marker4.add(floorMesh);
    marker5.add(floorMesh);
    marker6.add(floorMesh);
    marker7.add(floorMesh);
    marker8.add(floorMesh);
    marker9.add(floorMesh);
    marker10.add(floorMesh);
    marker11.add(floorMesh);


    /////// OBJ IMPORT/////////////////////
    function onProgress(xhr) { console.log((xhr.loaded / xhr.total * 100) + "% loaded"); }
    function onError(xhr) { console.log("ha ocurrido un error") };

    //////OBJETO RHINO 1///////////////
    // new THREE.MTLLoader()
    //     .setPath('data/models/')
    //     .load('bip20.mtl', function (materials) {
    //         materials.preload();
    //         new THREE.OBJLoader()
    //             .setMaterials(materials)
    //             .setPath('data/models/')
    //             .load('bip20.obj', function (group) {
    //                 RhinoMesh = group.children[0];
    //                 RhinoMesh.material.side = THREE.DoubleSide;
    //                 RhinoMesh.scale.set(1, 1, 1);
    //                 RhinoMesh.castShadow = true;
    //                 RhinoMesh.receiveShadow = true;

    //                 marker1.add(RhinoMesh);
    //             }, onProgress, onError);
    //     });


    //////OBJETO RHINO 2///////////////
    new THREE.MTLLoader()
        .setPath('data/models/')
        .load('flecha.mtl', function (materials) {
            materials.preload();
            new THREE.OBJLoader()
                .setMaterials(materials)
                .setPath('data/models/')
                .load('flecha.obj', function (group) {
                    RhinoMesh2 = group.children[0];
                    RhinoMesh2.material.side = THREE.DoubleSide;
                    RhinoMesh2.scale.set(0.25, 0.25, 0.25);
                    RhinoMesh2.castShadow = true;
                    RhinoMesh2.receiveShadow = true;

                    marker2.add(RhinoMesh2);
                }, onProgress, onError);
        });
        // new THREE.MTLLoader()
        // .setPath('data/models/')
        // .load('aun.mtl', function (materials) {
        //     materials.preload();
        //     new THREE.OBJLoader()
        //         .setMaterials(materials)
        //         .setPath('data/models/')
        //         .load('aun.obj', function (group) {
        //             RhinoMesh11 = group.children[0];
        //             RhinoMesh11.material.side = THREE.DoubleSide;
        //             RhinoMesh11.scale.set(0.25, 0.25, 0.25);
        //             RhinoMesh11.castShadow = true;
        //             RhinoMesh11.receiveShadow = true;

        //             marker11.add(RhinoMesh11);
        //         }, onProgress, onError);
        // });
    
    
     ////OBJETO RHINO 3///////////////
     new THREE.MTLLoader()
     .setPath('data/models/')
     .load('p2.mtl', function (materials) {
         materials.preload();
         new THREE.OBJLoader()
             .setMaterials(materials)
             .setPath('data/models/')
             .load('p2.obj', function (group) {
                 RhinoMesh3 = group.children[0];
                 RhinoMesh3.material.side = THREE.DoubleSide;
                 RhinoMesh3.scale.set(0.25, 0.25, 0.25);
                 RhinoMesh3.castShadow = true;
                 RhinoMesh3.receiveShadow = true;
             }, onProgress, onError);
     });
     new THREE.MTLLoader()
        .setPath('data/models/')
        .load('kit.mtl', function (materials) {
            materials.preload();
            new THREE.OBJLoader()
                .setMaterials(materials)
                .setPath('data/models/')
                .load('kit.obj', function (group) {
                    RhinoMesh5 = group.children[0];
                    RhinoMesh5.material.side = THREE.DoubleSide;
                    RhinoMesh5.scale.set(0.25, 0.25, 0.25);
                    RhinoMesh5.castShadow = true;
                    RhinoMesh5.receiveShadow = true;

                    marker5.add(RhinoMesh5);
                }, onProgress, onError);
        });
        new THREE.MTLLoader()
        .setPath('data/models/')
        .load('logo_u.mtl', function (materials) {
            materials.preload();
            new THREE.OBJLoader()
                .setMaterials(materials)
                .setPath('data/models/')
                .load('logo_u.obj', function (group) {
                    RhinoMesh6 = group.children[0];
                    RhinoMesh6.material.side = THREE.DoubleSide;
                    RhinoMesh6.scale.set(0.05, 0.05, 0.05);
                    RhinoMesh6.castShadow = true;
                    RhinoMesh6.receiveShadow = true;

                    marker6.add(RhinoMesh6);
                }, onProgress, onError);
        });

    new THREE.MTLLoader()
        .setPath('data/models/')
        .load('grafico.mtl', function (materials) {
            materials.preload();
            new THREE.OBJLoader()
                .setMaterials(materials)
                .setPath('data/models/')
                .load('grafico.obj', function (group) {
                    RhinoMesh8 = group.children[0];
                    RhinoMesh8.material.side = THREE.DoubleSide;
                    RhinoMesh8.scale.set(0.25, 0.25, 0.25);
                    RhinoMesh8.castShadow = true;
                    RhinoMesh8.receiveShadow = true;

                    marker8.add(RhinoMesh8);
                }, onProgress, onError);
        });
     new THREE.MTLLoader()
        .setPath('data/models/')
        .load('pulsera2.mtl', function (materials) {
            materials.preload();
            new THREE.OBJLoader()
                .setMaterials(materials)
                .setPath('data/models/')
                .load('pulsera2.obj', function (group) {
                    RhinoMesh9 = group.children[0];
                    RhinoMesh9.material.side = THREE.DoubleSide;
                    RhinoMesh9.scale.set(0.25, 0.25, 0.25);
                    RhinoMesh9.castShadow = true;
                    RhinoMesh9.receiveShadow = true;

                    marker9.add(RhinoMesh9);
                }, onProgress, onError);
        });
    // new THREE.MTLLoader()
    //     .setPath('data/models/')
    //     .load('triptico.mtl', function (materials) {
    //         materials.preload();
    //         new THREE.OBJLoader()
    //             .setMaterials(materials)
    //             .setPath('data/models/')
    //             .load('triptico.obj', function (group) {
    //                 RhinoMesh10 = group.children[0];
    //                 RhinoMesh10.material.side = THREE.DoubleSide;
    //                 RhinoMesh10.scale.set(0.25, 0.25, 0.25);
    //                 RhinoMesh10.castShadow = true;
    //                 RhinoMesh10.receiveShadow = true;

    //                 marker10.add(RhinoMesh10);
    //             }, onProgress, onError);
    //     });

    let geoVideo = new THREE.PlaneBufferGeometry(2,2,4,4); //molde geometria

    // let video =  document.getElementById('video');
    // video.autoplay = false;
    
    video.muted= true;
    video.pause();
    let texture =  new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter= THREE.LinearFilter;
    texture.format =  THREE.RGBFormat;

    let materialv = new THREE.MeshBasicMaterial(
        {

            map:texture
    }
    );

    mesh11 = new THREE.Mesh(geoVideo, materialv);
    mesh11.rotation.x = -Math.PI/2;

    marker11.add(mesh11);

        let geo1 = new THREE.PlaneBufferGeometry(4,3,4,4);
        let loader2 = new THREE.TextureLoader();
        let textura3 = loader2.load('images/unidas.png');
        let material1 = new THREE.MeshBasicMaterial({map:textura3});

        let meshImagen = new THREE.Mesh(geo1,material1);
        meshImagen.rotation.x = -Math.PI/2;
        marker4.add(meshImagen);

        let geo2 = new THREE.PlaneBufferGeometry(4,3,4,4);
        let loader3 = new THREE.TextureLoader();
        let textura4 = loader3.load('images/mockup1.2.png');
        let material2 = new THREE.MeshBasicMaterial({map:textura4});

        let meshImagen2 = new THREE.Mesh(geo2,material2);
        meshImagen2.rotation.x = -Math.PI/2;
        marker1.add(meshImagen2);

        
        let geo3 = new THREE.PlaneBufferGeometry(4,3,4,4);
        let loader4 = new THREE.TextureLoader();
        let textura5 = loader4.load('images/Mokap.png');
        let material3 = new THREE.MeshBasicMaterial({map:textura5});

        let meshImagen3 = new THREE.Mesh(geo3,material3);
        meshImagen3.rotation.x = -Math.PI/2;
        marker10.add(meshImagen3);

        let geo4 = new THREE.PlaneBufferGeometry(4,3,4,4);
        let loader5 = new THREE.TextureLoader();
        let textura6 = loader5.load('images/Banner.jpg');
        let material4 = new THREE.MeshBasicMaterial({map:textura6});

        let meshImagen4 = new THREE.Mesh(geo4,material4);
        meshImagen4.rotation.x = -Math.PI/2;
        marker7.add(meshImagen4);



  

}


function update() {
    // update artoolkit on every frame
    if (arToolkitSource.ready !== false)
        arToolkitContext.update(arToolkitSource.domElement);
 
        
}

function render() {
    renderer.render(scene, camera);
}

function animate() {
    requestAnimationFrame(animate);
    deltaTime = clock.getDelta();
    totalTime += deltaTime;
    render();
    update();
    video.play();
}

function playVideo(){
    let video = document.getElementById('video');
    video.muted=true;
}
