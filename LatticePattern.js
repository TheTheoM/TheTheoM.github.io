const elem = document.querySelector(".deer");

tsParticles.set("sf2", elem, {
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
          distance: 80,
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
          speed: 0.5,
          straight: false,
      },
      number: {
          density: {
              enable: true,
              area: 120,
          },
          value: 110,
      },
      opacity: {
          value: 0.5,
      },
      shape: {
          type: "circle",
      },
      size: {
          value: { min: 1, max: 1 },
      },
  },
  detectRetina: true,

  });
