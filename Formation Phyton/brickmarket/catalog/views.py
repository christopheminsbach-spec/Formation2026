from django.shortcuts import render


def home(request):

    return render(
        request,
        "catalog/home.html",
        {
            "page_title": "BrickMarket - Accueil"
        }
    )


def produit(request, id=None):

    context = {

        "page_title": "BrickMarket - Produit",

        "user_name": "Nicolas",

        "product": {

            "id": id,

            "name": "LEGO Star Wars Razor Crest 75292",

            "price": 129.99,

            "description": "The Razor Crest is a LEGO Star Wars set.",

            "image": "https://m.media-amazon.com/images/I/81gnlmQ5NUL._AC_SL1500_.jpg"

        }

    }


    return render(
        request,
        "catalog/product.html",
        context
    )