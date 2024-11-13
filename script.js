const elem = document.querySelector(".deer");
const scaleValue = window.innerWidth <= 768 ? 1 : 0.3; // Set scale to 2.0 for mobile, 0.3 otherwise
const xOffsetValue = window.innerWidth <= 768 ? 70 : 50; // Set scale to 2.0 for mobile, 0.3 otherwise

tsParticles.set("tsparticles_0", elem, {
    "autoPlay": true,
    "background": {
      "color": {
        "value": "#0000000",
        "value": "#0000000",
      },
      "image": "",
      "position": "50% 50%",
      "repeat": "no-repeat",
      "size": "stretch",
      "opacity": 1
    },
    "backgroundMask": {
      "composite": "destination-out",
      "cover": {
        "color": {
          "value": "#fff"
        },
        "opacity": 1
      },
      "enable": false
    },
    "clear": true,
    "defaultThemes": {},
    "delay": 0,
    "fullScreen": {
      "enable": false,
      "zIndex": 0
    },
    "detectRetina": true,
    "duration": 0,
    "fpsLimit": 120,
   
    "manualParticles": [],
    "particles": {
      "bounce": {
        "horizontal": {
          "value": 1
        },
        "vertical": {
          "value": 1
        }
      },
      "collisions": {
        "absorb": {
          "speed": 2
        },
        "bounce": {
          "horizontal": {
            "value": 1
          },
          "vertical": {
            "value": 1
          }
        },
        "enable": false,
        "maxSpeed": 30,
        "mode": "bounce",
        "overlap": {
          "enable": true,
          "retries": 0
        }
      },
      "color": {
        "value": "#ffffff",
        "animation": {
          "h": {
            "count": 0,
            "enable": false,
            "speed": 1,
            "decay": 0,
            "delay": 0,
            "sync": true,
            "offset": 0
          },
          "s": {
            "count": 0,
            "enable": false,
            "speed": 1,
            "decay": 0,
            "delay": 0,
            "sync": true,
            "offset": 0
          },
          "l": {
            "count": 0,
            "enable": false,
            "speed": 1,
            "decay": 0,
            "delay": 0,
            "sync": true,
            "offset": 0
          }
        }
      },
      "effect": {
        "close": true,
        "fill": true,
        "options": {},
        "type": {}
      },
      "groups": [],
      "move": {
        "angle": {
          "offset": 0,
          "value": 90
        },
        "attract": {
          "distance": 200,
          "enable": false,
          "rotate": {
            "x": 3000,
            "y": 3000
          }
        },
        "center": {
          "x": 50,
          "y": 50,
          "mode": "percent",
          "radius": 0
        },
        "decay": 0,
        "distance": {},
        "direction": "none",
        "drift": 0,
        "enable": true,
        "gravity": {
          "acceleration": 9.81,
          "enable": false,
          "inverse": false,
          "maxSpeed": 50
        },
        "path": {
          "clamp": true,
          "delay": {
            "value": 0
          },
          "enable": false,
          "options": {}
        },
        "outModes": {
          "default": "bounce",
          "bottom": "bounce",
          "left": "bounce",
          "right": "bounce",
          "top": "bounce"
        },
        "random": false,
        "size": false,
        "speed": 1,
        "spin": {
          "acceleration": 0,
          "enable": false
        },
        "straight": false,
        "trail": {
          "enable": false,
          "length": 10,
          "fill": {}
        },
        "vibrate": false,
        "warp": false
      },
      "number": {
        "density": {
          "enable": false,
          "width": 1920,
          "height": 1080
        },
        "limit": {
          "mode": "delete",
          "value": 0
        },
        "value": 100
      },
      "reduceDuplicates": false,
      "size": {
        "value": 0,
        "animation": {
          "count": 0,
          "enable": false,
          "speed": 10,
          "decay": 0,
          "delay": 0,
          "sync": false,
          "mode": "auto",
          "startValue": "random",
          "destroy": "none"
        }
      },
      "destroy": {
        "bounds": {},
        "mode": "none",
        "split": {
          "count": 1,
          "factor": {
            "value": 3
          },
          "rate": {
            "value": {
              "min": 4,
              "max": 9
            }
          },
          "sizeOffset": true,
          "particles": {}
        }
      },
      "roll": {
        "darken": {
          "enable": false,
          "value": 0
        },
        "enable": false,
        "enlighten": {
          "enable": false,
          "value": 0
        },
        "mode": "vertical",
        "speed": 25
      },
      "tilt": {
        "value": 0,
        "animation": {
          "enable": false,
          "speed": 0,
          "decay": 0,
          "sync": false
        },
        "direction": "clockwise",
        "enable": false
      },
      "twinkle": {
        "lines": {
          "enable": false,
          "frequency": 0.05,
          "opacity": 1
        },
        "particles": {
          "enable": false,
          "frequency": 0.05,
          "opacity": 1
        }
      },
      "wobble": {
        "distance": 5,
        "enable": false,
        "speed": {
          "angle": 50,
          "move": 10
        }
      },
      "life": {
        "count": 0,
        "delay": {
          "value": 0,
          "sync": false
        },
        "duration": {
          "value": 0,
          "sync": false
        }
      },
      "rotate": {
        "value": 0,
        "animation": {
          "enable": false,
          "speed": 0,
          "decay": 0,
          "sync": false
        },
        "direction": "clockwise",
        "path": false
      },
      "orbit": {
        "animation": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": false
        },
        "enable": false,
        "opacity": 1,
        "rotation": {
          "value": 45
        },
        "width": 1
      },
      "links": {
        "blink": false,
        "color": {
          "value": "#ffffff"
        },
        "consent": false,
        "distance": 30,
        "enable": true, //chnage thishshhhhhhhh
        "frequency": 1,
        "opacity": 0.4,
        "shadow": {
          "blur": 5,
          "color": {
            "value": "#000"
          },
          "enable": false
        },
        "triangles": {
          "enable": false,
          "frequency": 0.02
        },
        "width": 1,
        "warp": false
      },
      "repulse": {
        "value": 0,
        "enabled": false,
        "distance": 1,
        "duration": 1,
        "factor": 1,
        "speed": 1
      }
    },
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": true,
    "responsive": [{
        "maxWidth": 100,
        "options": {
          "polygon": {
            "scale": 1.0,
          }
        }
      }],
    "smooth": false,
    "style": {},
    "themes": [],
    "zLayers": 100,
    "name": "Polygon Mask",
    "motion": {
      "disable": false,
      "reduce": {
        "factor": 4,
        "value": true
      }
    },
    "polygon": {
      "draw": {
        "enable": true,
        "stroke": {
          "color": {
            "value": "#fff"
          },
          "width": 1,
          "opacity": 0.3 //also changes this
        }
      },
      "enable": true,
      "inline": {
        "arrangement": "equidistant"
      },
      "move": {
        "radius": 10,
        "type": "path"
      },
      "scale": scaleValue,
      "type": "inline",
      "url": "/smalldeer.svg",
      "position": {
        "x": xOffsetValue,
        "y": 50
      }
    }
  });


  window.addEventListener('resize', function() {
    const scaleValue = window.innerWidth <= 768 ? 1 : 0.3; // Set scale to 2.0 for mobile, 0.3 otherwise
    const xOffsetValue = window.innerWidth <= 768 ? 70 : 50; // Set scale to 2.0 for mobile, 0.3 otherwise
    
    tsParticles.set("tsparticles_0", elem, {
        "autoPlay": true,
        "background": {
          "color": {
            "value": "#0000000",
            "value": "#0000000",
          },
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "stretch",
          "opacity": 1
        },
        "backgroundMask": {
          "composite": "destination-out",
          "cover": {
            "color": {
              "value": "#fff"
            },
            "opacity": 1
          },
          "enable": false
        },
        "clear": true,
        "defaultThemes": {},
        "delay": 0,
        "fullScreen": {
          "enable": false,
          "zIndex": 0
        },
        "detectRetina": true,
        "duration": 0,
        "fpsLimit": 120,
       
        "manualParticles": [],
        "particles": {
          "bounce": {
            "horizontal": {
              "value": 1
            },
            "vertical": {
              "value": 1
            }
          },
          "collisions": {
            "absorb": {
              "speed": 2
            },
            "bounce": {
              "horizontal": {
                "value": 1
              },
              "vertical": {
                "value": 1
              }
            },
            "enable": false,
            "maxSpeed": 30,
            "mode": "bounce",
            "overlap": {
              "enable": true,
              "retries": 0
            }
          },
          "color": {
            "value": "#ffffff",
            "animation": {
              "h": {
                "count": 0,
                "enable": false,
                "speed": 1,
                "decay": 0,
                "delay": 0,
                "sync": true,
                "offset": 0
              },
              "s": {
                "count": 0,
                "enable": false,
                "speed": 1,
                "decay": 0,
                "delay": 0,
                "sync": true,
                "offset": 0
              },
              "l": {
                "count": 0,
                "enable": false,
                "speed": 1,
                "decay": 0,
                "delay": 0,
                "sync": true,
                "offset": 0
              }
            }
          },
          "effect": {
            "close": true,
            "fill": true,
            "options": {},
            "type": {}
          },
          "groups": [],
          "move": {
            "angle": {
              "offset": 0,
              "value": 90
            },
            "attract": {
              "distance": 200,
              "enable": false,
              "rotate": {
                "x": 3000,
                "y": 3000
              }
            },
            "center": {
              "x": 50,
              "y": 50,
              "mode": "percent",
              "radius": 0
            },
            "decay": 0,
            "distance": {},
            "direction": "none",
            "drift": 0,
            "enable": true,
            "gravity": {
              "acceleration": 9.81,
              "enable": false,
              "inverse": false,
              "maxSpeed": 50
            },
            "path": {
              "clamp": true,
              "delay": {
                "value": 0
              },
              "enable": false,
              "options": {}
            },
            "outModes": {
              "default": "bounce",
              "bottom": "bounce",
              "left": "bounce",
              "right": "bounce",
              "top": "bounce"
            },
            "random": false,
            "size": false,
            "speed": 1,
            "spin": {
              "acceleration": 0,
              "enable": false
            },
            "straight": false,
            "trail": {
              "enable": false,
              "length": 10,
              "fill": {}
            },
            "vibrate": false,
            "warp": false
          },
          "number": {
            "density": {
              "enable": false,
              "width": 1920,
              "height": 1080
            },
            "limit": {
              "mode": "delete",
              "value": 0
            },
            "value": 100
          },
          "reduceDuplicates": false,
          "size": {
            "value": 0,
            "animation": {
              "count": 0,
              "enable": false,
              "speed": 10,
              "decay": 0,
              "delay": 0,
              "sync": false,
              "mode": "auto",
              "startValue": "random",
              "destroy": "none"
            }
          },
          "destroy": {
            "bounds": {},
            "mode": "none",
            "split": {
              "count": 1,
              "factor": {
                "value": 3
              },
              "rate": {
                "value": {
                  "min": 4,
                  "max": 9
                }
              },
              "sizeOffset": true,
              "particles": {}
            }
          },
          "roll": {
            "darken": {
              "enable": false,
              "value": 0
            },
            "enable": false,
            "enlighten": {
              "enable": false,
              "value": 0
            },
            "mode": "vertical",
            "speed": 25
          },
          "tilt": {
            "value": 0,
            "animation": {
              "enable": false,
              "speed": 0,
              "decay": 0,
              "sync": false
            },
            "direction": "clockwise",
            "enable": false
          },
          "twinkle": {
            "lines": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            },
            "particles": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            }
          },
          "wobble": {
            "distance": 5,
            "enable": false,
            "speed": {
              "angle": 50,
              "move": 10
            }
          },
          "life": {
            "count": 0,
            "delay": {
              "value": 0,
              "sync": false
            },
            "duration": {
              "value": 0,
              "sync": false
            }
          },
          "rotate": {
            "value": 0,
            "animation": {
              "enable": false,
              "speed": 0,
              "decay": 0,
              "sync": false
            },
            "direction": "clockwise",
            "path": false
          },
          "orbit": {
            "animation": {
              "count": 0,
              "enable": false,
              "speed": 1,
              "decay": 0,
              "delay": 0,
              "sync": false
            },
            "enable": false,
            "opacity": 1,
            "rotation": {
              "value": 45
            },
            "width": 1
          },
          "links": {
            "blink": false,
            "color": {
              "value": "#ffffff"
            },
            "consent": false,
            "distance": 30,
            "enable": true,
            "frequency": 1,
            "opacity": 0.4,
            "shadow": {
              "blur": 5,
              "color": {
                "value": "#000"
              },
              "enable": false
            },
            "triangles": {
              "enable": true,
              "frequency": 0.02
            },
            "width": 1,
            "warp": false
          },
          "repulse": {
            "value": 0,
            "enabled": false,
            "distance": 1,
            "duration": 1,
            "factor": 1,
            "speed": 1
          }
        },
        "pauseOnBlur": true,
        "pauseOnOutsideViewport": true,
        "responsive": [{
            "maxWidth": 100,
            "options": {
              "polygon": {
                "scale": 1.0,
              }
            }
          }],
        "smooth": false,
        "style": {},
        "themes": [],
        "zLayers": 100,
        "name": "Polygon Mask",
        "motion": {
          "disable": false,
          "reduce": {
            "factor": 4,
            "value": true
          }
        },
        "polygon": {
          "draw": {
            "enable": true,
            "stroke": {
              "color": {
                "value": "#fff"
              },
              "width": 1,
              "opacity": 0.2
            }
          },
          "enable": true,
          "inline": {
            "arrangement": "equidistant"
          },
          "move": {
            "radius": 10,
            "type": "path"
          },
          "scale": scaleValue,
          "type": "inline",
          "url": "/smalldeer.svg",
          "position": {
            "x": xOffsetValue,
            "y": 50
          }
        }});
  });
  