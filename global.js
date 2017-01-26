'use strict';

global.allianceName = 'INT_MAX';
global.Allies = ['Lur', 'starwar15432', 'Leonyx'];

global.REVERSE_DIR = {
    [TOP]            : BOTTOM,
    [TOP_RIGHT]        : BOTTOM_LEFT,
    [RIGHT]            : LEFT,
    [BOTTOM_RIGHT]    : TOP_LEFT,
    [BOTTOM]        : TOP,
    [BOTTOM_LEFT]    : TOP_RIGHT,
    [LEFT]            : RIGHT,
    [TOP_LEFT]        : BOTTOM_RIGHT
};

global.STRUCTUREDECAY = {
    [STRUCTURE_ROAD] : 500,
    [STRUCTURE_RAMPART] : 300,
    [STRUCTURE_CONTAINER] : 5000
};

global.storageData = {};

global.storageData[RESOURCE_ENERGY] = 150000;
global.storageData[RESOURCE_HYDROGEN] = 6000;
global.storageData[RESOURCE_OXYGEN] = 6000;
global.storageData[RESOURCE_UTRIUM] = 6000;
global.storageData[RESOURCE_KEANIUM] = 6000;
global.storageData[RESOURCE_LEMERGIUM] = 6000;
global.storageData[RESOURCE_ZYNTHIUM] = 6000;
global.storageData[RESOURCE_CATALYST] = 6000;

global.storageData[RESOURCE_HYDROXIDE] = 6000;
global.storageData[RESOURCE_GHODIUM] = 6000;
global.storageData[RESOURCE_ZYNTHIUM_KEANITE] = 6000;
global.storageData[RESOURCE_UTRIUM_LEMERGITE] = 6000;


global.storageData[RESOURCE_UTRIUM_HYDRIDE] = 6000;
global.storageData[RESOURCE_UTRIUM_OXIDE] = 6000;
global.storageData[RESOURCE_KEANIUM_HYDRIDE] = 6000;
global.storageData[RESOURCE_KEANIUM_OXIDE] = 6000;
global.storageData[RESOURCE_LEMERGIUM_HYDRIDE] = 6000;
global.storageData[RESOURCE_LEMERGIUM_OXIDE] = 6000;
global.storageData[RESOURCE_ZYNTHIUM_HYDRIDE] = 6000;
global.storageData[RESOURCE_ZYNTHIUM_OXIDE] = 6000;
global.storageData[RESOURCE_GHODIUM_HYDRIDE] = 6000;
global.storageData[RESOURCE_GHODIUM_OXIDE] = 6000;

global.storageData[RESOURCE_UTRIUM_ACID] = 3000;
global.storageData[RESOURCE_UTRIUM_ALKALIDE] = 3000;
global.storageData[RESOURCE_KEANIUM_ACID] = 3000;
global.storageData[RESOURCE_KEANIUM_ALKALIDE] = 3000;
global.storageData[RESOURCE_LEMERGIUM_ACID] = 3000;
global.storageData[RESOURCE_LEMERGIUM_ALKALIDE] = 3000;
global.storageData[RESOURCE_ZYNTHIUM_ACID] = 3000;
global.storageData[RESOURCE_ZYNTHIUM_ALKALIDE] = 3000;
global.storageData[RESOURCE_GHODIUM_ACID] = 3000;
global.storageData[RESOURCE_GHODIUM_ALKALIDE] = 3000;

global.storageData[RESOURCE_CATALYZED_UTRIUM_ACID] = 6000;
global.storageData[RESOURCE_CATALYZED_UTRIUM_ALKALIDE] = 6000;
global.storageData[RESOURCE_CATALYZED_KEANIUM_ACID] = 6000;
global.storageData[RESOURCE_CATALYZED_KEANIUM_ALKALIDE] = 6000;
global.storageData[RESOURCE_CATALYZED_LEMERGIUM_ACID] = 6000;
global.storageData[RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE] = 6000;
global.storageData[RESOURCE_CATALYZED_ZYNTHIUM_ACID] = 6000;
global.storageData[RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE] = 6000;