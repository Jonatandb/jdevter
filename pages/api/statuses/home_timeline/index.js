const timeline = [
  {
    id: '0',
    username: 'midudev',
    avatar:
      'https://yt3.ggpht.com/ytc/AAUvwnjRDntpiFfmzUPPNIwOiN0R4K5WSuAmKM0btEBIIQ=s48-c-k-c0x00ffffff-no-rj',
    message:
      'Creando la página Home y configurando ESLINT y PRETTIER en nuestro proyecto. \n\n Vamos a configurar Eslint y Prettier en nuestro proyecto basándonos en las reglas de Standard. Explicaremos cómo hacerlo paso a paso e integrarlo en nuestro editor gracias a las extensiones de Visual Studio Code.\n ',
  },
  {
    id: '1',
    username: 'Jonatandb',
    avatar:
      'https://yt3.ggpht.com/yti/ANoDKi44enaPorBI4PYcB8pyjkfyFeK3x0MnPfJpj8j9cA=s88-c-k-c0x00ffffff-no-rj-mo',
    message: 'I love spacedashboard.com! 🔭✨💫',
  },
  {
    id: '2',
    username: 'Anon',
    avatar:
      'https://yt3.ggpht.com/ytc/AAUvwnhC87JiwaRBjY9VB3Ci09Ab71bB9NtMS0ET9VSi=s48-c-k-c0x00ffffff-no-rj',
    message: 'Looking for awesome gifs? -> giffydb.now.sh',
  },
  {
    id: '3',
    username: 'midudev',
    avatar:
      'https://yt3.ggpht.com/ytc/AAUvwnjRDntpiFfmzUPPNIwOiN0R4K5WSuAmKM0btEBIIQ=s48-c-k-c0x00ffffff-no-rj',
    message:
      'Creando la página Home y configurando ESLINT y PRETTIER en nuestro proyecto. \n\n Vamos a configurar Eslint y Prettier en nuestro proyecto basándonos en las reglas de Standard. Explicaremos cómo hacerlo paso a paso e integrarlo en nuestro editor gracias a las extensiones de Visual Studio Code.\n ',
  },
  {
    id: '4',
    username: 'Jonatandb',
    avatar:
      'https://yt3.ggpht.com/yti/ANoDKi44enaPorBI4PYcB8pyjkfyFeK3x0MnPfJpj8j9cA=s88-c-k-c0x00ffffff-no-rj-mo',
    message: 'I love spacedashboard.com! 🔭✨💫',
  },
  {
    id: '5',
    username: 'Anon',
    avatar:
      'https://yt3.ggpht.com/ytc/AAUvwnhC87JiwaRBjY9VB3Ci09Ab71bB9NtMS0ET9VSi=s48-c-k-c0x00ffffff-no-rj',
    message: 'Looking for awesome gifs? -> giffydb.now.sh',
  },
  {
    id: '6',
    username: 'midudev',
    avatar:
      'https://yt3.ggpht.com/ytc/AAUvwnjRDntpiFfmzUPPNIwOiN0R4K5WSuAmKM0btEBIIQ=s48-c-k-c0x00ffffff-no-rj',
    message:
      'Creando la página Home y configurando ESLINT y PRETTIER en nuestro proyecto. \n\n Vamos a configurar Eslint y Prettier en nuestro proyecto basándonos en las reglas de Standard. Explicaremos cómo hacerlo paso a paso e integrarlo en nuestro editor gracias a las extensiones de Visual Studio Code.\n ',
  },
  {
    id: '7',
    username: 'Jonatandb',
    avatar:
      'https://yt3.ggpht.com/yti/ANoDKi44enaPorBI4PYcB8pyjkfyFeK3x0MnPfJpj8j9cA=s88-c-k-c0x00ffffff-no-rj-mo',
    message: 'I love spacedashboard.com! 🔭✨💫',
  },
  {
    id: '8',
    username: 'Anon',
    avatar:
      'https://yt3.ggpht.com/ytc/AAUvwnhC87JiwaRBjY9VB3Ci09Ab71bB9NtMS0ET9VSi=s48-c-k-c0x00ffffff-no-rj',
    message: 'Looking for awesome gifs? -> giffydb.now.sh',
  },
  {
    id: '9',
    username: 'midudev',
    avatar:
      'https://yt3.ggpht.com/ytc/AAUvwnjRDntpiFfmzUPPNIwOiN0R4K5WSuAmKM0btEBIIQ=s48-c-k-c0x00ffffff-no-rj',
    message:
      'Creando la página Home y configurando ESLINT y PRETTIER en nuestro proyecto. \n\n Vamos a configurar Eslint y Prettier en nuestro proyecto basándonos en las reglas de Standard. Explicaremos cómo hacerlo paso a paso e integrarlo en nuestro editor gracias a las extensiones de Visual Studio Code.\n ',
  },
  {
    id: '10',
    username: 'Jonatandb',
    avatar:
      'https://yt3.ggpht.com/yti/ANoDKi44enaPorBI4PYcB8pyjkfyFeK3x0MnPfJpj8j9cA=s88-c-k-c0x00ffffff-no-rj-mo',
    message: 'I love spacedashboard.com! 🔭✨💫',
  },
  {
    id: '11',
    username: 'Anon',
    avatar:
      'https://yt3.ggpht.com/ytc/AAUvwnhC87JiwaRBjY9VB3Ci09Ab71bB9NtMS0ET9VSi=s48-c-k-c0x00ffffff-no-rj',
    message: 'Looking for awesome gifs? -> giffydb.now.sh',
  },
]

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(timeline))
}
