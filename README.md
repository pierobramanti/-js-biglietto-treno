Ciao ragazzi,
esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

SCOMPOSIZIONE
1 Dichiaro una variabile let con assegnazione di valore prompt in cui chiedo quanti km si desidera percorrere
2 Dichiaro una variabile let con assegnazione di valore prompt in cui chiedo l'età del passeggero
3 Dichiaro una variabile let con assegnazione di valore il prezzo del biglietto per km(0.21 €)
4 Dichiaro una variabile let con assegnazione di valore uguale al prezzo per km moltiplicato per i km percorsi
5 Dichiaro una variabile let per lo sconto con assegnazione di valore uguale a "0".
5.1 SE il passeggero ha meno di 18 anni assegno come valore della variabile una riduzione del biglietto del 20%
5.2 SE INVECE il passeggero ha 65 anni o più assegno come valore della variabile una riduzione del biglietto del 40%
6 Dichiaro una variabile che calcoli lo sconto, moltiplicando il costo del biglietoo per la riduzione
7 Dichiaro una variabile che calcoli lo sconto, sottraendo al prezzo il valore dello sconto
8 Utilizzo metodo toFixed() per mostrare solo due decimali dopo la virgola 
9 Mostro in html il prezzo finale del biglietto