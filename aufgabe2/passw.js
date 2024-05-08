let echtesPW = "";

function generierePW() {

    const schriftzeichen = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const zahlen = '1234567890';
    const sonderzeichen = '#+`??=)(/&%$§"!€@^{[]}\*-.,_:;';

    const gesamteZeichen = schriftzeichen + zahlen + sonderzeichen;

    const passwordLength = parseInt(document.getElementById('pw_length').value, 10);

    if (pw_length < 10) {
        alert("Bitte ein min. 10-stelliges Passwort wählen.");
        return
    }

    echtesPW = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * gesamteZeichen.length);
        echtesPW += gesamteZeichen[randomIndex];
    }

    const passwordElement = document.getElementById('generiertesPW');
    passwordElement.textContent = echtesPW




}

