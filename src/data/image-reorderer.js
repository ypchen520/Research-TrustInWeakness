/**
 * Run this file in termina by navigating to it's directory andrunning with node:
 * node image-shuffler.js
 * Saves file to same directory as: 'reshuffle.js'
 * 
 * @NOTE - Our Vue app uses a file called 'reshuffled.js' to import the images in the Analysis page. - notice the +'d'
 * This is to ensure that we don't accidentally overwrite an order we are happy with.
 * 
 * The output file will be a systematic sampleing from the following 3 sets of images.
 * It will pick the specified number of images from each set of PhotoIDs and shuffle the order for that sequence.
 * No duplicates in final output file.
 */

fs = require('fs');

let __SANDINSET__ = 1 //How many sand images per sequence
let __YELLOWINSET__ = 1
let __OTHERINSET__ = 7

let SandWeaknessByTACO_ID           = [550, 623, 884, 892, 899, 901, 910, 923, 924, 936, 945, 946, 948, 971, 983, 989, 1087, 1116] //18
let YellowParLinesWeaknessByTACO_ID = [7, 56, 88, 93, 687, 700, 713, 716, 755, 763, 765, 775, 830, 836, 851, 853, 862, 1018] //18
let Raw = [

    {"tmb":"./assets/compressed_images-10/batch_1-000010.jpg","src":"./assets/compressed_images-50/batch_1-000010.jpg","photoID":	2},
    {"tmb":"./assets/compressed_images-10/batch_1-000019.jpg","src":"./assets/compressed_images-50/batch_1-000019.jpg","photoID":	3},
    {"tmb":"./assets/compressed_images-10/batch_1-000001.jpg","src":"./assets/compressed_images-50/batch_1-000001.jpg","photoID":	7},
    {"tmb":"./assets/compressed_images-10/batch_1-000005.jpg","src":"./assets/compressed_images-50/batch_1-000005.jpg","photoID":	8},
    {"tmb":"./assets/compressed_images-10/batch_1-000012.jpg","src":"./assets/compressed_images-50/batch_1-000012.jpg","photoID":	10},
    {"tmb":"./assets/compressed_images-10/batch_1-000014.jpg","src":"./assets/compressed_images-50/batch_1-000014.jpg","photoID":	11},
    {"tmb":"./assets/compressed_images-10/batch_1-000011.jpg","src":"./assets/compressed_images-50/batch_1-000011.jpg","photoID":	18},
    {"tmb":"./assets/compressed_images-10/batch_1-000021.jpg","src":"./assets/compressed_images-50/batch_1-000021.jpg","photoID":	25},
    {"tmb":"./assets/compressed_images-10/batch_1-000023.jpg","src":"./assets/compressed_images-50/batch_1-000023.jpg","photoID":	27},
    {"tmb":"./assets/compressed_images-10/batch_1-000027.jpg","src":"./assets/compressed_images-50/batch_1-000027.jpg","photoID":	29},
    {"tmb":"./assets/compressed_images-10/batch_1-000030.jpg","src":"./assets/compressed_images-50/batch_1-000030.jpg","photoID":	31},
    {"tmb":"./assets/compressed_images-10/batch_1-000015.jpg","src":"./assets/compressed_images-50/batch_1-000015.jpg","photoID":	38},
    {"tmb":"./assets/compressed_images-10/batch_1-000017.jpg","src":"./assets/compressed_images-50/batch_1-000017.jpg","photoID":	40},
    {"tmb":"./assets/compressed_images-10/batch_1-000025.jpg","src":"./assets/compressed_images-50/batch_1-000025.jpg","photoID":	41},
    {"tmb":"./assets/compressed_images-10/batch_1-000071.jpg","src":"./assets/compressed_images-50/batch_1-000071.jpg","photoID":	53},
    {"tmb":"./assets/compressed_images-10/batch_1-000072.jpg","src":"./assets/compressed_images-50/batch_1-000072.jpg","photoID":	54},
    {"tmb":"./assets/compressed_images-10/batch_1-000074.jpg","src":"./assets/compressed_images-50/batch_1-000074.jpg","photoID":	56},
    {"tmb":"./assets/compressed_images-10/batch_1-000081.jpg","src":"./assets/compressed_images-50/batch_1-000081.jpg","photoID":	60},
    {"tmb":"./assets/compressed_images-10/batch_1-000083.jpg","src":"./assets/compressed_images-50/batch_1-000083.jpg","photoID":	62},
    {"tmb":"./assets/compressed_images-10/batch_1-000084.jpg","src":"./assets/compressed_images-50/batch_1-000084.jpg","photoID":	63},
    {"tmb":"./assets/compressed_images-10/batch_1-000086.jpg","src":"./assets/compressed_images-50/batch_1-000086.jpg","photoID":	65},
    {"tmb":"./assets/compressed_images-10/batch_1-000092.jpg","src":"./assets/compressed_images-50/batch_1-000092.jpg","photoID":	70},
    {"tmb":"./assets/compressed_images-10/batch_1-000062.jpg","src":"./assets/compressed_images-50/batch_1-000062.jpg","photoID":	75},
    {"tmb":"./assets/compressed_images-10/batch_1-000099.jpg","src":"./assets/compressed_images-50/batch_1-000099.jpg","photoID":	77},
    {"tmb":"./assets/compressed_images-10/batch_1-000102.jpg","src":"./assets/compressed_images-50/batch_1-000102.jpg","photoID":	81},
    {"tmb":"./assets/compressed_images-10/batch_1-000110.jpg","src":"./assets/compressed_images-50/batch_1-000110.jpg","photoID":	87},
    {"tmb":"./assets/compressed_images-10/batch_1-000111.jpg","src":"./assets/compressed_images-50/batch_1-000111.jpg","photoID":	88},
    {"tmb":"./assets/compressed_images-10/batch_1-000115.jpg","src":"./assets/compressed_images-50/batch_1-000115.jpg","photoID":	89},
    {"tmb":"./assets/compressed_images-10/batch_1-000117.jpg","src":"./assets/compressed_images-50/batch_1-000117.jpg","photoID":	90},
    {"tmb":"./assets/compressed_images-10/batch_1-000118.jpg","src":"./assets/compressed_images-50/batch_1-000118.jpg","photoID":	91},
    {"tmb":"./assets/compressed_images-10/batch_1-000119.jpg","src":"./assets/compressed_images-50/batch_1-000119.jpg","photoID":	92},
    {"tmb":"./assets/compressed_images-10/batch_1-000120.jpg","src":"./assets/compressed_images-50/batch_1-000120.jpg","photoID":	93},
    {"tmb":"./assets/compressed_images-10/batch_1-000121.jpg","src":"./assets/compressed_images-50/batch_1-000121.jpg","photoID":	94},
    {"tmb":"./assets/compressed_images-10/batch_1-000004.jpg","src":"./assets/compressed_images-50/batch_1-000004.jpg","photoID":	96},
    {"tmb":"./assets/compressed_images-10/batch_1-000128.jpg","src":"./assets/compressed_images-50/batch_1-000128.jpg","photoID":	99},
    {"tmb":"./assets/compressed_images-10/batch_14-000022.jpg","src":"./assets/compressed_images-50/batch_14-000022.jpg","photoID":	523},
    {"tmb":"./assets/compressed_images-10/batch_14-000049.jpg","src":"./assets/compressed_images-50/batch_14-000049.jpg","photoID":	550},
    {"tmb":"./assets/compressed_images-10/batch_14-000097.jpg","src":"./assets/compressed_images-50/batch_14-000097.jpg","photoID":	598},
    {"tmb":"./assets/compressed_images-10/batch_15-000016.jpg","src":"./assets/compressed_images-50/batch_15-000016.jpg","photoID":	617},
    {"tmb":"./assets/compressed_images-10/batch_15-000022.jpg","src":"./assets/compressed_images-50/batch_15-000022.jpg","photoID":	623},
    {"tmb":"./assets/compressed_images-10/batch_15-000036.jpg","src":"./assets/compressed_images-50/batch_15-000036.jpg","photoID":	637},
    {"tmb":"./assets/compressed_images-10/batch_15-000066.jpg","src":"./assets/compressed_images-50/batch_15-000066.jpg","photoID":	667},
    {"tmb":"./assets/compressed_images-10/batch_2-000001.jpg","src":"./assets/compressed_images-50/batch_2-000001.jpg","photoID":	687},
    {"tmb":"./assets/compressed_images-10/batch_2-000012.jpg","src":"./assets/compressed_images-50/batch_2-000012.jpg","photoID":	695},
    {"tmb":"./assets/compressed_images-10/batch_2-000013.jpg","src":"./assets/compressed_images-50/batch_2-000013.jpg","photoID":	696},
    {"tmb":"./assets/compressed_images-10/batch_2-000018.jpg","src":"./assets/compressed_images-50/batch_2-000018.jpg","photoID":	700},
    {"tmb":"./assets/compressed_images-10/batch_2-000019.jpg","src":"./assets/compressed_images-50/batch_2-000019.jpg","photoID":	701},
    {"tmb":"./assets/compressed_images-10/batch_2-000020.jpg","src":"./assets/compressed_images-50/batch_2-000020.jpg","photoID":	702},
    {"tmb":"./assets/compressed_images-10/batch_2-000022.jpg","src":"./assets/compressed_images-50/batch_2-000022.jpg","photoID":	704},
    {"tmb":"./assets/compressed_images-10/batch_2-000025.jpg","src":"./assets/compressed_images-50/batch_2-000025.jpg","photoID":	707},
    {"tmb":"./assets/compressed_images-10/batch_2-000029.jpg","src":"./assets/compressed_images-50/batch_2-000029.jpg","photoID":	710},
    {"tmb":"./assets/compressed_images-10/batch_2-000033.jpg","src":"./assets/compressed_images-50/batch_2-000033.jpg","photoID":	713},
    {"tmb":"./assets/compressed_images-10/batch_2-000035.jpg","src":"./assets/compressed_images-50/batch_2-000035.jpg","photoID":	715},
    {"tmb":"./assets/compressed_images-10/batch_2-000036.jpg","src":"./assets/compressed_images-50/batch_2-000036.jpg","photoID":	716},
    {"tmb":"./assets/compressed_images-10/batch_2-000038.jpg","src":"./assets/compressed_images-50/batch_2-000038.jpg","photoID":	718},
    {"tmb":"./assets/compressed_images-10/batch_2-000039.jpg","src":"./assets/compressed_images-50/batch_2-000039.jpg","photoID":	719},
    {"tmb":"./assets/compressed_images-10/batch_2-000040.jpg","src":"./assets/compressed_images-50/batch_2-000040.jpg","photoID":	720},
    {"tmb":"./assets/compressed_images-10/batch_2-000041.jpg","src":"./assets/compressed_images-50/batch_2-000041.jpg","photoID":	721},
    {"tmb":"./assets/compressed_images-10/batch_2-000068.jpg","src":"./assets/compressed_images-50/batch_2-000068.jpg","photoID":	745},
    {"tmb":"./assets/compressed_images-10/batch_2-000069.jpg","src":"./assets/compressed_images-50/batch_2-000069.jpg","photoID":	746},
    {"tmb":"./assets/compressed_images-10/batch_2-000077.jpg","src":"./assets/compressed_images-50/batch_2-000077.jpg","photoID":	754},
    {"tmb":"./assets/compressed_images-10/batch_2-000079.jpg","src":"./assets/compressed_images-50/batch_2-000079.jpg","photoID":	755},
    {"tmb":"./assets/compressed_images-10/batch_2-000086.jpg","src":"./assets/compressed_images-50/batch_2-000086.jpg","photoID":	761},
    {"tmb":"./assets/compressed_images-10/batch_2-000030.jpg","src":"./assets/compressed_images-50/batch_2-000030.jpg","photoID":	763},
    {"tmb":"./assets/compressed_images-10/batch_2-000088.jpg","src":"./assets/compressed_images-50/batch_2-000088.jpg","photoID":	765},
    {"tmb":"./assets/compressed_images-10/batch_2-000098.jpg","src":"./assets/compressed_images-50/batch_2-000098.jpg","photoID":	775},
    {"tmb":"./assets/compressed_images-10/batch_3-IMG_4978.jpg","src":"./assets/compressed_images-50/batch_3-IMG_4978.jpg","photoID":  780},
    {"tmb":"./assets/compressed_images-10/batch_3-IMG_4994.jpg","src":"./assets/compressed_images-50/batch_3-IMG_4994.jpg","photoID":  783},
    {"tmb":"./assets/compressed_images-10/batch_3-IMG_4997.jpg","src":"./assets/compressed_images-50/batch_3-IMG_4997.jpg","photoID":  785},
    {"tmb":"./assets/compressed_images-10/batch_3-IMG_5055.jpg","src":"./assets/compressed_images-50/batch_3-IMG_5055.jpg","photoID":  805},
    {"tmb":"./assets/compressed_images-10/batch_3-IMG_5057.jpg","src":"./assets/compressed_images-50/batch_3-IMG_5057.jpg","photoID":  807},
    {"tmb":"./assets/compressed_images-10/batch_3-IMG_4855.jpg","src":"./assets/compressed_images-50/batch_3-IMG_4855.jpg","photoID":  812},
    {"tmb":"./assets/compressed_images-10/batch_3-IMG_4862.jpg","src":"./assets/compressed_images-50/batch_3-IMG_4862.jpg","photoID":  816},
    {"tmb":"./assets/compressed_images-10/batch_3-IMG_4893.jpg","src":"./assets/compressed_images-50/batch_3-IMG_4893.jpg","photoID":  830},
    {"tmb":"./assets/compressed_images-10/batch_3-IMG_4902.jpg","src":"./assets/compressed_images-50/batch_3-IMG_4902.jpg","photoID":  835},
    {"tmb":"./assets/compressed_images-10/batch_3-IMG_4907.jpg","src":"./assets/compressed_images-50/batch_3-IMG_4907.jpg","photoID":  836},
    {"tmb":"./assets/compressed_images-10/batch_3-IMG_4924.jpg","src":"./assets/compressed_images-50/batch_3-IMG_4924.jpg","photoID":  846},
    {"tmb":"./assets/compressed_images-10/batch_3-IMG_4936.jpg","src":"./assets/compressed_images-50/batch_3-IMG_4936.jpg","photoID":  851},
    {"tmb":"./assets/compressed_images-10/batch_3-IMG_4941.jpg","src":"./assets/compressed_images-50/batch_3-IMG_4941.jpg","photoID":  853},
    {"tmb":"./assets/compressed_images-10/batch_3-IMG_4963.jpg","src":"./assets/compressed_images-50/batch_3-IMG_4963.jpg","photoID":  855},
    {"tmb":"./assets/compressed_images-10/batch_3-IMG_4967.jpg","src":"./assets/compressed_images-50/batch_3-IMG_4967.jpg","photoID":  859},
    {"tmb":"./assets/compressed_images-10/batch_3-IMG_4969.jpg","src":"./assets/compressed_images-50/batch_3-IMG_4969.jpg","photoID":  860},
    {"tmb":"./assets/compressed_images-10/batch_3-IMG_4881.jpg","src":"./assets/compressed_images-50/batch_3-IMG_4881.jpg","photoID":  862},
    {"tmb":"./assets/compressed_images-10/batch_3-IMG_4948.jpg","src":"./assets/compressed_images-50/batch_3-IMG_4948.jpg","photoID":  866},
    {"tmb":"./assets/compressed_images-10/batch_4-000007.jpg","src":"./assets/compressed_images-50/batch_4-000007.jpg","photoID":    884},
    {"tmb":"./assets/compressed_images-10/batch_4-000015.jpg","src":"./assets/compressed_images-50/batch_4-000015.jpg","photoID":    892},
    {"tmb":"./assets/compressed_images-10/batch_4-000023.jpg","src":"./assets/compressed_images-50/batch_4-000023.jpg","photoID":    899},
    {"tmb":"./assets/compressed_images-10/batch_4-000026.jpg","src":"./assets/compressed_images-50/batch_4-000026.jpg","photoID":    901},
    {"tmb":"./assets/compressed_images-10/batch_4-000039.jpg","src":"./assets/compressed_images-50/batch_4-000039.jpg","photoID":    910},
    {"tmb":"./assets/compressed_images-10/batch_4-000053.jpg","src":"./assets/compressed_images-50/batch_4-000053.jpg","photoID":    923},
    {"tmb":"./assets/compressed_images-10/batch_4-000054.jpg","src":"./assets/compressed_images-50/batch_4-000054.jpg","photoID":    924},
    {"tmb":"./assets/compressed_images-10/batch_4-000068.jpg","src":"./assets/compressed_images-50/batch_4-000068.jpg","photoID":    936},
    {"tmb":"./assets/compressed_images-10/batch_4-000079.jpg","src":"./assets/compressed_images-50/batch_4-000079.jpg","photoID":    945},
    {"tmb":"./assets/compressed_images-10/batch_4-000080.jpg","src":"./assets/compressed_images-50/batch_4-000080.jpg","photoID":    946},
    {"tmb":"./assets/compressed_images-10/batch_4-000082.jpg","src":"./assets/compressed_images-50/batch_4-000082.jpg","photoID":    948},
    {"tmb":"./assets/compressed_images-10/batch_5-000079.jpg","src":"./assets/compressed_images-50/batch_5-000079.jpg","photoID":    971},
    {"tmb":"./assets/compressed_images-10/batch_5-000092.jpg","src":"./assets/compressed_images-50/batch_5-000092.jpg","photoID":    983},
    {"tmb":"./assets/compressed_images-10/batch_5-000098.jpg","src":"./assets/compressed_images-50/batch_5-000098.jpg","photoID":    989},
    {"tmb":"./assets/compressed_images-10/batch_5-000099.jpg","src":"./assets/compressed_images-50/batch_5-000099.jpg","photoID":    990},
    {"tmb":"./assets/compressed_images-10/batch_5-000064.jpg","src":"./assets/compressed_images-50/batch_5-000064.jpg","photoID":    994},
    {"tmb":"./assets/compressed_images-10/batch_5-000070.jpg","src":"./assets/compressed_images-50/batch_5-000070.jpg","photoID":    999},
    {"tmb":"./assets/compressed_images-10/batch_5-000102.jpg","src":"./assets/compressed_images-50/batch_5-000102.jpg","photoID":    1001},
    {"tmb":"./assets/compressed_images-10/batch_5-000000.jpg","src":"./assets/compressed_images-50/batch_5-000000.jpg","photoID":    1018},
    {"tmb":"./assets/compressed_images-10/batch_5-000011.jpg","src":"./assets/compressed_images-50/batch_5-000011.jpg","photoID":    1028},
    {"tmb":"./assets/compressed_images-10/batch_5-000013.jpg","src":"./assets/compressed_images-50/batch_5-000013.jpg","photoID":    1030},
    {"tmb":"./assets/compressed_images-10/batch_5-000024.jpg","src":"./assets/compressed_images-50/batch_5-000024.jpg","photoID":    1041},
    {"tmb":"./assets/compressed_images-10/batch_5-000025.jpg","src":"./assets/compressed_images-50/batch_5-000025.jpg","photoID":    1042},
    {"tmb":"./assets/compressed_images-10/batch_5-000027.jpg","src":"./assets/compressed_images-50/batch_5-000027.jpg","photoID":    1044},
    {"tmb":"./assets/compressed_images-10/batch_5-000036.jpg","src":"./assets/compressed_images-50/batch_5-000036.jpg","photoID":    1052},
    {"tmb":"./assets/compressed_images-10/batch_5-000039.jpg","src":"./assets/compressed_images-50/batch_5-000039.jpg","photoID":    1055},
    {"tmb":"./assets/compressed_images-10/batch_5-000052.jpg","src":"./assets/compressed_images-50/batch_5-000052.jpg","photoID":    1067},
    {"tmb":"./assets/compressed_images-10/batch_6-000052.jpg","src":"./assets/compressed_images-50/batch_6-000052.jpg","photoID":    1076},
    {"tmb":"./assets/compressed_images-10/batch_6-000102.jpg","src":"./assets/compressed_images-50/batch_6-000102.jpg","photoID":    1079},
    {"tmb":"./assets/compressed_images-10/batch_6-000101.jpg","src":"./assets/compressed_images-50/batch_6-000101.jpg","photoID":    1080},
    {"tmb":"./assets/compressed_images-10/batch_6-000099.jpg","src":"./assets/compressed_images-50/batch_6-000099.jpg","photoID":    1082},
    {"tmb":"./assets/compressed_images-10/batch_6-000094.jpg","src":"./assets/compressed_images-50/batch_6-000094.jpg","photoID":    1087},
    {"tmb":"./assets/compressed_images-10/batch_6-000087.jpg","src":"./assets/compressed_images-50/batch_6-000087.jpg","photoID":    1094},
    {"tmb":"./assets/compressed_images-10/batch_6-000083.jpg","src":"./assets/compressed_images-50/batch_6-000083.jpg","photoID":    1097},
    {"tmb":"./assets/compressed_images-10/batch_6-000082.jpg","src":"./assets/compressed_images-50/batch_6-000082.jpg","photoID":    1098},
    {"tmb":"./assets/compressed_images-10/batch_6-000066.jpg","src":"./assets/compressed_images-50/batch_6-000066.jpg","photoID":    1112},
    {"tmb":"./assets/compressed_images-10/batch_6-000064.jpg","src":"./assets/compressed_images-50/batch_6-000064.jpg","photoID":    1114},
    {"tmb":"./assets/compressed_images-10/batch_6-000062.jpg","src":"./assets/compressed_images-50/batch_6-000062.jpg","photoID":    1116},
    {"tmb":"./assets/compressed_images-10/batch_6-000055.jpg","src":"./assets/compressed_images-50/batch_6-000055.jpg","photoID":    1122},
    {"tmb":"./assets/compressed_images-10/batch_6-000000.jpg","src":"./assets/compressed_images-50/batch_6-000000.jpg","photoID":    1126},
    {"tmb":"./assets/compressed_images-10/batch_6-000036.jpg","src":"./assets/compressed_images-50/batch_6-000036.jpg","photoID":    1141},
    {"tmb":"./assets/compressed_images-10/batch_6-000034.jpg","src":"./assets/compressed_images-50/batch_6-000034.jpg","photoID":    1143},
    {"tmb":"./assets/compressed_images-10/batch_6-000032.jpg","src":"./assets/compressed_images-50/batch_6-000032.jpg","photoID":    1145},
    {"tmb":"./assets/compressed_images-10/batch_6-000027.jpg","src":"./assets/compressed_images-50/batch_6-000027.jpg","photoID":    1149},
    {"tmb":"./assets/compressed_images-10/batch_6-000022.jpg","src":"./assets/compressed_images-50/batch_6-000022.jpg","photoID":    1154},
    {"tmb":"./assets/compressed_images-10/batch_6-000018.jpg","src":"./assets/compressed_images-50/batch_6-000018.jpg","photoID":    1158},
    {"tmb":"./assets/compressed_images-10/batch_6-000014.jpg","src":"./assets/compressed_images-50/batch_6-000014.jpg","photoID":    1161},
    {"tmb":"./assets/compressed_images-10/batch_6-000006.jpg","src":"./assets/compressed_images-50/batch_6-000006.jpg","photoID":    1168},
    {"tmb":"./assets/compressed_images-10/batch_7-000013.jpg","src":"./assets/compressed_images-50/batch_7-000013.jpg","photoID":    1184},
    {"tmb":"./assets/compressed_images-10/batch_7-000080.jpg","src":"./assets/compressed_images-50/batch_7-000080.jpg","photoID":    1241},
    {"tmb":"./assets/compressed_images-10/batch_7-000081.jpg","src":"./assets/compressed_images-50/batch_7-000081.jpg","photoID":    1242},
    {"tmb":"./assets/compressed_images-10/batch_7-000083.jpg","src":"./assets/compressed_images-50/batch_7-000083.jpg","photoID":    1244},
    {"tmb":"./assets/compressed_images-10/batch_8-000008.jpg","src":"./assets/compressed_images-50/batch_8-000008.jpg","photoID":    1308},
    {"tmb":"./assets/compressed_images-10/batch_9-000000.jpg","src":"./assets/compressed_images-50/batch_9-000000.jpg","photoID":    1400}
    
    ];

