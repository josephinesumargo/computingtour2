var APP_DATA = {
  "scenes": [
    {
      "id": "0-com1-building",
      "name": "COM1 Building",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.6149682733379827,
        "pitch": -0.12035185490358202,
        "fov": 1.3419674740723089
      },
      "linkHotspots": [
        {
          "yaw": 0.1644066542041589,
          "pitch": 0.025893266606248133,
          "rotation": 12.566370614359176,
          "target": "1-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.1314877377059247,
          "pitch": -0.6396019040537944,
          "title": "NUS School of Computing<br>",
          "text": "Welcome to the COM1 of NUS School of Computing!<br>"
        }
      ]
    },
    {
      "id": "1-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.30737494311613744,
        "pitch": -0.011448026065526307,
        "fov": 1.3419674740723089
      },
      "linkHotspots": [
        {
          "yaw": 2.2589425465216877,
          "pitch": 0.057853180796886505,
          "rotation": 0,
          "target": "2-foyer-at-level-2"
        },
        {
          "yaw": 1.279731840616126,
          "pitch": -0.03936354093623606,
          "rotation": 0,
          "target": "0-com1-building"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2670433053215326,
          "pitch": -0.35822439165850284,
          "title": "COM1 Lobby<br>",
          "text": "This is the COM1 Lobby where you can find NUS Computing's History!<br>"
        }
      ]
    },
    {
      "id": "2-foyer-at-level-2",
      "name": "Foyer at Level 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.0914272441552555,
        "pitch": 0.003801261539059908,
        "fov": 1.3419674740723089
      },
      "linkHotspots": [
        {
          "yaw": -3.130081854199833,
          "pitch": 0.09290370663905279,
          "rotation": 0,
          "target": "1-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.13558458073308444,
          "pitch": 0.01262763810694878,
          "title": "COM1 Level 2 - Foyer<br>",
          "text": "Here is the place for you to study!<br>"
        }
      ]
    }
  ],
  "name": "School of Computing",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
