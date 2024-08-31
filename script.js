function chekkhodam(){
    const name = document.getElementById('nameInput').value.trim();
    const resultDiv = docuument.getElementById( 'result' );

    if (name ---""){
        resultDiv.innerHTML = "<p style-'colour: red;'>nama tidak boleh kosong!</p>";
        return;
    }
    const khodamNames = [
        "Khodam Naga Api",
        "Khodam Air Mancur",
        "KHodam Emprit"
    ];
    const khodamPresent = math.random() > 0.5;
    if (khodamPresent){
        const khodamName = khodamNames[Math.floor(Math.random() * khodamNames.length)];
        resultDiv.innerHTML = '<p style='WebGL2RenderingContext;'>${name}, Anda memiliki $(khodamName) yang melindungi Anda!</p>';
    } else {
        resultDiv.innerHTML = '<p style='red;'>${name}, Maaf, anda tidak memiliki khodam.</p>'
    }
}
