require('global');
require('prototype.creep')();
require('prototype.creepSpeech')();
require('prototype.roomPosition')();

module.exports = {
    run: function (room, creep) {
        if (creep.memory.w == true && creep.carry.energy < creep.getActiveBodyparts(WORK)) {
            creep.memory.w = false;
        }
        else if (creep.memory.w == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.w = true;
        }


        if (creep.memory.w == true) {

            var controller = room.controller;

            if (controller.pos.getRangeTo(creep.pos) <= 4) {
                creep.upgradeController(controller);
                creep.creepSpeech(room, 'upgrading');
            }

            if (controller.pos.getRangeTo(creep.pos) > 1) {
                creep.moveTo(controller);
            }
            else {
                if (!controller.sign || controller.sign.username != creep.owner.username || Game.time-controller.sign.time > global.signTime) {
                    var text = Memory.sign[Math.floor(Math.random() * Memory.sign.length)];
                    creep.signController(controller, text);
                }
            }
        }
        else {
            var droppedEnergy = creep.findDroppedEnergy(room);

            if (!droppedEnergy) {
                droppedEnergy = [];
            }

            if (droppedEnergy.amount == undefined || droppedEnergy.amount < 1010) {
                var links = creep.findLinksEnergy();
                var containers = _.filter(global[room.name].containers, (c) => c.store[RESOURCE_ENERGY] > 0);
                var storage = room.storage;

                var arrayOfBoth = links;
                arrayOfBoth.push(storage);
                arrayOfBoth.concat(containers);

                var closer = creep.pos.findClosestByRange(arrayOfBoth);

                if (closer != storage) {
                    if (creep.withdraw(closer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(closer, {reusePath: 10})
                    }
                }
                else if (storage && storage.store[RESOURCE_ENERGY] > 1000) {
                    if (creep.withdraw(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(storage, {reusePath: 10})
                    }
                }
                else {
                    var container = creep.pos.findClosestByRange(containers);
                    if (container) {
                        if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(container)
                        }
                    }
                    else {
                        if (creep.pickup(droppedEnergy, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(container)
                        }
                    }
                }
            }
            else {
                if (creep.pickup(droppedEnergy, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(droppedEnergy);
                }
            }
        }
    }
};