//import jquery
import * as $ from 'jquery';

//import methods from model
import { addAlbumToDB, showAllKpopAlbums, showAllReggaetonAlbums, showAllRBAlbums } from './model';

function initListeners() {

    //submit btn on form 
    $("#submit").on("click", (e) => {
        console.log("submit");

        //get values from the input 
        let albumName = $("#albName").val();
        let artistName = $("#artName").val();
        let albumImage = $("#imageURL").val();
        let albumGenre = $("#genre").val();

        //add values to an obj,
        let albumObj = {
            albumName: albumName,
            artistName: artistName,
            albumImage: albumImage,
            albumGenre: albumGenre
        };

         //validation for required fields
         if (!albumName || !artistName || !albumImage || !albumGenre) {
            alert("All fields are required! Please fill in all the fields.");
            return; //prevent the form from submitting further
        }

        //follow addAlbumToDB func , pass the albumObj created
        addAlbumToDB(albumObj);

        //clear all values
        $("#albName").val("");
       $("#artName").val("");
       $("#imageURL").val("");
       $("#genre").val("");
    });

    //kpop genre btn 
    $("#kpop").on("click", (e) => {
        console.log("kpop clicked");
        showAllKpopAlbums();
    });

    //reggaeton genre btn
       $("#reggaeton").on("click", (e) => {
        console.log("reggaeton clicked");
        showAllReggaetonAlbums();
    });

    //r&b genre btn
    $("#randb").on("click", (e) => {
        console.log("r&b clicked");
        showAllRBAlbums();
    });
}
 
$(document).ready(function () {
initListeners();
});