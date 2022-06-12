import {
    ViewHelper
} from './test.js'

const splash = document.querySelector('.splash');
const playButton = document.querySelector('.playButton');

playButton.addEventListener('click', () => {
    splash.remove();
});



// popup.addEventListener('click', () => {
//     // hide button

//     location.href = './kaart.html';


// });

const artiesten = [{
        artiestNaam: 'The Resurrection',
        songNaam: 'Pedres Baixes',
        songImg: 'https://i.scdn.co/image/ab67616d00001e02d650f57210304acb410665cb',
        songUrl: 'https://p.scdn.co/mp3-preview/a65cbdfd003412202b3635236f0d8073177d3eb2?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2021',
        audio_features: {
            danceability: 0.641,
            energy: 0.578,
            key: 7,
            loudness: -10.052,
            mode: 1,
            speechiness: 0.0321,
            acousticness: 0.00612,
            instrumentalness: 0.911,
            liveness: 0.102,
            valence: 0.526,
            tempo: 121.99,
            duration_ms: 311369,
            time_signature: 4
        }

    },
    {
        artiestNaam: 'Kay Slice',
        songNaam: 'Slowdown',
        songImg: 'https://i.scdn.co/image/ab67616d00001e026416fdeeeb4ca2e827d1df00',
        songUrl: 'https://p.scdn.co/mp3-preview/6f3989b0cdb808bf89b87fb200039272e2aa2e20?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2020',
        audio_features: {
            danceability: 0.687,
            energy: 0.708,
            key: 11,
            loudness: -3.472,
            mode: 0,
            speechiness: 0.113,
            acousticness: 0.295,
            instrumentalness: 0.000521,
            liveness: 0.0822,
            valence: 0.651,
            tempo: 100.898,
            duration_ms: 186089,
            time_signature: 4
        }
    },
    {
        artiestNaam: 'fusus',
        songNaam: 'Stamin',
        songImg: 'https://i.scdn.co/image/ab67616d00001e0240b91a23c506bdfe69a3551a',
        songUrl: 'https://p.scdn.co/mp3-preview/d128e094c0c7181f61bf67b21a1c28d75aa29b55?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2021',
        audio_features: {
            danceability: 0.61,
            energy: 0.638,
            key: 10,
            loudness: -11.868,
            mode: 0,
            speechiness: 0.064,
            acousticness: 0.112,
            instrumentalness: 0.862,
            liveness: 0.0872,
            valence: 0.202,
            tempo: 124.014,
            duration_ms: 449227,
            time_signature: 4
        }
    },
    {
        artiestNaam: 'Kalaallit Nunaat',
        songNaam: 'AVI',
        songImg: 'https://i.scdn.co/image/ab67616d00001e02fb037c1cd5237e494ec0030d',
        songUrl: 'https://p.scdn.co/mp3-preview/816ac27c718d70e3c5d013fafcac93bd18d54fdf?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2022',
        audio_features: {
            danceability: 0.382,
            energy: 0.911,
            key: 9,
            loudness: -5.966,
            mode: 0,
            speechiness: 0.0743,
            acousticness: 0.000876,
            instrumentalness: 0.94,
            liveness: 0.0834,
            valence: 0.161,
            tempo: 95.234,
            duration_ms: 168049,
            time_signature: 4
        }

    },
    {
        artiestNaam: 'Faffi',
        songNaam: 'Best Dad',
        songImg: 'https://i.scdn.co/image/ab67616d00001e02d1325a034283adf27bc0f697',
        songUrl: 'https://p.scdn.co/mp3-preview/ee404a8013966d28570a2c1506784512c83c6b55?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2021',
        audio_features: {
            danceability: 0.731,
            energy: 0.985,
            key: 11,
            loudness: -2.83,
            mode: 0,
            speechiness: 0.174,
            acousticness: 0.0136,
            instrumentalness: 0.864,
            liveness: 0.106,
            valence: 0.0954,
            tempo: 91.983,
            duration_ms: 255652,
            time_signature: 4
        }
    },
    {
        artiestNaam: 'Moonloops',
        songNaam: 'What A Little Love Can Do',
        songImg: 'https://i.scdn.co/image/ab67616d00001e0233166f48884261ba462277cf',
        songUrl: 'https://p.scdn.co/mp3-preview/d9fc5c7c7f297e1e2ec1fb73503bce0c809fca47?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2021',
        audio_features: {
            danceability: 0.777,
            energy: 0.411,
            key: 0,
            loudness: -11.805,
            mode: 1,
            speechiness: 0.0449,
            acousticness: 0.735,
            instrumentalness: 0.0617,
            liveness: 0.11,
            valence: 0.465,
            tempo: 125.975,
            duration_ms: 154400,
            time_signature: 4
        }
    },
    {
        artiestNaam: 'Géonne Hartman',
        songNaam: 'Landscape',
        songImg: 'https://i.scdn.co/image/ab67616d00001e02a01b4d70c98a0a9729445ab0',
        songUrl: 'https://p.scdn.co/mp3-preview/36925503c5e630bc4eecfcb84c11f61d01b55838?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2022',
        audio_features: {
            danceability: 0.564,
            energy: 0.35,
            key: 3,
            loudness: -14.576,
            mode: 0,
            speechiness: 0.0371,
            acousticness: 0.742,
            instrumentalness: 0.0372,
            liveness: 0.106,
            valence: 0.186,
            tempo: 95.061,
            duration_ms: 245507,
            time_signature: 4
        }
    },
    {
        artiestNaam: 'Beryl Anne',
        songNaam: 'Thirty-Three Times',
        songImg: 'https://i.scdn.co/image/ab67616d00001e0230ec36057820ae13b8c6353e',
        songUrl: 'https://p.scdn.co/mp3-preview/b41b5d1a8c5a85601edb3754eddc3c7ccb0f7e56?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2022',
        audio_features: {
            danceability: 0.76,
            energy: 0.789,
            key: 8,
            loudness: -9.174,
            mode: 1,
            speechiness: 0.0358,
            acousticness: 0.0487,
            instrumentalness: 0.33,
            liveness: 0.105,
            valence: 0.82,
            tempo: 131.046,
            duration_ms: 188976,
            time_signature: 4
        }
    },
    {
        artiestNaam: 'GIAN',
        songNaam: 'Vallende Engel',
        songImg: 'https://i.scdn.co/image/ab67616d00001e02623ba7bf618d470d5360ff7f',
        songUrl: 'https://p.scdn.co/mp3-preview/73f5fda4546bf8e98665a9fdf5dcb932520cea02?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2021',
        audio_features: {
            danceability: 0.538,
            energy: 0.756,
            key: 8,
            loudness: -9.116,
            mode: 1,
            speechiness: 0.0453,
            acousticness: 0.00163,
            instrumentalness: 0.575,
            liveness: 0.15,
            valence: 0.637,
            tempo: 180.055,
            duration_ms: 151471,
            time_signature: 4
        }
    },
    {
        artiestNaam: 'Cartiez',
        songNaam: 'S/O naar me Ex',
        songImg: 'https://i.scdn.co/image/ab67616d00001e02d2c5d9ffed46bf0b16b03b04',
        songUrl: 'https://p.scdn.co/mp3-preview/5b78d4fe5a1fa6d7812e0f2512060f7f0a7af8c9?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2021',
        audio_features: {
            danceability: 0.651,
            energy: 0.507,
            key: 10,
            loudness: -6.952,
            mode: 1,
            speechiness: 0.0505,
            acousticness: 0.302,
            instrumentalness: 0.00000177,
            liveness: 0.0795,
            valence: 0.543,
            tempo: 91.02,
            duration_ms: 149159,
            time_signature: 4
        }
    },
    {
        artiestNaam: 'Manu Armata',
        songNaam: 'Remain Radical',
        songImg: 'https://i.scdn.co/image/ab67616d00001e025ae729ac6764c6d9de7dbf69',
        songUrl: 'https://p.scdn.co/mp3-preview/386a70909a231f6cd5e0562c71f74e5c8bc7c554?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2020',
        audio_features: {
            danceability: 0.211,
            energy: 0.993,
            key: 7,
            loudness: -2.961,
            mode: 1,
            speechiness: 0.246,
            acousticness: 0.0000175,
            instrumentalness: 0.0118,
            liveness: 0.191,
            valence: 0.314,
            tempo: 186.522,
            duration_ms: 126005,
            time_signature: 4
        }
    },
    {
        artiestNaam: 'Tres Navy',
        songNaam: 'Remain Radical',
        songImg: 'https://i.scdn.co/image/ab67616d00001e02c872312e21e8eb6f234ab166',
        songUrl: 'https://p.scdn.co/mp3-preview/7b3f8bf0ad05c5c646faae5e4263bdcb9807fa34?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2020',
        audio_features: {
            danceability: 0.731,
            energy: 0.504,
            key: 0,
            loudness: -8.709,
            mode: 0,
            speechiness: 0.421,
            acousticness: 0.474,
            instrumentalness: 0,
            liveness: 0.133,
            valence: 0.588,
            tempo: 89.863,
            duration_ms: 152667,
            time_signature: 4
        }
    },
    {
        artiestNaam: 'Burght',
        songNaam: 'On My Phone Again',
        songImg: 'https://i.scdn.co/image/ab67616d00001e022af2cf646b6cf69a67aa7fe8',
        songUrl: 'https://p.scdn.co/mp3-preview/3fd5804d5eb5b6ab746cc9047c3580dd3442cb6a?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2020',
        audio_features: {
            danceability: 0.641,
            energy: 0.308,
            key: 0,
            loudness: -16.023,
            mode: 0,
            speechiness: 0.0329,
            acousticness: 0.616,
            instrumentalness: 0.843,
            liveness: 0.0989,
            valence: 0.327,
            tempo: 129.925,
            duration_ms: 231686,
            time_signature: 3
        }
    },
    {
        artiestNaam: 'Daisy Bellis',
        songNaam: 'Biodegradable',
        songImg: 'https://i.scdn.co/image/ab67616d00001e0218ec160f065b6206ad610ce7',
        songUrl: 'https://p.scdn.co/mp3-preview/0f523ec9ef22ceeefcf3cf8cff4af637f64ed2f0?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2020',
        audio_features: {
            danceability: 0.314,
            energy: 0.151,
            key: 10,
            loudness: -16.205,
            mode: 0,
            speechiness: 0.0407,
            acousticness: 0.99,
            instrumentalness: 0.93,
            liveness: 0.125,
            valence: 0.0397,
            tempo: 130.259,
            duration_ms: 53465,
            time_signature: 4
        }
    },
    {
        artiestNaam: 'Frae',
        songNaam: 'Good Gold',
        songImg: 'https://i.scdn.co/image/ab67616d00001e0200816df1cdf9616f50a91a36',
        songUrl: 'https://p.scdn.co/mp3-preview/e202be4a7ca7723ea93dc71af188c540a68e44ac?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2020',
        audio_features: {
            danceability: 0.651,
            energy: 0.481,
            key: 7,
            loudness: -8.617,
            mode: 0,
            speechiness: 0.088,
            acousticness: 0.0867,
            instrumentalness: 0,
            liveness: 0.134,
            valence: 0.424,
            tempo: 135.958,
            duration_ms: 246858,
            time_signature: 4
        }
    },
    {
        artiestNaam: 'AVA NOVA',
        songNaam: 'Paranormal',
        songImg: 'https://i.scdn.co/image/ab67616d00001e0291c25ca9c85ee7cbe3ab67c5',
        songUrl: 'https://p.scdn.co/mp3-preview/3d9cff089e2e80cba46420b98b759792569f7dc0?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2020',
        audio_features: {
            danceability: 0.733,
            energy: 0.402,
            key: 5,
            loudness: -6.671,
            mode: 1,
            speechiness: 0.0594,
            acousticness: 0.65,
            instrumentalness: 0.0081,
            liveness: 0.0891,
            valence: 0.518,
            tempo: 79.995,
            duration_ms: 216058,
            time_signature: 4
        }
    },
    {
        artiestNaam: 'Axel Karakasis',
        songNaam: 'Vacuity - Dexon Remix',
        songImg: 'https://i.scdn.co/image/ab67616d00001e02cd95b10db4c3e9123c5a3abb',
        songUrl: 'https://p.scdn.co/mp3-preview/696f03fa91237b1e85c9968a17d236ef5113cd33?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2020',
        audio_features: {
            danceability: 0.808,
            energy: 0.651,
            key: 11,
            loudness: -14.298,
            mode: 1,
            speechiness: 0.088,
            acousticness: 0.0054,
            instrumentalness: 0.914,
            liveness: 0.109,
            valence: 0.0372,
            tempo: 128.003,
            duration_ms: 392920,
            time_signature: 4
        }
    },
    {
        artiestNaam: 'Goldband',
        songNaam: 'Witte Was',
        songImg: 'https://i.scdn.co/image/ab67616d00001e021de89c5340be36804e01fdf2',
        songUrl: 'https://p.scdn.co/mp3-preview/355b2c2a6c8c30a2d189efeff438abf421ae736d?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2019',
        audio_features: {
            danceability: 0.831,
            energy: 0.739,
            key: 7,
            loudness: -9.914,
            mode: 1,
            speechiness: 0.0524,
            acousticness: 0.0505,
            instrumentalness: 0.00233,
            liveness: 0.0842,
            valence: 0.388,
            tempo: 128.995,
            duration_ms: 245581,
            time_signature: 4
        }
    },
    {
        artiestNaam: 'Pop Filter',
        songNaam: 'Romance At The Petrol Station',
        songImg: 'https://i.scdn.co/image/ab67616d00001e02fba36361b9805898c2f9cd88',
        songUrl: 'https://p.scdn.co/mp3-preview/afe6f4055ced4fe4848007f7eea88cd83aee517e?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2020',
        audio_features: {
            danceability: 0.51,
            energy: 0.614,
            key: 7,
            loudness: -9.194,
            mode: 1,
            speechiness: 0.0513,
            acousticness: 0.544,
            instrumentalness: 0.0957,
            liveness: 0.0982,
            valence: 0.549,
            tempo: 119.772,
            duration_ms: 222910,
            time_signature: 4
        },
    },
    {
        artiestNaam: 'Cassave',
        songNaam: 'Traject twee',
        songImg: 'https://i.scdn.co/image/ab67616d00001e02f047f12ec1005f0a1dca4cc1',
        songUrl: 'https://p.scdn.co/mp3-preview/405e63aaa299093aff83bde7bcb88d219a64a6b4?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2021',
        audio_features: {
            danceability: 0.831,
            energy: 0.865,
            key: 9,
            loudness: -10.049,
            mode: 1,
            speechiness: 0.0468,
            acousticness: 0.827,
            instrumentalness: 0.939,
            liveness: 0.314,
            valence: 0.827,
            tempo: 118.053,
            duration_ms: 220000,
            time_signature: 4
        }

    },
    {
        artiestNaam: 'Tuna Salad',
        songNaam: 'Loose',
        songImg: 'https://i.scdn.co/image/ab67616d00001e022ff52b8e8e3150ff7e8e0a27',
        songUrl: 'https://p.scdn.co/mp3-preview/3923ff7b088697c31d946d70db648f053aa441f8?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2020',
        audio_features: {
            danceability: 0.55,
            energy: 0.5,
            key: 9,
            loudness: -9.853,
            mode: 1,
            speechiness: 0.0352,
            acousticness: 0.0748,
            instrumentalness: 0.848,
            liveness: 0.0812,
            valence: 0.428,
            tempo: 178.019,
            duration_ms: 197965,
            time_signature: 4
        }
    },
    {
        artiestNaam: 'Iguana Death Cult',
        songNaam: 'Nature Calls',
        songImg: 'https://i.scdn.co/image/ab67616d00001e02c199ca398728bafed5dbac7d',
        songUrl: 'https://p.scdn.co/mp3-preview/4ac839889b6facdf2d5d97ceb6453474397758e7?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2020',
        audio_features: {
            danceability: 0.448,
            energy: 0.939,
            key: 10,
            loudness: -3.178,
            mode: 1,
            speechiness: 0.0633,
            acousticness: 0.00455,
            instrumentalness: 0.0479,
            liveness: 0.166,
            valence: 0.666,
            tempo: 102.434,
            duration_ms: 228293,
            time_signature: 4
        }
    },
    {
        artiestNaam: 'Josephine Odhil',
        songNaam: 'Be Your Better Self',
        songImg: 'https://i.scdn.co/image/ab67616d00001e02c2ddb3cb92b474284a23b37f',
        songUrl: 'https://p.scdn.co/mp3-preview/22c6d35182d8d4757ff2433a7c21f16715b44c9b?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2020',
        audio_features: {
            danceability: 0.437,
            energy: 0.499,
            key: 7,
            loudness: -7.845,
            mode: 1,
            speechiness: 0.0322,
            acousticness: 0.014,
            instrumentalness: 0.0000704,
            liveness: 0.605,
            valence: 0.787,
            tempo: 170.097,
            duration_ms: 209560,
            time_signature: 4
        }
    },
    {
        artiestNaam: 'Peperbek',
        songNaam: 'Bel Maar Niet',
        songImg: 'https://i.scdn.co/image/ab67616d00001e02fbfb6f21c01d24db218f6415',
        songUrl: 'https://p.scdn.co/mp3-preview/b9f42fc67695d1045c9107e6278e5ffa30d31774?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2020',
        audio_features: {
            danceability: 0.762,
            energy: 0.56,
            key: 4,
            loudness: -12.717,
            mode: 0,
            speechiness: 0.115,
            acousticness: 0.102,
            instrumentalness: 0,
            liveness: 0.0937,
            valence: 0.671,
            tempo: 95.961,
            duration_ms: 184288,
            time_signature: 4
        }
    },
    {
        artiestNaam: 'Joep Beving',
        songNaam: 'Nocturnal',
        songImg: 'https://i.scdn.co/image/ab67616d00001e0267c8d88e9c22268c926f278b',
        songUrl: 'https://p.scdn.co/mp3-preview/c22e060eefd686d92b806074c9208b11c0d867c0?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2020',
        audio_features: {
            danceability: 0.219,
            energy: 0.0153,
            key: 9,
            loudness: -33.563,
            mode: 0,
            speechiness: 0.0346,
            acousticness: 0.994,
            instrumentalness: 0.923,
            liveness: 0.0934,
            valence: 0.1,
            tempo: 57.439,
            duration_ms: 312757,
            time_signature: 4
        }
    },
    {
        artiestNaam: 'Tuna Salad',
        songNaam: 'Zaterdag',
        songImg: 'https://i.scdn.co/image/ab67616d00001e02e1e7558f8074e0afa94039b3',
        songUrl: 'https://p.scdn.co/mp3-preview/e35a7235d6ddea16679c5dc3084d613fab2c5271?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2020',
        audio_features: {
            danceability: 0.334,
            energy: 0.82,
            key: 2,
            loudness: -7.421,
            mode: 1,
            speechiness: 0.0421,
            acousticness: 0.0283,
            instrumentalness: 0.973,
            liveness: 0.106,
            valence: 0.713,
            tempo: 180.02,
            duration_ms: 146958,
            time_signature: 3
        }
    },
    {
        artiestNaam: 'Dans Dans',
        songNaam: 'Wolk',
        songImg: 'https://i.scdn.co/image/ab67616d00001e02f8501dc0649a400c92fe0b87',
        songUrl: 'https://p.scdn.co/mp3-preview/c93dd742e20386662d2b05157bdeeedb82d40647?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2020',
        audio_features: {
            danceability: 0.768,
            energy: 0.362,
            key: 7,
            loudness: -14.28,
            mode: 1,
            speechiness: 0.038,
            acousticness: 0.37,
            instrumentalness: 0.83,
            liveness: 0.123,
            valence: 0.502,
            tempo: 133.024,
            duration_ms: 239265,
            time_signature: 4
        }
    },
    {
        artiestNaam: 'Blue Child',
        songNaam: 'I Miss You',
        songImg: 'https://i.scdn.co/image/ab67616d00001e02ba139e9f509c08eb2881b86f',
        songUrl: 'https://p.scdn.co/mp3-preview/1fb00b4821295f5c26a079519bd8073f70893d96?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2020',
        audio_features: {
            danceability: 0.323,
            energy: 0.194,
            key: 10,
            loudness: -18.359,
            mode: 1,
            speechiness: 0.0338,
            acousticness: 0.961,
            instrumentalness: 0.00059,
            liveness: 0.149,
            valence: 0.175,
            tempo: 139.096,
            duration_ms: 239265,
            time_signature: 4
        }
    },
    {
        artiestNaam: 'Altin Gün',
        songNaam: 'Yüce Dağ Başında',
        songImg: 'https://i.scdn.co/image/ab67616d00001e0268b74ac5084901305e5e5c9d',
        songUrl: 'https://p.scdn.co/mp3-preview/1057151b776a589f839e9f43af7f93f43392f7ef?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2020',
        audio_features: {
            danceability: 0.823,
            energy: 0.569,
            key: 7,
            loudness: -9.301,
            mode: 0,
            speechiness: 0.0498,
            acousticness: 0.0571,
            instrumentalness: 0.00242,
            liveness: 0.0938,
            valence: 0.831,
            tempo: 111.974,
        }
    },
    {
        artiestNaam: 'MY BABY',
        songNaam: 'Remedy II',
        songImg: 'https://i.scdn.co/image/ab67616d00001e026938a9303d435e16c0235c82',
        songUrl: 'https://p.scdn.co/mp3-preview/679ae5860826069f292dd4a8ee7e69283f774d49?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2020',
        audio_features: {
            danceability: 0.48,
            energy: 0.686,
            key: 7,
            loudness: -8.531,
            mode: 1,
            speechiness: 0.066,
            acousticness: 0.0018,
            instrumentalness: 0.146,
            liveness: 0.105,
            valence: 0.517,
            tempo: 130.04,
        }
    },
    {
        artiestNaam: 'Jett Rebel',
        songNaam: 'The Love You Give',
        songImg: 'https://i.scdn.co/image/ab67616d00001e020934a756e74fae7d7f37b967',
        songUrl: 'https://p.scdn.co/mp3-preview/c475be7f281a1035ff983a6cf82954b435ce3675?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2020',
        audio_features: {
            danceability: 0.694,
            energy: 0.481,
            key: 2,
            loudness: -11.646,
            mode: 1,
            speechiness: 0.0794,
            acousticness: 0.277,
            instrumentalness: 0.00312,
            liveness: 0.204,
            valence: 0.673,
            tempo: 135.737,
        }
    },
    {
        artiestNaam: 'Someone',
        songNaam: 'Im Not Leaving',
        songImg: 'https://i.scdn.co/image/ab67616d00001e02e3faf75010ed170d0f8129c0',
        songUrl: 'https://p.scdn.co/mp3-preview/3a907c0f52a99c74cfbbc21b7f600470d5384c7e?cid=774b29d4f13844c495f206cafdad9c86',
        releaseDate: '2020',
        audio_features: {
            danceability: 0.559,
            energy: 0.459,
            key: 11,
            loudness: -10.11,
            mode: 0,
            speechiness: 0.0241,
            acousticness: 0.429,
            instrumentalness: 0.658,
            liveness: 0.127,
            valence: 0.335,
            tempo: 90.989,
        }
    }
];



