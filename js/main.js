(function () {
    'use strict';

     var app = angular.module('watchr', []).
        config(function ($routeProvider) {
            $routeProvider.
                when('/', {
                    controller: 'IndexController',
                    templateUrl: '/templates/index.html'
                }).
                when('/:id', {
                    controller: 'DetailController',
                    templateUrl: '/templates/detail.html'
                }).
                otherwise({ redirectTo: '/' });
        });

    app.factory('trailerService', function () {
        var data = {
            "dates": {
                "minimum": "2013-11-19",
                "maximum": "2013-12-10"
            },
            "page": 1,
            "results": [
                {
                    "adult": false,
                    "backdrop_path": "/f0hGXzLavBR5I5rW2CgX9TCOH5m.jpg",
                    "id": 190847,
                    "original_title": "The Last Days on Mars",
                    "release_date": "2013-12-06",
                    "poster_path": "/5FFCxDK7glqVh9o3azPJ7qQ5i9r.jpg",
                    "popularity": 20.3922305470555,
                    "title": "The Last Days on Mars",
                    "vote_average": 5.9,
                    "vote_count": 12
        },
                {
                    "adult": false,
                    "backdrop_path": "/wRCPG1lsgfTFkWJ7G3eWgxCgv0C.jpg",
                    "id": 101299,
                    "original_title": "The Hunger Games: Catching Fire",
                    "release_date": "2013-11-22",
                    "poster_path": "/zkrTbOKUt7w7x8TkLvR2qXZAKd3.jpg",
                    "popularity": 10.2137847509027,
                    "title": "The Hunger Games: Catching Fire",
                    "vote_average": 7,
                    "vote_count": 37
        },
                {
                    "adult": false,
                    "backdrop_path": "/kjcpQ6KPQGu49aHEYaiNA0f4niu.jpg",
                    "id": 233228,
                    "original_title": "Doctor Who - The Day of the Doctor",
                    "release_date": "2013-11-23",
                    "poster_path": "/x4bfd5LXfYiXe8RCsblwaRdRQua.jpg",
                    "popularity": 4.3846483156447,
                    "title": "Doctor Who - The Day of the Doctor",
                    "vote_average": 0,
                    "vote_count": 0
        },
                {
                    "adult": false,
                    "backdrop_path": "/ieQBRGw9Dgh0ZgwttqT35o7u5Fk.jpg",
                    "id": 236768,
                    "original_title": "Rush: Clockwork Angels Tour",
                    "release_date": "2013-11-19",
                    "poster_path": "/kjUSjuVuRHwcdHTrz9cUBtZUGnR.jpg",
                    "popularity": 3.374,
                    "title": "Rush: Clockwork Angels Tour",
                    "vote_average": 8.3,
                    "vote_count": 3
        },
                {
                    "adult": false,
                    "backdrop_path": "/8DTynwjkiavuedSB4uikFdUOesE.jpg",
                    "id": 152603,
                    "original_title": "Only Lovers Left Alive",
                    "release_date": "2013-12-05",
                    "poster_path": "/8bmxDkYHfADdE0jehM7X8v11Zif.jpg",
                    "popularity": 3.31207434615759,
                    "title": "Only Lovers Left Alive",
                    "vote_average": 2,
                    "vote_count": 1
        },
                {
                    "adult": false,
                    "backdrop_path": "/8Z0wWrB6UYSjj5yFcq1HqrHmnrn.jpg",
                    "id": 214030,
                    "original_title": "Fading Gigolo",
                    "release_date": "2013-11-21",
                    "poster_path": "/10uSozzxX4qfGyC9ahlWj09goxX.jpg",
                    "popularity": 3.30785976342324,
                    "title": "Fading Gigolo",
                    "vote_average": 10,
                    "vote_count": 1
        },
                {
                    "adult": false,
                    "backdrop_path": "/eAKzsYVHiC0bSNudVo9IgREurmm.jpg",
                    "id": 229407,
                    "original_title": "Puppy",
                    "release_date": "2013-12-10",
                    "poster_path": "/e9RWpy7Tnm2ht1vvwsvHWvoauYZ.jpg",
                    "popularity": 3.27101203166145,
                    "title": "Puppy",
                    "vote_average": 6.5,
                    "vote_count": 2
        },
                {
                    "adult": false,
                    "backdrop_path": "/mdlZZZtSPTeeFiWW8D1WV73zyBt.jpg",
                    "id": 109445,
                    "original_title": "Frozen",
                    "release_date": "2013-11-27",
                    "poster_path": "/xYVunS2yloXIwq3ngQRhPFX2s7.jpg",
                    "popularity": 3.1966357339293,
                    "title": "Frozen",
                    "vote_average": 7.5,
                    "vote_count": 3
        },
                {
                    "adult": false,
                    "backdrop_path": "/npeLR5beByhRQUyB0ulZ4HiiASJ.jpg",
                    "id": 205220,
                    "original_title": "Philomena",
                    "release_date": "2013-11-27",
                    "poster_path": "/6BTXHupSPkrwsoz4Br6qwwSVmhj.jpg",
                    "popularity": 3.0962103763,
                    "title": "Philomena",
                    "vote_average": 8,
                    "vote_count": 1
        },
                {
                    "adult": false,
                    "backdrop_path": "/zez1YZjZ8rvFtJYXQshTCCW2cPp.jpg",
                    "id": 229408,
                    "original_title": "Training Wheels",
                    "release_date": "2013-12-10",
                    "poster_path": "/qzdLbbasaW2SpF9tjE5cVgtDR06.jpg",
                    "popularity": 3.04888597645016,
                    "title": "Training Wheels",
                    "vote_average": 8.8,
                    "vote_count": 2
        },
                {
                    "adult": false,
                    "backdrop_path": "/lwPsyVdMzwnvieOAie8BZZo5gnr.jpg",
                    "id": 146239,
                    "original_title": "Delivery Man",
                    "release_date": "2013-11-22",
                    "poster_path": "/x0CItyHTKl3O1SzZAhGZOpEv5A4.jpg",
                    "popularity": 2.87882112365537,
                    "title": "Delivery Man",
                    "vote_average": 6,
                    "vote_count": 1
        },
                {
                    "adult": false,
                    "backdrop_path": "/sB8KE4wg9ijNl0SLG9IyEy2vxOq.jpg",
                    "id": 229405,
                    "original_title": "Panic in the Mailroom",
                    "release_date": "2013-12-10",
                    "poster_path": "/sM5oEzls6CI0INxVVinsonpTS8.jpg",
                    "popularity": 2.65164681842808,
                    "title": "Panic in the Mailroom",
                    "vote_average": 8.3,
                    "vote_count": 2
        },
                {
                    "adult": false,
                    "backdrop_path": "/dwkEOnKvJLFgyKAh28t7zZAN2xl.jpg",
                    "id": 87516,
                    "original_title": "Oldboy",
                    "release_date": "2013-11-27",
                    "poster_path": "/6L5RI8EnUZDGGcam0EMxTrKOqr6.jpg",
                    "popularity": 2.1375743695284,
                    "title": "Oldboy",
                    "vote_average": 5,
                    "vote_count": 2
        },
                {
                    "adult": false,
                    "backdrop_path": "/j1zHQxVwIc64iAKwBeuzJcNNTyr.jpg",
                    "id": 31156,
                    "original_title": "Dante's Hell Animated",
                    "release_date": "2013-11-25",
                    "poster_path": "/p8lyS8vAQ9vpQ5gJ4tqtKneYeJR.jpg",
                    "popularity": 1.91923465926749,
                    "title": "Dante's Hell Animated",
                    "vote_average": 4,
                    "vote_count": 2
        },
                {
                    "adult": false,
                    "backdrop_path": "/mVXDGX87aRlcBHsD1nBY0HchDGb.jpg",
                    "id": 152601,
                    "original_title": "Her",
                    "release_date": "2013-11-20",
                    "poster_path": "/zbVhV2v1j69nvwHp2r8kjawI6H9.jpg",
                    "popularity": 1.60163776506689,
                    "title": "Her",
                    "vote_average": 0,
                    "vote_count": 0
        },
                {
                    "adult": false,
                    "backdrop_path": "/aahGGlMjdYXr46CNMoH8N8bpBMa.jpg",
                    "id": 204082,
                    "original_title": "Homefront",
                    "release_date": "2013-11-27",
                    "poster_path": "/6ymSuhG28tF2lnDxVTNibzlYzn0.jpg",
                    "popularity": 1.58569816921862,
                    "title": "Homefront",
                    "vote_average": 5,
                    "vote_count": 1
        },
                {
                    "adult": false,
                    "backdrop_path": "/31DFENOOIlLfmMuwIlxgK0IwVVs.jpg",
                    "id": 167502,
                    "original_title": "Is the Man Who Is Tall Happy?",
                    "release_date": "2013-11-22",
                    "poster_path": "/9c2tLzyRxhr9n1IfHnfpZn72j6A.jpg",
                    "popularity": 1.5361412,
                    "title": "Is the Man Who Is Tall Happy?",
                    "vote_average": 2,
                    "vote_count": 1
        },
                {
                    "adult": false,
                    "backdrop_path": "/n3QgpQ4WQzngcDEubQskhYintef.jpg",
                    "id": 172106,
                    "original_title": "Jappeloup",
                    "release_date": "2013-11-29",
                    "poster_path": "/6Y8cph7UDIjPxLzSRQaaMDUxyKk.jpg",
                    "popularity": 1.52498218383911,
                    "title": "Jappeloup",
                    "vote_average": 6.6,
                    "vote_count": 5
        },
                {
                    "adult": false,
                    "backdrop_path": null,
                    "id": 212168,
                    "original_title": "Kōkaku Kidōtai Arise - Border 2 : Ghost Whispers",
                    "release_date": "2013-11-29",
                    "poster_path": "/yyCs6U1SZMpZOjH2vnXPJyCg67r.jpg",
                    "popularity": 1.477,
                    "title": "Ghost in the Shell Arise - Border 2: Ghost Whispers",
                    "vote_average": 0,
                    "vote_count": 0
        },
                {
                    "adult": false,
                    "backdrop_path": "/wQsYfqnuvugD5JQDUCdjCrK8hxP.jpg",
                    "id": 164457,
                    "original_title": "Out of the Furnace",
                    "release_date": "2013-11-27",
                    "poster_path": "/yQxrsoqm8h67t9fiCKqSFuYnVlB.jpg",
                    "popularity": 1.45229195480517,
                    "title": "Out of the Furnace",
                    "vote_average": 3,
                    "vote_count": 1
        }
    ],
            "total_pages": 6,
            "total_results": 108
        };

        return {
            getItems: function () {
                return data;
            },
            getItem: function (itemId) {
                return data.filter(function (x) {
                    return x.id === parseInt(itemId, 10);
                })[0];
            }
        };
    });



})();