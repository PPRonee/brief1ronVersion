
   
    function cacher(id){
      var block = document.getElementById(id);
      block.setAttribute('style',"display:none");
    }
    function afficher(id){
        var block = document.getElementById(id);
        block.setAttribute('style',"height: auto;");
      }
    /* height:0px a été remplacer par display:none */