const scale = (number, [inMin, inMax], [outMin, outMax]) => {

    return (number - inMin) / (inMax - inMin) * (outMax - outMin) + outMin;
}


console.log(scale(.3, [0, 1], [-1, 1]));

// console.log(artiesten[0].audio_features.energy*100, artiesten[0].audio_features.valence*100, artiesten[0].audio_features.danceability*100);

const songCardLijst = document.querySelectorAll('.song');

for (let step = 0; step < songCardLijst.length; step++) {

    //artiestNaam
    songCardLijst[step].childNodes[3].childNodes[1].innerHTML = artiesten[step].artiestNaam;

    //songNaam
    songCardLijst[step].childNodes[3].childNodes[3].innerHTML = artiesten[step].songNaam;

    //releaseDate
    songCardLijst[step].childNodes[3].childNodes[5].innerHTML = artiesten[step].releaseDate;

    //img
    songCardLijst[step].childNodes[1].childNodes[1].childNodes[1].src = artiesten[step].songImg;
}


const cardRechts = document.querySelectorAll('.cardRechts');
for (let step = 0; step < cardRechts.length; step++) {
    cardRechts[step].addEventListener('click', () => {
        location.href = './artistPage.html';
    });

}


import * as THREE from './three.module.js';
import {
    UIPanel
} from './ui.js';

