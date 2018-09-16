document.addEventListener('DOMContentLoaded', function() {

  let db = connect('https://p1-co-des.firebaseio.com/')

  let params = extract()

  let path = '/' + params['foco'] + '/' + params['category'] + '/' + params['course']

  if(path != '/undefined/undefined/undefined'){
    /* codigo das paginas de projeto */
    db.download(path, function(data) {

      replace('body', {
          'nome': data['nome'],
          'disciplina': data['disciplina'], 
          'descrição' : data['descrição'],
          'conteudo' : data['conteudo'],
          'objetivos' : data['objetivos'],
          'exemplos' : data['exemplos'],   
      })
    })
  }

  else{
    path = '/'

    db.download(path, function(data) {

      replace('body', {
          'FocoPrático': data['Foco Prático'],
          'FocoTeórico': data['Foco Teórico'],    
      })
      })
  }

})