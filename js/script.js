//Génération d'un chiffre random pour attribuer les couleurs
function getCouleur() {
    if(parseInt($('#indexCouleurs').text()) == 3)
    {
        var max=4;
    }
    else{
        var max = 3;
    }
    return Math.floor(Math.random() * Math.floor(max))+1;
  }
  //attribuation des couleurs
function attribcouleurs (valeurCouleur, idCarte) {
    if(valeurCouleur == 1)
    {
        if(idCarte == 1)
        {
            $('.card-color1').css("background-color","#1E88E5");
        }
        else
        {
            $('.card-color2').css("background-color","#1E88E5");
        }
    }
    if(valeurCouleur == 2)
    {
        if(idCarte == 1)
        {
            $('.card-color1').css("background-color","#e53935");
        }
        else
        {
            $('.card-color2').css("background-color","#e53935");
        }
    }
    if(valeurCouleur == 3)
    {
        if(idCarte == 1)
        {
            $('.card-color1').css("background-color","#FDD835");
        }
        else
        {
            $('.card-color2').css("background-color","#FDD835");
        }
    }
    if(parseInt($('#indexCouleurs').text()) == 3)
    {
        if(valeurCouleur == 4)
        {
            if(idCarte == 1)
            {
                $('.card-color1').css("background-color","#7CB342");
            }
            else
            {
                $('.card-color2').css("background-color","#7CB342");
            }
        }
    }
    
    
    
}
//la fonction mère qui appelle toutes les autres.
function couleurs () {
    if(parseInt($('#indexPause').text()) == 0)
    {
        var color1 = getCouleur();
        attribcouleurs(color1, 1);
        var color2 = getCouleur();
        attribcouleurs(color2, 2);
        if(parseInt($('#ind').text()) == 6)
        {
            $('#score').text(parseInt($('#score').text()) - 1);
            $('#ind').text(0);
        }
        if(parseInt($('#score').text()) < 1)
        {
            if(parseInt($('#indexParam').text()) == 0)
            {
                $('.card').toggle('hidden');
                $('.valider').toggle('hidden');
                $('.pause').toggle('hidden');
            }
            else
            {
                $('.diff').toggle('hidden');
            }
            $('.param').toggle('hidden');
            $('.lost').toggle('hidden');
            $('.replay').toggle('hidden');
            $('#score').text(0);
            $('#indexCouleurs').text(999);
        }
        if(parseInt($('#score').text()) > 59)
        {
            if(parseInt($('#indexParam').text()) == 0)
            {
                $('.card').toggle('hidden');
                $('.valider').toggle('hidden');
                $('.pause').toggle('hidden');
            }
            else
            {
                $('.diff').toggle('hidden');
            }
            $('.param').toggle('hidden');
            $('.win').toggle('hidden');
            $('.replay').toggle('hidden');
            $('#score').text(0);
            $('#indexCouleurs').text(999);
        }
        if(parseInt($('#score').text()) > 19)
        {
            if(parseInt($('#indexCouleurs').text()) == 1 || parseInt($('#indexCouleurs').text()) == 2 || parseInt($('#indexCouleurs').text()) == 3)
            {}
            else
            {
                $('#indexCouleurs').text(1);
                $('.notifDiff').toggle('hidden');
                setTimeout(function(){ $('.notifDiff').toggle('hidden'); }, 5000);
            }
        }
        if(parseInt($('#score').text()) > 34)
        {
            if(parseInt($('#indexCouleurs').text()) == 2 || parseInt($('#indexCouleurs').text()) == 3)
            {}
            else
            {
                $('#indexCouleurs').text(2);
                $('.notifDiff2').toggle('hidden');
                setTimeout(function(){ $('.notifDiff2').toggle('hidden'); }, 5000);
            }
        }
        if(parseInt($('#score').text()) > 49)
        {
            if(parseInt($('#indexCouleurs').text()) == 3)
            {}
            else
            {
                $('#indexCouleurs').text(3);
                $('.notifDiff3').toggle('hidden');
                setTimeout(function(){ $('.notifDiff3').toggle('hidden'); }, 5000);
            }
        }
        if(parseInt($('#indexCouleurs').text()) == 0)
        {
            $('#ind').text(parseInt($('#ind').text()) + 1);
            setTimeout(arguments.callee, 1000);
        }
        if(parseInt($('#indexCouleurs').text()) == 1)
        {
            $('#ind').text(parseInt($('#ind').text()) + 1);
            setTimeout(arguments.callee, 750);
        }
        if(parseInt($('#indexCouleurs').text()) == 2)
        {
            $('#ind').text(parseInt($('#ind').text()) + 1);
            setTimeout(arguments.callee, 500);
        }
        if(parseInt($('#indexCouleurs').text()) == 3)
        {
            $('#ind').text(parseInt($('#ind').text()) + 1);
            setTimeout(arguments.callee, 350);
        }
    }
    else
    {
        setTimeout(arguments.callee, 1000);
    }
}


