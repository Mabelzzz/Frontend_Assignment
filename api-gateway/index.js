const express = require('express');
const app = express();
const router = express.Router();
const axios = require('axios').default;
const cors = require('cors')

app.use(cors());

router.get('/:lang/trips', async (req, res) => {
  let lang = req.params?.lang;
  let keyword = req.query?.keyword;
  let baseUrl = 'http://localhost:9000';
  let pathLang = lang === 'en' ? '/en' : '/th';
  let uri = baseUrl + pathLang + '/trips'
  let result = await axios.get(uri)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    })
  if (keyword) {
    result = result.filter(r => r.title.includes(keyword) || r.description.includes(keyword) || r.tags.includes(keyword));
  }
  res.send(result);
});

app.use('/', router);

app.listen(3001, () => console.log('Web server is listening on port 3001...'));
