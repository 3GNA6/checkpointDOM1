// Sélectionne tous les éléments avec la classe "box"
var produits = document.getElementsByClassName("box");
// Sélectionne l'élément pour afficher le total de la commande
var totalCommande = document.getElementById("tyu");

// Fonction pour mettre à jour le total de la commande
function updateTotalCommande() {
    let totalGlobal = 0;
    // Parcourt chaque produit
    for (let i = 0; i < produits.length; i++) {
        // Sélectionne l'élément qui affiche le total unitaire pour chaque produit
        let totalUnit = parseInt(produits[i].querySelector(".price").innerText);
        // Ajoute le total unitaire au total global
        totalGlobal += totalUnit;
    }
    // Met à jour l'affichage du total global
    totalCommande.innerText = totalGlobal;
}

// Parcourt chaque produit pour ajouter des écouteurs d'événements
for (let i = 0; i < produits.length; i++) {
    // Sélectionne les boutons "Plus" et "Moins" ainsi que les autres éléments nécessaires
    let btnPlus = produits[i].querySelector(".plus");
    let btnMoins = produits[i].querySelector(".moins");
    let prixUnitaireElem = produits[i].children[2].children[1];
    let prixUnitaire = parseInt(prixUnitaireElem.innerText);
    let qtyElem = produits[i].querySelector(".num");
    let totalElem = produits[i].querySelector(".price");
    let qty = parseInt(qtyElem.innerText);
    
    // Sélectionne le bouton aimer (favoris)
    let btnAimer = produits[i].querySelector(".fa-heart");
    // Sélectionne le bouton supprimer
    let btnSupprimer = produits[i].querySelector(".fa-trash");

    // Fonction pour mettre à jour le total unitaire et le total global
    function updateProduct() {
        totalElem.innerText = prixUnitaire * qty;
        updateTotalCommande();
    }

    // Gestion du bouton Plus
    btnPlus.addEventListener("click", function() {
        qty++;
        qtyElem.innerText = qty;
        updateProduct();
    });

    // Gestion du bouton Moins
    btnMoins.addEventListener("click", function() {
        if (qty > 0) { // Empêche la quantité de descendre en dessous de 0
            qty--;
            qtyElem.innerText = qty;
            updateProduct();
        }
    });

    // Gestion du bouton Aimer (favoris)
    btnAimer.addEventListener("click", function() {
        btnAimer.classList.toggle("liked"); // Ajoute ou retire la classe "liked" pour changer la couleur
        if (btnAimer.classList.contains("liked")) {
            alert("Article ajouté aux favoris");
        } else {
            alert("Article retiré des favoris");
        }
    });

    // Gestion du bouton Supprimer
    btnSupprimer.addEventListener("click", function() {
        produits[i].remove(); // Supprime le produit du DOM
        updateTotalCommande(); // Met à jour le total après la suppression
    });
}

// Met à jour le total de la commande au chargement initial
updateTotalCommande();
