(function() {
	
    SWSPortal.constant("CONFIG", {
        "envDevelopment": true,
        "languageByDefault": "ENG",
    	"appBase": "SWSPortal",
    	"restBase": "http://localhost:8080/",
    	"dummiesBase": "rest/",
        "viewsFolder": "views",
    	"events": {
            'loadDasboard': 'loadDasboard'
        },
        "distributorRedirectUrl": "http://www.hotelbeds.com",
        "layout":{
            "header": "layout/header.html",
            "menu": "layout/menu.html",
            "footer": "layout/footer.html"
        },
        "view": {
            "inboxMessages": "views/inbox-messages/inbox-messages.html",
            "dashboard": {
                "path": "/dashboard"
            },
            "bookings": {
                "path": "/bookings"
            },
            "contact": {
                "path": "/contact"
            },
            "login": {
                "path": "/login",
            },
            "selectHotel": {
                "path": "/select-hotel"
            },
            "user": {
                "path": "/user"
            }
        }
    });

    SWSPortal.value("globals", {
        "user": {
            "authenticated": false
        }
    });
    
    console.log("CONFIG & globals");

}());    



