require('global');

module.exports = {

    run: function (room) {
        if (Memory.rooms[room].isUnderAttack == false) {
            var towers = room.find(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_TOWER}); // get towers in room
            for (let tower of towers) {
                if (tower.energy > 500) { // if energy in tower is greater than x
                    if (this.run(room, tower) == 'no thing to heal') {
                        this.repairRampart(room, tower); // tower repairs ramparts
                    }
                }
            }
        }

    },

    attackRun: function (room, tower) {

        var towerTarget = this.findTarget(room, tower);

        if (towerTarget) {
            tower.attack(towerTarget);
        }
        else {
            var towerHeal = this.findHeal(room, tower);
            if (towerHeal) {
                tower.heal(towerHeal)
            }
            else {
                return 'no thing to heal';
            }
        }

    },

    findTarget: function (room, tower) {

        var towerTarget;

        towerTarget = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: (c) => !Allies.includes(c.owner.username)});
        return towerTarget;
    },

    findHeal: function (room, tower) {
        var towerHeal;
        towerHeal = tower.pos.findClosestByRange(FIND_MY_CREEPS, {filter: (c) => c.hits < c.hitsMax});
        if (towerHeal) {
            return towerHeal;
        }
    },

    repairRampart: function (room, tower) {
        var towerRepair = tower.pos.findClosestByRange(FIND_STRUCTURES, {filter: (s) => (s.structureType == STRUCTURE_RAMPART || s.structureType == STRUCTURE_WALL) && s.hits <= 1000});
        if (towerRepair) {
            tower.repair(towerRepair)
        }
    }
};