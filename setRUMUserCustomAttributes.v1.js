(function () {
    function setCoralogixCustomAttributes(user) {
        const coralogixRum = window.CoralogixRum;

        if (!coralogixRum?.isInited) {
            return;
        }

        if (user.accessTier != null) {
            coralogixRum.setLabels({
                ...coralogixRum.getLabels(),
                loggedIn: user.isLogged,
                accessTier: user.accessTier,
            });
        } else {
            coralogixRum.setLabels({
                ...coralogixRum.getLabels(),
                loggedIn: user.isLogged,
            });
        }
    }

    function setUserCustomAttributes() {
        const uv = window.universal_variable;

        if (uv != null && uv.user != null) {
            setCoralogixCustomAttributes(uv.user);
        }
    }

    window.addEventListener('universal_variable.user', setUserCustomAttributes);
})();
