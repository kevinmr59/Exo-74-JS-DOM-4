let libButton = document.getElementById('lib-button');

let libIt = function() {
    let noun = document.getElementById("noun").value;
    let adjective = document.getElementById('person').value;
    let name = document.getElementById('person').value;
    let storyDiv=document.getElementById('story');

    storyDiv.innerHTML= noun + " " + adjective + ""+name;

};
libButton.addEventListener('click', libIt);








