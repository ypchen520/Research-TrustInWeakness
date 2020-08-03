# ML Classifier Simulator

Artificially make decisions for classes on images in dataset


## 1. Make a .csv file from list of images in images.json
```
python jsonToCsv.py
```

## 2. Simulate a classifier by making intentional mispredictions
Simulate the weaknesses and add random mispredictions to other images
```
python SimulateClassifier.py
```
Simulating weaknesses:
As of 8/3/20, we have 2 weaknesses:
1. Images with sand are always labeled as containing Plastic Bottle and
2. Images with parallel yellow lines are always labeled as containing Aluminum Can

Here are the TACO IDs
SandWeaknessByTACO_ID = [550, 623, 884, 892, 899, 901, 910, 923, 924, 936, 945, 946, 948, 971, 983, 989, 1087, 1116]
YellowParLinesWeaknessByTACO_ID = [7, 56, 88, 93, 687, 700, 713, 716, 755, 763, 765, 775, 830, 836, 851, 853, 862, 1018]

*IN ADDITION TO THESE WEAKNESSES,* the SimulateClassifier.py code takes images that aren't these weaknesses,
and  randomly select N images and C classes to flip their values (0->1 or 1->0).

## 3. Convert Simulated Labels .csv file into .json object
See installation instructions for csvtojson here: https://www.npmjs.com/package/csvtojson#quick-start
### Installation
```
npm i -g csvtojson
```

### Usage
```
csvtojson SimulatedLabels.csv > labels.json
```

```
csvtojson GroundTruthLabels.csv > groundTruth.json
```

## 4. Convert this .json to .js somehow? then put into the "data" folder.
