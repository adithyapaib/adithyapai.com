 function 
darkmode() { var element = document.body; element.classList.toggle("dark-mode"); }

/*  window.onload = function() {
    darkmode() 
  };
   */
  new WOW().init();

  let scene, camera, renderer, stars, starGeo;

    function init() {

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 1;
      camera.rotation.x = Math.PI/2;

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      starGeo = new THREE.Geometry();
      for(let i=0;i<6000;i++) {
        star = new THREE.Vector3(
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          Math.random() * 600 - 300
        );
        star.velocity = 0;
        star.acceleration = 0.02;
        starGeo.vertices.push(star);
      }

      let sprite = new THREE.TextureLoader().load( 'img/star.png' );
      let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.65,
        map: sprite
      });

      stars = new THREE.Points(starGeo,starMaterial);
      scene.add(stars);

      window.addEventListener("resize", onWindowResize, false);

      animate(); 
    }
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    function animate() {
      starGeo.vertices.forEach(p => {
        p.velocity += p.acceleration
        p.y -= p.velocity;
        
        if (p.y < -200) {
          p.y = 200;
          p.velocity = 0;
        }
      });
      starGeo.verticesNeedUpdate = true;
      stars.rotation.y +=0.002;
    
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    init();


    setTimeout(function()
    {
      $('#preloader').slideToggle(1200);
    }, 3800);

    var typed = new Typed('.typed', {
      strings: ['\" If it is important to you, <br> You will find a way.<br> If not, you’ll find an excuse! \" <br> — Ryan Blair  ','Welcome to my site ! 🙏 <br> Happy Scrolling : ) ', 'I am Adithya Pai B 💯', 'I am a Front-End Developer ✨', 'I am a UI/UX designer 🌈' , 'I am a Gamer 💙', 'If you like my work <br>leave a message ! ⚡' ],
        backSpeed: 10,
        typeSpeed: 40,
        loop: false,
        startDelay: 4000,
       
      });

      $('.limb, .middle').hover(function() {
        $('.fidget').addClass('rotate');
        setTimeout(RemoveClass, 8000);
      });
       
      function RemoveClass() {
        $('.fidget').removeClass("rotate");
      }


      $(document).on({
        "contextmenu": function(e) {
            console.log("ctx menu button:", e.which); 
    
            // Stop the context menu
            e.preventDefault();
        },
        "mousedown": function(e) { 
            console.log("normal mouse down:", e.which); 
        },
        "mouseup": function(e) { 
            console.log("normal mouse up:", e.which); 
        }
    });
console.clear();
