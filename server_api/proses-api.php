<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS,DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=utf-8");

include "library/config.php";

$postjson = json_decode(file_get_contents('php://input'), true);
$today = date('Y-m-d');

    if ($postjson['aksi'] === 'add') {
                            
        $sql = mysqli_query($mysqli,"INSERT INTO menu SET 
        product_name = '$postjson[product_name]',
        product_desc = '$postjson[product_desc]',
        product_price = '$postjson[product_price]',
        date_created = '$today'");

            $item_id = mysqli_insert_id($mysqli);

            if ($sql) $result = json_encode(array('success'=> true, 'prod_id' => $item_id));
            else $result = json_encode(array('success'=> false)); 
          
          echo $result;         
 
    }elseif($postjson['aksi'] === 'getdata'){

            $data = array();
            $sql = mysqli_query($mysqli,"SELECT * FROM menu ORDER BY prod_id DESC LIMIT $postjson[start], $postjson[limit]");

            while ($row = mysqli_fetch_array($sql)) {
                
                $data[] = array(

                    'prod_id' => $row['prod_id'],
                    'product_name' => $row['product_name'],
                    'product_desc' => $row['product_desc'],
                    'product_price' => $row['[product_price'],
                    'date_created' => $row['date_created'],

                );

            }
  
            if ($sql) $result = json_encode(array('success' => true, 'result' => $data));
            else $result = json_encode(array('success' => false)); 

            echo $result;

        }

?>             
