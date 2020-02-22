console.log(window.getComputedStyle(document.documentElement)
.getPropertyValue('--text-color'));

document.getElementById('dark-theam')
.addEventListener('click', () =>{
    document.documentElement.style
    .setProperty('--background-color', 'black')
});

document.getElementById('light-theam')
.addEventListener('click', () =>{
    document.documentElement.style
    .setProperty('--background-color', 'white')
});
