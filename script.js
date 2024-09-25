const recipes = ["Fresh Vegetable Salad", "Quinoa Bowl", "Coconut Rice"];

function searchRecipes() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const results = recipes.filter(recipe => recipe.toLowerCase().includes(input));
    document.getElementById("searchResults").innerHTML = results.join('<br>');
}
