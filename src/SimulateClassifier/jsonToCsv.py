import json
import csv
from os import listdir
from os.path import isfile, join

imagesPath  = "../../public/assets/images/"
CSVFileName = "GroundTruth_TrueFalseByClass.csv" #output name

#Classes
UnbrokenGlass     = [6, 23, 26]
BrokenGlass       = [9]
PlasticBagWrapper = [36, 37, 38, 39, 40, 41, 42]
PlasticBottle     = [4, 5]
#PlasticContainer  = [43, 44, 45, 46, 47]
OtherPlastic      = [7, 21, 24, 27, 29, 48, 49, 50, 55, 43, 44, 45, 46, 47]
AluminumCan       = [10, 11, 12]
OtherAluminum     = [0, 2]
PaperBag          = [34, 35]
OtherPaper        = [20, 30, 31, 32, 33, 56]
FoodWaste         = [25]
Other             = [1, 3, 8, 13, 14, 15, 16, 17, 18, 19, 22, 28, 51, 52, 53, 54, 57, 58, 59]
                     #[UnbrokenGlass, BrokenGlass, PlasticBagWrapper, PlasticContainer, OtherPlastic, \
ClassList         = [UnbrokenGlass, BrokenGlass, PlasticBagWrapper, PlasticBottle, OtherPlastic, \
                     AluminumCan, OtherAluminum, PaperBag, OtherPaper, FoodWaste, Other]
NumClasses        = len(ClassList)
headers           = ["id_TACO", "file_name", "UnbrokenGlass", "BrokenGlass", "PlasticBagWrapper", \
                     "PlasticBottle", "OtherPlastic", "AluminumCan", "OtherAluminum", "PaperBag", "OtherPaper", \
                     "FoodWaste", "Other"]

def ConvertJSONCategoriesToCSVCategories(categoryList):
    #categoryList is the categories for an image (e.g. say img45 categories are [6, 6, 3, 25])
    CatToCSV = [0]*NumClasses #Empty list
    for i in range(NumClasses): #Loop the classes (e.g. UnbrokenGlass)
        CurrentClassList  = ClassList[i]
        CurrentClassCount = 0
        for c in range(len(CurrentClassList)): #Loop the categories from json
            CurrentSubClassID = CurrentClassList[c]
            #Add the amount of times this class appears in the image
            CurrentClassCount = CurrentClassCount + categoryList.count(CurrentSubClassID)
        if CurrentClassCount > 0:
            CurrentClassCount = 1
        CatToCSV[i] = CurrentClassCount
    return CatToCSV

#Read json file
with open("images.json") as file:
  data = json.load(file)

#Get all pilot file names for cross-referencing the images.json file to find count per class (per image)
# batches    = []
# batchNums  = [1,2,3,4,5,6,7,8,9,14,15] #Batches numbers in Pilot folder
# numBatches = len(batchNums)
# batchPath  = '../images/batch_'
# for i in range(numBatches):
#     batchNum = str(batchNums[i])
#     currentBatchPath = batchPath + batchNum
#     #get list of all files in batch i
#     imageNames = [f for f in listdir(currentBatchPath) if isfile(join(currentBatchPath, f))]
#     for n in range(len(imageNames)): #concat 'batch_i/' to file names
#         imageNames[n] = 'batch_' + batchNum + '/' + imageNames[n]
#     batches = batches + imageNames #concat filenames to prev batch

#get list of all files
imageNames = [f.replace("-","/") for f in listdir(imagesPath) if isfile(join(imagesPath, f))]

#Write data to .csv
with open(CSVFileName, "w") as file:
    csv_file = csv.writer(file)

    #Write column headers
    csv_file.writerow(headers)

    #Loop through each image, save out class count to csv
    for item in data["images"]:
        CatCSV = ConvertJSONCategoriesToCSVCategories(item['categories'])
        if any(item['file_name'] in s for s in imageNames): #only save out class count if it's in pilot
            csv_file.writerow([item['id'], item['file_name'], CatCSV[0], CatCSV[1], CatCSV[2], CatCSV[3], \
                CatCSV[4], CatCSV[5], CatCSV[6], CatCSV[7], CatCSV[8], CatCSV[9], CatCSV[10] ])
