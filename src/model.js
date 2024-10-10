//import jquery
import * as $ from 'jquery';

//import initApp
import { initializeApp } from "firebase/app";

//import config settings
import { firebaseConfig } from "./firebaseConfig";

//import firestore db settings
import { getFirestore, collection, addDoc, getDocs, onSnapshot, query, where } from 'firebase/firestore';

//create consts
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//add album to db
export async function addAlbumToDB(albumObj) {
    await addDoc(collection(db, "albums"), albumObj).then((docRef) => {
        console.log("Document written with ID: " , docRef.id);
    }).catch((error) => {
        console.error("Error adding document: " , e.message);
    });
}

//display all albums on page when loaded
onSnapshot(collection(db, "albums"), (snapshot) => {
    $(".albums").empty();
    let albumString = "";
    snapshot.forEach((doc) => {
        albumString += `<div class="showAlbums">`;
        albumString += `<div class="albumImg"><img src="${doc.data().albumImage}"/></div>`;
        albumString += `<p class="albumName">Album Name: ${doc.data().albumName}`;
        albumString += `<p class="albumArtist">Artist: ${doc.data().artistName}</p>`;
        albumString += `<p class="albumGenre">Genre: ${doc.data().albumGenre}</p>`;
        albumString += `</div>`;
    });
    $(".albums").append(albumString);
});

//display all kpop albums
export async function showAllKpopAlbums() {
    try {
        const kpopQuery = query(collection(db, "albums"), where("albumGenre", "==", "K-Pop")); 
        const querySnapshot = await getDocs(kpopQuery);
        $(".genreAlbums").empty();
        let albumString = "";
        querySnapshot.forEach((doc) => {
            albumString += `<div class="showAlbums">`;
            albumString += `<div class="albumImg"><img src="${doc.data().albumImage}"/></div>`;
            albumString += `<p class="albumName">Album Name: ${doc.data().albumName}`;
            albumString += `<p class="albumArtist">Artist: ${doc.data().artistName}</p>`;
            albumString += `<p class="albumGenre">Genre: ${doc.data().albumGenre}</p>`;
            albumString += `</div>`;
        });

        $(".genreAlbums").append(albumString);
    } catch (e) {
        console.error("Error getting documents: ", e.message);
    }
}

//display all reggaeton albums
export async function showAllReggaetonAlbums() {
    try {
        const reggaetonQuery = query(collection(db, "albums"), where("albumGenre", "==", "Reggateon")); 
        const querySnapshot = await getDocs(reggaetonQuery);
        $(".genreAlbums").empty();
        let albumString = "";
        querySnapshot.forEach((doc) => {
            albumString += `<div class="showAlbums">`;
            albumString += `<div class="albumImg"><img src="${doc.data().albumImage}"/></div>`;
            albumString += `<p class="albumName">Album Name: ${doc.data().albumName}`;
            albumString += `<p class="albumArtist">Artist: ${doc.data().artistName}</p>`;
            albumString += `<p class="albumGenre">Genre: ${doc.data().albumGenre}</p>`;
            albumString += `</div>`;
        });

        $(".genreAlbums").append(albumString);
    } catch (e) {
        console.error("Error getting documents: ", e.message);
    }
}

//display all r&b albums
export async function showAllRBAlbums() {
    try {
        const randbQuery = query(collection(db, "albums"), where("albumGenre", "==", "R&B")); 
        const querySnapshot = await getDocs(randbQuery);
        $(".genreAlbums").empty();
        let albumString = "";
        querySnapshot.forEach((doc) => {
            albumString += `<div class="showAlbums">`;
            albumString += `<div class="albumImg"><img src="${doc.data().albumImage}"/></div>`;
            albumString += `<p class="albumName">Album Name: ${doc.data().albumName}`;
            albumString += `<p class="albumArtist">Artist: ${doc.data().artistName}</p>`;
            albumString += `<p class="albumGenre">Genre: ${doc.data().albumGenre}</p>`;
            albumString += `</div>`;
        });

        $(".genreAlbums").append(albumString);
    } catch (e) {
        console.error("Error getting documents: ", e.message);
    }
}