$(document).ready(function(){
    
    //au chargement :
    $('.valider').toggle('hidden');
    $('.param').toggle('hidden');
    $('.pause').toggle('hidden');
    $('.diff').toggle('hidden');
    $('.lost').toggle('hidden');
    $('.win').toggle('hidden');
    $('.replay').toggle('hidden');
    $('.ParamExplain').toggle('hidden');
    $('.notifDiff').toggle('hidden');
    $('.notifDiff2').toggle('hidden');
    $('.notifDiff3').toggle('hidden');
    setTimeout(function(){ $('.flexContainerExplain').toggle('hidden'); }, 5000);

    //clique sur le boutton Start
    $('.start').on('click', function(){
        $('.start').toggle('hidden');
        couleurs();
        $('.valider').toggle('hidden');
        $('.param').toggle('hidden');
        $('.pause').toggle('hidden');
    })
    //clique sur le boutton Valider
    $('.valider').on('click', function(){
        var select1 = $('.card-color1').css('background-color');
        var select2 = $('.card-color2').css('background-color');
        if(select1 == select2)
        {
            $('#score').text(parseInt($('#score').text()) + 2);
        }
        else
        {
            $('#score').text(parseInt($('#score').text()) - 1);
        }
    })
    //si on clique sur le bouton param
    $('.param').on('click', function(){
        if(parseInt($('#indexParam').text()) == 0)
        {
            $('#indexParam').text(1);
        }
        else
        {
            $('#indexParam').text(0);
        }
        $('.card').toggle('hidden');
        if(parseInt($('#indexPause').text()) == 0)
        {
            $('.valider').toggle('hidden');
        }
        $('.diff').toggle('hidden');
        $('.pause').toggle('hidden');
    })
     //si on clique sur le bouton pause
     $('.pause').on('click', function(){
        $('.valider').toggle('hidden');
        //$('.param').toggle('hidden');
        if(parseInt($('#indexPause').text()) == 1)
        {
            $('#indexPause').text(0);
        }
        else
        {
            $('#indexPause').text(1);
        }
    })
    //si on clique sur un bouton paramdiff
    $('#diff1').on('click', function(){
        $('#indexCouleurs').text(1);
    })
    $('#diff2').on('click', function(){
        $('#indexCouleurs').text(2);
    })
    $('#diff3').on('click', function(){
        $('#indexCouleurs').text(3);
    })

    //Le cheat
    $('#cheat1').on('click', function(){
        $('#score').text(parseInt($('#score').text()) + 1);
    })
    $('#cheat2').on('click', function(){
        $('#score').text(parseInt($('#score').text()) + 5);
    })
    $('#cheat3').on('click', function(){
        $('#score').text(parseInt($('#score').text()) + 10);
    })
    //si on clique sur le bouton rejouer
    $('.rejouer').on('click', function(){
        location.reload();
    })
    
//Fin de document
})
