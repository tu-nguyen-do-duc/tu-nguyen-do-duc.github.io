function submit() {
    var array = ['arnold.jpg','ronnie.jpg','phil.jpg','jay.jpg','mike.jpg'];
    var index = Math.round(Math.random()*4);
    var output = "<img src=" + array[index] + " width='500' alt='Customized dwarf'> <br>" + "<h1>This is the epic dwarf you created! Congratulation!</h1>"
    document.getElementById('output').innerHTML = output;
}