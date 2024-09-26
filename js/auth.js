// auth.js
const msalConfig = {
    auth: {
        clientId: "YOUR_CLIENT_ID_HERE",
        authority: "https://login.microsoftonline.com/common"
    }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

async function handleAuth() {
    try {
        const loginResponse = await msalInstance.loginPopup({
            scopes: ["user.read"]
        });
        updateUI(loginResponse.account);
    } catch (error) {
        console.error(error);
    }
}

function updateUI(account) {
    const loginButton = document.getElementById('loginButton');
    if (account) {
        loginButton.textContent = `Hola, ${account.name}`;
        loginButton.onclick = handleLogout;
    } else {
        loginButton.textContent = 'Iniciar Sesión';
        loginButton.onclick = handleAuth;
    }
}

async function handleLogout() {
    await msalInstance.logoutPopup();
    updateUI(null);
}