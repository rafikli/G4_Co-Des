document.addEventListener('DOMContentLoaded', function() {

  let db = connect('https://p1-co-des.firebaseio.com/')

  let params = extract()

  let path = '/' + params['foco'] + '/' + params['category'] + '/' + params['course']

  if(path != '/undefined/undefined/undefined'){
    /* codigo das paginas de projeto */
    db.download(path, function(data) {
      let corpo = document.querySelector('.hidden')
      let gif = document.querySelector('.load')
      gif.classList.add('hidden')
      corpo.classList.remove('hidden')

      replace('body', {
          'nome': data['nome'],
          'disciplina': data['disciplina'],
          'descrição' : data['descrição'],
          'conteudo' : data['conteudo'],
          'objetivos' : data['objetivos'],
          'exemplos' : data['exemplos'],
          'foto' : data['foto']
      })
      replace('head', {
          'nome': data['nome']
      })
    })
  }

  else{
    path = '/'

    db.download(path, function(data) {
      let corpo = document.querySelector('.hidden')
      let gif = document.querySelector('.load')
      gif.classList.add('hidden')
      corpo.classList.remove('hidden')
      replace('body', {
          'FocoPrático': data['Foco Prático'],
          'FocoTeórico': data['Foco Teórico'],
      })
      let focoTeorico = document.querySelector('.ver-todos-box1')
      let focoPratico = document.querySelector('.ver-todos-box2')
      let focoT = document.querySelector('.foco-tl')
      let focoP = document.querySelector('.foco-pl')
      let grupoTeorico = document.querySelector('.grupo-teorico')
      let grupoPratico = document.querySelector('.grupo-pratico')
      let itemPratico = document.querySelector('.item-pratico')
      let itemTeorico = document.querySelector('.item-teorico')

      grupoTeorico.classList.add("sumiu")
      grupoPratico.classList.add("sumiu")
      itemTeorico.classList.add("sumiu")
      itemPratico.classList.add("sumiu")

      focoTeorico.addEventListener("click", function() {
        console.log('funfaaaa');
        grupoTeorico.classList.remove("sumiu");
      })
      focoPratico.addEventListener('click', function() {
        console.log('funfaaaa')
        grupoPratico.classList.remove("sumiu")
      })
      })
  }
})