let regular = []; //102
let output = [];

// fill regular with all the other PhotoIDs 
for (i in Raw){
    if(!SandWeaknessByTACO_ID.includes(Raw[i].photoID) && !YellowParLinesWeaknessByTACO_ID.includes(Raw[i].photoID)){
        regular.push(Raw[i].photoID)
    }
}

// Randomly pick an index and remove that number from the array if it's not empty
function selectIndex(a){
    if(a.length > 0){
        selectedIdx = Math.floor(Math.random()*a.length)
        return a.splice(selectedIdx,1)[0] //return the value of the item at the index
    }
}
/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

//not sure why the straight division doesn't give the correct number of itirations, but adding 10 seems to fix it...
let iterations = Raw.length/(__SANDINSET__+__YELLOWINSET__+__OTHERINSET__)+10
// Filling output array
for(let major = 0 ; major < iterations; major++){
    // start a sequence empty
    tempSet =[]
    //iterate through the sets the number of times specified globally
    for (let index = 0; index < __SANDINSET__; index++) {   
        tempSet.push(selectIndex(SandWeaknessByTACO_ID))
    }for (let index = 0; index < __YELLOWINSET__; index++) {   
        tempSet.push(selectIndex(YellowParLinesWeaknessByTACO_ID))
    }for (let index = 0; index < __OTHERINSET__; index++) {    
        tempSet.push(selectIndex(regular))
    }
    //shuffle the sequence in place
    shuffle(tempSet)
    //now find the json for the photo with the right id number in Raw and append it to output.
    for(let i =0; i < tempSet.length; i++){
        //findMe is the next photoID to match
        findMe = tempSet[i];
        //look through Raw for matching ID
        for(j in Raw){
            if(Raw[j].photoID == findMe){
                output.push(Raw.splice(j,1)[0]);
                break; //stop looking through loop, find next ID
            }        
        }
    }
}

//append some additional text to the payload and write out.
let writeme = "var data = "+JSON.stringify(output)+"; export default data;"
fs.writeFile("./reshuffle.js", writeme, 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
    });