import {
    Interaction
} from './src/interaction/Interaction.js';

import {
    OrbitControls
} from './OrbitControls.js';


import {
    OrbitControlsGizmo
} from "./OrbitControlsGizmo.js";

let renderer, scene, camera;
let controls, group, viewHelper;

init();
animate();

function init() {

    // init renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.prepend(renderer.domElement);

    // init scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xEDE9E9);

    // const color = 0xFFFFFF; // white
    // const near = 10;
    // const far = 100;
    // scene.fog = new THREE.Fog(0xaaaaaa);

    group = new THREE.Group();
    scene.add(group);

    // const geometry = new THREE.PlaneGeometry(1000, 1000);
    // const material = new THREE.MeshBasicMaterial({
    //     color: 0xff0000,
    //     side: THREE.DoubleSide
    // });
    // const plane = new THREE.Mesh(geometry, material);
    // scene.add(plane);
    // plane.position.set(100, 100, 100);





    // init camera
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(15, 15, 15);
    camera.lookAt(scene.position);

    // //controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.listenToKeyEvents(window); // optional

    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05;

    controls.screenSpacePanning = false;

    controls.minDistance = 100;
    controls.maxDistance = 500;

    controls.maxPolarAngle = Math.PI / 2;


    // Viewhelper
    // const container = new THREE.Object3D()
    // viewHelper = new ViewHelper(camera, container);

    // console.log(viewHelper)

    // scene.add(viewHelper)



    // Add the Obit Controls Gizmo
    const controlsGizmo = new OrbitControlsGizmo(controls, {
        size: 100,
        padding: 8
    });

    // Add the Gizmo domElement to the dom 
    document.body.appendChild(controlsGizmo.domElement);


    // const axesHelper = new THREE.AxesHelper(5);
    // scene.add(axesHelper);
    // axesHelper.setColors(0x000000, 0x000000, 0x000000);

    // var textGeo = new THREE.TextGeometry('Y', {
    //     size: 5,
    //     height: 2,
    //     curveSegments: 6,
    //     font: "arial",
    //     style: "normal"
    // });

    // var x = position.getX( index ); // or getY, getZ


    // axesHelper.position.set(30,30,30);



    // const map14 = new THREE.TextureLoader().load('./img/Group 14.png');
    // const Song12 = new THREE.SpriteMaterial({
    //     map: map14
    // });
    for (let step = 0; step < artiesten.length; step++) {



        const fotoTextuur = new THREE.TextureLoader().load(artiesten[step].songImg);

        const fotoMateriaal = new THREE.SpriteMaterial({
            map: fotoTextuur
        });
        const schaalFactor2 = 110;
        const foto = new THREE.Sprite(fotoMateriaal);
        foto.scale.set(7, 7, 1);
        foto.position.set(scale(artiesten[step].audio_features.energy, [0, 1], [-1, 1]) * schaalFactor2,
            scale(artiesten[step].audio_features.danceability, [0, 1], [1, -.6]) * schaalFactor2,
            scale(artiesten[step].audio_features.valence, [0, 1], [-1, 1]) * schaalFactor2

        );
        artiesten[step].uuid = foto.uuid;
        scene.add(foto);
        group.add(foto);

        // const lampje = new THREE.PointLight(0xff0000, 1, 1);
        // lampje.position.set(scale(artiesten[step].audio_features.energy, [0, 1], [-1, 1]) * schaalFactor2, scale(artiesten[step].audio_features.valence, [0, 1], [-1, 1]) * schaalFactor2, scale(artiesten[step].audio_features.danceability, [0, 1], [-1, 1]) * schaalFactor2, );
        // scene.add(lampje);




        // const sphereSize = 1;
        // const pointLightHelper = new THREE.PointLightHelper(lampje, sphereSize);
        // scene.add(pointLightHelper);

        const activeSong = (songUrl) => new Audio(songUrl)
        let currentSong;

        foto.on("mouseover", function (ev) {
            stadCanvas.style.cursor = 'pointer';

            const actieveArtiest = artiesten.find((artiest) => artiest.uuid === ev.data.target.uuid);

            currentSong = activeSong(actieveArtiest.songUrl);

            if (currentSong.paused) {
                currentSong.volume = 0;

                currentSong.play();

                const fadeAudioIn = setInterval(() => {
                    // When volume at zero stop all the intervalling
                    if (currentSong.volume >= 0.95) {
                        clearInterval(fadeAudioIn);
                    }
                    // Only fade if past the fade out point or not at zero already
                    if (currentSong.volume <= 0.9) {
                        currentSong.volume += 0.1;
                    }
                }, 200);

                // Set the point in playback that fadeout begins. This is for a 2 second fade out.
                let fadePoint = currentSong.duration - 2;

                const fadeAudioOut = setInterval(function () {
                    // Only fade if past the fade out point or not at zero already
                    if ((currentSong.currentTime >= fadePoint) && (currentSong.volume >= 0.1)) {
                        currentSong.volume -= 0.1;
                    }
                    // When volume at zero stop all the intervalling
                    if (currentSong.volume <= 0.0) {
                        clearInterval(fadeAudioOut);
                    }
                }, 200);
            }
        });

        foto.on("mouseout", function (ev) {
            if (!currentSong.paused) {
                // Set the point in playback that fadeout begins. This is for a 2 second fade out.

                const fadeAudioOut = setInterval(function () {
                    // When volume at zero stop all the intervalling
                    if (currentSong.volume <= 0.1) {
                        currentSong.pause();
                        clearInterval(fadeAudioOut);
                        currentSong.volume = 1;
                    }
                    // Only fade if past the fade out point or not at zero already
                    if (currentSong.volume >= 0.1) {
                        currentSong.volume -= 0.1;
                    }
                }, 20);
                stadCanvas.style.cursor = 'default';
            }
        });

        foto.on("click", function () {
            location.href = "./artistPage.html";
        });
    };



    //zet CSV om naar array
    Papa.parse('./PCA-CSV-NL.csv', {
        download: true,
        complete: function (results) {
            const lijst = results.data;


            for (let step = 0; step < lijst.length; step++) {

                var schaalFactor = 120;
                var coordinaat = new THREE.Vector3((lijst[step][1] * schaalFactor), (lijst[step][3] * schaalFactor), (lijst[step][2] * schaalFactor));


                var emotie = lijst[step][0];
                drawAxisLabel(emotie, coordinaat);

                // console.log(coordinaat);
            }

        }
    });


    const drawAxisLabel = (text, position) => {
        const label = drawText(text);

        label.position.set(position.x, position.y, position.z);
        scene.add(label);
        group.add(label);
    };



    // //load font: Tuna2 
    // var Tuna2 = new FontFace('Tuna2', 'url(/font/Graphik-Extralight.otf)');
    // Tuna2.load().then(function (loaded_face) {
    //     // loaded_face holds the loaded FontFace
    //     // console.log('e');
    // }).catch(function (error) {
    //     // error occurred
    // });



    const drawText = message => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        context.font = '32px Arial';
        context.fillStyle = "rgba(0, 0, 0, 1)";
        context.fillText(message, 0, 64);


        const texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;

        const spriteMaterial = new THREE.SpriteMaterial({
            map: texture
        });

        const sprite = new THREE.Sprite(spriteMaterial);

        sprite.center.set(0, 0.5);
        sprite.scale.set(20, 10, 10);

        return sprite;
    };



    drawText();
    drawAxisLabel('aaa', 10);


    // window.addEventListener('resize', onWindowResize);
}

function animate() {
    controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize('100%', window.innerHeight);
}

const stadCanvas = document.querySelector('canvas');
const interaction = new Interaction(renderer, scene, camera);

stadCanvas.style.width = '100%';