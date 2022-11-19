hero = ['Ivan'];
native = ['York', 'Of'];
destination = ['Poltava', 'In'];

rainbow = hero.concat(native, destination);

rainbow.reverse();

rainbow.shift();

rainbow.push('Battle', 'In', 'Vain');

rainbow.splice(0, 1, 'Richard');

rainbow.splice(3, 1, 'Gave');

color = ['red', 'orange', 'yellow', 'green', 'sky', 'blue', `blueviolet`]

for (i = 0; i < rainbow.length; i++)
    
document.write(`
	    <div class="circle">
			<div class="color ${color[i]}"></div>
			<p class="text">${rainbow[i]}</p> 
      </div>
`)
    
console.log(rainbow)


