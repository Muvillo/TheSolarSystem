let orbit = document.getElementsByClassName('.orbit');
let div

function ChangeOver(name){
    div = document.createElement('div');
    div.innerHTML = name;
    div.className = "namePlanet";
    document.body.append(div);
}

function ChangeOut(){
    div.remove();
}

document.getElementById('btn').addEventListener('click', function(){

    document.getAnimations().forEach((animation)=>{
        animation.cancel();
    });

    document.getElementById('sun').classList.toggle('sun-transform');
    document.getElementById('orbitMercury').classList.toggle('mercury-transform');
    document.getElementById('mercury').classList.toggle('mercuryView');
    document.getElementById('orbitVenus').classList.toggle('venus-transform');
    document.getElementById('venus').classList.toggle('venusView');
    document.getElementById('orbitEarth').classList.toggle('earth-transform');
    document.getElementById('earth').classList.toggle('earthView');
    document.getElementById('orbitMars').classList.toggle('mars-transform');
    document.getElementById('mars').classList.toggle('marsView');
    document.getElementById('orbitJupiter').classList.toggle('jupiter-transform');
    document.getElementById('jupiter').classList.toggle('jupiterView');
    document.getElementById('orbitSaturn').classList.toggle('saturn-transform');
    document.getElementById('saturn').classList.toggle('saturnView');
    document.getElementById('orbitUranus').classList.toggle('uran-transform');
    document.getElementById('uran').classList.toggle('uranView');
    document.getElementById('orbitNeptune').classList.toggle('neptune-transform');
    document.getElementById('neptune').classList.toggle('neptuneView');
    document.getElementById('mercury').style.animation = 'rotate 4s linear infinite';
    document.getElementById('venus').style.animation = 'rotate 5s linear infinite';
    document.getElementById('earth').style.animation = 'rotate 6s linear infinite';
    document.getElementById('mars').style.animation = 'rotate 7s linear infinite';
    document.getElementById('jupiter').style.animation = 'rotate 8s linear infinite';
    document.getElementById('uran').style.animation = 'rotate 9s linear infinite';
    document.getElementById('neptune').style.animation = 'rotate 10s linear infinite';

  })

document.getElementById('mercury').addEventListener('click', function(){
    document.getElementById('mercury').style.animation = 'test 4s linear 1 forwards';
    
})