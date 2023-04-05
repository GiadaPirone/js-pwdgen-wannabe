function myFunction(){
    document.getElementById("demo").innerHTML = "mi hai cliccato";

    let nome = prompt ("inserisci il tuo nome?");
    // console.log (`il nome dell'utente è ${nome}`);

    let cognome = prompt ("Inserisci il tuo cognome");
    // console.log (`il cognome dell'utente è ${cognome}`);

    let colore = prompt ("inserisci il tuo colore preferito");
    // console.log (`il colore preferito dell'utente è ${colore}`);

    let password = `${nome}${cognome}${colore}`;

    document.getElementById("psDaCambiare").innerHTML = password + 2023;

}




















