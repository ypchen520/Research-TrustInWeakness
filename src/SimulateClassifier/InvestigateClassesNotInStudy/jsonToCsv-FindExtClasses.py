import json
import csv
from os import listdir
from os.path import isfile, join

imagesPath  = "../../../public/assets/images/"
CSVFileName = "GroundTruth_TrueFalseByALLCLASSES.csv" #output name

ClassList         = list(range(0,60))
NumClasses        = len(ClassList)
headers           = ["id_TACO", "file_name"] + list(range(0,60))

def ConvertJSONCategoriesToCSVCategories(categoryList):
    #categoryList is the categories for an image (e.g. say img45 categories are [6, 6, 3, 25])
    CatToCSV = [0]*NumClasses #Empty list
    for i in range(NumClasses): #Loop the classes (e.g. UnbrokenGlass)
        CurrentClassCount = 0
        #Add the amount of times this class appears in the image
        CurrentClassCount = CurrentClassCount + categoryList.count(ClassList[i])

        if CurrentClassCount > 0: #make boolean
            CurrentClassCount = 1
        CatToCSV[i] = CurrentClassCount
    return CatToCSV

#Read json file
with open("images.json") as file:
  data = json.load(file)

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
            csv_file.writerow([item['id'], item['file_name'], \
                CatCSV[0], CatCSV[1], CatCSV[2], CatCSV[3], CatCSV[4], CatCSV[5], CatCSV[6], CatCSV[7], CatCSV[8], CatCSV[9], \
                CatCSV[10], CatCSV[11], CatCSV[12], CatCSV[13], CatCSV[14], CatCSV[15], CatCSV[16], CatCSV[17],CatCSV[18], CatCSV[19], \
                CatCSV[20], CatCSV[21], CatCSV[22], CatCSV[23], CatCSV[24], CatCSV[25], CatCSV[26], CatCSV[27], CatCSV[28], CatCSV[29], \
                CatCSV[30], CatCSV[31], CatCSV[32], CatCSV[33], CatCSV[34], CatCSV[35], CatCSV[36], CatCSV[37], CatCSV[38], CatCSV[39], \
                CatCSV[40], CatCSV[41], CatCSV[42], CatCSV[43], CatCSV[44], CatCSV[45], CatCSV[46], CatCSV[47], CatCSV[48], CatCSV[49], \
                CatCSV[50], CatCSV[51], CatCSV[52], CatCSV[53], CatCSV[54], CatCSV[55], CatCSV[56], CatCSV[57], CatCSV[58], CatCSV[59] ])
