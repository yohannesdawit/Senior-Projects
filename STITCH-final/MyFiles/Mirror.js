

var y,z;

function Mirror() {

  this.groundMirror = function (width, height, x, y, z) {

    var geometry = new THREE.PlaneBufferGeometry( width, height );
    var groundMirror = new THREE.Reflector( geometry, {
        clipBias: 0.003,
        textureWidth: WIDTH * window.devicePixelRatio,
        textureHeight: HEIGHT * window.devicePixelRatio,
        color: 0x777777,
        recursion: 1
      } );

      // groundMirror.castShadow = true;
      // groundMirror.receiveShadow = true;

      
      groundMirror.position.y = y;
      scene.add( groundMirror );

      return groundMirror;

  }

}
