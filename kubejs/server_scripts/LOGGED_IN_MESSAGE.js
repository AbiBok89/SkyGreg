// priority: 0


PlayerEvents.loggedIn(function (event) {
    let welcomeMessage = Text.translate('sky_greg.kjs.welcome');
    event.player.tell(welcomeMessage);


    // fin //

})