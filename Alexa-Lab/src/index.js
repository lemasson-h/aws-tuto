var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);


    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },

    'GetNewFactIntent': function () {
        var say = 'Hello Ryan! Lets begin studying for our exam!' + getFact();
        this.emit(':tell', say );
    },

    'AMAZON.HelpIntent': function () {
         this.emit(':ask', 'Learn everything you need to know about Amazon Web Services to pass your exam by listening to your very own study notes. You can start by saying, Ryan help me study.', 'try again');
     },

     'AMAZON.CancelIntent': function () {
         this.emit(':tell', 'Goodbye Cloud Gurus');
     },

     'AMAZON.StopIntent': function () {
         this.emit(':tell', 'Goodbye Cloud Gurus');
     }
};

//  helper functions  ===================================================================


function getFact() {
    var myFacts = [
    '<audio src=\"https://s3-eu-west-1.amazonaws.com/hlemascon-polly-stockage/f6679c72-c85f-4bb8-99e2-5971c2fee550.mp3\" />',
    '<audio src=\"https://s3-eu-west-1.amazonaws.com/hlemascon-polly-stockage/195c36e2-1b34-4f48-b2b9-7024dd5f6cf3.mp3\" />',
    '<audio src=\"https://s3-eu-west-1.amazonaws.com/hlemascon-polly-stockage/f765f52c-9995-4ecd-8734-61a3758ea62c.mp3\" />'
    ]

    var newFact = randomPhrase(myFacts);

    return newFact;
}

function randomPhrase(array) {
    // the argument is an array [] of words or phrases
    var i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}
