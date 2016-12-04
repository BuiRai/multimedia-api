/**
 * Created by buira on 22/11/2016.
 */

'use strict';

var Category = require('./../app/models/category'),
    Multimedia = require('./../app/models/multimedia'),
    mongoose = require('mongoose'),
    async = require('async');

module.exports = function () {
    console.log("Seed the database with categories and multimedias");

    /**
     * ==========================================================================================================
     * CATEGORIES
     * ==========================================================================================================
     */

    // var terror = new Category({ _id: 1, name: 'Terror'});
    // var comedy = new Category({ _id: 2, name: 'Comedia'});
    // var drama = new Category({ _id: 3, name: 'Drama'});
    // var action = new Category({ _id: 4, name: 'Acción'});
    // var romance = new Category({ _id: 5, name: 'Romance'});

    var ids = {};

    var terror = new Category({name: 'Terror'});
    var comedy = new Category({name: 'Comedia'});
    var drama = new Category({name: 'Drama'});
    var action = new Category({name: 'Acción'});
    var romance = new Category({name: 'Romance'});


    var seedDataBaseCategories = function(callback) {
        async.parallel([
            function() {
                Category.remove({}, function (err, _categories) {
                    console.log("Delete all categories");
                })
            },
            function () {
                terror.save(function (err, _category) {
                    ids.terror = _category._id;
                    console.log("Terror category created successfully");
                });
            },
            function () {
                comedy.save(function (err, _category) {
                    console.log("Comedy category created successfully");
                });
            },
            function () {
                drama.save(function (err, _category) {
                    console.log("Drama category created successfully");
                });
            },
            function () {
                action.save(function (err, _category) {
                    console.log("Action category created successfully");
                });
            },
            function () {
                romance.save(function (err, _category) {
                    console.log("Romance category created successfully");
                });
            }
        ], function(err, res) {
            if (!err) return callback.apply(null, data);
        });
    };

    /**
     * ==========================================================================================================
     * MULTIMEDIAS
     * ==========================================================================================================
     */

    var houseOfCards = new Multimedia({
        title: 'House of Cards',
        description: 'Un demócrata del 5.º distrito congresional de Carolina del Sur y líder de la mayoría de la Cámara de Representantes de los Estados Unidos, tras haber sido pasado por alto para su nombramiento como Secretario de Estado, inicia una elaborado plan para llegar a una posición de mayor poder, ayudado por su esposa, Claire Underwood.',
        qualification: 5,
        urlImage: 'images/previews/hoc_prev.jpg',
        urlInfo: 'https://es.wikipedia.org/wiki/House_of_Cards_(serie_de_televisi%C3%B3n_de_2013)',
        urlVideo: 'https://youtu.be/ULwUzF1q5w4',
        year: '2013-01-01',
        categories: []
    });
    var prissionBreak = new Multimedia({
        title: 'Prision Break',
        description: 'La trama de la serie gira en torno a un hombre llamado Michael Scofield, que en un elaborado plan para rescatar a su hermano Lincoln Burrows, entra a Fox River una penitenciaría de máxima seguridad cerca de Chicago, para sacar a su hermano acusado por un falso asesinato del hermano de la vicepresidenta.',
        qualification: 5,
        urlImage: 'images/previews/pb_prev.jpg',
        urlInfo: 'https://es.wikipedia.org/wiki/Prison_Break',
        urlVideo: 'https://youtu.be/x9T-9fZn_oA',
        year: '2013-01-01',
        categories: []
    });
    var breakingBad = new Multimedia({
        title: 'Breaking Bad',
        description: 'Es una serie de televisión dramática estadounidense creada y producida por Vince Gilligan. Breaking Bad narra la historia de Walter White (Bryan Cranston), un profesor de química con problemas económicos a quien le diagnostican un cáncer de pulmón inoperable.',
        qualification: 5,
        urlImage: 'images/previews/bb_prev.jpg',
        urlInfo: 'https://es.wikipedia.org/wiki/Breaking_Bad',
        urlVideo: 'https://youtu.be/HhesaQXLuRY',
        year: '2013-01-01',
        categories: []
    });
    var the100 = new Multimedia({
        title: 'The 100',
        description: 'En un futuro post apocalíptico, 97 años después de un desastre nuclear que destruyó la civilización, los humanos que sobreviven en una estación espacial envían una avanzadilla de 100 jóvenes delincuentes para tratar de averiguar si es posible reconquistar la Tierra.',
        qualification: 4,
        urlImage: 'images/previews/t100_prev.jpg',
        urlInfo: 'https://es.wikipedia.org/wiki/The_100',
        urlVideo: 'https://youtu.be/aDrsItJ_HU4',
        year: '2013-01-01',
        categories: []
    });
    var terranova = new Multimedia({
        title: 'Terranova',
        description: 'En 2149 los humanos están en peligro de extinción debido a la superpoblación y a la contaminación del aire. Cuando los científicos descubren una grieta en el continuo espacio-tiempo, deciden enviar una cápsula para determinar cuándo y dónde aparecerá lo que atraviese la grieta, pero por alguna razón la cápsula no llega al presente.',
        qualification: 4,
        urlImage: 'images/previews/terranova_prev.jpg',
        urlInfo: 'https://es.wikipedia.org/wiki/Terra_Nova_(serie_de_televisi%C3%B3n)',
        urlVideo: 'https://youtu.be/uBb6Kyd7vAc',
        year: '2013-01-01',
        categories: []
    });
    var americanHorrorStory = new Multimedia({
        title: 'American Horror Story',
        description: 'Se ha descrito como una serie antológica, ya que cada temporada se hace como una miniserie independiente, con un grupo de personajes, escenarios distintos y una trama que tiene su propio comienzo, desarrollo y final.',
        qualification: 5,
        urlImage: 'images/previews/ahs_prev.jpg',
        urlInfo: 'https://es.wikipedia.org/wiki/American_Horror_Story',
        urlVideo: 'https://youtu.be/-9KZr2Vn7CQ',
        year: '2013-01-01',
        categories: []
    });
    var betterCallSaul = new Multimedia({
        title: 'Better Call Saul',
        description: 'Serie de televisión estadounidense creada por Vince Gilligan y Peter Gould. Se trata de un spin off precuela de Breaking Bad. Ubicándose en el año 2002, la ficción gira en torno al abogado James Morgan  McGill, seis años antes de su aparición en Breaking Bad como Saul Goodman.',
        qualification: 5,
        urlImage: 'images/previews/bcs_prev.jpg',
        urlInfo: 'https://es.wikipedia.org/wiki/Better_Call_Saul',
        urlVideo: 'https://youtu.be/lK_70f7PamE',
        year: '2013-01-01',
        categories: []
    });
    var blackMirror = new Multimedia({
        title: 'Black Mirror',
        description: 'Serie de televisión británica creada por Charlie Brooker y producida por Zeppotron para Endemol. La serie gira en torno a cómo la tecnología afecta nuestras vidas, en ocasiones sacando lo peor de nosotros',
        qualification: 5,
        urlImage: 'images/previews/bm_prev.jpg',
        urlInfo: 'https://es.wikipedia.org/wiki/Black_Mirror_(serie_de_televisi%C3%B3n)',
        urlVideo: 'https://youtu.be/jROLrhQkK78',
        year: '2011-01-01',
        categories: []
    });
    var strangerThings = new Multimedia({
        title: 'Stranger Things',
        description: 'La historia nos sitúa en Indiana durante los años 80, donde un chico de 12 años desaparece misteriosamente. Al mismo tiempo, una niña con poderes telequinéticos intentará ayudar a los amigos del chico en su intento de encontrarlo.',
        imageSrc: 'images/previews/st_prev.jpg',
        qualification: 5,
        urlImage: 'images/previews/st_prev.jpg',
        urlInfo: 'https://es.wikipedia.org/wiki/Stranger_Things',
        urlVideo: 'https://youtu.be/XWxyRG_tckY',
        year: '2016-01-01',
        categories: []
    });
    var scream = new Multimedia({
        title: 'Scream',
        description: 'Scream es una serie de televisión creada por Bob y Harvey Weinstein, basados en la franquicia de películas del mismo nombre, escrita por Kevin Williamson y dirigida por Wes Craven.',
        qualification: 4,
        urlImage: 'images/previews/scream_prev.jpg',
        urlInfo: 'https://es.wikipedia.org/wiki/Scream_(serie_de_televisi%C3%B3n)',
        urlVideo: 'https://youtu.be/qqzgSjZQlLo',
        year: '2015-01-01',
        categories: []
    });
    var narcos = new Multimedia({
        title: 'Narcos',
        description: 'serie web estadounidense de drama criminal, que fue estrenada el 28 de agosto de 2015 en Netflix.1 La serie fue creada por Chris Brancato, Eric Newman y Carlo Bernard, y es una toma orientada en la vida del líder del Cartel de Medellín, Pablo Escobar.',
        qualification: 5,
        urlImage: 'images/previews/narcos_prev.jpg',
        urlInfo: 'https://es.wikipedia.org/wiki/Narcos',
        urlVideo: 'https://youtu.be/U7elNhHwgBU',
        year: '2015-01-01',
        categories: []
    });
    var theWalkingDead = new Multimedia({
        title: 'The Walking Dead',
        description: 'Serie de televisión creada y producida por Frank Darabont y basada en el cómic homónimo de Robert Kirkman. La serie se sitúa en un mundo postapocalíptico donde un oficial de policía que al despertar de un coma se encuentra con un mundo repleto de zombis salvajes. Al encontrar a su familia, se une a un grupo de supervivientes a los que llega a encabezar. La historia, ambientada principalmente en Georgia, Estados Unidos, narra las vivencias de dicho grupo, el cual se enfrenta tanto a la plaga que se ha esparcido como a otros grupos de humanos que también luchan por subsistir.',
        qualification: 5,
        urlImage: 'images/previews/twd_prev.jpg',
        urlInfo: 'https://es.wikipedia.org/wiki/The_Walking_Dead_(serie_de_televisi%C3%B3n)',
        urlVideo: 'https://youtu.be/GJRNHAJAcYg',
        year: '2010-01-01',
        categories: []
    });
    var underTheDome = new Multimedia({
        title: 'Under the Dome',
        description: 'Todo comienza en Chesters Mill, un pueblo en Maine, cuando Dale Bárbara está enterrando un cuerpo en las afueras del pueblo. Cuando está a punto de marcharse, una gran barrera invisible cae a unos metros de él y así todo el pueblo queda atrapado. Dale ve rápidamente cómo aviones y automóviles se estrellan contra la barrera y quedan completamente destruidos.',
        qualification: 5,
        urlImage: 'images/previews/utd_prev.jpg',
        urlInfo: 'https://es.wikipedia.org/wiki/Under_the_Dome',
        urlVideo: 'https://youtu.be/f_Y5YeYrqUk',
        year: '2013-01-01',
        categories: []
    });
    var lost = new Multimedia({
        title: 'Under the Dome',
        description: 'Serie dramática que se centra en las vivencias de los "supervivientes" de un accidente aéreo en una isla desierta. Por lo general, cada episodio narra una historia principal que tiene lugar en la isla, intercalada con varios segmentos de una historia secundaria.',
        qualification: 5,
        urlImage: 'images/previews/lost_prev.png',
        urlInfo: 'https://es.wikipedia.org/wiki/Lost',
        urlVideo: 'https://youtu.be/f_Y5YeYrqUk',
        year: '2010-01-01',
        categories: []
    });
    var marcoPolo = new Multimedia({
        title: 'Marco Polo',
        description: 'Marco Polo es una serie estadounidense de drama que explora la vida de Marco Polo bajo el mando de Kublai Khan, el Khagan del Imperio mongol y el fundador de la dinastía Yuan, la cual existió entre los años 1271 y 1368.',
        qualification: 4,
        urlImage: 'images/previews/mp_prev.jpg',
        urlInfo: 'https://es.wikipedia.org/wiki/Marco_Polo_(serie_de_televisi%C3%B3n_de_2014)',
        urlVideo: 'https://youtu.be/KWtv5Ht4YZE',
        year: '2015-01-01',
        categories: []
    });
    var zoo = new Multimedia({
        title: 'Zoo',
        description: 'Ataques de animales violentos contra los seres humanos se están produciendo en todo el mundo. Jackson Oz, un zoólogo estadounidense y su amigo de Kenia, Abraham, un guía de safari, así como una reportera de Los Angeles, un patólogo veterinario peculiar, y una agente de la inteligencia francesa son reclutados para iniciar una investigación sobre la misteriosa epidemia que provoca que los animales ataquen a las personas , cada vez de manera más feroz y coordinada.',
        qualification: 4,
        urlImage: 'images/previews/zoo_prev.jpg',
        urlInfo: 'https://es.wikipedia.org/wiki/Zoo_(serie_de_televisi%C3%B3n)',
        urlVideo: 'https://youtu.be/YKr70mFxf_w',
        year: '2015-01-01',
        categories: []
    });

    var seedDataBaseMultimedias = function(callback) {
        async.parallel([
            function() {
                Multimedia.remove({}, function (err, _categories) {
                    console.log("Delete all multimedias");
                });
            },
            function () {
                houseOfCards.save(function (err, _category) {
                    console.log("House of Cards multimedia created successfully");
                });
            },
            function () {
                prissionBreak.save(function (err, _category) {
                    console.log("Prission Break of Cards multimedia created successfully");
                });
            },
            function () {
                breakingBad.save(function (err, _category) {
                    console.log("Braking Bad of Cards multimedia created successfully");
                });
            },
            function () {
                the100.save(function (err, _category) {
                    console.log("The 100 of Cards multimedia created successfully");
                });
            },
            function () {
                terranova.save(function (err, _category) {
                    console.log("Terranova of Cards multimedia created successfully");
                });
            },
            function () {
                americanHorrorStory.save(function (err, _category) {
                    console.log("American Horror Story of Cards multimedia created successfully");
                });
            },
            function () {
                betterCallSaul.save(function (err, _category) {
                    console.log("Better Call Soul of Cards multimedia created successfully");
                });
            },
            function () {
                blackMirror.save(function (err, _category) {
                    console.log("Black Mirror of Cards multimedia created successfully");
                });
            },
            function () {
                strangerThings.save(function (err, _category) {
                    console.log("Stranger Things of Cards multimedia created successfully");
                });
            },
            function () {
                scream.save(function (err, _category) {
                    console.log("Scream of Cards multimedia created successfully");
                });
            },
            function () {
                narcos.save(function (err, _category) {
                    console.log("Narcos of Cards multimedia created successfully");
                });
            },
            function () {
                theWalkingDead.save(function (err, _category) {
                    console.log("The Walking Dead of Cards multimedia created successfully");
                });
            },
            function () {
                underTheDome.save(function (err, _category) {
                    console.log("Under the Dome of Cards multimedia created successfully");
                });
            },
            function () {
                lost.save(function (err, _category) {
                    console.log("Lost of Cards multimedia created successfully");
                });
            },
            function () {
                marcoPolo.save(function (err, _category) {
                    console.log("Maro Polo of Cards multimedia created successfully");
                });
            },
            function () {
                zoo.save(function (err, _category) {
                    console.log("Zoo of Cards multimedia created successfully");
                });
            }
        ], function(err, res) {
            if (!err) return callback.apply(null, data);
        });
    };

    seedDataBaseCategories();
    seedDataBaseMultimedias();
};
