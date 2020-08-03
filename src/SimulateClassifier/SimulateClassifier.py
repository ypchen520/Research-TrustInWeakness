# This file takes in the pre-processed ground truth of each image (boolean per class, 1 if exists in image)
# run 'python jsonToCsv.py' first to make the ground truth file ... see README
# Generate weaknesses, randomly make mispredictions on other images,
#   and calculate accuracy per class and overall system accuracy
#
# Author: Nick Kroeger, August 2, 2020

import csv
import numpy as np
import pandas as pd
from sklearn.metrics import multilabel_confusion_matrix, accuracy_score

np.random.seed(5) #for reproducibility
#CHANGE THESE TO CONTROL SYSTEM ACCURACY
NumImagesToFlip          = 20
NumClassesPerImageToFlip = 3

#STATIC VARIABLES
PlasticBottleCol = 5
AluminumCanCol   = 7
NumClasses       = 11
InputFileName    = 'GroundTruth_TrueFalseByClass.csv'
OutputFileName   = 'SimulatedLabels.csv'
headersToWrite   = ["photoID", "label.glass.unbroken", "label.glass.broken", "label.plastic.wrapper", "label.plastic.bottle",\
           "label.plastic.other", "label.aluminum.can", "label.aluminum.other", "label.paper.bag", "label.paper.other", "label.food", "label.other"]

## 1. Read in csv file: GroundTruth_TrueFalseByClass.csv
original_df       = pd.read_csv(InputFileName)
IDs               = original_df.iloc[:, 0]
GroundTruthLabels = np.copy(original_df.to_numpy())
PredictedLabels   = np.copy(GroundTruthLabels) #duplicate ground truth and manipulate "predicted" labels


## 2. Simulate weaknesses
# define the ids that are to be altered (e.g. sand & parallel yellow lines)
SandWeaknessByTACO_ID           = [550, 623, 884, 892, 899, 901, 910, 923, 924, 936, \
                                   945, 946, 948, 971, 983, 989, 1087, 1116]
YellowParLinesWeaknessByTACO_ID = [7, 56, 88, 93, 687, 700, 713, 716, 755, 763, 765, \
                                   775, 830, 836, 851, 853, 862, 1018]

# 2.1 Alter these predicted labels
TACO_IDs = PredictedLabels[:,0]
#Force Sand images to be predicted as Plastic Bottle
for s in range(len(SandWeaknessByTACO_ID)):
    rowIdx = np.where(TACO_IDs == SandWeaknessByTACO_ID[s])[0][0]
    PredictedLabels[rowIdx, PlasticBottleCol] = 1 #make this image have a predicted plastic bottle

# Force Yellow Parallel Line images to be predicted as Aluminum Can
for y in range(len(YellowParLinesWeaknessByTACO_ID)):
    rowIdx = np.where(TACO_IDs == YellowParLinesWeaknessByTACO_ID[y])[0][0]
    PredictedLabels[rowIdx, AluminumCanCol] = 1 #make this image have a predicted plastic bottle

#Drop first 2 columns
GroundTruthLabels = GroundTruthLabels[:, 2:].astype(int)
PredictedLabels   = PredictedLabels[:, 2:].astype(int)
print('The number of images changed per class are:')
print(abs(sum(GroundTruthLabels-PredictedLabels)))
print('Note: Some images might not have changed since they were already labeled as such.\n')

# 2.2 Add random mispredictions for the simulated classifier
# don't consider flipping any of our weakness images!
# (remove them from set of images that we will choose to flip) thus, get their indices
UsedIDs                  = [SandWeaknessByTACO_ID, YellowParLinesWeaknessByTACO_ID]
indicesofUsedIDs         = np.where(np.isin(TACO_IDs, UsedIDs))
indicesForMispredictions = np.delete(TACO_IDs, indicesofUsedIDs[0])

#Select some subset of the dataset to flip the groundtruth label for
#Determine how many classes to flip in each image
NumPossibleImagesToFlip = indicesForMispredictions.shape[0]
indicesOfImagesToFlip   = np.random.choice(NumPossibleImagesToFlip, NumImagesToFlip, replace=False)

for i in range(NumImagesToFlip):
    CurrentIdxOfImageToFlip = indicesOfImagesToFlip.tolist()[i]
    ClassIdxsToFlip         = np.random.choice(NumClasses, NumClassesPerImageToFlip).tolist()
    for j in range(NumClassesPerImageToFlip):
        CurrentClassIdxToFlip = ClassIdxsToFlip[j]
        #Flip value from 0->1 or 1->0 using abs(x - 1)
        PredictedLabels[CurrentIdxOfImageToFlip, CurrentClassIdxToFlip] = abs(PredictedLabels[CurrentIdxOfImageToFlip, CurrentClassIdxToFlip] - 1)


## 3. Calculate scores predicted vs. ground truth
##    Calculate accuracy per class, then take average across all classes
ConfMatrix = multilabel_confusion_matrix(GroundTruthLabels, PredictedLabels)
AccScore   = accuracy_score(GroundTruthLabels, PredictedLabels)

#https://scikit-learn.org/stable/modules/model_evaluation.html
tn = ConfMatrix[:, 0, 0]
tp = ConfMatrix[:, 1, 1]
fn = ConfMatrix[:, 1, 0]
fp = ConfMatrix[:, 0, 1]

#specificity = tn / (tn + fp)
recall    = tp / (tp + fn)
precision = tp / (tp + fp)
F1        = 2 * (precision * recall) / (precision + recall)

print('Confusion matrices per class:')
print(ConfMatrix)
print('Accuracy:\t' + str(AccScore))
print('F1 per Class:\t' + str(F1))
print('Average F1:\t' + str(np.mean(F1)))


## 4. Write out the simulated classifier's labels to .csv
OutputMatrix = pd.concat([IDs, pd.DataFrame(np.array(PredictedLabels,dtype=bool))], axis=1)
OutputMatrix.to_csv(OutputFileName, header=headersToWrite, index=False)

original_df = pd.concat([IDs,original_df.iloc[:,2:].astype('bool')], axis=1)
original_df.to_csv('GroundTruthLabels.csv', header=headersToWrite, index=False)
