function Disaster(villages) {

  var _villages = villages;

  var _disasters = ["locust"];

  var getRandomRitualTimeout = function(){
    return 3000; //wylosowane przez rzut koscia, gwarantowana losowosc
  };

  var pickVillageId = function() {
    return Math.floor((Math.random() * _villages.length));
  };

  var pickVillage = function(){
    var villageId = pickVillageId();
    return _villages[villageId];
  };

  var currentVillageWithRitual = null;

  var ritualInProgress = false;

  return {
    getVillages : function () {
      return _villages;
    },
    getVillageWithRitual : function(){
      return currentVillageWithRitual;
    },
    run : function run() {

      if(ritualInProgress){
        console.log("no new village");
        return; }

      var village = pickVillage();

      currentVillageWithRitual = village;
      ritualInProgress = true;

      var ritual = {};

      village.startRitual(ritual);

      setTimeout(function(){
        village.destroy();
        currentVillageWithRitual = null;
        ritualInProgress = false;
        run();
      },
        getRandomRitualTimeout());
    }
  }
}

var v1 = {
  startRitual : function(){
    console.log("start");
  },
  destroy : function(){
    console.log("destroy ");

  },
  stopRitual : function(){
    console.log("stop ritual");
  }
};

//var d = Disaster([v1]);

//console.log(d.run());

