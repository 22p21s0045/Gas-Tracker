import React from "react";
import Particles from "react-tsparticles";
function TsParticle(prop:any) {
  return (
    <div className="Particlejs">
      <Particles
        options={{
            background: {
                color: {
                  value: "#FBE5E5",
                },
              },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 5,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#573391",
              
            },
            
            
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 0.3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 20,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "image",
              image: {
                src: "https://imgz.io/images/2022/02/16/opengraph.png",
                width: 100,
                height: 100,
              },
            },
            size: {
              random: true,
              value: 40,
            },
          },
          detectRetina: true,
          
          
        }}
      />
    </div>
  );
}

export default TsParticle;
