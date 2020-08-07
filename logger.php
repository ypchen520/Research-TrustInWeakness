<?php
try {
  //Post used if qs module sends data in request body, otherwise raw json file can be found in file_get_contents
  $json =file_get_contents("php://input"); // $_POST['data'];
  // echo var_dump(json_decode(file_get_contents("php://input"),TRUE)); //If sent as raw json
  // echo var_dump($_POST); //if send as query string property
  if (json_decode($json) != null){
    // Could likely remove this try:catch I believe
    try{
        $decode = json_decode($json);
        $id = $decode->{"id"};
        //If 'id' key is contained as a child use the loop below instead.
        // foreach($decode as $entry){
        //     $id = $entry->{"id"};
        //     // echo "\n\nid: " . ($id);
        //     // echo "\nitem: " . ($entry);
        //     if($id != NULL){
        //       break;
        //     }
        // }
        //Define UTC datetime with '_' between date and time
        $now = gmdate("Ymd_his", time()); 
        //Set Filename
        $filename = "./logs/" . $id . "-" . $now . ".json"; 
    } catch (Exception $t){
        echo $t;
        exit;
    }
    $file = fopen($filename,'w+');
    fwrite($file, $json);
    fclose($file);
    echo "saved as: ". $filename;
  }
  else
  {
    throw new Exception('json_decode returned '.$json ,512);
  }
} catch(Exception $e){
  echo $e;
  exit;
}
?>