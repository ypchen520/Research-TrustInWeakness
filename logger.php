<?php
// try {
  $json = $_POST['data'];
  echo ($_POST['res']);
  exit;
//   if (json_decode($json) != null){
//     // Could remove this try:catch I believe
//     try{
//         $decode = json_decode($json);
//         foreach($decode as $entry){
//             $id = $entry->id;
//             break;
//         }
//         $filename = "./" . $id . "-" . time() . ".json"; 
//     } catch (Exception $t){
//         echo $t;
//         exit;
//     }
//     $file = fopen($filename,'w+');
//     fwrite($file, $json);
//     fclose($file);
//   }
//   else
//   {
//     throw new Exception('json_decode returned '.$json ,512);
//   }
// } catch(Exception $e){
//   echo $e;
//   exit;
// }
?>