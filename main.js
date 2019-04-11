function compute()
{
  let pointure = document.getElementById('shoeSize').value;
  let naissance = document.getElementById('yearOfBirth').value;
  //alert((pointure * 2 + 5) * 50 - naissance + 1766 );
// Création de deux variables d'une valeur donnée puis mise en place d'un calcul automatique avec des nombres purs
  if (isNaN(pointure) || isNaN(naissance)){
      alert('Mettez des nombres !')
  } else {
    alert((pointure * 2 + 5) * 50 - naissance + 1766)
  }
}
