const elem = document.querySelector(".tsparticles-main");

tsParticles.set("sf", elem, {
  background: {
      color: {
          value: "#0000000",
      },
  },
  fpsLimit: 100,
  interactivity: {
      events: {
          onClick: {
              enable: true,
              mode: "push",
          },
          onHover: {
              enable: true,
              mode: "attract",
          },
          resize: true,
      },
      modes: {
        attract: {
          distance: 400,
          duration: 3,
          easing: "ease-out-quad",
          factor: 0.6,
          maxSpeed: 5,
          speed: 1
        }
      },
  },
  particles: {
      color: {
          value: "#ffffff",
      },
      links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
      },
      move: {
          direction: "none",
          enable: true,
          outModes: {
              default: "bounce",
          },
          random: false,
          speed: 1.5,
          straight: false,
      },
      number: {
          density: {
              enable: true,
              area: 1000,
          },
          value: 150,
      },
      opacity: {
          value: 0.5,
      },
      shape: {
          type: "circle",
      },
      size: {
          value: { min: 1, max: 3 },
      },
  },
  detectRetina: true,

  });
