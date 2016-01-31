

function CreateDisasterMiracle(ADisaster, AMiracle){
  return {
    disaster : ADisaster,
    miracle : AMiracle,
  }
}

var DisastersAndMiracles = [
  CreateDisasterMiracle("fire", "water"),
  CreateDisasterMiracle("locust","fire"),
  CreateDisasterMiracle("clouds","wind"),
  CreateDisasterMiracle("monster","thunderbolt")];

export default function Disaster(villages) {

  var _villages = villages;

  var _disasters = DisastersAndMiracles;

  var getRandomRitualTimeout = function(){

    return Math.floor((Math.random() * 10) + 4) * 1000;

    return 3000; //wylosowane przez rzut koscia, gwarantowana losowosc
  };

  var pickDisasterAndMiracle = function(){
    return _disasters[_.random(0, _disasters.length - 1)];
  };

  var pickVillageId = function() {
    return _.random(0, _villages.length - 1);
  };

  var pickVillage = function(){
    var villageId = pickVillageId();
    return _villages[villageId];
  };

  var currentVillageWithRitual = null;

  var ritualInProgress = false;
  var stop = false;

  return {

    stop : function(){
      stop = true;
    },


    getVillages : function () {
      return _villages;
    },
    getVillageWithRitual : function(){
      return currentVillageWithRitual;
    },
    run : function run() {

      if(stop){
        return;
      }
      if(ritualInProgress){
        console.log("no new village");
        return; }

      var village = pickVillage();

      currentVillageWithRitual = village;
      ritualInProgress = true;

      village.startDisaster(pickDisasterAndMiracle());

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
  startDisaster : function(disasterAndMiracle){
    console.log("start " + disasterAndMiracle.disaster + " with " + disasterAndMiracle.miracle);
  },
  destroy : function(){
    console.log("destroy ");

  },
  stopDisaster : function(miracle){
    console.log("stop ritual " + miracle);
  }
};

//var d = Disaster([v1]);

//d.run();


