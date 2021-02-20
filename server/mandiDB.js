const request = require('request');

mongoClient.connect(process.env.MANDI_URI||'mongodb://localhost/mandi', {useUnifiedTopology: true}, (error,client) => {
        if(error)
            throw error;
        database = client.db('mandi');
        collection = database.collection('commodities');
        console.log('connected to Mandi');
    });

//fetching api data
request.get({
    url: `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${process.env.MANDI_KEY}&format=json&offset=10&limit=10`,
    headers: {
     'accept': 'applications/xml'
    }, 
}, 
(error, response, body) => {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});
