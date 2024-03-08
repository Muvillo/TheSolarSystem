let orbit = document.getElementsByClassName('.orbit');
let div
let infoText
let info = document.createElement('div');
let text = document.createElement('p');
let closeBtn = document.createElement('span')
closeBtn.innerHTML = "✖";
info.className = "info";
text.className = "text";
closeBtn.className = "closeBtn";

function ChangeOver(name){
    div = document.createElement('div');
    div.innerHTML = name;
    div.className = "namePlanet";
    document.body.append(div);
}

function ChangeOut(){
    div.remove();
}

function setTeg(){
    text.innerHTML = infoText.innerHTML;
    document.body.append(info);
    info.append(closeBtn);
    info.append(text); 
}

function closeTeg(){
    closeBtn.addEventListener('click', function(){
        info.remove();
    })
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

document.getElementById('orbitMercury').addEventListener('click', function(){
    infoText = document.getElementById('infoMercury');

    setTeg(); 
    closeTeg();
})

document.getElementById('orbitVenus').addEventListener('click', function(){
    infoText = document.getElementById('infoVenus');

    setTeg(); 
    closeTeg();
})

document.getElementById('orbitEarth').addEventListener('click', function(){
    infoText = document.getElementById('infoEarth');

    setTeg(); 
    closeTeg();
})

document.getElementById('orbitMars').addEventListener('click', function(){
    infoText = document.getElementById('infoMars');

    setTeg(); 
    closeTeg();
})

document.getElementById('orbitJupiter').addEventListener('click', function(){
    infoText = document.getElementById('infoJupiter');

    setTeg(); 
    closeTeg();
})

document.getElementById('orbitSaturn').addEventListener('click', function(){
    infoText = document.getElementById('infoSaturn');

    setTeg(); 
    closeTeg();
})

document.getElementById('orbitUranus').addEventListener('click', function(){
    infoText = document.getElementById('infoUranus');

    setTeg(); 
    closeTeg();
})

document.getElementById('orbitNeptune').addEventListener('click', function(){
    infoText = document.getElementById('infoNeptune');

    setTeg(); 
    closeTeg();
})

document.getElementById('sun').addEventListener('click', function(){
    infoText = document.getElementById('infoSun');

    setTeg(); 
    closeTeg();
})