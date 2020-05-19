<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS,DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=utf-8");

include "library/config.php";

$postjson = json_decode(file_get_contents('php://input'), true);
//$today = date('Y-m-d');

    if ($postjson['aksi'] === 'add') {
                
        if (statusValue === 'true') {
            
            statusValue = "Active";
        
        }else{

            statusValue = "Inactive";

        }

        $sql = mysqli_query($mysqli,"INSERT INTO menu SET 
        item_name = '$postjson[item_name]',
        item_description = '$postjson[item_description]',
        item_price = '$postjson[item_price]',
        statusValue = '$postjson[statusValue]'");

            $item_id = mysqli_insert_id($mysqli);

            if ($sql) $result = json_encode(array('success'=> true, 'item_id' => $item_id));
            else $result = json_encode(array('success'=> false)); 
          
          echo $result;         
 
    }elseif($postjson['aksi'] === 'getdata'){

            $data = array();
            $sql = mysqli_query($mysqli,"SELECT * FROM menu ORDER BY item_id ASC LIMIT $postjson[start], $postjson[limit]");

            while ($row = mysqli_fetch_array($sql)) {
                
                $data[] = array(

                    'item_id' => $row['item_id'],
                    'item_name' => $row['item_name'],
                    'item_description' => $row['item_description'],
                    'item_price' => $row['item_price'],

                );

            }
  
            if ($sql) $result = json_encode(array('success' => true, 'result' => $data));
            else $result = json_encode(array('success' => false)); 

            echo $result;
 
        }elseif($postjson['aksi'] === 'update'){

            $sql = mysqli_query($mysqli,"UPDATE menu SET 
            item_name = '$postjson[item_name]',
            item_description = '$postjson[item_description]',
            item_price = '$postjson[item_price]' WHERE item_id = '$postjson[item_id]'");

            if ($sql) $result = json_encode(array('success' => true, 'result' => 'success'));
            else $result = json_encode(array('success' => false, 'result' => 'error')); 

            echo $result;

        }elseif($postjson['aksi'] === 'delete'){

            $sql = mysqli_query($mysqli,"DELETE FROM menu WHERE item_id = '$postjson[item_id]'");

            if ($sql) $result = json_encode(array('success' => true, 'result' => 'success'));
            else $result = json_encode(array('success' => false, 'result' => 'error')); 

            echo $result;

        }

 

?>             
