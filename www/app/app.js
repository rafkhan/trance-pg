angular.module('trance', [])

  .controller('MainCtrl', function($scope) {

    var colorThief = new ColorThief();


    $scope.tracks = [
      {
        name: 'Master of Puppets',
        artist: 'Metallica',
        album: 'Master of Puppets',
        art:   'assets/img/test/master_of_puppets.jpg'
      },

      {
        name: 'Eiforya (Radio Edit)',
        artist: 'Armin van Buuren & Andrew Rayel',
        album: 'A State of Trance 2014 - Mixed by Armin van Buuren (In the Club)',
        art:   'assets/img/test/armin_asot.jpg'
      },

      {
        name: 'Crazy',
        artist: 'Gnarls Barkley',
        album: 'St. Elsewhere',
        art:   'assets/img/test/st_elsewhere.jpg'
      }
    ];

    $scope.current = $scope.tracks[1];
    $scope.palette = ["red","green","blue"]


    $scope.setTrack = function(track) {
      $scope.current = track;
      var img = document.getElementById('current-art');

      var palette = colorThief.getPalette(img, 2);

      $scope.palette = _.map(palette, function(color) {
        return ['rgb(', color[0], ',', color[1], ',', color[2], ')'].join('');
      });
    };

    
  });

