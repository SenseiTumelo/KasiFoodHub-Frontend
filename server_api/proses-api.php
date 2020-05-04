<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=utf-8");

include "library/config.php";

$postjson = json_decode(file_get_contents('php://input'), true);
$today = date('Y-m-d');

    if ($postjson['aksi'] == 'add') {
        
        $query = mysqli_query($mysqli,"INSERT INTO menu SET 
            Prod_name = '$postjson[Prod_name]',   
            Prod_desc = '$postjson[Prod_desc]',
            Prod_price = '$postjson[Prod_price]',
            date_created = '$today'

        ");

        $item_id = mysqli_insert_id($mysqli);

            if ($query){ $result = json_encode(array('success' => true, 'prod_id' => $item_id));
            }else{ $result = json_encode(array('success' => false)); }

            echo $result;
            
        }
        elseif($postjson['aksi'] == 'getdata'){

            $data = array();
            $query = mysqli_query($mysqli,"SELECT * FROM menu ORDER BY prod_id DESC LIMIT $postjson[start], $postjson[limit]");

            while ($row = mysqli_fetch_array($query)) {
                
                $data[] = array(

                    'prod_id' => $row['prod_id'],
                    'prod_name' => $row['prod_name'],
                    'prod_desc' => $row['prod_desc'],
                    'prod_price' => $row['prod_price'],
                    'date_created' => $row['date_created']

                );
            }
  
            if ($query){ $result = json_encode(array('success' => true, 'result' => $data));
            }else{ $result = json_encode(array('success' => false)); }

            echo $result;
            
        }

?>