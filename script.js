document.addEventListener('DOMContentLoaded', function() {
    //INDEX.HTML
    //when button is cklicked
    document.querySelector('#check').addEventListener('click', function() {
        //get users name
        let name = document.querySelector('#name').value;
        //make counter for checkboxes
        let counter = 0;
        //loop for count
        let inputElements = document.getElementsByClassName('checkbox');
        for(let i=0; inputElements[i]; ++i){
            if(inputElements[i].checked){
                counter++;
            }
            inputElements[i].checked = false;
        }
        //print greeting
        if (name) {
            document.getElementById('greeting').innerHTML = "Hi, "+name+"!";
        } else {
            document.getElementById('greeting').innerHTML = "Hi!";
        }
        document.querySelector('#name').value = "";

        //print result
        if (counter === 0) {
            document.getElementById('result').innerHTML = "Oh, we have absolutely nothing in common! Hmm... maybe it will be interesting for us to learn about each other's hobbies and look at the world from a different perspective.";
        } else if (counter === 1 || counter === 2) {
            document.getElementById('result').innerHTML = "We can find several topics for conversation. Perhaps we have more in common than meets the eye.";
        } else if (counter === 3 || counter === 4) {
            document.getElementById('result').innerHTML = "I think we could have a good time together. We would not be bored discussing common interests and supplementing with stories about our other hobbies.";
        } else if (counter === 5) {
            document.getElementById('result').innerHTML = "Wow, how cool, we definitely have a lot to talk about and to do. I'd love to know what else you like.";
        } else if (counter === 6) {
            document.getElementById('result').innerHTML = "Really? Maybe I accidentally filled out this form :D Seriously though, wow there is so much we can talk about and do.";
        }
    })
})

//FAVORITES.HTML
document.addEventListener('DOMContentLoaded', function() {
    //color
    document.getElementById('btn1').addEventListener('click', function()
    {
        document.getElementById('favorite').innerHTML = 'violet';
    });
    //fruit
    document.getElementById('btn2').addEventListener('click', function()
    {
        document.getElementById('favorite').innerHTML = 'orange/raspberry';
    });
    //tee
    document.getElementById('btn3').addEventListener('click', function()
    {
        document.getElementById('favorite').innerHTML = 'ginger-lemon';
    });
    //season
    document.getElementById('btn4').addEventListener('click', function()
    {
        document.getElementById('favorite').innerHTML = 'Spring';
    });
    //genre of series/movies
    document.getElementById('btn5').addEventListener('click', function()
    {
        document.getElementById('favorite').innerHTML = 'crime/comedy';
    });
})
