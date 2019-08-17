const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

var channels_client = new Pusher({
  appId: '775873',
  key: '621ee746824ccbe9eaf8',
  secret: '5537019ae134c4037705',
  cluster: 'ap2',
  encrypted: true
});

router.get('/', (req, res) => {
  res.send('all good');
});

router.post('/message', (req, res) => {
  console.log('message', req.body);
  const message = req.body.message;
  
  channels_client.trigger('channel', 'event', {
    "message": message
  });
})

module.exports = router;